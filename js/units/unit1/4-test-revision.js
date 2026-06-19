// ── UNIT 1 · Exercice 4 — Test de révision ────────────────────────────────────
// Dépend de TENSES_LEXICON, TENSES_VERBS (voir shared.js).

const BIG_TEST_SENTENCES = [
  { fr: "Les transistors ont remplacé les tubes à vide", tense: 'present_perfect', en: "Transistors have replaced vacuum tubes" },
  { fr: "Le premier ordinateur fut construit en 1942", tense: 'preterite', en: "The first computer was built in 1942" },
  { fr: "J'ai acheté une imprimante à jet d'encre la semaine dernière", tense: 'preterite', en: "I bought an ink-jet printer last week" },
  { fr: "Il ne parle pas à son ordinateur depuis ce jour-là", tense: 'present_perfect', en: "He has not spoken to his computer since that day" },
  { fr: "Il entrait des données depuis trois jours quand le système tomba en panne", tense: 'past_perfect', en: "He had been inputting data for three days when the system crashed" },
  { fr: "Il a été informaticien pendant quarante ans", tense: 'preterite', en: "He was a computer scientist for forty years" },
  { fr: "J'ai envoyé un Mél il y a deux jours", tense: 'preterite', en: "I sent an e-mail two days ago" },
  { fr: "J'ai trouvé un nouveau bogue cette semaine", tense: 'present_perfect', en: "I have found a new bug this week" },
  { fr: "Les ordinateurs ont subi de nombreuses transformations depuis 1942", tense: 'present_perfect', en: "Computers have undergone many transformations since 1942" },
  { fr: "Il attendait un système d'exploitation universel depuis dix ans lorsque Java fut créé", tense: 'past_perfect', en: "He had been waiting for a universal operating system for ten years when Java was created" },
  { fr: "Le code ASCII est utilisé depuis le début des années soixante", tense: 'present_perfect', en: "The ASCII code has been used since the beginning of the sixties" },
];

function initBigTest(container, onBack) {
  runTest(container, {
    unit: 'UNIT 1 — PRÉTÉRIT & PRESENT PERFECT',
    title: 'TEST DE RÉVISION',
    sentences: BIG_TEST_SENTENCES,
    lexicon: TENSES_LEXICON,
    irregVerbs: TENSES_VERBS,
    tenses: [
      { id: 'preterite', label: 'Prétérit (Simple Past)' },
      { id: 'present_perfect', label: 'Present Perfect' },
      { id: 'past_perfect', label: 'Past Perfect' },
    ],
    onBack,
  });
}
