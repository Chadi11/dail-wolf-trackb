/**
 * Ablation harness: scores the pipeline against the 1,000 ground_truth labels.
 *
 *   yarn eval            deterministic only (fast, no API cost)
 *   yarn eval --llm 120  additionally adjudicate the first 120 routed cases
 *
 * ground_truth is used for SCORING ONLY. The pipeline itself never reads it.
 */

import { readFileSync } from 'node:fs';

import { runExtraction } from '../src/lib/extraction/graph';

type GT = {
  case_type: string;
  case_kind: string | null;
  zones: string[];
  severity: string | null;
  insurance_type: string | null;
  lifecycle_stage: string | null;
};
type Case = {
  id: number;
  freitext: string;
  states?: any[];
  canceled_at?: string | null;
  ground_truth: GT;
};

const DATA = '../track-b-dataset/kit/dataset/da-cases.json';

const llmArgIdx = process.argv.indexOf('--llm');
const llmBudget = llmArgIdx === -1 ? 0 : Number(process.argv[llmArgIdx + 1] ?? 0);

const cases: Case[] = JSON.parse(readFileSync(DATA, 'utf8'));

let typeOk = 0;
let kindOk = 0;
let lifeOk = 0;
let insOk = 0;
let insDen = 0;
let sevOk = 0;
let sevDen = 0;
let zTP = 0;
let zFP = 0;
let zFN = 0;
let exactZone = 0;
let routed = 0;
let llmUsed = 0;

for (const c of cases) {
  const useLlm = llmUsed < llmBudget;
  const r = await runExtraction({
    freitext: c.freitext,
    caseId: c.id,
    states: c.states,
    canceledAt: c.canceled_at ?? null,
    useLlm,
  });
  const gt = c.ground_truth;

  if (r.caseType === gt.case_type) typeOk += 1;
  if (r.caseKind === gt.case_kind) kindOk += 1;
  if (r.lifecycleStage === gt.lifecycle_stage) lifeOk += 1;

  const pred = new Set(r.zones);
  const truth = new Set(gt.zones);
  for (const z of pred) (truth.has(z) ? (zTP += 1) : (zFP += 1));
  for (const z of truth) if (!pred.has(z)) zFN += 1;
  if (pred.size === truth.size && [...pred].every((z) => truth.has(z))) exactZone += 1;

  if (gt.case_type === 'damage') {
    insDen += 1;
    sevDen += 1;
    if (r.insuranceType === gt.insurance_type) insOk += 1;
    if (r.severity === gt.severity) sevOk += 1;
  }

  if (r.trace.includes('node3_adjudicate')) llmUsed += 1;
  if (!r.severity || (r.provenance.insuranceType.confidence ?? 0) < 0.7) routed += 1;
}

const n = cases.length;
const pct = (a: number, b: number) => `${((a / b) * 100).toFixed(1)}%`;

console.log(`\ncases: ${n}   llm calls: ${llmUsed}\n`);
console.log('field                     score');
console.log('------------------------------------------');
console.log(`case_type                 ${pct(typeOk, n)}  (${typeOk}/${n})`);
console.log(`case_kind                 ${pct(kindOk, n)}  (${kindOk}/${n})`);
console.log(`lifecycle_stage           ${pct(lifeOk, n)}  (${lifeOk}/${n})`);
console.log(`insurance_type (damage)   ${pct(insOk, insDen)}  (${insOk}/${insDen})`);
console.log(`severity (damage)         ${pct(sevOk, sevDen)}  (${sevOk}/${sevDen})`);
const zP = zTP / Math.max(zTP + zFP, 1);
const zR = zTP / Math.max(zTP + zFN, 1);
const zF1 = (2 * zP * zR) / Math.max(zP + zR, 1e-9);

console.log('');
console.log('zones (multi-label, micro-averaged)');
console.log(`  precision               ${(zP * 100).toFixed(1)}%`);
console.log(`  recall                  ${(zR * 100).toFixed(1)}%`);
console.log(`  F1                      ${(zF1 * 100).toFixed(1)}%`);
console.log(`  exact-set match         ${pct(exactZone, n)}  (${exactZone}/${n})`);
console.log(`  TP ${zTP}  FP ${zFP}  FN ${zFN}`);
console.log('');
console.log(
  'Note: the single-label fields above (case_type / case_kind / severity /\n' +
    'insurance_type / lifecycle_stage) are exactly one value per case, so\n' +
    'micro-precision = micro-recall = micro-F1 = the accuracy shown. F1 is\n' +
    'only independently meaningful for the multi-label zones field.'
);
