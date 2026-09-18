/**
 * Axis-aligned regions in normalized (u, v, w) space for each of the 22
 * schema.json damage zones.
 *
 * Frame (see model-space.ts):
 *   u lateral      -1 .. +1   +1 = car's LEFT
 *   v vertical      0 .. 1     0 = ground, 1 = roof
 *   w longitudinal -1 .. +1   +1 = FRONT
 *
 * Landmarks measured from the mesh:
 *   front axle / wheel arch   w ~ +0.40 .. +0.70  (peak +0.65)
 *   rear axle / wheel arch    w ~ -0.75 .. -0.55  (peak -0.65)
 *   door mirrors              w ~ +0.20 .. +0.30, |u| > 0.87
 *   hood top surface          w > +0.80, v ~ 0.55
 *   cabin / greenhouse        w ~ -0.80 .. +0.30, v > 0.62
 *   beltline                  v ~ 0.55
 *   sill (rocker) band        v ~ 0.18 .. 0.34
 *
 * Regions may overlap; classification picks the best match by weighted
 * distance to region centre, so overlap is not a correctness problem.
 */

import type { DamageZone } from '../extraction/types';

export type Region = {
  u: [number, number];
  v: [number, number];
  w: [number, number];
  /** Bias for tie-breaking: higher wins when a point is inside 2+ regions. */
  priority?: number;
};

export const ZONE_REGIONS: Record<DamageZone, Region> = {
  // ---- front end
  'Stoßstange vorne': { u: [-1, 1], v: [0.0, 0.42], w: [0.82, 1], priority: 1 },
  'Stoßstange vorne links': { u: [0.25, 1], v: [0.0, 0.42], w: [0.82, 1], priority: 2 },
  'Stoßstange vorne rechts': { u: [-1, -0.25], v: [0.0, 0.42], w: [0.82, 1], priority: 2 },
  Motorhaube: { u: [-0.95, 0.95], v: [0.42, 0.72], w: [0.62, 0.98], priority: 2 },
  Windschutzscheibe: { u: [-0.9, 0.9], v: [0.6, 0.95], w: [0.2, 0.62], priority: 2 },

  // ---- front corners / fenders (ahead of the A-pillar, around front arch)
  'Kotflügel vorne links': { u: [0.55, 1], v: [0.25, 0.68], w: [0.42, 0.85], priority: 2 },
  'Kotflügel vorne rechts': { u: [-1, -0.55], v: [0.25, 0.68], w: [0.42, 0.85], priority: 2 },

  // ---- mirrors (narrow, high, far outboard)
  'Außenspiegel links': { u: [0.85, 1], v: [0.55, 0.75], w: [0.16, 0.34], priority: 4 },
  'Außenspiegel rechts': { u: [-1, -0.85], v: [0.55, 0.75], w: [0.16, 0.34], priority: 4 },

  // ---- doors (between the axles, above the sill, below the beltline+glass)
  Fahrertür: { u: [0.6, 1], v: [0.3, 0.72], w: [-0.05, 0.42], priority: 2 },
  Beifahrertür: { u: [-1, -0.6], v: [0.3, 0.72], w: [-0.05, 0.42], priority: 2 },
  'Tür hinten links': { u: [0.6, 1], v: [0.3, 0.72], w: [-0.5, -0.05], priority: 2 },
  'Tür hinten rechts': { u: [-1, -0.6], v: [0.3, 0.72], w: [-0.5, -0.05], priority: 2 },

  // ---- sills / rockers (low, outboard, between the axles)
  'Schweller links': { u: [0.62, 1], v: [0.12, 0.3], w: [-0.55, 0.45], priority: 3 },
  'Schweller rechts': { u: [-1, -0.62], v: [0.12, 0.3], w: [-0.55, 0.45], priority: 3 },

  // ---- rear quarters
  'Kotflügel hinten links': { u: [0.55, 1], v: [0.25, 0.68], w: [-0.85, -0.5], priority: 2 },
  'Kotflügel hinten rechts': { u: [-1, -0.55], v: [0.25, 0.68], w: [-0.85, -0.5], priority: 2 },

  // ---- roof
  Dach: { u: [-0.95, 0.95], v: [0.78, 1], w: [-0.7, 0.3], priority: 2 },

  // ---- rear end
  Heckklappe: { u: [-0.95, 0.95], v: [0.4, 0.85], w: [-1, -0.78], priority: 2 },
  'Stoßstange hinten': { u: [-1, 1], v: [0.0, 0.4], w: [-1, -0.82], priority: 1 },
  'Stoßstange hinten links': { u: [0.25, 1], v: [0.0, 0.4], w: [-1, -0.82], priority: 2 },
  'Stoßstange hinten rechts': { u: [-1, -0.25], v: [0.0, 0.4], w: [-1, -0.82], priority: 2 },
};

/**
 * Whole-part rollup for the challenge's stretch goal: "Damage on the bumper
 * area should highlight the entire bumper as a replacement part."
 *
 * A corner hit (e.g. "Stoßstange vorne links") implies the whole bumper cover
 * is the replacement part, because bumpers are not repaired per corner.
 */
export const PART_ROLLUP: Partial<Record<DamageZone, DamageZone>> = {
  'Stoßstange vorne links': 'Stoßstange vorne',
  'Stoßstange vorne rechts': 'Stoßstange vorne',
  'Stoßstange hinten links': 'Stoßstange hinten',
  'Stoßstange hinten rechts': 'Stoßstange hinten',
};

/** Human-facing replacement-part label per zone. */
export const REPLACEMENT_PART_LABEL: Record<string, string> = {
  'Stoßstange vorne': 'Stoßfängerverkleidung vorne (komplett)',
  'Stoßstange hinten': 'Stoßfängerverkleidung hinten (komplett)',
  Motorhaube: 'Motorhaube',
  Heckklappe: 'Heckklappe',
  Dach: 'Dachhaut',
  Windschutzscheibe: 'Windschutzscheibe',
  Fahrertür: 'Türblatt Fahrerseite',
  Beifahrertür: 'Türblatt Beifahrerseite',
  'Tür hinten links': 'Türblatt hinten links',
  'Tür hinten rechts': 'Türblatt hinten rechts',
  'Kotflügel vorne links': 'Kotflügel vorne links',
  'Kotflügel vorne rechts': 'Kotflügel vorne rechts',
  'Kotflügel hinten links': 'Seitenwand hinten links',
  'Kotflügel hinten rechts': 'Seitenwand hinten rechts',
  'Schweller links': 'Schwellerverkleidung links',
  'Schweller rechts': 'Schwellerverkleidung rechts',
  'Außenspiegel links': 'Außenspiegel links',
  'Außenspiegel rechts': 'Außenspiegel rechts',
};
