/**
 * Geometric zone segmentation over the unsegmented car.glb mesh.
 *
 * Because the asset has exactly one primitive and no named panels, we cannot
 * toggle a sub-mesh. Instead we classify geometry into zones and build a
 * per-vertex highlight mask that the renderer can feed to a vertex colour
 * attribute (or a triangle subset / secondary draw call).
 *
 * This runs on plain number arrays so it is testable in Node without three.js
 * or a GPU.
 */

import type { DamageZone } from '../extraction/types';

import { toNormalized } from './model-space';
import {
  PART_ROLLUP,
  type Region,
  ZONE_REGIONS,
  REPLACEMENT_PART_LABEL,
} from './zone-regions';

function inRange(n: number, [lo, hi]: [number, number]): boolean {
  return n >= lo && n <= hi;
}

function centre([lo, hi]: [number, number]): number {
  return (lo + hi) / 2;
}

function span([lo, hi]: [number, number]): number {
  return Math.max(hi - lo, 1e-6);
}

/** Normalised distance from a point to a region centre, per axis, 0 = centre. */
function regionDistance(u: number, v: number, w: number, r: Region): number {
  const du = (u - centre(r.u)) / span(r.u);
  const dv = (v - centre(r.v)) / span(r.v);
  const dw = (w - centre(r.w)) / span(r.w);
  return Math.sqrt(du * du + dv * dv + dw * dw);
}

/**
 * Classify one model-space point to a damage zone, or null if it belongs to
 * no panel region (wheels, underbody, interior, glass we don't track).
 */
export function classifyPoint(x: number, y: number, z: number): DamageZone | null {
  const { u, v, w } = toNormalized(x, y, z);

  let best: DamageZone | null = null;
  let bestScore = Number.POSITIVE_INFINITY;

  for (const [zone, region] of Object.entries(ZONE_REGIONS) as Array<[DamageZone, Region]>) {
    if (!inRange(u, region.u) || !inRange(v, region.v) || !inRange(w, region.w)) continue;
    // Lower is better; higher priority subtracts from the score so specific
    // regions (corner bumpers, mirrors) beat generic ones on overlap.
    const score = regionDistance(u, v, w, region) - (region.priority ?? 0);
    if (score < bestScore) {
      bestScore = score;
      best = zone;
    }
  }
  return best;
}

export type HighlightMask = {
  /** One entry per vertex: 1 = highlighted, 0 = not. */
  mask: Uint8Array;
  /** Vertex count per zone actually found in the geometry. */
  counts: Record<string, number>;
  /** Zones requested that matched zero vertices (region needs tuning). */
  unmatched: string[];
};

/**
 * Build a per-vertex highlight mask for a set of damaged zones.
 *
 * @param positions flat [x,y,z, x,y,z, ...] in model space (quantized or scaled)
 * @param zones     canonical zone names from the extraction pipeline
 */
export function buildHighlightMask(
  positions: ArrayLike<number>,
  zones: readonly DamageZone[]
): HighlightMask {
  const target = new Set<string>(zones);
  // A corner hit highlights the whole part (bumper stretch goal).
  for (const z of zones) {
    const roll = PART_ROLLUP[z];
    if (roll) target.add(roll);
  }

  const n = Math.floor(positions.length / 3);
  const mask = new Uint8Array(n);
  const counts: Record<string, number> = {};
  const found = new Set<string>();

  for (let i = 0; i < n; i += 1) {
    const zone = classifyPoint(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]);
    if (!zone) continue;
    found.add(zone);

    // A rolled-up target ("Stoßstange vorne") must also light the corner
    // regions that compose it, and vice versa.
    const rolled = PART_ROLLUP[zone];
    const hit = target.has(zone) || (rolled ? target.has(rolled) : false);
    if (hit) {
      mask[i] = 1;
      counts[zone] = (counts[zone] ?? 0) + 1;
    }
  }

  const unmatched = [...target].filter((z) => !found.has(z));
  return { mask, counts, unmatched };
}

/**
 * Replacement-part rollup for the UI, de-duplicated.
 *
 * "Damage on the bumper area should highlight the entire bumper as a
 * replacement part" -- so a corner zone maps to the whole cover.
 */
export function mapZonesToParts(zones: readonly DamageZone[]): string[] {
  const parts = new Set<string>();
  for (const z of zones) {
    const canonical = PART_ROLLUP[z] ?? z;
    parts.add(REPLACEMENT_PART_LABEL[canonical] ?? canonical);
  }
  return [...parts].sort();
}

/** Zone -> approximate centre in normalized space, for 2D callout placement. */
export function zoneAnchor(zone: DamageZone): { u: number; v: number; w: number } {
  const r = ZONE_REGIONS[zone];
  return { u: centre(r.u), v: centre(r.v), w: centre(r.w) };
}
