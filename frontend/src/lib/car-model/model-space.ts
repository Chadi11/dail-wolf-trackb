/**
 * Measured geometry of reference-demo/assets/car.glb.
 *
 * All numbers below were read out of the GLB itself, not guessed. The asset is
 * a single unsegmented Tripo mesh:
 *
 *   nodes: 1, meshes: 1, materials: 1, primitives: 1
 *   node:  "tripo_node_f32359ee-749e-462c-bc3b-0a285d11ec8d"
 *   152,670 vertices / 231,514 triangles, mode 4 (TRIANGLES)
 *   POSITION is normalized SHORT (KHR_mesh_quantization), byteStride 20
 *
 * There are NO named sub-meshes for body panels, so highlighting a panel can
 * only be done by classifying geometry. Hence this module.
 *
 * Quantized position extents (raw short / 32767):
 *   X: -0.5134 .. +0.5134   (half-extent 0.5134)  lateral
 *   Y: -0.3850 .. +0.3850   (half-extent 0.3850)  vertical
 *   Z: -1.0000 .. +1.0000   (half-extent 1.0000)  longitudinal
 *
 * After the node scale of 1.9208726 the car is 1.972 x 1.479 x 3.842 units.
 */

export const HALF_EXTENT = { x: 0.5134, y: 0.385, z: 1.0 } as const;

export const NODE_SCALE = 1.9208726471118212;

/**
 * Which end of the Z axis is the front of the car.
 *
 * Determined from geometry, not assumed: the door-mirror bulge (the only
 * lateral protrusion above the beltline, half-width 0.513 vs ~0.448 for its
 * neighbours) sits at z = +0.20..+0.30. Wheel-arch vertex density peaks at
 * z = +0.40..+0.70 and z = -0.75..-0.55. Door mirrors are always mounted just
 * behind the front axle, and +0.25 is 0.30 from the +0.55 cluster versus 0.90
 * from the -0.65 cluster. Therefore the +Z cluster is the front axle and
 * FRONT = +Z.
 *
 * Corroborating: the greenhouse (geometry above the beltline) ends at z=+0.85
 * with the body top surface dropping to y=0.076 (hood), while the -Z end keeps
 * a half-width of 0.189 above the beltline all the way to z=-1.00 (rear glass
 * / tailgate of a fastback profile).
 *
 * If a future asset is authored facing -Z, flip this one constant.
 */
export const FRONT_IS_POSITIVE_Z = true;

/**
 * Which side of the X axis is the car's left (German "links").
 *
 * glTF is right-handed, Y-up. For a vehicle whose forward vector is +Z and up
 * vector is +Y, right = forward x up = (+Z) x (+Y) = -X. So the driver's left
 * is +X.
 *
 * This is a convention-level inference rather than a measurement: the mesh is
 * close to laterally symmetric, so no geometric feature distinguishes the
 * sides. Verify visually once, then trust. If damage ever renders mirrored
 * left-to-right, flip this constant and nothing else.
 */
export const LEFT_IS_POSITIVE_X = true;

/**
 * Normalize a raw model-space position into the (u, v, w) frame the zone
 * regions are written in.
 *
 *   u: lateral,      -1 .. +1, +1 = car's LEFT
 *   v: vertical,      0 .. 1,   0 = ground, 1 = roof
 *   w: longitudinal, -1 .. +1, +1 = FRONT
 *
 * Accepts either quantized-normalized coordinates (|z| <= 1) or post-scale
 * coordinates, by dividing out NODE_SCALE when the input looks scaled.
 */
export function toNormalized(x: number, y: number, z: number): { u: number; v: number; w: number } {
  const scaled = Math.abs(z) > 1.05;
  const s = scaled ? NODE_SCALE : 1;
  const xs = x / s;
  const ys = y / s;
  const zs = z / s;

  const u = (xs / HALF_EXTENT.x) * (LEFT_IS_POSITIVE_X ? 1 : -1);
  const v = (ys + HALF_EXTENT.y) / (2 * HALF_EXTENT.y);
  const w = (zs / HALF_EXTENT.z) * (FRONT_IS_POSITIVE_Z ? 1 : -1);

  return { u: clamp(u, -1, 1), v: clamp(v, 0, 1), w: clamp(w, -1, 1) };
}

function clamp(n: number, lo: number, hi: number): number {
  return Math.min(hi, Math.max(lo, n));
}
