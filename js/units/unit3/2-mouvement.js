// ── UNIT 3 · Exercice 2 — Prépositions de MOUVEMENT ───────────────────────────
// Utilise le moteur partagé (prepositions-shared.js).

const PREP_MOVEMENT = {
  title: 'PRÉPOSITIONS — MOUVEMENT',
  kind: 'grid',
  items: [
    { id: 1, label: "The mouse goes ___ the computer.", answer: "around" },
    { id: 2, label: "The mouse goes ___ the computer.", answer: "to (towards)" },
    { id: 3, label: "The mouse goes ___ the computer.", answer: "past" },
    { id: 4, label: "The mouse goes ___ the computer.", answer: "away from" },
    { id: 5, label: "The mouse goes ___ the screen.",   answer: "over" },
    { id: 6, label: "The mouse goes ___ the computer.", answer: "through" },
    { id: 7, label: "The mouse goes ___ the line.",     answer: "along" },
    { id: 8, label: "The objects go ___ each other.",   answer: "across" },
  ],
  opts: ["over", "along", "away from", "across", "past", "through", "to (towards)", "around", "up", "down", "onto", "into", "out of"],
  map: {},
  inst: "Observez les flèches sur chaque dessin et glissez la bonne préposition de mouvement."
};

PREP_MOVEMENT.opts.forEach(o => { PREP_MOVEMENT.map[o] = o.split(' (')[0]; });

function initPrepMovement(container, onBack) {
  initPrepositionsExercise(container, PREP_MOVEMENT, onBack);
}
