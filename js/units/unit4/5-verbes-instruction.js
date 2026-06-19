// ── UNIT 4 · Exercice 5 — Verbes d'instruction (matching) ─────────────────────
// Content extracted from: 188-Computer_Parts/Section_5/Instvb1.tbk

const INSTR_VERB_PAIRS = [
  { left: 'to plug in', right: 'brancher' },
  { left: 'to check', right: 'vérifier' },
  { left: 'to make sure / ensure', right: 'assurer / s\'assurer' },
  { left: 'to insert', right: 'introduire' },
  { left: 'to refer to', right: 'se reporter à' },
  { left: 'to set', right: 'mettre / régler' },
  { left: 'to slide', right: 'faire glisser' },
  { left: 'to rotate', right: 'tourner' },
  { left: 'to run', right: 'fonctionner / exécuter' },
];

function initInstrVerbs(container, onBack) {
  runMatching(container, {
    unit: 'UNIT 4 — COMPOSANTS',
    title: 'VERBES D\'INSTRUCTION',
    pairs: exShuffle([...INSTR_VERB_PAIRS]),
    onBack,
  });
}
