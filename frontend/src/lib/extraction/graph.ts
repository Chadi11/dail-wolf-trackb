/**
 * LangGraph pipeline.
 *
 *   node1_lexical ──► node4_lifecycle ──► [route] ──► node3_adjudicate ──► assemble
 *                                            │                              ▲
 *                                            └──────────────────────────────┘
 *
 * Routing decision (node2, expressed as a conditional edge rather than a
 * node, which is the idiomatic LangGraph form):
 *
 *   -> node3_adjudicate  when the case is a damage case AND
 *                        (severity unresolved OR insurance confidence < 0.7)
 *   -> assemble          otherwise
 *
 * Note this routes on *low confidence*, not on "multi-zone or negation".
 * Measurement showed multi-zone (254/450 cases) and negation (362/1000) are
 * already handled perfectly by Node 1's longest-match-first masking, so
 * sending them to an LLM could only degrade P/R = 1.000.
 */

import type {
  ZoneHit,
  CaseKind,
  CaseType,
  Severity,
  DamageZone,
  InsuranceType,
  LifecycleStage,
  FieldProvenance,
  ExtractionResult,
} from './types';

import { END, START, Annotation, StateGraph } from '@langchain/langgraph';

import { adjudicate } from './node3-llm';
import { mapZonesToParts } from '../car-model/zone-mapping';
import { type CaseState, extractLifecycle } from './node4-lifecycle';
import {
  splitNote,
  extractZones,
  extractCaseKind,
  extractCaseType,
  extractInsurance,
  extractSeverityStrong,
} from './node1-lexical';

/** Threshold below which a lexical field is considered worth adjudicating. */
const CONFIDENCE_FLOOR = 0.7;

const PipelineState = Annotation.Root({
  // --- inputs
  freitext: Annotation<string>,
  caseId: Annotation<number | null>,
  states: Annotation<CaseState[] | undefined>,
  canceledAt: Annotation<string | null | undefined>,
  useLlm: Annotation<boolean>,

  // --- intermediates
  body: Annotation<string>,
  audit: Annotation<string>,
  zoneHits: Annotation<ZoneHit[]>,
  caseType: Annotation<CaseType>,
  caseKind: Annotation<FieldProvenance>,
  zones: Annotation<FieldProvenance>,
  severity: Annotation<FieldProvenance>,
  insuranceType: Annotation<FieldProvenance>,
  lifecycleStage: Annotation<FieldProvenance>,
  caseTypeProv: Annotation<FieldProvenance>,
  trace: Annotation<string[]>({
    reducer: (a, b) => [...(a ?? []), ...(b ?? [])],
    default: () => [],
  }),

  // --- output
  result: Annotation<ExtractionResult | undefined>,
});

type State = typeof PipelineState.State;

/** NODE 1: deterministic lexical extraction. */
async function node1Lexical(state: State): Promise<Partial<State>> {
  const { body, audit } = splitNote(state.freitext);

  const ct = extractCaseType(body);
  const kind = extractCaseKind(body, ct.value);
  const hits = ct.value === 'damage' ? extractZones(body) : [];
  const ins = extractInsurance(body, ct.value);
  const sev = extractSeverityStrong(body, ct.value);

  return {
    body,
    audit,
    zoneHits: hits,
    caseType: ct.value,
    caseTypeProv: {
      value: ct.value,
      source: 'lexical',
      confidence: 1,
      evidence: ct.evidence,
    },
    caseKind: {
      value: kind.value,
      source: 'lexical',
      confidence: kind.confidence,
      evidence: kind.evidence,
    },
    zones: {
      value: hits.map((h) => h.zone).join(', ') || null,
      source: 'lexical',
      confidence: 1,
      evidence: `${hits.length} zone(s), longest-match-first`,
    },
    severity: {
      value: sev.value,
      source: sev.value ? 'lexical' : 'default',
      confidence: sev.confidence,
      evidence: sev.evidence,
    },
    insuranceType: {
      value: ins.value,
      source: ins.value ? 'lexical' : 'default',
      confidence: ins.confidence,
      evidence: ins.evidence,
    },
    trace: ['node1_lexical'],
  };
}

/** NODE 4: lifecycle from structured states[]. */
async function node4Lifecycle(state: State): Promise<Partial<State>> {
  return {
    lifecycleStage: extractLifecycle(state.states, state.canceledAt, state.audit),
    trace: ['node4_lifecycle'],
  };
}

/** NODE 2 (conditional edge): decide whether the LLM is worth calling. */
function routeAfterLexical(state: State): 'node3_adjudicate' | 'assemble' {
  if (!state.useLlm) return 'assemble';
  if (state.caseType !== 'damage') return 'assemble';

  const severityUnresolved = !state.severity?.value;
  const insuranceWeak = (state.insuranceType?.confidence ?? 0) < CONFIDENCE_FLOOR;

  return severityUnresolved || insuranceWeak ? 'node3_adjudicate' : 'assemble';
}

/** NODE 3: DeepSeek adjudication for the genuinely ambiguous fields. */
async function node3Adjudicate(state: State): Promise<Partial<State>> {
  const needInsurance = (state.insuranceType?.confidence ?? 0) < CONFIDENCE_FLOOR;
  const adj = await adjudicate(state.body, state.zoneHits ?? [], needInsurance);

  if (!adj.ok) {
    return { trace: [`node3_adjudicate:failed(${adj.error ?? 'unknown'})`] };
  }

  const next: Partial<State> = { trace: ['node3_adjudicate'] };

  if (!state.severity?.value && adj.severity) {
    next.severity = {
      value: adj.severity,
      source: 'llm',
      confidence: 0.75,
      evidence: adj.reasoning,
    };
  }
  if (needInsurance && adj.insuranceType) {
    next.insuranceType = {
      value: adj.insuranceType,
      source: 'llm',
      confidence: 0.7,
      evidence: adj.reasoning,
    };
  }
  return next;
}

/** Terminal: assemble the typed result + 3D part rollup. */
async function assemble(state: State): Promise<Partial<State>> {
  const zones = (state.zoneHits ?? []).map((h) => h.zone) as DamageZone[];

  const result: ExtractionResult = {
    caseId: state.caseId ?? null,
    caseType: state.caseType,
    caseKind: (state.caseKind?.value as CaseKind | null) ?? null,
    zones,
    severity: (state.severity?.value as Severity | null) ?? null,
    insuranceType: (state.insuranceType?.value as InsuranceType | null) ?? null,
    lifecycleStage: (state.lifecycleStage?.value as LifecycleStage | null) ?? null,
    replacementParts: mapZonesToParts(zones),
    provenance: {
      caseType: state.caseTypeProv,
      caseKind: state.caseKind,
      zones: state.zones,
      severity: state.severity,
      insuranceType: state.insuranceType,
      lifecycleStage: state.lifecycleStage,
    },
    trace: [...(state.trace ?? []), 'assemble'],
    zoneHits: state.zoneHits ?? [],
  };
  return { result, trace: ['assemble'] };
}

const workflow = new StateGraph(PipelineState)
  .addNode('node1_lexical', node1Lexical)
  .addNode('node4_lifecycle', node4Lifecycle)
  .addNode('node3_adjudicate', node3Adjudicate)
  .addNode('assemble', assemble)
  .addEdge(START, 'node1_lexical')
  .addEdge('node1_lexical', 'node4_lifecycle')
  .addConditionalEdges('node4_lifecycle', routeAfterLexical, {
    node3_adjudicate: 'node3_adjudicate',
    assemble: 'assemble',
  })
  .addEdge('node3_adjudicate', 'assemble')
  .addEdge('assemble', END);

export const extractionGraph = workflow.compile();

export type ExtractInput = {
  freitext: string;
  caseId?: number | null;
  states?: CaseState[];
  canceledAt?: string | null;
  useLlm?: boolean;
};

export async function runExtraction(input: ExtractInput): Promise<ExtractionResult> {
  const out = await extractionGraph.invoke({
    freitext: input.freitext,
    caseId: input.caseId ?? null,
    states: input.states,
    canceledAt: input.canceledAt ?? null,
    useLlm: input.useLlm ?? true,
  });
  if (!out.result) throw new Error('pipeline produced no result');
  return out.result;
}
