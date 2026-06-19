// ── DONNÉES UNIT 2 — Les articles ─────────────────────────────────────────────
window.UNIT = {
  unit: 'UNIT 2',
  title: 'LES ARTICLES',
  img: 'images/Articles.png',
  exercises: [
    {
      title: 'COUNTABLE / UNCOUNTABLE',
      desc: 'Classez les noms selon qu\'ils sont dénombrables ou non.',
      tags: ['countable', 'uncountable'],
      init: initCountable,
    },
    {
      title: 'CHOISISSEZ L\'ARTICLE',
      desc: 'Sélectionnez A / AN / THE ou ∅ pour chaque phrase.',
      tags: ['A', 'AN', 'THE', '∅', 'MCQ'],
      init: initArticlesMCQ,
    },
    {
      title: 'ARTICLES DANS UN TEXTE',
      desc: 'Complétez les blancs avec le bon article dans un texte télécoms.',
      tags: ['fill-in', 'texte', 'A/AN/THE'],
      init: initArticlesFill,
    },
  ],
};
