import { readGlbPositions } from './glb-positions.mts';
import { classifyPoint, buildHighlightMask } from '../src/lib/car-model/zone-mapping';
import { DAMAGE_ZONES } from '../src/lib/extraction/types';

const pos = readGlbPositions('public/assets/models/car.glb');
const n = pos.length / 3;
console.log('vertices:', n);

const counts: Record<string, number> = {};
let unclassified = 0;
for (let i = 0; i < n; i++) {
  const z = classifyPoint(pos[i*3], pos[i*3+1], pos[i*3+2]);
  if (!z) { unclassified++; continue; }
  counts[z] = (counts[z] ?? 0) + 1;
}
console.log('\nper-zone vertex coverage:');
for (const z of DAMAGE_ZONES) {
  const c = counts[z] ?? 0;
  const pct = (c/n*100).toFixed(2);
  console.log(`  ${(c+'').padStart(7)}  ${pct.padStart(5)}%  ${z}${c===0?'   <-- EMPTY':''}`);
}
console.log(`  ${(unclassified+'').padStart(7)}  ${(unclassified/n*100).toFixed(2).padStart(5)}%  <unclassified>`);

const m = buildHighlightMask(pos, ['Stoßstange vorne links']);
const lit = m.mask.reduce((a,b)=>a+b,0);
console.log(`\nbumper rollup test: 'Stoßstange vorne links' lights ${lit} verts (${(lit/n*100).toFixed(2)}%)`);
console.log('zones lit:', m.counts, 'unmatched:', m.unmatched);
