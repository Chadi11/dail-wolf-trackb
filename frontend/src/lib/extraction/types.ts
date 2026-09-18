/**
 * Shared types for the damage-extraction pipeline.
 *
 * Vocabularies are pinned to schema.json (damage_zones / damage_kinds /
 * service_kinds) and to the ground_truth label space of the da-cases dataset.
 */

export const DAMAGE_ZONES = [
  'Außenspiegel links',
  'Außenspiegel rechts',
  'Beifahrertür',
  'Dach',
  'Fahrertür',
  'Heckklappe',
  'Kotflügel hinten links',
  'Kotflügel hinten rechts',
  'Kotflügel vorne links',
  'Kotflügel vorne rechts',
  'Motorhaube',
  'Schweller links',
  'Schweller rechts',
  'Stoßstange hinten',
  'Stoßstange hinten links',
  'Stoßstange hinten rechts',
  'Stoßstange vorne',
  'Stoßstange vorne links',
  'Stoßstange vorne rechts',
  'Tür hinten links',
  'Tür hinten rechts',
  'Windschutzscheibe',
] as const;

export type DamageZone = (typeof DAMAGE_ZONES)[number];

export const DAMAGE_KINDS = [
  'Parkschaden',
  'Auffahrunfall',
  'Hagelschaden',
  'Steinschlag',
  'Vandalismus',
  'Wildunfall',
  'Rangierschaden',
] as const;

export const SERVICE_KINDS = [
  'Ölwechsel',
  'Inspektion',
  'HU/AU',
  'Räder und Reifen',
  'Bremsen',
] as const;

export type CaseKind = (typeof DAMAGE_KINDS)[number] | (typeof SERVICE_KINDS)[number];

export type CaseType = 'damage' | 'service';
export type Severity = 'leicht' | 'mittel' | 'schwer';
export type InsuranceType =
  | 'vollkasko'
  | 'teilkasko'
  | 'haftpflicht_gegner'
  | 'gesteuert'
  | 'selbstzahler';
export type LifecycleStage = 'neu' | 'laufend' | 'fertig' | 'abgeschlossen' | 'storniert';

/** A zone mention located in the source text, with its character span. */
export type ZoneHit = {
  zone: DamageZone;
  start: number;
  end: number;
  /** Surface form actually matched (may be a synonym of `zone`). */
  matched: string;
  /** True when the containing clause reads as intact//negated for paint only. */
  paintIntact: boolean;
};

/** Per-field provenance so the UI can show *why* a value was chosen. */
export type FieldProvenance = {
  value: string | null;
  source: 'lexical' | 'states' | 'llm' | 'default';
  confidence: number;
  evidence?: string;
};

export type ExtractionResult = {
  caseId: number | null;
  caseType: CaseType;
  caseKind: CaseKind | null;
  zones: DamageZone[];
  severity: Severity | null;
  insuranceType: InsuranceType | null;
  lifecycleStage: LifecycleStage | null;
  /** Bumper-style whole-part rollup for the 3D layer. */
  replacementParts: string[];
  provenance: {
    caseType: FieldProvenance;
    caseKind: FieldProvenance;
    zones: FieldProvenance;
    severity: FieldProvenance;
    insuranceType: FieldProvenance;
    lifecycleStage: FieldProvenance;
  };
  /** Which pipeline nodes ran, in order. */
  trace: string[];
  zoneHits: ZoneHit[];
};
