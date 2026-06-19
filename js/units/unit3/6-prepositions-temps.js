// ── UNIT 3 · Exercice 6 — Prépositions de temps (matching EN → FR) ────────────
// Content extracted from: 187-Prepositions_Computing/Section_2/Prepositionsoftime.tbk

const PREP_TIME_PAIRS = [
  { left: 'at (a precise time)', right: 'à (heure précise)' },
  { left: 'in (month / year / season)', right: 'en (mois / année / saison)' },
  { left: 'on (a day / date)', right: 'le (jour / date)' },
  { left: 'for (duration)', right: 'pendant / depuis' },
  { left: 'since (starting point)', right: 'depuis (point de départ)' },
  { left: 'during (within a period)', right: 'au cours de' },
  { left: 'before', right: 'avant que / avant' },
  { left: 'after', right: 'après' },
  { left: 'until / till', right: "jusqu'à" },
  { left: 'once (as soon as)', right: 'une fois que' },
  { left: 'immediately', right: 'tout de suite' },
];

function initPrepTime(container, onBack) {
  const subset = exShuffle([...PREP_TIME_PAIRS]).slice(0, 8);
  runMatching(container, {
    unit: 'UNIT 3 — PRÉPOSITIONS',
    title: 'PRÉPOSITIONS DE TEMPS',
    pairs: subset,
    onBack,
  });
}
