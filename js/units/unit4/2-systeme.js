// ── UNIT 4 · Exercice 2 — Système informatique (matching) ─────────────────────
// Content extracted from: 188-Computer_Parts/Section_8/Compsyst.tbk

const SYSTEM_PAIRS = [
  { left: 'Keyboard', right: 'Used to type data.' },
  { left: 'Mouse', right: 'Used to point on the screen.' },
  { left: 'Scanner', right: 'Optical device, used to collect data from texts or pictures.' },
  { left: 'Printer', right: 'Output device that produces a hard copy.' },
  { left: 'Monitor', right: 'Output device with a screen.' },
  { left: 'RAM (Random Access Memory)', right: 'Primary memory — fast, non-sequential access.' },
  { left: 'Hard Disk', right: 'Secondary memory — stores data permanently.' },
  { left: 'Processor / CPU', right: 'A device to make calculations.' },
  { left: 'Arithmetic Logic Unit', right: 'Performs arithmetic and logic operations.' },
  { left: 'Control Unit', right: 'Directs and coordinates processing activities.' },
  { left: 'ROM', right: 'A read-only store location.' },
  { left: 'Lightpen', right: 'Used with a graphical unit to point on screen.' },
];

function initSystemMatch(container, onBack) {
  runMatching(container, {
    unit: 'UNIT 4 — COMPOSANTS',
    title: 'SYSTÈME INFORMATIQUE',
    pairs: exShuffle([...SYSTEM_PAIRS]).slice(0, 8),
    onBack,
  });
}
