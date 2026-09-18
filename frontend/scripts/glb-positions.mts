/**
 * Minimal GLB POSITION reader (no three.js).
 *
 * Handles the exact layout car.glb uses: KHR_mesh_quantization with
 * normalized SHORT positions and a non-trivial byteStride.
 */

import { readFileSync } from 'node:fs';

export function readGlbPositions(path: string): Float32Array {
  const buf = readFileSync(path);
  const totalLength = buf.readUInt32LE(8);

  let offset = 12;
  let json: any = null;
  let bin: Buffer | null = null;

  while (offset < totalLength) {
    const chunkLength = buf.readUInt32LE(offset);
    const chunkType = buf.subarray(offset + 4, offset + 8).toString('ascii');
    const start = offset + 8;
    if (chunkType.startsWith('JSON')) {
      json = JSON.parse(buf.subarray(start, start + chunkLength).toString('utf8'));
    } else if (chunkType.startsWith('BIN')) {
      bin = buf.subarray(start, start + chunkLength);
    }
    offset = start + chunkLength;
  }
  if (!json || !bin) throw new Error('malformed GLB');

  const prim = json.meshes[0].primitives[0];
  const acc = json.accessors[prim.attributes.POSITION];
  const view = json.bufferViews[acc.bufferView];

  const base = (view.byteOffset ?? 0) + (acc.byteOffset ?? 0);
  const stride = view.byteStride ?? 6;
  const count = acc.count;

  // 5122 = SHORT, normalized -> divide by 32767
  if (acc.componentType !== 5122) {
    throw new Error(`unexpected componentType ${acc.componentType}`);
  }

  const out = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    const o = base + i * stride;
    out[i * 3] = Math.max(bin.readInt16LE(o) / 32767, -1);
    out[i * 3 + 1] = Math.max(bin.readInt16LE(o + 2) / 32767, -1);
    out[i * 3 + 2] = Math.max(bin.readInt16LE(o + 4) / 32767, -1);
  }
  return out;
}
