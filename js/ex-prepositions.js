// ── PRÉPOSITIONS (COMPUTING) ───────────────────────────────────────────────────
// Content extracted from:
//   187-Prepositions_Computing/Section_4/Fill_in_the_blanks.tbk
//   187-Prepositions_Computing/Section_3/PREPOSCERTAINVERBS.TBK
//   187-Prepositions_Computing/Section_2/Prepositionsoftime.tbk

// Exercise 1 — Fill in the blank with the right preposition
const PREP_FILL_QUESTIONS = [
  {
    sentence: 'To connect ___ the internet, you need a modem.',
    answer: 'to',
    options: ['to', 'into', 'from', 'onto'],
  },
  {
    sentence: 'Insert the installation disk ___ your computer\'s floppy disk drive.',
    answer: 'into',
    options: ['into', 'to', 'onto', 'from'],
  },
  {
    sentence: 'These variables have their values pushed ___ the stack.',
    answer: 'onto',
    options: ['onto', 'into', 'to', 'from'],
  },
  {
    sentence: 'The scroll bar allows you to scroll ___ and ___ the text.',
    answers: ['up', 'down'],
    options: ['up', 'down', 'across', 'through'],
  },
  {
    sentence: 'Remove all elements ___ the list.',
    answer: 'from',
    options: ['from', 'into', 'to', 'onto'],
  },
  {
    sentence: 'Split the index file ___ multiple files.',
    answer: 'into',
    options: ['into', 'from', 'to', 'across'],
  },
  {
    sentence: 'A servant must not retain a reference ___ the lifetime of a method invocation.',
    answer: 'beyond',
    options: ['beyond', 'within', 'during', 'before'],
  },
  {
    sentence: 'The application must not attempt to read ___ the array outside of the specified range.',
    answer: 'from',
    options: ['from', 'into', 'onto', 'to'],
  },
  {
    sentence: 'It is important to make your application portable ___ platforms.',
    answer: 'across',
    options: ['across', 'between', 'through', 'along'],
  },
  {
    sentence: 'The method must not return ___ parsing is complete.',
    answer: 'until',
    options: ['until', 'before', 'after', 'when'],
  },
];

// Exercise 2 — Verb + Preposition matching
const VERB_PREP_PAIRS = [
  { left: 'to append', right: 'to' },
  { left: 'to apply', right: 'to' },
  { left: 'to assign', right: 'to' },
  { left: 'to compare', right: 'with' },
  { left: 'to depend', right: 'on' },
  { left: 'to extract', right: 'from' },
  { left: 'to inherit', right: 'from' },
  { left: 'to prevent', right: 'from' },
  { left: 'to prompt', right: 'for' },
  { left: 'to refer', right: 'to' },
  { left: 'to rely', right: 'on' },
  { left: 'to remove', right: 'from' },
  { left: 'to result', right: 'in' },
  { left: 'to succeed', right: 'in' },
  { left: 'to wait', right: 'for' },
  { left: 'to differ', right: 'in' },
  { left: 'to limit', right: 'to' },
  { left: 'to point', right: 'to' },
  { left: 'to conform', right: 'to' },
  { left: 'to convert', right: 'into' },
  { left: 'to divide', right: 'by' },
  { left: 'to forward', right: 'to' },
  { left: 'to initialize', right: 'to' },
  { left: 'to link', right: 'to' },
  { left: 'to load / download', right: 'into' },
  { left: 'to relate', right: 'to' },
  { left: 'to select', right: 'from' },
];

// Exercise 3 — Prepositions of time (EN → FR matching)
const PREP_TIME_PAIRS = [
  { left: 'at (a precise time)', right: 'à (heure précise)' },
  { left: 'in (month / year / season)', right: 'en (mois / année / saison)' },
  { left: 'on (a day / date)', right: 'le (jour / date)' },
  { left: 'for (duration)', right: 'pendant / depuis' },
  { left: 'since (starting point)', right: 'depuis (point de départ)' },
  { left: 'during (within a period)', right: 'au cours de' },
  { left: 'before', right: 'avant que / avant' },
  { left: 'after', right: 'après' },
  { left: 'until / till', right: "jusqu'à" },
  { left: 'once (as soon as)', right: 'une fois que' },
  { left: 'immediately', right: 'tout de suite' },
];

function initPrepFill(container, onBack) {
  runFillBlank(container, {
    unit: 'UNIT 3 — PRÉPOSITIONS',
    title: 'FILL IN THE BLANKS',
    questions: PREP_FILL_QUESTIONS,
    onBack,
  });
}

function initVerbPrep(container, onBack) {
  // Split into groups of 8 for display
  const subset = exShuffle([...VERB_PREP_PAIRS]).slice(0, 8);
  runMatching(container, {
    unit: 'UNIT 3 — PRÉPOSITIONS',
    title: 'VERBE + PRÉPOSITION',
    pairs: subset,
    onBack,
  });
}

function initPrepTime(container, onBack) {
  const subset = exShuffle([...PREP_TIME_PAIRS]).slice(0, 8);
  runMatching(container, {
    unit: 'UNIT 3 — PRÉPOSITIONS',
    title: 'PRÉPOSITIONS DE TEMPS',
    pairs: subset,
    onBack,
  });
}
