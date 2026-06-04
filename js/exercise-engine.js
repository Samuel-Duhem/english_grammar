// ── SHARED EXERCISE ENGINE ────────────────────────────────────────────────────

function exShuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function exEsc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// Generates help panel HTML — open=true shows it, false hides it
function exHelpHtml(text, open) {
  if (!text) return '';
  return `<div class="ex-help" id="ex-help"${open ? '' : ' style="display:none"'}>
    <span class="ex-help-icon">?</span>
    <div class="ex-help-text">${exEsc(text)}</div>
    <button class="ex-help-close" id="ex-help-close">✕</button>
  </div>`;
}

// Attaches close button listener; also returns a show/hide toggle function
function exHelpBind(body, state) {
  const el = body.querySelector('#ex-help');
  const btn = body.querySelector('#ex-help-close');
  if (btn) btn.addEventListener('click', () => {
    state.open = false;
    if (el) el.style.display = 'none';
  });
}

function buildExHdr(container, unit, title, onBack, onHelp) {
  const hdr = document.createElement('div');
  hdr.className = 'hdr';
  hdr.innerHTML = `
    <div class="hdr-left">
      <div><div class="ulabel">${exEsc(unit)}</div><h1>${exEsc(title)}</h1></div>
    </div>
    <div style="display:flex;gap:8px;align-items:center">
      ${onHelp ? '<button class="help-btn" id="hdr-help">?</button>' : ''}
      <button class="back-btn">← MENU</button>
    </div>`;
  hdr.querySelector('.back-btn').addEventListener('click', onBack);
  if (onHelp) hdr.querySelector('#hdr-help').addEventListener('click', onHelp);
  container.appendChild(hdr);
}

function showExScore(body, correct, total, onBack, onRetry, extra) {
  const pct = Math.round((correct / total) * 100);
  const msg = pct >= 80 ? 'Excellent !' : pct >= 60 ? 'Bien !' : 'À revoir.';
  let extraHtml = '';
  if (extra) {
    const cls = extra.ok ? 'score-extra score-extra--ok' : 'score-extra score-extra--bad';
    extraHtml = `<div class="${cls}">${exEsc(extra.text)}</div>`;
  }
  body.innerHTML = `
    <div class="ex-score-screen">
      <div class="score-circle">${pct}%</div>
      <div class="score-msg">${msg}</div>
      <div class="score-detail">${correct} / ${total} bonnes réponses</div>
      ${extraHtml}
      <div style="display:flex;gap:12px;margin-top:20px">
        <button class="ex-card-btn" id="btn-retry">↺ Recommencer</button>
        <button class="back-btn" id="btn-menu" style="color:var(--blue);border-color:var(--blue)">← Menu</button>
      </div>
    </div>`;
  body.querySelector('#btn-retry').addEventListener('click', onRetry);
  body.querySelector('#btn-menu').addEventListener('click', onBack);
}

// ── MCQ ───────────────────────────────────────────────────────────────────────
// questions: [{ q, options:[{text,correct}] }]
function runMCQ(container, { unit, title, questions, help, onBack }) {
  container.innerHTML = '';
  const hs = { open: true };
  buildExHdr(container, unit, title, onBack, help ? () => {
    hs.open = !hs.open;
    const el = body.querySelector('#ex-help');
    if (el) el.style.display = hs.open ? '' : 'none';
  } : null);
  const body = document.createElement('div');
  body.className = 'ex-body';
  container.appendChild(body);

  let idx = 0, score = 0;

  function render() {
    if (idx >= questions.length) {
      showExScore(body, score, questions.length, onBack, () => { idx = 0; score = 0; render(); });
      return;
    }
    const q = questions[idx];
    const opts = exShuffle(q.options);
    body.innerHTML = `
      ${exHelpHtml(help, hs.open)}
      <div class="ex-progress">
        <span class="ex-q-label">Q ${idx + 1}/${questions.length}</span>
        <div class="ex-progress-bar"><div class="ex-progress-fill" style="width:${(idx / questions.length) * 100}%"></div></div>
        <span class="ex-q-label">✓ ${score}</span>
      </div>
      <div class="ex-question">${q.q}</div>
      <div class="ex-options">
        ${opts.map((o, i) => `<div class="ex-option" data-i="${i}">${exEsc(o.text)}</div>`).join('')}
      </div>
      <button class="ex-next-btn" id="ex-next">Suivant →</button>`;

    exHelpBind(body, hs);

    body.querySelectorAll('.ex-option').forEach(el => {
      el.addEventListener('click', () => {
        if (el.classList.contains('disabled')) return;
        const i = +el.dataset.i;
        if (opts[i].correct) score++;
        body.querySelectorAll('.ex-option').forEach((o, j) => {
          o.classList.add('disabled');
          if (opts[j].correct) o.classList.add('correct');
          else if (o === el) o.classList.add('wrong');
        });
        if (q.feedback) {
          const [trans, ...rest] = q.feedback.split('\n');
          const fb = document.createElement('div');
          fb.className = 'ex-feedback';
          fb.innerHTML = `<span class="ex-feedback-en">${exEsc(trans)}</span>${rest.length ? `<span class="ex-feedback-why">${exEsc(rest.join(' '))}</span>` : ''}`;
          body.querySelector('.ex-options').insertAdjacentElement('afterend', fb);
        }
        body.querySelector('#ex-next').classList.add('visible');
      });
    });
    body.querySelector('#ex-next').addEventListener('click', () => { idx++; render(); });
  }
  render();
}

// ── FILL BLANK ────────────────────────────────────────────────────────────────
// questions: [{ sentence (contains ___), answer:'prep'|answers:['a','b'], options:['a','b','c','d'] }]
function runFillBlank(container, { unit, title, questions, help, onBack }) {
  container.innerHTML = '';
  const hs = { open: true };
  buildExHdr(container, unit, title, onBack, help ? () => {
    hs.open = !hs.open;
    const el = body.querySelector('#ex-help');
    if (el) el.style.display = hs.open ? '' : 'none';
  } : null);
  const body = document.createElement('div');
  body.className = 'ex-body';
  container.appendChild(body);

  let idx = 0, score = 0;

  function render() {
    if (idx >= questions.length) {
      showExScore(body, score, questions.length, onBack, () => { idx = 0; score = 0; render(); });
      return;
    }
    const q = questions[idx];
    const answers = q.answers || [q.answer];
    const opts = exShuffle(q.options);

    let blankN = 0;
    const sentHtml = exEsc(q.sentence).replace(/___/g, () =>
      `<span class="ex-blank" data-blank="${blankN++}">___</span>`
    );

    body.innerHTML = `
      ${exHelpHtml(help, hs.open)}
      <div class="ex-progress">
        <span class="ex-q-label">Q ${idx + 1}/${questions.length}</span>
        <div class="ex-progress-bar"><div class="ex-progress-fill" style="width:${(idx / questions.length) * 100}%"></div></div>
        <span class="ex-q-label">✓ ${score}</span>
      </div>
      <div class="ex-sentence">${sentHtml}</div>
      <div class="ex-word-bank">
        ${opts.map(o => `<span class="ex-word">${exEsc(o)}</span>`).join('')}
      </div>
      <button class="ex-next-btn" id="ex-next">Suivant →</button>`;

    exHelpBind(body, hs);

    let nextBlank = 0;
    body.querySelectorAll('.ex-word').forEach(el => {
      el.addEventListener('click', () => {
        if (nextBlank >= answers.length) return;
        const cur = nextBlank++;
        const word = el.textContent.trim();
        const blankEl = body.querySelector(`[data-blank="${cur}"]`);
        blankEl.textContent = word;
        blankEl.classList.add('filled');
        el.style.pointerEvents = 'none';
        el.style.opacity = '0.5';

        if (nextBlank >= answers.length) {
          let allOk = true;
          answers.forEach((ans, i) => {
            const bl = body.querySelector(`[data-blank="${i}"]`);
            const ok = bl.textContent.trim().toLowerCase() === ans.toLowerCase();
            if (!ok) allOk = false;
            bl.classList.add(ok ? 'correct' : 'wrong');
          });
          if (allOk) score++;
          body.querySelectorAll('.ex-word').forEach(w => {
            w.style.pointerEvents = 'none';
            const wt = w.textContent.trim().toLowerCase();
            if (answers.some(a => a.toLowerCase() === wt)) w.classList.add('correct');
            else w.style.opacity = '0.4';
          });
          if (!allOk) {
            const hint = document.createElement('div');
            hint.className = 'ex-hint';
            hint.textContent = '✓ ' + answers.join('  /  ');
            body.querySelector('.ex-sentence').insertAdjacentElement('afterend', hint);
          }
          body.querySelector('#ex-next').classList.add('visible');
        }
      });
    });
    body.querySelector('#ex-next').addEventListener('click', () => { idx++; render(); });
  }
  render();
}

// ── MATCHING ──────────────────────────────────────────────────────────────────
// pairs: [{ left, right }]
function runMatching(container, { unit, title, pairs, help, onBack }) {
  container.innerHTML = '';
  const hs = { open: true };
  buildExHdr(container, unit, title, onBack, help ? () => {
    hs.open = !hs.open;
    const el = body.querySelector('#ex-help');
    if (el) el.style.display = hs.open ? '' : 'none';
  } : null);
  const body = document.createElement('div');
  body.className = 'ex-body';
  container.appendChild(body);

  const indexed = pairs.map((p, i) => ({ ...p, idx: i }));
  let leftItems = exShuffle([...indexed]);
  let rightItems = exShuffle([...indexed]);
  let sel = null, matched = 0, wrongAttempts = 0;

  function render() {
    body.innerHTML = `
      ${exHelpHtml(help, hs.open)}
      <div class="ex-progress">
        <span class="ex-q-label">Associez les paires — cliquez à gauche puis à droite</span>
        <div class="ex-progress-bar"><div class="ex-progress-fill" style="width:${(matched / pairs.length) * 100}%"></div></div>
        <span class="ex-q-label">✓ ${matched}/${pairs.length}</span>
      </div>
      <div class="ex-match-grid">
        <div class="ex-match-col">
          ${leftItems.map(p => `<div class="ex-match-item${p.done ? ' matched' : ''}" data-idx="${p.idx}" data-side="left">${exEsc(p.left)}</div>`).join('')}
        </div>
        <div class="ex-match-col">
          ${rightItems.map(p => `<div class="ex-match-item${p.done ? ' matched' : ''}" data-idx="${p.idx}" data-side="right">${exEsc(p.right)}</div>`).join('')}
        </div>
      </div>
      <button class="ex-next-btn${matched >= pairs.length ? ' visible' : ''}" id="ex-next">Voir résultat →</button>`;

    exHelpBind(body, hs);

    body.querySelector('#ex-next').addEventListener('click', () => {
      const effective = Math.max(0, pairs.length - wrongAttempts);
      const n = wrongAttempts;
      const errExtra = n === 0
        ? { text: 'Aucune erreur !', ok: true }
        : { text: `${n} erreur${n > 1 ? 's' : ''} commise${n > 1 ? 's' : ''}`, ok: false };
      showExScore(body, effective, pairs.length, onBack, () => {
        leftItems = exShuffle(indexed.map(p => ({ ...p, done: false })));
        rightItems = exShuffle(indexed.map(p => ({ ...p, done: false })));
        sel = null; matched = 0; wrongAttempts = 0; render();
      }, errExtra);
    });

    body.querySelectorAll('.ex-match-item').forEach(el => {
      el.addEventListener('click', () => {
        if (el.classList.contains('matched')) return;
        const side = el.dataset.side;
        if (side === 'left') {
          body.querySelectorAll('.ex-match-item[data-side="left"]').forEach(e => e.classList.remove('selected'));
          el.classList.add('selected');
          sel = el;
        } else if (sel) {
          const isMatch = sel.dataset.idx === el.dataset.idx;
          if (isMatch) {
            sel.classList.remove('selected');
            sel.classList.add('matched');
            el.classList.add('matched');
            const i = +el.dataset.idx;
            leftItems.find(p => p.idx === i).done = true;
            rightItems.find(p => p.idx === i).done = true;
            matched++;
            if (matched >= pairs.length) body.querySelector('#ex-next').classList.add('visible');
            sel = null;
          } else {
            wrongAttempts++;
            sel.classList.add('wrong');
            el.classList.add('wrong');
            const s = sel;
            setTimeout(() => { s.classList.remove('selected', 'wrong'); el.classList.remove('wrong'); sel = null; }, 700);
          }
        }
      });
    });
  }
  render();
}

// ── ORDERING ─────────────────────────────────────────────────────────────────
// steps: ['step1', 'step2', ...] in correct order
function runOrder(container, { unit, title, steps, help, onBack }) {
  container.innerHTML = '';
  const hs = { open: true };
  buildExHdr(container, unit, title, onBack, help ? () => {
    hs.open = !hs.open;
    const el = body.querySelector('#ex-help');
    if (el) el.style.display = hs.open ? '' : 'none';
  } : null);
  const body = document.createElement('div');
  body.className = 'ex-body';
  container.appendChild(body);

  const shuffled = exShuffle(steps.map((s, i) => ({ text: s, correctPos: i })));
  let placed = [];

  function render() {
    body.innerHTML = `
      ${exHelpHtml(help, hs.open)}
      <div class="ex-order-instructions">Cliquez les étapes dans le bon ordre (1 → ${steps.length})</div>
      <div class="ex-order-slots">
        ${steps.map((_, i) => {
          const p = placed[i];
          return `<div class="ex-order-slot${p ? (p.correctPos === i ? ' correct' : ' wrong') : ''}">
            <span class="ex-order-num">${i + 1}</span>
            <span class="ex-order-text">${p ? exEsc(p.text) : ''}</span>
          </div>`;
        }).join('')}
      </div>
      <div class="ex-word-bank" id="steps-bank">
        ${shuffled.filter(s => !placed.includes(s)).map((s, i) =>
          `<div class="ex-order-item" data-i="${i}">${exEsc(s.text)}</div>`
        ).join('')}
      </div>
      <button class="ex-next-btn${placed.length >= steps.length ? ' visible' : ''}" id="ex-next">
        Voir résultat →
      </button>`;

    exHelpBind(body, hs);

    body.querySelector('#ex-next').addEventListener('click', () => {
      const correct = placed.filter((p, i) => p.correctPos === i).length;
      showExScore(body, correct, steps.length, onBack, () => { placed = []; render(); });
    });

    const remaining = shuffled.filter(s => !placed.includes(s));
    body.querySelectorAll('.ex-order-item').forEach((el, i) => {
      el.addEventListener('click', () => {
        placed.push(remaining[i]);
        render();
      });
    });
  }
  render();
}

// ── TRANSLATION (saisie libre + correction mot par mot) ───────────────────────

function checkTranslation(input, expected) {
  const norm = s => s.toLowerCase().trim().replace(/[.!?]$/, '').replace(/\s+/g, ' ');
  if (norm(input) === norm(expected)) return { ok: true };
  const iw = norm(input).split(' ').filter(Boolean);
  const ew = norm(expected).split(' ').filter(Boolean);
  for (let i = 0; i < Math.max(iw.length, ew.length); i++) {
    if ((iw[i] || '') !== (ew[i] || '')) return { ok: false, got: iw[i] || '' };
  }
  return { ok: true };
}

const EXPERT_TREE = {
  q: "L'action est-elle déterminée dans le temps ?",
  hint: "Présence d'une indication temporelle dans la phrase",
  examples: ["ten years ago", "for five years", "yesterday", "last Monday", "in 1980"],
  yes: { conclusion: 'preterite', example: 'They installed the new computers yesterday morning.' },
  no: {
    q: "L'action envisagée est-elle terminée aujourd'hui ?",
    hint: "Elle ne continue pas au moment où je parle.",
    yesLabel: "Oui, c'est terminé",
    noLabel: "Non, ce n'est pas terminé",
    yes: { conclusion: 'preterite', example: 'He was a programmer for three years then he resigned.' },
    no: {
      q: "L'action envisagée est-elle située dans une période de temps écoulée ?",
      hint: "La période de temps considérée est terminée",
      examples: ["avant-hier", "l'année dernière", "pendant trois ans"],
      yes: { conclusion: 'preterite', example: 'He was a programmer for three years then he resigned.' },
      no: { conclusion: 'present_perfect', example: 'We have manufactured computers for ten years.' },
    }
  }
};

function showExpertTree(onConclusion, tree) {
  const ov = document.createElement('div');
  ov.className = 'ex-expert-overlay';
  ov.innerHTML = `<div class="ex-expert-modal"><div class="ex-expert-hdr"><span>Ask the Expert</span><button class="ex-expert-close">✕</button></div><div class="ex-expert-body" id="expert-body"></div></div>`;
  document.body.appendChild(ov);
  const close = c => { ov.remove(); if (onConclusion) onConclusion(c); };
  ov.querySelector('.ex-expert-close').addEventListener('click', () => close(null));
  function rn(node) {
    const bd = ov.querySelector('#expert-body');
    if (node.conclusion) {
      const name = node.conclusion === 'preterite' ? 'Prétérit (Simple Past)'
                 : node.conclusion === 'past_perfect' ? 'Past Perfect'
                 : 'Present Perfect';
      const exLines = node.example.split('\n').map(l => `<em>${exEsc(l)}</em>`).join('<br>');
      bd.innerHTML = `<div class="expert-conclusion"><div class="expert-conc-label">Conclusion</div><div class="expert-conc-tense">${exEsc(name)}</div><div class="expert-conc-ex">${exLines}</div><button class="ex-card-btn" id="expert-ok">Retour à l'exercice →</button></div>`;
      bd.querySelector('#expert-ok').addEventListener('click', () => close(node.conclusion));
      return;
    }
    const exHtml = node.examples?.length ? `<div class="expert-examples">${node.examples.map(e => `<span>${exEsc(e)}</span>`).join('')}</div>` : '';
    if (node.options) {
      bd.innerHTML = `<div class="expert-question"><div class="expert-q">${exEsc(node.q)}</div>${node.hint ? `<div class="expert-hint">${exEsc(node.hint)}</div>` : ''}${exHtml}<div class="expert-btns expert-btns--multi">${node.options.map((o, i) => `<button class="expert-opt" data-i="${i}">${exEsc(o.label)}</button>`).join('')}</div></div>`;
      node.options.forEach((o, i) => {
        bd.querySelector(`[data-i="${i}"]`).addEventListener('click', () => rn(o.next));
      });
    } else {
      bd.innerHTML = `<div class="expert-question"><div class="expert-q">${exEsc(node.q)}</div>${node.hint ? `<div class="expert-hint">${exEsc(node.hint)}</div>` : ''}${exHtml}<div class="expert-btns"><button class="expert-yes">${exEsc(node.yesLabel || 'Oui')}</button><button class="expert-no">${exEsc(node.noLabel || 'Non')}</button></div></div>`;
      bd.querySelector('.expert-yes').addEventListener('click', () => rn(node.yes));
      bd.querySelector('.expert-no').addEventListener('click', () => rn(node.no));
    }
  }
  rn(tree || EXPERT_TREE);
}

function showDictModal(title, items, searchFn) {
  const ov = document.createElement('div');
  ov.className = 'ex-expert-overlay';
  ov.innerHTML = `<div class="ex-dict-modal"><div class="ex-expert-hdr"><span>${exEsc(title)}</span><button class="ex-expert-close">✕</button></div><div class="ex-dict-search"><input class="dict-search-input" type="text" placeholder="Rechercher…" autocomplete="off"></div><div class="ex-dict-body" id="dict-body"></div></div>`;
  document.body.appendChild(ov);
  ov.querySelector('.ex-expert-close').addEventListener('click', () => ov.remove());
  const inp = ov.querySelector('.dict-search-input');
  const dbd = ov.querySelector('#dict-body');
  function draw(f) {
    const list = f ? items.filter(it => searchFn(it, f.toLowerCase())) : items;
    dbd.innerHTML = list.length
      ? list.map(it => `<div class="dict-item"><span class="dict-main">${exEsc(it.main)}</span><span class="dict-sep">→</span><span class="dict-sub">${exEsc(it.sub)}</span></div>`).join('')
      : '<div class="dict-empty">Aucun résultat</div>';
  }
  draw('');
  inp.addEventListener('input', () => draw(inp.value.trim()));
  inp.focus();
}

function runTranslation(container, { unit, title, sentences, lexicon, irregVerbs, tenses, expertTree, onBack }) {
  const ts = tenses || [
    { id: 'preterite', label: 'Prétérit (Simple Past)' },
    { id: 'present_perfect', label: 'Present Perfect' },
  ];
  container.innerHTML = '';
  const hdr = document.createElement('div');
  hdr.className = 'hdr';
  hdr.innerHTML = `
    <div class="hdr-left">
      <div><div class="ulabel">${exEsc(unit)}</div><h1>${exEsc(title)}</h1></div>
    </div>
    <div style="display:flex;gap:8px;align-items:center">
      <button class="hdr-aux-btn" id="btn-expert">Expert</button>
      ${lexicon?.length ? '<button class="hdr-aux-btn" id="btn-lex">Lexique</button>' : ''}
      ${irregVerbs?.length ? '<button class="hdr-aux-btn" id="btn-vb">V. irrég.</button>' : ''}
      <button class="back-btn" id="btn-back">← MENU</button>
    </div>`;
  hdr.querySelector('#btn-back').addEventListener('click', onBack);
  hdr.querySelector('#btn-expert').addEventListener('click', () => showExpertTree(null, expertTree));
  if (lexicon?.length) {
    hdr.querySelector('#btn-lex').addEventListener('click', () => showDictModal(
      'Lexique',
      [...lexicon].sort((a, b) => a.fr.localeCompare(b.fr)).map(e => ({ main: e.fr, sub: e.en })),
      (it, f) => it.main.toLowerCase().includes(f) || it.sub.toLowerCase().includes(f)
    ));
  }
  if (irregVerbs?.length) {
    hdr.querySelector('#btn-vb').addEventListener('click', () => showDictModal(
      'Verbes irréguliers',
      [...irregVerbs].sort((a, b) => a.en.localeCompare(b.en)).map(e => ({ main: e.en, sub: e.fr })),
      (it, f) => it.main.toLowerCase().includes(f) || it.sub.toLowerCase().includes(f)
    ));
  }
  container.appendChild(hdr);
  const body = document.createElement('div');
  body.className = 'ex-body';
  container.appendChild(body);
  let idx = 0, score = 0;

  function render() {
    if (idx >= sentences.length) {
      showExScore(body, score, sentences.length, onBack, () => { idx = 0; score = 0; render(); });
      return;
    }
    const s = sentences[idx];
    let attempts = 0;

    function step(selTense) {
      const showTr = selTense === s.tense;
      const attLeft = 4 - attempts;
      body.innerHTML = `
        <div class="ex-progress">
          <span class="ex-q-label">Phrase ${idx + 1}/${sentences.length}</span>
          <div class="ex-progress-bar"><div class="ex-progress-fill" style="width:${(idx / sentences.length) * 100}%"></div></div>
          <span class="ex-q-label">✓ ${score}</span>
        </div>
        <div class="ex-fr-sentence">${exEsc(s.fr)}</div>
        <div class="ex-tense-section">
          <div class="ex-tense-label">Choisissez le temps :</div>
          <div class="ex-tense-btns">
            ${ts.map(t => {
              const sel = selTense === t.id;
              const cls = sel ? (s.tense === t.id ? ' tense-ok' : ' tense-ko') : '';
              return `<button class="ex-tense-btn${cls}" data-t="${t.id}"${selTense ? ' disabled' : ''}>${exEsc(t.label)}</button>`;
            }).join('')}
          </div>
        </div>
        ${showTr ? `
        <div class="ex-translate-area">
          <textarea class="ex-translate-input" rows="2" placeholder="Type the English translation here…" autocomplete="off" spellcheck="false"></textarea>
          <div class="ex-constraints">Chiffres en toutes lettres &nbsp;·&nbsp; Pas de contractions (I have not) &nbsp;·&nbsp; Pas de point final</div>
          <div class="ex-check-row">
            <button class="ex-check-btn">Vérifier →</button>
            <span class="ex-att" id="ex-att">${attLeft} essai${attLeft !== 1 ? 's' : ''} restant${attLeft !== 1 ? 's' : ''}</span>
          </div>
          <div class="ex-tf" id="ex-tf"></div>
        </div>` : ''}
        <button class="ex-next-btn" id="ex-next">Suivant →</button>`;

      if (!selTense) {
        body.querySelectorAll('.ex-tense-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const t = btn.dataset.t;
            if (t === s.tense) { step(t); }
            else { showExpertTree(c => step(c === s.tense ? s.tense : null), expertTree); }
          });
        });
      } else if (showTr) {
        const ta = body.querySelector('.ex-translate-input');
        const cb = body.querySelector('.ex-check-btn');
        const tf = body.querySelector('#ex-tf');
        const att = body.querySelector('#ex-att');
        function doCheck() {
          const val = ta.value.trim();
          if (!val) return;
          const res = checkTranslation(val, s.en);
          attempts++;
          const left = 4 - attempts;
          if (res.ok) {
            score++;
            tf.className = 'ex-tf fb-ok'; tf.textContent = '✓ Correct !';
            ta.disabled = true; cb.disabled = true; att.textContent = '';
            body.querySelector('#ex-next').classList.add('visible');
          } else if (attempts >= 4) {
            tf.className = 'ex-tf fb-final';
            tf.innerHTML = `<div class="fb-label">Réponse correcte :</div><div class="fb-answer">${exEsc(s.en)}</div>`;
            ta.disabled = true; cb.disabled = true; att.textContent = '';
            body.querySelector('#ex-next').classList.add('visible');
          } else {
            tf.className = 'ex-tf fb-wrong';
            tf.innerHTML = `Le mot <strong>"${exEsc(res.got || '…')}"</strong> est erroné ou manquant.`;
            att.textContent = `${left} essai${left !== 1 ? 's' : ''} restant${left !== 1 ? 's' : ''}`;
            ta.focus();
          }
        }
        cb.addEventListener('click', doCheck);
        ta.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); doCheck(); } });
        ta.focus();
      }
      body.querySelector('#ex-next').addEventListener('click', () => { idx++; render(); });
    }
    step(null);
  }
  render();
}

// ── PRINT SHEET (feuille d'impression au format TBK) ─────────────────────────
function buildPrintSheet(sentences, sel, ts, tenseScore, translScore, id) {
  const n = sentences.length;
  const tenseLabel = tid => ts.find(t => t.id === tid)?.label ?? '—';
  const bothScore = sentences.filter((s, i) =>
    sel[i].tense === s.tense && checkTranslation(sel[i].input, s.en).ok
  ).length;

  const rows = sentences.map((s, i) => {
    const wrong = sel[i].tense !== s.tense || !checkTranslation(sel[i].input, s.en).ok;
    const answer = sel[i].input.trim() || '—';
    const tLabel = tenseLabel(sel[i].tense);
    return `<p class="tps-fr">${exEsc(s.fr)}</p>
<p class="tps-ans${wrong ? ' tps-wrong' : ''}">${wrong ? '***' : ''}${i + 1}- ${exEsc(answer)}<span class="tps-tense-tag">[${exEsc(tLabel)}]</span></p>`;
  }).join('');

  const idStr = `${id.name}${id.year}${id.group}${id.sub}`;
  const div = document.createElement('div');
  div.className = 'test-print-sheet';
  div.innerHTML = `
    <div class="tps-box">${rows}</div>
    <div class="tps-bottom">
      <div class="tps-legend">
        <p>Has : le mot est en trop</p>
        <p>(...) : il manque un mot</p>
        <p>have : le mot comporte au moins une erreur ou vous devez le remplacer par un autre mot</p>
      </div>
      <div class="tps-id-box">${exEsc(idStr)}</div>
      <div class="tps-scores">
        <div class="tps-score-row"><span class="tps-slabel c-green">Score</span><span class="tps-sval">${translScore}/${n}</span></div>
        <div class="tps-score-row"><span class="tps-slabel c-red">Tense Choice</span><span class="tps-sval">${tenseScore}/${n}</span></div>
        <div class="tps-score-row"><span class="tps-slabel c-blue">Tense Form</span><span class="tps-sval">${bothScore}/${n}</span></div>
      </div>
    </div>`;
  return div;
}

// ── TEST (page unique, toutes phrases visibles, un seul envoi) ────────────────
// sentences: [{ fr, tense, en }]   tenses: [{ id, label }]
function runTest(container, { unit, title, sentences, lexicon, irregVerbs, tenses, onBack }) {
  const ts = tenses || [
    { id: 'preterite', label: 'Prétérit (Simple Past)' },
    { id: 'present_perfect', label: 'Present Perfect' },
  ];

  function init() {
    container.innerHTML = '';
    const hdr = document.createElement('div');
    hdr.className = 'hdr';
    hdr.innerHTML = `
      <div class="hdr-left">
        <div><div class="ulabel">${exEsc(unit)}</div><h1>${exEsc(title)}</h1></div>
      </div>
      <div style="display:flex;gap:8px;align-items:center">
        ${lexicon?.length ? '<button class="hdr-aux-btn" id="btn-lex">Lexique</button>' : ''}
        ${irregVerbs?.length ? '<button class="hdr-aux-btn" id="btn-vb">V. irrég.</button>' : ''}
        <button class="back-btn" id="btn-back">← MENU</button>
      </div>`;
    hdr.querySelector('#btn-back').addEventListener('click', () => {
      document.querySelectorAll('.id-overlay').forEach(e => e.remove());
      onBack();
    });
    if (lexicon?.length) {
      hdr.querySelector('#btn-lex').addEventListener('click', () => showDictModal(
        'Lexique',
        [...lexicon].sort((a, b) => a.fr.localeCompare(b.fr)).map(e => ({ main: e.fr, sub: e.en })),
        (it, f) => it.main.toLowerCase().includes(f) || it.sub.toLowerCase().includes(f)
      ));
    }
    if (irregVerbs?.length) {
      hdr.querySelector('#btn-vb').addEventListener('click', () => showDictModal(
        'Verbes irréguliers',
        [...irregVerbs].sort((a, b) => a.en.localeCompare(b.en)).map(e => ({ main: e.en, sub: e.fr })),
        (it, f) => it.main.toLowerCase().includes(f) || it.sub.toLowerCase().includes(f)
      ));
    }
    container.appendChild(hdr);
    promptId(start);
  }

  function promptId(cb) {
    const ov = document.createElement('div');
    ov.className = 'ex-expert-overlay id-overlay';
    ov.innerHTML = `
      <div class="ex-expert-modal" style="max-width:360px">
        <div class="ex-expert-hdr"><span>Identification</span></div>
        <div class="ex-expert-body">
          <div class="id-form">
            <label class="id-label">Nom
              <input class="id-input" id="id-name" type="text" autocomplete="off" placeholder="Votre nom">
            </label>
            <label class="id-label">Année
              <select class="id-select" id="id-year">
                <option value="1">1ère</option>
                <option value="2">2ème</option>
                <option value="AS">AS</option>
                <option value="LP">LP</option>
              </select>
            </label>
            <label class="id-label">Groupe
              <select class="id-select" id="id-group">
                ${['A','B','C','D','E','F'].map(g => `<option value="${g}">${g}</option>`).join('')}
              </select>
            </label>
            <label class="id-label">Sous-groupe
              <select class="id-select" id="id-sub">
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </label>
            <div style="display:flex;gap:10px;margin-top:6px">
              <button class="ex-card-btn" id="id-ok" style="flex:1">Commencer →</button>
              <button class="back-btn" id="id-cancel" style="color:var(--blue);border-color:var(--blue)">Annuler</button>
            </div>
          </div>
        </div>
      </div>`;
    document.body.appendChild(ov);
    const confirm = () => {
      const name = ov.querySelector('#id-name').value.trim() || 'Anonyme';
      const year = ov.querySelector('#id-year').value;
      const group = ov.querySelector('#id-group').value;
      const sub = ov.querySelector('#id-sub').value;
      ov.remove();
      cb({ name, year, group, sub });
    };
    ov.querySelector('#id-ok').addEventListener('click', confirm);
    ov.querySelector('#id-cancel').addEventListener('click', () => { ov.remove(); onBack(); });
    ov.querySelector('#id-name').addEventListener('keydown', e => { if (e.key === 'Enter') confirm(); });
    ov.querySelector('#id-name').focus();
  }

  function start(id) {
    container.querySelectorAll('.test-id-bar, .ex-body').forEach(e => e.remove());

    const idBar = document.createElement('div');
    idBar.className = 'test-id-bar';
    idBar.innerHTML = `
      <span><strong>${exEsc(id.name)}</strong>&ensp;${exEsc(id.year)}${exEsc(id.group)}${exEsc(id.sub)}</span>
      <span>${new Date().toLocaleDateString('fr-FR')}</span>`;
    container.appendChild(idBar);

    const body = document.createElement('div');
    body.className = 'ex-body';
    container.appendChild(body);

    const sel = sentences.map(() => ({ tense: null, input: '' }));

    function buildTest() {
      body.innerHTML = `
        <div class="test-sentences">
          ${sentences.map((s, i) => `
            <div class="test-block">
              <div class="test-num-fr">
                <span class="test-num">${i + 1}.</span>
                <span class="test-fr">${exEsc(s.fr)}</span>
              </div>
              <div class="test-tense-row">
                ${ts.map(t => `<button class="test-tense-btn" data-i="${i}" data-t="${t.id}">${exEsc(t.label)}</button>`).join('')}
              </div>
              <textarea class="test-input" data-i="${i}" rows="2" placeholder="Tapez la traduction anglaise…" autocomplete="off" spellcheck="false"></textarea>
            </div>`).join('')}
        </div>
        <div class="test-footer">
          <div class="ex-constraints">Chiffres en toutes lettres &nbsp;·&nbsp; Pas de contractions (I have not) &nbsp;·&nbsp; Pas de point final</div>
          <button class="ex-card-btn" id="btn-validate" style="margin-top:12px">Valider le test →</button>
        </div>`;

      body.querySelectorAll('.test-tense-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const i = +btn.dataset.i;
          sel[i].tense = btn.dataset.t;
          body.querySelectorAll(`.test-tense-btn[data-i="${i}"]`).forEach(b => {
            b.classList.toggle('test-tense-sel', b.dataset.t === btn.dataset.t);
          });
        });
      });
      body.querySelectorAll('.test-input').forEach(ta => {
        ta.addEventListener('input', () => { sel[+ta.dataset.i].input = ta.value; });
      });
      body.querySelector('#btn-validate').addEventListener('click', showResults);
    }

    function showResults() {
      body.querySelectorAll('.test-input').forEach(ta => { sel[+ta.dataset.i].input = ta.value; });
      body.querySelectorAll('.test-tense-btn').forEach(btn => { btn.disabled = true; });
      body.querySelectorAll('.test-input').forEach(ta => { ta.readOnly = true; });

      let tenseScore = 0, translScore = 0;
      sentences.forEach((s, i) => {
        const tenseOk = sel[i].tense === s.tense;
        const res = checkTranslation(sel[i].input, s.en);
        if (tenseOk) tenseScore++;
        if (res.ok) translScore++;
        body.querySelectorAll(`.test-tense-btn[data-i="${i}"]`).forEach(btn => {
          if (btn.dataset.t === s.tense) btn.classList.add('test-tense-ok');
          else if (btn.dataset.t === sel[i].tense) btn.classList.add('test-tense-ko');
        });
        const ta = body.querySelector(`.test-input[data-i="${i}"]`);
        ta.classList.add(res.ok ? 'test-input-ok' : 'test-input-ko');
        if (!res.ok) {
          const ans = document.createElement('div');
          ans.className = 'test-correct-answer';
          ans.textContent = s.en;
          ta.after(ans);
        }
      });
      const n = sentences.length;
      const bothScore = sentences.filter((s, i) =>
        sel[i].tense === s.tense && checkTranslation(sel[i].input, s.en).ok
      ).length;

      const footer = body.querySelector('.test-footer');
      footer.innerHTML = `
        <div class="test-score-line">
          <span class="c-green">Score : <strong>${translScore}/${n}</strong></span>
          <span class="c-red">Tense Choice : <strong>${tenseScore}/${n}</strong></span>
          <span class="c-blue">Tense Form : <strong>${bothScore}/${n}</strong></span>
        </div>
        <div class="test-footer-btns">
          <button class="ex-card-btn" id="btn-print">⎙ Imprimer</button>
          <button class="ex-card-btn" id="btn-retry">↺ Recommencer</button>
          <button class="back-btn" id="btn-back2" style="color:var(--blue);border-color:var(--blue)">← Menu</button>
        </div>`;
      footer.querySelector('#btn-print').addEventListener('click', () => {
        const sheet = buildPrintSheet(sentences, sel, ts, tenseScore, translScore, id);
        document.body.appendChild(sheet);
        window.addEventListener('afterprint', () => sheet.remove(), { once: true });
        window.print();
      });
      footer.querySelector('#btn-retry').addEventListener('click', () => {
        sel.forEach(s => { s.tense = null; s.input = ''; });
        promptId(start);
      });
      footer.querySelector('#btn-back2').addEventListener('click', onBack);
    }

    buildTest();
  }

  init();
}

// ── SORT (classify items into N categories) ───────────────────────────────────
// items: [{ word, category }]   categories: [{ id, label }]
function runSort(container, { unit, title, items, categories, help, onBack }) {
  container.innerHTML = '';
  const hs = { open: !!help };
  buildExHdr(container, unit, title, onBack, help ? () => {
    hs.open = !hs.open;
    const el = body.querySelector('#ex-help');
    if (el) el.style.display = hs.open ? '' : 'none';
  } : null);

  const body = document.createElement('div');
  body.className = 'ex-body';
  container.appendChild(body);

  const shuffled = exShuffle([...items]);
  const placed = {};
  let errors = 0;
  let selected = null;

  function render() {
    const remaining = shuffled.filter(it => !placed[it.word]);
    const allPlaced = remaining.length === 0;

    body.innerHTML = `
      ${exHelpHtml(help, hs.open)}
      <div class="ex-sort-layout">
        <div class="ex-sort-columns">
          ${categories.map(cat => `
            <div class="ex-sort-col${selected ? ' col-ready' : ''}" data-cat="${exEsc(cat.id)}">
              <div class="ex-sort-col-label">${exEsc(cat.label)}</div>
              <div class="ex-sort-col-items">
                ${shuffled.filter(it => placed[it.word] === cat.id)
                  .map(it => `<div class="ex-sort-placed">${exEsc(it.word)}</div>`)
                  .join('')}
              </div>
            </div>`).join('')}
        </div>
        <div class="ex-sort-bank">
          ${remaining.length
            ? remaining.map(it => `<div class="ex-sort-word${selected === it.word ? ' selected' : ''}" data-word="${exEsc(it.word)}">${exEsc(it.word)}</div>`).join('')
            : '<span class="ex-sort-bank-empty">Tous les verbes ont été placés</span>'}
        </div>
      </div>
      <div class="ex-sort-status">
        <span class="ex-q-label">${Object.keys(placed).length}/${items.length} placés</span>
        ${errors ? `<span class="ex-q-label ex-sort-errors">${errors} erreur${errors !== 1 ? 's' : ''}</span>` : ''}
      </div>
      <button class="ex-next-btn${allPlaced ? ' visible' : ''}" id="ex-next">Voir résultat →</button>`;

    exHelpBind(body, hs);

    body.querySelectorAll('.ex-sort-word').forEach(el => {
      el.addEventListener('click', () => {
        selected = selected === el.dataset.word ? null : el.dataset.word;
        render();
      });
    });

    body.querySelectorAll('.ex-sort-col').forEach(el => {
      el.addEventListener('click', () => {
        if (!selected) return;
        const cat = el.dataset.cat;
        const item = items.find(it => it.word === selected);
        if (item.category === cat) {
          placed[selected] = cat;
          selected = null;
          render();
        } else {
          errors++;
          el.classList.add('wrong-flash');
          setTimeout(() => render(), 600);
        }
      });
    });

    body.querySelector('#ex-next')?.addEventListener('click', () => {
      const extra = errors === 0
        ? { text: 'Aucune erreur !', ok: true }
        : { text: `${errors} erreur${errors !== 1 ? 's' : ''}`, ok: false };
      showExScore(body, Math.max(0, items.length - errors), items.length, onBack, () => {
        Object.keys(placed).forEach(k => delete placed[k]);
        errors = 0;
        selected = null;
        render();
      }, extra);
    });
  }
  render();
}
