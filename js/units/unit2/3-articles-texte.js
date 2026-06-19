// ── UNIT 2 · Exercice 3 — Articles dans un texte (fill-in) ────────────────────

function initArticlesFill(container, onBack) {
  const passage = [
    { sentence: 'To reach someone overseas, ___ call is switched to ___ international exchange.', answers: ['the', 'an'] },
    { sentence: 'The call is routed through ___ undersea cable or converted to ___ microwave signal.', answers: ['an', 'a'] },
    { sentence: "___ signal is bounced off ___ communication satellite above Earth's atmosphere.", answers: ['The', 'a'] },
    { sentence: '___ people in different countries may speak different languages.', answers: ['∅'] },
    { sentence: 'The standards cover ___ telephone, ___ telegraph, and ___ data transmission.', answers: ['∅', '∅', '∅'] },
  ];

  const questions = passage.map(p => ({
    sentence: p.sentence.replaceAll('___', '___'),
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
