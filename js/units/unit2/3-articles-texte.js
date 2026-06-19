// ── UNIT 2 · Exercice 3 — Articles dans un texte (THE RIGHT ARTICLE) ──────────
// Content extracted from: 183-Articles/Section_3/arti.tbk
// Texte télécom intégral, 24 trous. Chaque trou est un menu déroulant
// (— / the / a / an / ∅) ; le bouton « Vérifier » corrige tout le texte.

// Le passage : segments de texte fixes (t) et trous (gap = bonne réponse).
// cap = true → afficher l'article avec une majuscule (début de phrase).
const ARTICLE_PASSAGE = [
  { t: 'To reach someone ' }, { gap: '∅' },
  { t: ' overseas, ' }, { gap: 'the' },
  { t: ' call is switched to ' }, { gap: 'an' },
  { t: ' international exchange where ' }, { gap: 'the' },
  { t: ' call is either routed through ' }, { gap: 'an' },
  { t: ' undersea cable or converted to ' }, { gap: 'a' },
  { t: ' microwave signal. ' }, { gap: 'the', cap: true },
  { t: ' signal is bounced off ' }, { gap: 'a' },
  { t: ' communication satellite above earth’s atmosphere and relayed to ' }, { gap: 'the' },
  { t: ' destination where ' }, { gap: 'the' },
  { t: ' microwave signal is modulated back into ' }, { gap: 'an' },
  { t: ' electromagnetic signal. But just as ' }, { gap: '∅' },
  { t: ' people in ' }, { gap: '∅' },
  { t: ' different countries may speak ' }, { gap: '∅' },
  { t: ' different languages, ' }, { gap: 'the' },
  { t: ' potential exists for those countries’ communications networks to speak ' }, { gap: '∅' },
  { t: ' different electronic languages – particularly for ' }, { gap: '∅' },
  { t: ' data transmissions. To get the nations’ telecommunications networks speaking ' }, { gap: 'the' },
  { t: ' same electronic language, the International Telecommunication Union (ITU) has established ' }, { gap: 'the' },
  { t: ' CCITT, ' }, { gap: 'an' },
  { t: ' international committee that promotes ' }, { gap: 'the' },
  { t: ' standards for ' }, { gap: '∅' },
  { t: ' telephone, ' }, { gap: '∅' },
  { t: ' telegraph, and ' }, { gap: '∅' },
  { t: ' data transmission.' },
];

const ARTICLE_OPTIONS = ['the', 'a', 'an', '∅'];

function artInjectStyle() {
  if (document.getElementById('art-style')) return;
  const st = document.createElement('style');
  st.id = 'art-style';
  st.textContent = `
    .art-text{background:var(--blue-light,#e0f0f5);border:1.5px solid var(--blue-mid,#b8d8e5);
      border-radius:8px;padding:16px 18px;line-height:2.6;font-weight:600;
      color:var(--blue-dark,#004f6e);font-size:.98rem}
    .art-sel{font-size:.86rem;font-weight:700;padding:2px 4px;margin:0 2px;border-radius:5px;
      border:1.5px solid var(--blue-mid,#b8d8e5);background:#fff;color:var(--blue,#006489);
      cursor:pointer;vertical-align:baseline}
    .art-sel.correct{border-color:#27ae60;background:#e9f9ec;color:#14532d}
    .art-sel.wrong{border-color:#c0392b;background:#fdecea;color:#c0392b}
    .art-footer{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin-top:14px}
    .art-score{font-weight:700;color:var(--blue,#2f5d8a)}
    .art-score.bad{color:#c0392b}
    .art-score.done{color:#27ae60}
  `;
  document.head.appendChild(st);
}

function initArticlesFill(container, onBack) {
  artInjectStyle();
  container.innerHTML = '';

  buildExHdr(container, 'UNIT 2 — ARTICLES', 'ARTICLES DANS UN TEXTE', onBack, artShowHelp);

  const body = document.createElement('div');
  body.className = 'ex-body';
  container.appendChild(body);

  const total = ARTICLE_PASSAGE.filter(s => s.gap !== undefined).length;

  body.innerHTML = `
    <p style="margin:0 0 12px;color:#555;font-size:.9rem">
      Choisissez le bon article dans chaque menu déroulant, puis cliquez sur <strong>Vérifier</strong>.
      Certains blancs n'attendent <em>aucun</em> article : choisissez <strong>∅</strong>.</p>
    <div class="art-text" id="art-text"></div>
    <div class="art-footer">
      <button class="ex-card-btn" id="art-check">Vérifier →</button>
      <button class="back-btn" id="art-reset" style="color:var(--blue);border-color:var(--blue)">Reset</button>
      <span class="art-score" id="art-sc">— / ${total}</span>
    </div>`;

  // ── rendu du texte avec un <select> par trou ──
  const textEl = body.querySelector('#art-text');
  ARTICLE_PASSAGE.forEach(seg => {
    if (seg.gap !== undefined) {
      const sel = document.createElement('select');
      sel.className = 'art-sel';
      sel.dataset.answer = seg.gap;
      sel.innerHTML = '<option value="">—</option>' +
        ARTICLE_OPTIONS.map(o => `<option value="${o}">${o}</option>`).join('');
      sel.addEventListener('change', () => sel.classList.remove('correct', 'wrong'));
      textEl.appendChild(sel);
    } else {
      textEl.appendChild(document.createTextNode(seg.t));
    }
  });

  const scEl = body.querySelector('#art-sc');

  body.querySelector('#art-check').addEventListener('click', () => {
    let correct = 0;
    textEl.querySelectorAll('.art-sel').forEach(sel => {
      sel.classList.remove('correct', 'wrong');
      if (!sel.value) return;                       // laissé sur «—» : non corrigé
      if (sel.value === sel.dataset.answer) { sel.classList.add('correct'); correct++; }
      else sel.classList.add('wrong');
    });
    scEl.textContent = `${correct} / ${total}`;
    scEl.className = 'art-score' + (correct === total ? ' done' : ' bad');
  });

  body.querySelector('#art-reset').addEventListener('click', () => {
    textEl.querySelectorAll('.art-sel').forEach(sel => {
      sel.value = ''; sel.classList.remove('correct', 'wrong');
    });
    scEl.textContent = `— / ${total}`;
    scEl.className = 'art-score';
  });
}

// ── BOUTON D'AIDE : règles d'emploi des articles ──────────────────────────────
function artShowHelp() {
  const ov = document.createElement('div');
  ov.className = 'ex-expert-overlay';
  ov.innerHTML = `
    <div class="ex-expert-modal" style="max-width:600px">
      <div class="ex-expert-hdr"><span>The right article — règles</span><button class="ex-expert-close">✕</button></div>
      <div class="ex-expert-body" style="font-size:.9rem;line-height:1.7">
        <p><strong>A / AN</strong> (indéfini) — devant un nom <em>dénombrable singulier</em>, première mention ou catégorie.
        <br><strong>a</strong> devant un son consonne (<em>a microwave, a cable</em>) · <strong>an</strong> devant un son voyelle (<em>an exchange, an undersea cable, an international committee</em>).</p>
        <p><strong>THE</strong> (défini) — chose <em>précise / déjà connue / unique</em>, ou reprise d'un élément déjà mentionné
        (<em>the call, the signal, the destination, the standards, the CCITT</em>).</p>
        <p><strong>∅ (aucun article)</strong> — noms <em>pluriels ou indénombrables</em> au sens général
        (<em>people, different countries, different languages, data transmissions, telephone, telegraph</em>),
        ainsi que la plupart des noms abstraits et des moyens de communication employés génériquement.</p>
        <p style="color:#555;font-style:italic">Astuce : si le nom est général/non spécifique et pluriel ou indénombrable, c'est souvent <strong>∅</strong>.</p>
      </div>
    </div>`;
  document.body.appendChild(ov);
  ov.querySelector('.ex-expert-close').addEventListener('click', () => ov.remove());
  ov.addEventListener('click', e => { if (e.target === ov) ov.remove(); });
}
