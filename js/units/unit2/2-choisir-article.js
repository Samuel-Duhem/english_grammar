// ── UNIT 2 · Exercice 2 — Choisissez l'article (MCQ) ──────────────────────────
// Content extracted from: 183-Articles/Section_4/TESTART.TBK

const ARTICLE_QUESTIONS = [
  {
    q: 'Pass me ___ MILK please.',
    options: [
      { text: 'the', correct: true },
      { text: 'a', correct: false },
      { text: 'an', correct: false },
      { text: '∅ (no article)', correct: false },
    ],
    hint: '"the milk" refers to a specific milk already known to both speakers.',
  },
  {
    q: '___ CIGARETTE is dangerous for your health.',
    options: [
      { text: 'The', correct: true },
      { text: 'A', correct: false },
      { text: 'An', correct: false },
      { text: '∅ (no article)', correct: false },
    ],
    hint: '"The cigarette" generalises the concept (= cigarettes in general).',
  },
  {
    q: '___ UNITED STATES has refused to sign the treaty.',
    options: [
      { text: 'The', correct: true },
      { text: 'A', correct: false },
      { text: 'An', correct: false },
      { text: '∅ (no article)', correct: false },
    ],
    hint: 'Countries with "States", "Kingdom", "Republic" take "the".',
  },
  {
    q: 'He swam across ___ CHANNEL.',
    options: [
      { text: 'the', correct: true },
      { text: 'a', correct: false },
      { text: 'an', correct: false },
      { text: '∅ (no article)', correct: false },
    ],
    hint: 'Geographic features (seas, channels) take "the".',
  },
  {
    q: 'I love ___ COMPUTERS.',
    options: [
      { text: '∅ (no article)', correct: true },
      { text: 'the', correct: false },
      { text: 'a', correct: false },
      { text: 'an', correct: false },
    ],
    hint: 'General plural uncountable: "I love computers" (no article).',
  },
  {
    q: '___ MOUNT COOK is in New Zealand.',
    options: [
      { text: '∅ (no article)', correct: true },
      { text: 'The', correct: false },
      { text: 'A', correct: false },
      { text: 'An', correct: false },
    ],
    hint: 'Proper nouns (mountain names) take no article.',
  },
  {
    q: 'He cannot bear ___ ALCOHOL.',
    options: [
      { text: '∅ (no article)', correct: true },
      { text: 'the', correct: false },
      { text: 'a', correct: false },
      { text: 'an', correct: false },
    ],
    hint: 'Uncountable nouns in general statements take no article.',
  },
  {
    q: 'John is at ___ UNIVERSITY.',
    options: [
      { text: '∅ (no article)', correct: true },
      { text: 'the', correct: false },
      { text: 'a', correct: false },
      { text: 'an', correct: false },
    ],
    hint: '"At university / at school / at church" — institutions used for their primary purpose take no article.',
  },
  {
    q: 'They had ___ BREAKFAST at half past eight.',
    options: [
      { text: '∅ (no article)', correct: true },
      { text: 'the', correct: false },
      { text: 'a', correct: false },
      { text: 'an', correct: false },
    ],
    hint: 'Meals without a modifier take no article (have breakfast, have lunch).',
  },
  {
    q: 'Did you remove ___ BUGS he found?',
    options: [
      { text: 'the', correct: true },
      { text: 'a', correct: false },
      { text: '∅ (no article)', correct: false },
      { text: 'some', correct: false },
    ],
    hint: '"The bugs" — previously mentioned specific items use "the".',
  },
  {
    q: 'There are ___ BUGS in this program.',
    options: [
      { text: '∅ (no article)', correct: true },
      { text: 'the', correct: false },
      { text: 'a', correct: false },
      { text: 'an', correct: false },
    ],
    hint: 'First mention of unspecified plural: no article (or "some").',
  },
  {
    q: 'Programming requires ___ PATIENCE.',
    options: [
      { text: '∅ (no article)', correct: true },
      { text: 'the', correct: false },
      { text: 'a', correct: false },
      { text: 'an', correct: false },
    ],
    hint: 'Abstract uncountable nouns in general statements: no article.',
  },
];

function initArticlesMCQ(container, onBack) {
  const questions = ARTICLE_QUESTIONS.map(q => ({
    q: q.q,
    options: q.options,
  }));
  runMCQ(container, {
    unit: 'UNIT 2 — ARTICLES',
    title: "CHOISISSEZ L'ARTICLE",
    questions,
    onBack,
  });
}
