// ── DONNÉES UNIT 3 — Prépositions ─────────────────────────────────────────────
// Les 3 premiers exercices (LIEU / MOUVEMENT / PHRASES) partagent le moteur
// prepositions-shared.js ; chacun a son propre fichier (1-lieu, 2-mouvement, 3-phrases).
window.UNIT = {
  unit: 'UNIT 3',
  title: 'PRÉPOSITIONS',
  img: 'images/Preposition.png',
  exercises: [
    {
      title: 'LIEU',
      desc: 'Positionnez la souris par rapport à l\'ordinateur.',
      tags: ['next to', 'on', 'under', 'in', 'above'],
      init: initPrepPlace,
    },
    {
      title: 'MOUVEMENT',
      desc: 'Décrivez la trajectoire de la souris.',
      tags: ['around', 'past', 'over', 'through'],
      init: initPrepMovement,
    },
    {
      title: 'PHRASES',
      desc: 'Complétez des phrases — lieu et mouvement mélangés.',
      tags: ['mixed', 'fill-in'],
      init: initPrepSentences,
    },
    {
      title: 'FILL IN THE BLANKS',
      desc: 'Complétez les blancs avec la bonne préposition dans des phrases informatiques.',
      tags: ['fill-in', 'computing', 'prepositions'],
      init: initPrepFill,
    },
    {
      title: 'VERBE + PRÉPOSITION',
      desc: 'Associez chaque verbe informatique à sa préposition.',
      tags: ['matching', 'verbes', 'computing'],
      init: initVerbPrep,
    },
    {
      title: 'PRÉPOSITIONS DE TEMPS',
      desc: 'Associez les prépositions de temps anglaises à leur équivalent français.',
      tags: ['matching', 'temps', 'at/in/on'],
      init: initPrepTime,
    },
  ],
};
