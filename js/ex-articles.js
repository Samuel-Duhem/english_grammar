// ── ARTICLES ──────────────────────────────────────────────────────────────────
// Content extracted from: 183-Articles/Section_4/TESTART.TBK & Section_1/Countable.tbk

// Choose the correct article (A / AN / THE / ∅) for the highlighted word
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

// Countable / Uncountable classification
const COUNTABLE_ITEMS = [
  { word: 'software (a program)', correct: 'countable', hint: 'We say "a software program" or "a piece of software".' },
  { word: 'information', correct: 'uncountable', hint: '"Information" is uncountable. Use "a piece of information".' },
  { word: 'an interface', correct: 'countable', hint: 'An interface is countable: "an interface", "two interfaces".' },
  { word: 'computing', correct: 'uncountable', hint: '"Computing" as a field is uncountable.' },
  { word: 'a browser', correct: 'countable', hint: '"A browser", "two browsers" — countable.' },
  { word: 'intelligence', correct: 'uncountable', hint: '"Intelligence" is an abstract uncountable noun.' },
  { word: 'a library', correct: 'countable', hint: '"A library", "several libraries" — countable.' },
  { word: 'programming', correct: 'uncountable', hint: '"Programming" as a general concept is uncountable.' },
  { word: 'a database', correct: 'countable', hint: '"A database", "multiple databases" — countable.' },
  { word: 'cyberspace', correct: 'uncountable', hint: '"Cyberspace" is uncountable (like "space").' },
];

function initArticlesMCQ(container, onBack) {
  const questions = ARTICLE_QUESTIONS.map(q => ({
    q: q.q,
    options: q.options,
  }));
  runMCQ(container, {
    unit: 'UNIT 2 — ARTICLES',
    title: 'CHOISISSEZ L\'ARTICLE',
    questions,
    onBack,
  });
}

function initCountable(container, onBack) {
  container.innerHTML = '';
  buildExHdr(container, 'UNIT 2 — ARTICLES', 'COUNTABLE / UNCOUNTABLE', onBack);
  const body = document.createElement('div');
  body.className = 'ex-body';
  container.appendChild(body);

  const items = exShuffle([...COUNTABLE_ITEMS]);
  let idx = 0, score = 0;

  function render() {
    if (idx >= items.length) {
      showExScore(body, score, items.length, onBack, () => { idx = 0; score = 0; render(); });
      return;
    }
    const item = items[idx];
    body.innerHTML = `
      <div class="ex-progress">
        <span class="ex-q-label">Q ${idx + 1}/${items.length}</span>
        <div class="ex-progress-bar"><div class="ex-progress-fill" style="width:${(idx / items.length) * 100}%"></div></div>
        <span class="ex-q-label">✓ ${score}</span>
      </div>
      <div class="ex-question">Ce nom est-il dénombrable (countable) ou indénombrable (uncountable) ?</div>
      <div class="ex-term-display">${exEsc(item.word)}</div>
      <div class="ex-options">
        <div class="ex-option" data-val="countable">Countable — peut prendre A/AN</div>
        <div class="ex-option" data-val="uncountable">Uncountable — pas d'article indéfini</div>
      </div>
      <div class="ex-hint" id="hint-text" style="display:none">${exEsc(item.hint)}</div>
      <button class="ex-next-btn" id="ex-next">Suivant →</button>`;

    body.querySelectorAll('.ex-option').forEach(el => {
      el.addEventListener('click', () => {
        if (el.classList.contains('disabled')) return;
        const isOk = el.dataset.val === item.correct;
        if (isOk) score++;
        body.querySelectorAll('.ex-option').forEach(o => {
          o.classList.add('disabled');
          if (o.dataset.val === item.correct) o.classList.add('correct');
          else if (o === el) o.classList.add('wrong');
        });
        body.querySelector('#hint-text').style.display = '';
        body.querySelector('#ex-next').classList.add('visible');
      });
    });
    body.querySelector('#ex-next').addEventListener('click', () => { idx++; render(); });
  }
  render();
}

function initArticlesFill(container, onBack) {
  // Fill-in the blanks with A / AN / THE / ∅ in a real passage
  const passage = [
    { sentence: 'To reach someone overseas, ___ call is switched to ___ international exchange.', answers: ['the', 'an'] },
    { sentence: 'The call is routed through ___ undersea cable or converted to ___ microwave signal.', answers: ['an', 'a'] },
    { sentence: '___ signal is bounced off ___ communication satellite above Earth\'s atmosphere.', answers: ['The', 'a'] },
    { sentence: '___ people in different countries may speak different languages.', answers: ['∅'] },
    { sentence: 'The standards cover ___ telephone, ___ telegraph, and ___ data transmission.', answers: ['∅', '∅', '∅'] },
  ];

  const questions = passage.map(p => ({
    sentence: p.sentence.replace(/___/g, '___'),
    answer: p.answers[0],
    options: exShuffle(['a', 'an', 'the', '∅']),
  }));

  runFillBlank(container, {
    unit: 'UNIT 2 — ARTICLES',
    title: 'ARTICLES DANS UN TEXTE',
    questions,
    onBack,
  });
}
