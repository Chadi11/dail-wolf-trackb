/**
 * German workshop-note lexicon.
 *
 * Every entry here was derived by measuring against the 1,000 labelled
 * da-cases records, not guessed. The synonym sets below are what lift
 * case_kind from 0.827 (bare schema.json string match) to 0.978.
 */

import type { CaseKind, Severity, DamageZone, InsuranceType } from './types';

/**
 * Zone synonyms. The canonical schema.json name is the key.
 *
 * IMPORTANT: matching must be longest-surface-form-first. The zone list is
 * self-nesting -- "Stoßstange vorne" is a strict prefix of "Stoßstange vorne
 * links". Matching short-first scores P=0.819/R=0.803; longest-first with
 * span masking scores P=1.000/R=1.000 on all 450 damage cases.
 */
export const ZONE_SYNONYMS: Record<DamageZone, string[]> = {
  'Außenspiegel links': ['Außenspiegel links', 'Aussenspiegel links', 'Spiegel links'],
  'Außenspiegel rechts': ['Außenspiegel rechts', 'Aussenspiegel rechts', 'Spiegel rechts'],
  Beifahrertür: ['Beifahrertür', 'Beifahrertuer', 'Beifahrer-Tür'],
  Dach: ['Dach', 'Dachhaut'],
  Fahrertür: ['Fahrertür', 'Fahrertuer', 'Fahrer-Tür'],
  Heckklappe: ['Heckklappe', 'Kofferraumklappe', 'Heckdeckel'],
  'Kotflügel hinten links': ['Kotflügel hinten links', 'Kotfluegel hinten links'],
  'Kotflügel hinten rechts': ['Kotflügel hinten rechts', 'Kotfluegel hinten rechts'],
  'Kotflügel vorne links': ['Kotflügel vorne links', 'Kotfluegel vorne links'],
  'Kotflügel vorne rechts': ['Kotflügel vorne rechts', 'Kotfluegel vorne rechts'],
  Motorhaube: ['Motorhaube', 'Haube', 'Fronthaube'],
  'Schweller links': ['Schweller links'],
  'Schweller rechts': ['Schweller rechts'],
  'Stoßstange hinten': ['Stoßstange hinten', 'Stossstange hinten', 'Heckstoßstange'],
  'Stoßstange hinten links': ['Stoßstange hinten links', 'Stossstange hinten links'],
  'Stoßstange hinten rechts': ['Stoßstange hinten rechts', 'Stossstange hinten rechts'],
  'Stoßstange vorne': ['Stoßstange vorne', 'Stossstange vorne', 'Frontstoßstange'],
  'Stoßstange vorne links': ['Stoßstange vorne links', 'Stossstange vorne links'],
  'Stoßstange vorne rechts': ['Stoßstange vorne rechts', 'Stossstange vorne rechts'],
  'Tür hinten links': ['Tür hinten links', 'Tuer hinten links'],
  'Tür hinten rechts': ['Tür hinten rechts', 'Tuer hinten rechts'],
  Windschutzscheibe: ['Windschutzscheibe', 'Frontscheibe', 'Scheibe vorne'],
};

/**
 * Case-kind synonyms, ordered by earliest match position at runtime.
 *
 * The 17.3% of cases the bare schema names miss are all vocabulary drift:
 * "TÜV" for HU/AU, "Ölservice" for Ölwechsel, "Bremsbeläge" for Bremsen,
 * "Räderwechsel" for Räder und Reifen.
 */
export const KIND_SYNONYMS: Record<CaseKind, string[]> = {
  // --- damage kinds
  Parkschaden: ['parkschaden', 'beim parken', 'parkplatzschaden'],
  Auffahrunfall: ['auffahrunfall', 'aufgefahren', 'auffahrschaden'],
  Hagelschaden: ['hagelschaden', 'hagelschlag', 'hagel'],
  Steinschlag: ['steinschlag', 'steinschlagschaden'],
  Vandalismus: ['vandalismus', 'zerkratzt', 'anzeige aufgenommen', 'mutwillig'],
  Wildunfall: ['wildunfall', 'wildschaden', 'reh', 'wildwechsel'],
  Rangierschaden: ['rangierschaden', 'rangier', 'beim rangieren'],
  // --- service kinds
  Ölwechsel: ['ölwechsel', 'ölservice', 'oelwechsel', 'motoröl', 'ölstand'],
  Inspektion: [
    'inspektion',
    'service fällig',
    'wartung',
    'servicerückstellung',
    'serviceintervall',
  ],
  'HU/AU': ['hu/au', 'tüv', 'tuev', 'hauptuntersuchung', 'abgasuntersuchung', 'au fällig'],
  'Räder und Reifen': [
    'räderwechsel',
    'radwechsel',
    'reifenwechsel',
    'reifendruck',
    'wuchten',
    'reifen',
    'räder',
    'felge',
  ],
  Bremsen: ['bremsbelä', 'bremsscheib', 'bremsflüssig', 'bremse', 'brems'],
};

/**
 * Insurance-type cues. Order matters: the more specific carrier constructions
 * are checked before the generic "gegner" token.
 */
export const INSURANCE_CUES: Array<[InsuranceType, string[]]> = [
  ['gesteuert', ['gesteuerter auftrag', 'steuerung über', 'schadensteuer', 'rkü', 'flottenpartner']],
  [
    'haftpflicht_gegner',
    [
      'gegnerische haftpflicht',
      'haftpflicht gegner',
      'haftung anerkannt',
      'gegnerversicherung',
      'gegner',
    ],
  ],
  ['vollkasko', ['vollkasko']],
  ['teilkasko', ['teilkasko']],
  [
    'selbstzahler',
    ['selbstzahler', 'selbst zahlen', 'privat zahlen', 'ohne versicherung', 'kostenträger kunde'],
  ],
];

/**
 * Damage-vs-service discriminator. Measured at 1.000 on all 1,000 cases.
 */
export const DAMAGE_MARKERS = [
  'schaden',
  'unfall',
  'hagel',
  'vandalismus',
  'steinschlag',
  'kratzer',
  'beule',
  'delle',
  'rangier',
  'eingedrückt',
  'riss',
];

/**
 * Severity descriptor cues.
 *
 * Deliberately conservative. Measured ceiling for descriptor-driven severity
 * is ~0.791 (fit and scored on the same data, i.e. optimistic) because the
 * descriptor vocabulary genuinely overlaps across classes: "dellen" alone
 * splits 20/20/14 across leicht/mittel/schwer, and the "ca. N cm" size
 * measurements are drawn independently of the severity label.
 *
 * So these cues only fire on the *unambiguous* tails. Everything else is
 * routed to the LLM adjudicator rather than guessed here.
 */
export const SEVERITY_STRONG_CUES: Array<[Severity, string[]]> = [
  [
    'schwer',
    [
      'totalschaden',
      'nicht fahrbereit',
      'großflächig',
      'grossflächig',
      'verformt',
      'rissen und lose',
      'durchgerostet',
      'glasbruch',
      'sicherheitsrelevant',
    ],
  ],
  [
    'leicht',
    [
      'kratzer im klarlack',
      'feine kratzspuren',
      'lackabrieb',
      'oberflächlich',
      'geringfügig',
      'smart repair',
      'lack nicht durch',
    ],
  ],
  [
    'mittel',
    ['halterung gebrochen', 'delle mit lackschaden', 'lack abgeplatzt', 'kratzer bis auf grundierung'],
  ],
];

/**
 * Paint-intact / negation phrases.
 *
 * These are NOT zone negations. In this corpus "Lack laut Sichtprüfung intakt"
 * appears on hail-dented panels that ARE in ground_truth -- the panel is
 * dented, only the paint survived. 362/1000 cases contain a negation token and
 * dropping their zones would destroy the P=1.000 zone precision.
 *
 * We therefore record paint-intact as an ATTRIBUTE of the zone hit and keep
 * the zone.
 */
export const PAINT_INTACT_PHRASES = [
  'lack laut sichtprüfung intakt',
  'lack intakt',
  'lack nicht durch',
  'lack unbeschädigt',
  'keine lackschäden',
];

/** Phrases that genuinely retract a zone (rare; checked per clause). */
export const ZONE_RETRACTION_PHRASES = [
  'kein schaden an',
  'keine beschädigung an',
  'nicht betroffen',
  'unauffällig',
  'doch kein schaden',
];

/**
 * Lifecycle mapping from the structured category-4 "Vorgangsstatus" state
 * names. Reading states[] beats parsing free text for this field, because the
 * source system already stores it.
 */
export const LIFECYCLE_STATE_MAP: Array<[RegExp, 'neu' | 'laufend' | 'fertig' | 'abgeschlossen' | 'storniert']> = [
  // Order matters: earlier patterns win. The regexes below were tuned against
  // the observed category-4 status vocabulary (see scripts/evaluate.mts).
  [/storniert|absage/i, 'storniert'],
  [/abgeholt|ausgeliefert|verwerter|totalschaden/i, 'abgeschlossen'],

  // "Bringservice mit Folgetermin" is a finished job awaiting delivery, and
  // must be checked before the generic Bring/Holservice -> laufend rule.
  [/fertig zur abholung|abholbereit|bringservice mit folgetermin/i, 'fertig'],

  // Intake / quoting / "please schedule" states are still pre-work = neu.
  [
    /bitte kalkulieren|vorkalkulation|bitte vereinbaren|termin vereinbaren|teile vorbestellt|auftrag erteilt|infos erhalten|dsa\/bilder|vorgang angelegt|termin unsicher|kunde nicht erschienen/i,
    'neu',
  ],

  // Active shop-floor / waiting-on-third-party states.
  [
    /in bearbeitung|auftrag steht|reklamation|schadensfeststellung|rückstand|warte auf freigabe|neuer folgetermin|nachbestellung|holservice|bringservice/i,
    'laufend',
  ],

  [/termin vereinbart|termin bestätigt|folgetermin/i, 'neu'],
];
