import { runExtraction } from '../src/lib/extraction/graph';
import { buildHighlightMask } from '../src/lib/car-model/zone-mapping';

const note = `Fzg. angeliefert, Auffahrunfall im Stau auf der Autobahn. Schaden an Kotflügel hinten rechts, Kratzer bis auf Grundierung, ca. 25 cm.
Auch Stoßstange hinten links beschädigt (Beule).
Stoßstange vorne links ebenfalls: Riss im Lack.
Gegnerische Haftpflicht reguliert, Haftung anerkannt.`;

const r = await runExtraction({
  freitext: note, caseId: 1,
  states: [{ id: 9, name: '🏁 Abgeholt', category_id: 4, is_done: true }],
  useLlm: false,
});
console.log(JSON.stringify({
  caseType: r.caseType, caseKind: r.caseKind, zones: r.zones,
  severity: r.severity, insurance: r.insuranceType, lifecycle: r.lifecycleStage,
  parts: r.replacementParts, trace: r.trace,
}, null, 2));

// geometric segmentation sanity: synthetic points at known landmarks
const pts = [
  0, 0.1, 0.95,    // front centre, low  -> Stoßstange vorne
  0.4, 0.1, 0.95,  // front left,  low   -> Stoßstange vorne links
  0, 0.2, -0.95,   // rear centre, low   -> Stoßstange hinten
  0, 0.15, 0.85,   // hood
  0.5, 0.25, 0.25, // mirror left
];
const m = buildHighlightMask(pts, ['Stoßstange vorne']);
console.log('mask:', Array.from(m.mask), 'counts:', m.counts, 'unmatched:', m.unmatched);
