// ── UNIT 1 · Exercice 3 — Expression du temps et de la durée ──────────────────
// Content extracted from: 182-Preterite_Present_Perfect (durée for/since/ago).
// Dépend de TENSES_LEXICON, TENSES_VERBS (voir shared.js).

const EXPERT_TREE_TIME = {
  q: "Est-ce une durée qui est principalement exprimée ?",
  hint: "Durée : il y a dix ans que… / cela fait une semaine que… / depuis deux mois / pendant un an\nPoint de départ : depuis l'an dernier / depuis 1980",
  options: [
    { label: "Oui, c'est une durée", next: {
      q: "Est-ce que la chose envisagée est terminée aujourd'hui ?",
      hint: "Ex : Il a été malade pendant un an (il est guéri maintenant).\npar opposition à quelque chose qui dure encore : Je vis à Londres depuis des mois.",
      options: [
        { label: "Oui, c'est terminé",
          next: { conclusion: 'preterite', example: 'He was ill for a year' } },
        { label: "Non, ce n'est pas terminé", next: {
          q: "L'action envisagée continue-t-elle aujourd'hui ?",
          options: [
            { label: "Oui, elle continue",
              next: { conclusion: 'present_perfect', example: 'I have been living in London for a year' } },
            { label: "Non, c'est terminé",
              next: { conclusion: 'preterite', example: 'He was ill for a year' } },
          ],
        }},
        { label: "Oui, terminé avant un autre événement du passé",
          next: { conclusion: 'past_perfect', example: 'I had been living in London for ten months when we met\nI had not seen him for weeks when he turned up' } },
      ],
    }},
    { label: "Non, c'est un point de départ", next: {
      q: "L'action envisagée continue-t-elle aujourd'hui ?",
      options: [
        { label: "Oui, elle continue",
          next: { conclusion: 'present_perfect', example: 'He has been working on this project since June 84\nI have not seen him since he left' } },
        { label: "Non, c'est terminé",
          next: { conclusion: 'preterite', example: 'I lived in London ten years ago' } },
      ],
    }},
  ],
};

const EXPRESSION_SENTENCES_2 = [
  { fr: "Je vivais à Londres depuis deux semaines quand je l'ai rencontrée", tense: 'past_perfect', en: "I had been living in London for two weeks when I met her" },
  { fr: "Je travaille à Detroit depuis 1960", tense: 'present_perfect', en: "I have been working in Detroit since 1960" },
  { fr: "J'étais à New York il y a deux jours", tense: 'preterite', en: "I was in New York two days ago" },
  { fr: "Je ne mange pas depuis trois jours", tense: 'present_perfect', en: "I have not been eating for three days" },
  { fr: "J'habite en France depuis l'an dernier", tense: 'present_perfect', en: "I have been living in France since last year" },
  { fr: "J'ai vécu en Tanzanie pendant huit années", tense: 'preterite', en: "I lived in Tanzania for eight years" },
  { fr: "Je le cherchais depuis dix jours quand il a téléphoné", tense: 'past_perfect', en: "I had been looking for him for ten days when he phoned" },
  { fr: "J'attendais depuis deux heures quand il est arrivé", tense: 'past_perfect', en: "I had been waiting for two hours when he arrived" },
  { fr: "Je suis marié depuis cinq ans", tense: 'present_perfect', en: "I have been married for five years" },
  { fr: "Je ne suis pas allé au Mexique depuis que j'ai eu mon accident", tense: 'present_perfect', en: "I have not been to Mexico since I had my accident" },
  { fr: "Je ne mange pas de viande depuis que j'ai vu ce film", tense: 'present_perfect', en: "I have not eaten meat since I saw that film" },
  { fr: "Je vis ici depuis dix ans", tense: 'present_perfect', en: "I have been living here for ten years" },
  { fr: "Il a été professeur pendant cinq ans", tense: 'preterite', en: "He was a teacher for five years" },
];

function initTenseExpression2(container, onBack) {
  runTranslation(container, {
    unit: 'UNIT 1 — PRÉTÉRIT & PRESENT PERFECT',
    title: 'EXPRESSION DU TEMPS ET DE LA DURÉE',
    sentences: EXPRESSION_SENTENCES_2,
    lexicon: TENSES_LEXICON,
    irregVerbs: TENSES_VERBS,
    tenses: [
      { id: 'preterite', label: 'Prétérit (Simple Past)' },
      { id: 'present_perfect', label: 'Present Perfect' },
      { id: 'past_perfect', label: 'Past Perfect' },
    ],
    expertTree: EXPERT_TREE_TIME,
    onBack,
  });
}
