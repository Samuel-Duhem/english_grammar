// ── UNIT 1 · Exercice 1 — Choisissez la bonne traduction (MCQ) ─────────────────
// Content extracted from: 182-Preterite_Present_Perfect/Section_1/MATCHTPS.TBK

const TENSES_QUESTIONS = [
  {
    q: 'Le premier circuit intégré fut créé en 1959.',
    options: [
      { text: 'The first integrated circuit was created in 1959.', correct: true },
      { text: 'The first integrated circuit has been created in 1959.', correct: false },
    ],
  },
  {
    q: 'Nous programmons en Cobol depuis 1960.',
    options: [
      { text: 'We have been writing programs in Cobol since 1960.', correct: true },
      { text: 'We write programs in Cobol since 1960.', correct: false },
    ],
  },
  {
    q: "Aujourd'hui le PC est tombé en panne 2 fois.",
    options: [
      { text: 'Today the PC has crashed twice.', correct: true },
      { text: 'Today the PC crashed twice.', correct: false },
    ],
  },
  {
    q: 'Il travaille dans la Silicon Valley depuis dix ans.',
    options: [
      { text: 'He has been working in Silicon Valley for ten years.', correct: true },
      { text: 'He has worked in Silicon Valley since ten years.', correct: false },
    ],
  },
  {
    q: "L'ordinateur a traité des données pendant huit heures.",
    options: [
      { text: 'The computer processed data for eight hours.', correct: true },
      { text: 'The computer has processed data for eight hours.', correct: false },
    ],
  },
  {
    q: "J'ai changé mon mot de passe la semaine dernière.",
    options: [
      { text: 'I changed my password last week.', correct: true },
      { text: 'I have changed my password last week.', correct: false },
    ],
  },
  {
    q: 'Java a été introduit en 1995.',
    options: [
      { text: 'Java was introduced in 1995.', correct: true },
      { text: 'Java has been introduced in 1995.', correct: false },
    ],
  },
  {
    q: 'Depuis combien de temps est-il connecté ?',
    options: [
      { text: 'How long has he been connected for?', correct: true },
      { text: 'How long is he connected for?', correct: false },
    ],
  },
];

function initTenses(container, onBack) {
  runMCQ(container, {
    unit: 'UNIT 1 — PRÉTÉRIT & PRESENT PERFECT',
    title: 'CHOISISSEZ LA BONNE TRADUCTION',
    questions: TENSES_QUESTIONS,
    help: 'Associez chaque phrase française à sa traduction anglaise correcte parmi les deux propositions. Cliquez sur la traduction de votre choix.',
    onBack,
  });
}
