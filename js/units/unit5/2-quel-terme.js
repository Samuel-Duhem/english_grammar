// ── UNIT 5 · Exercice 2 — Quel terme ? (MCQ) ──────────────────────────────────
// Dépend de TERMS (voir shared.js).

function initTermMCQ(container, onBack) {
  const shuffled = exShuffle([...TERMS]);
  const questions = shuffled.slice(0, 8).map((t, i) => {
    const distractors = shuffled.filter((_, j) => j !== i).slice(0, 3);
    return {
      q: t.def,
      options: exShuffle([
        { text: t.term, correct: true },
        ...distractors.map(d => ({ text: d.term, correct: false })),
      ]),
    };
  });
  runMCQ(container, {
    unit: 'UNIT 5 — TERMINOLOGIE',
    title: 'QUEL TERME ?',
    questions,
    onBack,
  });
}
