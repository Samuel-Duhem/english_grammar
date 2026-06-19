// ── UNIT 1 · Exercice 2 — Traduire en anglais (saisie libre) ──────────────────
// Content extracted from: 182-Preterite_Present_Perfect/Section_2/EXPTPS2.TBK
// Dépend de TENSES_LEXICON, TENSES_VERBS (voir shared.js).

const EXPRESSION_SENTENCES = [
  {
    fr: 'Il a été programmeur pendant trois ans puis il a démissionné.',
    tense: 'preterite',
    en: 'He was a programmer for three years then he resigned.',
    why: 'Action terminée dans une période écoulée → Prétérit.',
  },
  {
    fr: 'Nous fabriquons des ordinateurs depuis dix ans.',
    tense: 'present_perfect',
    en: 'We have manufactured computers for ten years.',
    why: '"Depuis" + action qui continue jusqu\'au présent → Present Perfect.',
  },
  {
    fr: "Un nouveau type d'ordinateur a été introduit cette année.",
    tense: 'present_perfect',
    en: 'A new type of computer has been introduced this year.',
    why: '"Cette année" n\'est pas encore terminée → Present Perfect.',
  },
  {
    fr: 'Hier soir, il a laissé ses disquettes près du téléphone.',
    tense: 'preterite',
    en: 'Last night, he left his floppies near the phone.',
    why: '"Hier soir" est une indication temporelle précise → Prétérit.',
  },
  {
    fr: "Combien de temps l'imprimante est-elle restée en marche ?",
    tense: 'present_perfect',
    en: 'How long has the printer been left on?',
    why: 'Durée en lien avec le présent → Present Perfect.',
  },
  {
    fr: "L'ordinateur a été inventé au siècle dernier.",
    tense: 'preterite',
    en: 'The computer was invented last century.',
    why: '"Au siècle dernier" est une période révolue et précise → Prétérit.',
  },
  {
    fr: "J'ai étudié l'informatique.",
    tense: 'present_perfect',
    en: 'I have studied computer science.',
    why: 'Résultat toujours pertinent aujourd\'hui → Present Perfect.',
  },
  {
    fr: "Je n'ai pas utilisé le réseau.",
    tense: 'present_perfect',
    en: 'I have not used the network.',
    why: 'État toujours vrai au moment où je parle → Present Perfect.',
  },
  {
    fr: "J'ai installé un antivirus en mai.",
    tense: 'preterite',
    en: 'I installed an antivirus program in May.',
    why: '"En mai" est une indication temporelle précise → Prétérit.',
  },
  {
    fr: "J'ai acheté une imprimante.",
    tense: 'present_perfect',
    en: 'I have bought a printer.',
    why: "L'imprimante est encore là, l'action reste pertinente → Present Perfect.",
  },
];

function initTenseChoice(container, onBack) {
  runTranslation(container, {
    unit: 'UNIT 1 — PRÉTÉRIT & PRESENT PERFECT',
    title: 'TRADUIRE EN ANGLAIS',
    sentences: EXPRESSION_SENTENCES,
    lexicon: TENSES_LEXICON,
    irregVerbs: TENSES_VERBS,
    onBack,
  });
}
