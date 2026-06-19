// ── UNIT 4 · Exercice 4 — Verbes antonymes (matching) ─────────────────────────
// Content extracted from: 188-Computer_Parts/Section_6/Instvb2.tbk

const ANTONYM_PAIRS = [
  { left: 'to connect', right: 'to disconnect' },
  { left: 'to decrease', right: 'to increase' },
  { left: 'to disable', right: 'to enable' },
  { left: 'to lengthen', right: 'to shorten' },
  { left: 'to plug in', right: 'to unplug' },
  { left: 'to press / depress', right: 'to release' },
  { left: 'to shut off', right: 'to switch on' },
  { left: 'to switch off', right: 'to switch on' },
  { left: 'to separate', right: 'to join' },
  { left: 'to tighten', right: 'to unscrew' },
  { left: 'to turn on', right: 'to turn off' },
];

function initAntonyms(container, onBack) {
  runMatching(container, {
    unit: 'UNIT 4 — COMPOSANTS',
    title: 'VERBES ANTONYMES',
    pairs: exShuffle([...ANTONYM_PAIRS]).slice(0, 8),
    onBack,
  });
}
