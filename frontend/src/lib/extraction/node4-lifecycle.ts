/**
 * NODE 4 -- Lifecycle stage from the structured states[] array.
 *
 * This field is NOT parsed from free text. The source system already stores
 * it: states[0] is by contract the general case status (category 4,
 * "Vorgangsstatus"), and each state carries is_done. Parsing prose for
 * something the database already knows would be strictly worse.
 *
 * Falls back to free-text audit-trail cues only when states[] is absent
 * (e.g. an ad-hoc note pasted into the API with no case record).
 */

import type { LifecycleStage, FieldProvenance } from './types';

import { LIFECYCLE_STATE_MAP } from './lexicon';

export type CaseState = {
  id?: number;
  name: string;
  category_id?: number;
  category?: string;
  is_done?: boolean;
};

export function extractLifecycle(
  states: CaseState[] | undefined,
  canceledAt: string | null | undefined,
  auditText: string
): FieldProvenance {
  // Hard signal: an explicit cancellation timestamp outranks status text.
  if (canceledAt) {
    return {
      value: 'storniert',
      source: 'states',
      confidence: 1,
      evidence: `canceled_at=${canceledAt}`,
    };
  }

  if (states && states.length > 0) {
    // Prefer the category-4 general status; fall back to the first entry.
    const general = states.find((s) => s.category_id === 4) ?? states[0];
    for (const [re, stage] of LIFECYCLE_STATE_MAP) {
      if (re.test(general.name)) {
        return {
          value: stage,
          source: 'states',
          confidence: 0.95,
          evidence: general.name,
        };
      }
    }
    // Unmapped status name: is_done still tells us the coarse bucket.
    if (general.is_done) {
      return {
        value: 'abgeschlossen',
        source: 'states',
        confidence: 0.6,
        evidence: `${general.name} (is_done)`,
      };
    }
    return {
      value: 'laufend',
      source: 'states',
      confidence: 0.5,
      evidence: `${general.name} (fallback)`,
    };
  }

  // No structured states -- degrade to audit-trail text.
  const f = auditText.toLowerCase();
  const textCues: Array<[LifecycleStage, string[]]> = [
    ['storniert', ['storniert', 'absage']],
    ['abgeschlossen', ['rechnung geschrieben', 'abgeholt', 'ausgeliefert']],
    ['fertig', ['abholbereit', 'fertig zur abholung', 'gewaschen']],
    ['laufend', ['zerlegung', 'kalkulation', 'in halle', 'in bearbeitung']],
  ];
  for (const [stage, cues] of textCues) {
    if (cues.some((c) => f.includes(c))) {
      return { value: stage, source: 'lexical', confidence: 0.45, evidence: cues.find((c) => f.includes(c)) };
    }
  }
  return { value: 'neu', source: 'default', confidence: 0.3 };
}
