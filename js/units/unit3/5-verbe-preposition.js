// ── UNIT 3 · Exercice 5 — Verbe + préposition (matching) ──────────────────────
// Content extracted from: 187-Prepositions_Computing/Section_3/PREPOSCERTAINVERBS.TBK

const VERB_PREP_PAIRS = [
  { left: 'to append', right: 'to' },
  { left: 'to apply', right: 'to' },
  { left: 'to assign', right: 'to' },
  { left: 'to compare', right: 'with' },
  { left: 'to depend', right: 'on' },
  { left: 'to extract', right: 'from' },
  { left: 'to inherit', right: 'from' },
  { left: 'to prevent', right: 'from' },
  { left: 'to prompt', right: 'for' },
  { left: 'to refer', right: 'to' },
  { left: 'to rely', right: 'on' },
  { left: 'to remove', right: 'from' },
  { left: 'to result', right: 'in' },
  { left: 'to succeed', right: 'in' },
  { left: 'to wait', right: 'for' },
  { left: 'to differ', right: 'in' },
  { left: 'to limit', right: 'to' },
  { left: 'to point', right: 'to' },
  { left: 'to conform', right: 'to' },
  { left: 'to convert', right: 'into' },
  { left: 'to divide', right: 'by' },
  { left: 'to forward', right: 'to' },
  { left: 'to initialize', right: 'to' },
  { left: 'to link', right: 'to' },
  { left: 'to load / download', right: 'into' },
  { left: 'to relate', right: 'to' },
  { left: 'to select', right: 'from' },
];

function initVerbPrep(container, onBack) {
  // Split into groups of 8 for display
  const subset = exShuffle([...VERB_PREP_PAIRS]).slice(0, 8);
  runMatching(container, {
    unit: 'UNIT 3 — PRÉPOSITIONS',
    title: 'VERBE + PRÉPOSITION',
    pairs: subset,
    onBack,
  });
}
