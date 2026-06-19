// ── UNIT 4 · Exercice 3 — Verbes : traductions (QCM) ──────────────────────────
// Content extracted from: 188-Computer_Parts/Section_7/Vbqcm.tbk

const VERB_MCQ = [
  { verb: 'to delete', correct: 'effacer / supprimer', wrong: ['afficher', 'charger', 'traiter'] },
  { verb: 'to display', correct: 'afficher', wrong: ['effacer', 'saisir', 'charger'] },
  { verb: 'to abort', correct: 'abandonner / interrompre', wrong: ['charger', 'afficher', 'traiter'] },
  { verb: 'to input', correct: 'saisir / entrer', wrong: ['effacer', 'signaler', 'charger'] },
  { verb: 'to merge', correct: 'fusionner', wrong: ['sauter', 'traiter', 'afficher'] },
  { verb: 'to load', correct: 'charger', wrong: ['fusionner', 'effacer', 'signaler'] },
  { verb: 'to flag', correct: 'signaler', wrong: ['charger', 'basculer', 'sauter'] },
  { verb: 'to prompt', correct: 'inviter', wrong: ['traiter', 'fusionner', 'charger'] },
  { verb: 'to process', correct: 'traiter', wrong: ['inviter', 'signaler', 'afficher'] },
  { verb: 'to undo', correct: 'annuler', wrong: ['traiter', 'charger', 'fusionner'] },
  { verb: 'to skip', correct: 'sauter / passer', wrong: ['annuler', 'inviter', 'initialiser'] },
  { verb: 'to toggle', correct: 'basculer', wrong: ['sauter', 'annuler', 'charger'] },
  { verb: 'to enable', correct: 'activer', wrong: ['annuler', 'sauter', 'signaler'] },
  { verb: 'to clear', correct: 'initialiser / effacer', wrong: ['activer', 'basculer', 'fusionner'] },
  { verb: 'to disable', correct: 'désactiver', wrong: ['activer', 'charger', 'effacer'] },
  { verb: 'to move', correct: 'déplacer', wrong: ['traiter', 'fusionner', 'signaler'] },
  { verb: 'to match', correct: 'correspondre', wrong: ['déplacer', 'basculer', 'sauter'] },
  { verb: 'to occur', correct: 'se produire', wrong: ['correspondre', 'annuler', 'charger'] },
  { verb: 'to overwrite', correct: 'écraser', wrong: ['afficher', 'se produire', 'traiter'] },
  { verb: 'to shift', correct: 'décaler', wrong: ['écraser', 'basculer', 'déplacer'] },
];

function initVerbMCQ(container, onBack) {
  const questions = exShuffle(VERB_MCQ).slice(0, 10).map(v => ({
    q: `Quelle est la traduction de "${v.verb}" ?`,
    options: exShuffle([
      { text: v.correct, correct: true },
      ...v.wrong.map(w => ({ text: w, correct: false })),
    ]).slice(0, 4),
  }));
  runMCQ(container, {
    unit: 'UNIT 4 — COMPOSANTS',
    title: 'VERBES — TRADUCTIONS',
    questions,
    onBack,
  });
}
