// ── UNIT 3 · Exercice 3 — Prépositions dans des PHRASES ───────────────────────
// Lieu et mouvement mélangés. Utilise le moteur partagé (prepositions-shared.js).

const PREP_SENTENCES = {
  title: 'PRÉPOSITIONS — PHRASES',
  kind: 'sentences',
  items: [
    { id: 1,  parts: ["The cat is sleeping", "", "the sofa."],                                    answer: "on" },
    { id: 2,  parts: ["She walked", "", "the tunnel from one end to the other."],                  answer: "through" },
    { id: 3,  parts: ["The pharmacy is", "", "the bank and the supermarket."],                     answer: "between" },
    { id: 4,  parts: ["He drove", "", "the speed camera without slowing down."],                   answer: "past" },
    { id: 5,  parts: ["The plane was flying", "", "the clouds."],                                  answer: "above" },
    { id: 6,  parts: ["The children ran", "", "the playground, laughing."],                        answer: "around" },
    { id: 7,  parts: ["She jumped", "", "the swimming pool."],                                     answer: "into" },
    { id: 8,  parts: ["He walked", "", "the street to reach the other side."],                     answer: "across" },
    { id: 9,  parts: ["The keys are", "", "the table — look underneath!"],                         answer: "under" },
    { id: 10, parts: ["The bird flew", "", "the window and landed on the sill."],                  answer: "towards" },
    { id: 11, parts: ["London is", "", "England."],                                                answer: "in" },
    { id: 12, parts: ["The bus stop is right", "", "the school entrance."],                        answer: "in front of" },
  ],
  opts: ["on", "through", "between", "past", "above", "around", "into", "across", "under", "towards", "in", "in front of", "next to", "away from", "over", "along"],
  map: {},
  inst: "Lisez chaque phrase et faites glisser la bonne préposition dans le blanc. Attention : lieu et mouvement sont mélangés !"
};

PREP_SENTENCES.opts.forEach(o => { PREP_SENTENCES.map[o] = o; });

function initPrepSentences(container, onBack) {
  initPrepositionsExercise(container, PREP_SENTENCES, onBack);
}
