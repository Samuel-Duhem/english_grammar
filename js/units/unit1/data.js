// ── DONNÉES UNIT 1 — Prétérit & Present Perfect ───────────────────────────────
// Chargé APRÈS les fichiers d'exercices : les fonctions init sont disponibles ici.
window.UNIT = {
  unit: 'UNIT 1',
  title: 'PRÉTÉRIT & PRESENT PERFECT',
  img: 'images/PreteriteAndPresentPerfect2.png',
  exercises: [
    {
      title: 'CHOISISSEZ LA BONNE TRADUCTION',
      desc: 'Associez chaque phrase française à sa traduction anglaise correcte — prétérit ou present perfect.',
      tags: ['prétérit', 'present perfect', 'traduction'],
      init: initTenses,
    },
    {
      title: 'TRADUIRE EN ANGLAIS',
      desc: 'Choisissez le temps puis tapez la traduction. Correction mot par mot, 4 essais. Aide : Expert, Lexique, Verbes irréguliers.',
      tags: ['traduction', 'prétérit', 'present perfect', 'saisie libre'],
      init: initTenseChoice,
    },
    {
      title: 'EXPRESSION DU TEMPS ET DE LA DURÉE',
      desc: 'Prétérit, present perfect ou past perfect ? Choisissez le temps et traduisez 13 phrases sur for / since / ago.',
      tags: ['traduction', 'durée', 'for', 'since', 'ago', 'past perfect'],
      init: initTenseExpression2,
    },
    {
      title: 'TEST DE RÉVISION',
      desc: '11 phrases de révision complète — prétérit, present perfect et past perfect. Correction mot par mot, 4 essais.',
      tags: ['test', 'révision', 'prétérit', 'present perfect', 'past perfect'],
      init: initBigTest,
    },
    {
      title: 'LONDON TOWERS',
      desc: 'Classez 15 verbes réguliers selon la prononciation de leur terminaison -ed : [t], [d] ou [id].',
      tags: ['prononciation', '-ed', '[t]', '[d]', '[id]', 'classification'],
      init: initLondonTowers,
    },
  ],
};
