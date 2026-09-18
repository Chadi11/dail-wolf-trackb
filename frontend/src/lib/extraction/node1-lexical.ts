/**
 * NODE 1 -- Lexical parser (deterministic).
 *
 * Handles every field that measurement showed does not need an LLM:
 *   case_type  -> 1.000
 *   zones      -> P 1.000 / R 1.000
 *   case_kind  -> 0.978
 *   insurance  -> ~0.70
 *
 * and produces a severity candidate only when a strong, unambiguous cue is
 * present. Ambiguous severity is left null and picked up by Node 3.
 */

import {
  DAMAGE_KINDS,
  type ZoneHit,
  type CaseKind,
  type CaseType,
  type Severity,
  type DamageZone,
  type InsuranceType,
} from './types';
import {
  KIND_SYNONYMS,
  ZONE_SYNONYMS,
  DAMAGE_MARKERS,
  INSURANCE_CUES,
  PAINT_INTACT_PHRASES,
  SEVERITY_STRONG_CUES,
  ZONE_RETRACTION_PHRASES,
} from './lexicon';

/**
 * Strip the audit-trail footer. Lines after the "~~~~~" divider are dated
 * clerk actions ("Rechnung geschrieben"), not damage description. They are
 * useful for lifecycle but pollute severity/zone cues.
 */
export function splitNote(freitext: string): { body: string; audit: string } {
  const idx = freitext.indexOf('~~~~');
  if (idx === -1) return { body: freitext, audit: '' };
  return { body: freitext.slice(0, idx), audit: freitext.slice(idx) };
}

/** Normalise for case-insensitive comparison while preserving index math. */
function fold(s: string): string {
  return s.toLowerCase();
}

/**
 * Locate zone mentions using longest-surface-form-first matching with span
 * masking.
 *
 * The zone vocabulary is self-nesting: "Stoßstange vorne" is a prefix of
 * "Stoßstange vorne links". Naive iteration double-counts the generic zone
 * for every specific mention (70 spurious "Stoßstange vorne" hits, 59
 * "Stoßstange hinten"). Consuming matched spans -- longest first -- removes
 * all of them.
 */
export function extractZones(body: string): ZoneHit[] {
  // Build (canonical, surface) pairs, sorted by surface length descending.
  const surfaces: Array<{ zone: DamageZone; surface: string }> = [];
  for (const [zone, syns] of Object.entries(ZONE_SYNONYMS) as Array<[DamageZone, string[]]>) {
    for (const surface of syns) surfaces.push({ zone, surface });
  }
  surfaces.sort((a, b) => b.surface.length - a.surface.length);

  // Mask tracks consumed character positions.
  const mask = new Array<boolean>(body.length).fill(false);
  const folded = fold(body);
  const hits: ZoneHit[] = [];
  const seen = new Set<DamageZone>();

  for (const { zone, surface } of surfaces) {
    const needle = fold(surface);
    let from = 0;
    for (;;) {
      const at = folded.indexOf(needle, from);
      if (at === -1) break;
      const end = at + needle.length;
      // Skip if any character in this span was already claimed by a longer
      // (more specific) zone name.
      let overlap = false;
      for (let i = at; i < end; i += 1) {
        if (mask[i]) {
          overlap = true;
          break;
        }
      }
      if (!overlap) {
        for (let i = at; i < end; i += 1) mask[i] = true;
        if (!seen.has(zone)) {
          seen.add(zone);
          hits.push({
            zone,
            start: at,
            end,
            matched: body.slice(at, end),
            paintIntact: isPaintIntact(body, at),
          });
        }
      }
      from = at + 1;
    }
  }

  // Drop zones whose clause genuinely retracts the damage.
  return hits.filter((h) => !isRetracted(body, h.start));
}

/** Clause around an index, bounded by sentence/line punctuation. */
function clauseAround(body: string, index: number): string {
  const startBound = Math.max(
    body.lastIndexOf('.', index),
    body.lastIndexOf('\n', index),
    body.lastIndexOf(';', index)
  );
  let endBound = body.length;
  for (const ch of ['.', '\n', ';']) {
    const at = body.indexOf(ch, index);
    if (at !== -1 && at < endBound) endBound = at;
  }
  return body.slice(startBound + 1, endBound);
}

function isPaintIntact(body: string, index: number): boolean {
  const clause = fold(clauseAround(body, index));
  return PAINT_INTACT_PHRASES.some((p) => clause.includes(p));
}

function isRetracted(body: string, index: number): boolean {
  const clause = fold(clauseAround(body, index));
  return ZONE_RETRACTION_PHRASES.some((p) => clause.includes(p));
}

/** damage vs service. Measured 1.000 on the full corpus. */
export function extractCaseType(body: string): { value: CaseType; evidence?: string } {
  const f = fold(body);
  const hit = DAMAGE_MARKERS.find((m) => f.includes(m));
  return hit ? { value: 'damage', evidence: hit } : { value: 'service' };
}

/**
 * case_kind by earliest-mention wins.
 *
 * Workshop notes lead with the reason for the visit and only later mention
 * incidental findings ("Batterie schwach"), so position is a strong signal.
 */
export function extractCaseKind(
  body: string,
  caseType: CaseType
): { value: CaseKind | null; confidence: number; evidence?: string } {
  const f = fold(body);
  let best: CaseKind | null = null;
  let bestPos = Number.MAX_SAFE_INTEGER;
  let evidence: string | undefined;

  for (const [kind, syns] of Object.entries(KIND_SYNONYMS) as Array<[CaseKind, string[]]>) {
    const isDamageKind = (DAMAGE_KINDS as readonly string[]).includes(kind);
    // Don't let a service kind win a damage note, or vice versa.
    if (caseType === 'damage' && !isDamageKind) continue;
    if (caseType === 'service' && isDamageKind) continue;
    for (const syn of syns) {
      const at = f.indexOf(fold(syn));
      if (at !== -1 && at < bestPos) {
        bestPos = at;
        best = kind;
        evidence = syn;
      }
    }
  }
  return { value: best, confidence: best ? 0.95 : 0, evidence };
}

export function extractInsurance(
  body: string,
  caseType: CaseType
): { value: InsuranceType | null; confidence: number; evidence?: string } {
  if (caseType !== 'damage') return { value: null, confidence: 1 };
  const f = fold(body);
  let best: InsuranceType | null = null;
  let bestPos = Number.MAX_SAFE_INTEGER;
  let evidence: string | undefined;

  for (const [type, cues] of INSURANCE_CUES) {
    for (const cue of cues) {
      const at = f.indexOf(cue);
      if (at !== -1 && at < bestPos) {
        bestPos = at;
        best = type;
        evidence = cue;
      }
    }
  }
  // ~0.70 measured -- meaningful but not authoritative.
  return { value: best, confidence: best ? 0.7 : 0, evidence };
}

/**
 * Severity, but ONLY on unambiguous cues.
 *
 * Returns null whenever the text is ambiguous, which deliberately hands the
 * decision to Node 3 rather than emitting a coin-flip.
 */
export function extractSeverityStrong(
  body: string,
  caseType: CaseType
): { value: Severity | null; confidence: number; evidence?: string } {
  if (caseType !== 'damage') return { value: null, confidence: 1 };
  const f = fold(body);
  for (const [sev, cues] of SEVERITY_STRONG_CUES) {
    const hit = cues.find((c) => f.includes(c));
    if (hit) return { value: sev, confidence: 0.85, evidence: hit };
  }
  return { value: null, confidence: 0 };
}
