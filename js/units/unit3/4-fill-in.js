// ── UNIT 3 · Exercice 4 — Fill in the blanks ──────────────────────────────────
// Content extracted from: 187-Prepositions_Computing/Section_4/Fill_in_the_blanks.tbk

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

function initPrepFill(container, onBack) {
  runFillBlank(container, {
    unit: 'UNIT 3 — PRÉPOSITIONS',
    title: 'FILL IN THE BLANKS',
    questions: PREP_FILL_QUESTIONS,
    onBack,
  });
}
