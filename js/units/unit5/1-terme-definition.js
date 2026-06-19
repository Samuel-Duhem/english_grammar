// ── UNIT 5 · Exercice 1 — Terme → définition (matching) ───────────────────────
// Dépend de TERMS (voir shared.js).

function initTermMatching(container, onBack) {
  const subset = exShuffle([...TERMS]).slice(0, 6).map(t => ({
    left: t.term,
    right: t.def,
  }));
  runMatching(container, {
    unit: 'UNIT 5 — TERMINOLOGIE',
    title: 'TERME → DÉFINITION',
    pairs: subset,
    onBack,
  });
}
