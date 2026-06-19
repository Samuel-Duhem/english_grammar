// ── DONNÉES UNIT 5 — Terminologie informatique ────────────────────────────────
window.UNIT = {
  unit: 'UNIT 5',
  title: 'TERMINOLOGIE INFORMATIQUE',
  img: 'images/terminology.png',
  exercises: [
    {
      title: 'TERME → DÉFINITION',
      desc: 'Associez chaque terme informatique à sa définition anglaise.',
      tags: ['matching', 'vocabulaire'],
      init: initTermMatching,
    },
    {
      title: 'QUEL TERME ?',
      desc: 'Retrouvez le terme informatique à partir de sa définition.',
      tags: ['MCQ', 'vocabulaire'],
      init: initTermMCQ,
    },
  ],
};
