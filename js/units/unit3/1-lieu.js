// ── UNIT 3 · Exercice 1 — Prépositions de LIEU ────────────────────────────────
// Utilise le moteur partagé (prepositions-shared.js).

const PREP_PLACE = {
  title: 'PRÉPOSITIONS — LIEU',
  kind: 'grid',
  items: [
    { id: 1,  label: "The mouse is ___ the computer.",  answer: "next to" },
    { id: 2,  label: "The mouse is ___ the computer.",  answer: "on" },
    { id: 3,  label: "The mouse is ___ the computer.",  answer: "in front of" },
    { id: 4,  label: "The mouse is ___ the computer.",  answer: "under" },
    { id: 5,  label: "The mouse is ___ the computers.", answer: "between" },
    { id: 6,  label: "The mouse is ___ the others.",    answer: "among" },
    { id: 7,  label: "The mouse is ___ the computer.",  answer: "behind" },
    { id: 8,  label: "The mouse is ___ the computer.",  answer: "far from" },
    { id: 9,  label: "The mouse is ___ the tower.",     answer: "above" },
    { id: 10, label: "The mouse is ___ the computer.",  answer: "in" },
  ],
  opts: ["under (below)", "next to (beside)", "far from", "between", "behind", "in (inside)", "on (on top of)", "in front of", "above", "among"],
  map: {
    "under (below)": "under", "next to (beside)": "next to", "far from": "far from",
    "between": "between", "behind": "behind", "in (inside)": "in",
    "on (on top of)": "on", "in front of": "in front of", "above": "above", "among": "among"
  },
  inst: "Faites glisser la bonne préposition sur le dessin correspondant."
};

function initPrepPlace(container, onBack) {
  initPrepositionsExercise(container, PREP_PLACE, onBack);
}
