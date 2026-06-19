// ── DONNÉES UNIT 4 — Composants de l'ordinateur ───────────────────────────────
window.UNIT = {
  unit: 'UNIT 4',
  title: 'COMPOSANTS DE L\'ORDINATEUR',
  img: 'images/PartsOfAComputer.png',
  exercises: [
    {
      title: 'COMPOSANTS — NOMS',
      desc: 'Associez chaque composant à sa description.',
      tags: ['matching', 'hardware'],
      init: initPartsMatch,
    },
    {
      title: 'SYSTÈME INFORMATIQUE',
      desc: 'Associez composants et définitions du système informatique.',
      tags: ['matching', 'CPU', 'RAM', 'I/O'],
      init: initSystemMatch,
    },
    {
      title: 'VERBES — TRADUCTIONS',
      desc: 'Choisissez la bonne traduction française du verbe informatique.',
      tags: ['MCQ', 'verbes', 'traductions'],
      init: initVerbMCQ,
    },
    {
      title: 'VERBES ANTONYMES',
      desc: 'Associez chaque verbe à son antonyme.',
      tags: ['matching', 'antonymes'],
      init: initAntonyms,
    },
    {
      title: 'VERBES D\'INSTRUCTION',
      desc: 'Associez les verbes d\'instruction à leur traduction.',
      tags: ['matching', 'instructions'],
      init: initInstrVerbs,
    },
    {
      title: 'REMETTRE EN ORDRE',
      desc: 'Remettez les étapes d\'installation dans le bon ordre.',
      tags: ['ordering', 'instructions'],
      init: initReorder,
    },
  ],
};
