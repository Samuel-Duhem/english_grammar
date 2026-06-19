// ── UNIT 2 · Exercice 1 — Countable / Uncountable ─────────────────────────────
// Content extracted from: 183-Articles/Section_1/Countable.tbk

const COUNTABLE_ITEMS = [
  { word: 'application', correct: 'countable',   hint: '"An application", "several applications" — countable.' },
  { word: 'browser',     correct: 'countable',   hint: '"A browser", "two browsers" — countable.' },
  { word: 'buffering',   correct: 'uncountable', hint: '"Buffering" is a process noun — uncountable (no plural, no "a").' },
  { word: 'capacity',    correct: 'uncountable', hint: '"Capacity" is abstract — uncountable ("storage capacity", not "a capacity").' },
  { word: 'chip',        correct: 'countable',   hint: '"A chip", "multiple chips" — countable.' },
  { word: 'code',        correct: 'uncountable', hint: '"Code" in IT is uncountable: "write code", "lines of code".' },
  { word: 'computing',   correct: 'uncountable', hint: '"Computing" as a field is uncountable.' },
  { word: 'cyberspace',  correct: 'uncountable', hint: '"Cyberspace" has no plural and takes no indefinite article.' },
  { word: 'data',        correct: 'uncountable', hint: '"Data" is treated as uncountable in modern English: "the data is...".' },
  { word: 'database',    correct: 'countable',   hint: '"A database", "multiple databases" — countable.' },
  { word: 'device',      correct: 'countable',   hint: '"A device", "several devices" — countable.' },
  { word: 'directory',   correct: 'countable',   hint: '"A directory", "two directories" — countable.' },
  { word: 'disk',        correct: 'countable',   hint: '"A disk", "multiple disks" — countable.' },
  { word: 'drive',       correct: 'countable',   hint: '"A drive", "two drives" — countable.' },
  { word: 'email',       correct: 'countable',   hint: '"An email", "several emails" — countable in modern usage.' },
  { word: 'file',        correct: 'countable',   hint: '"A file", "many files" — countable.' },
  { word: 'hardware',    correct: 'uncountable', hint: '"Hardware" is uncountable — use "a piece of hardware" or "a component".' },
  { word: 'icon',        correct: 'countable',   hint: '"An icon", "several icons" — countable.' },
  { word: 'information', correct: 'uncountable', hint: '"Information" is uncountable — use "a piece of information".' },
  { word: 'inheritance', correct: 'uncountable', hint: '"Inheritance" in OOP is an abstract concept — uncountable.' },
  { word: 'input',       correct: 'uncountable', hint: '"Input" is generally uncountable in IT: "provide input", "receive input".' },
  { word: 'intelligence',correct: 'uncountable', hint: '"Intelligence" is an abstract uncountable noun.' },
  { word: 'interface',   correct: 'countable',   hint: '"An interface", "two interfaces" — countable.' },
  { word: 'library',     correct: 'countable',   hint: '"A library", "several libraries" — countable.' },
  { word: 'memory',      correct: 'uncountable', hint: '"Memory" in computing is uncountable: "not enough memory".' },
  { word: 'output',      correct: 'uncountable', hint: '"Output" is generally uncountable: "generate output".' },
  { word: 'programming', correct: 'uncountable', hint: '"Programming" as a field/process is uncountable.' },
  { word: 'software',    correct: 'uncountable', hint: '"Software" is uncountable — use "a piece of software" or "a program".' },
  { word: 'spam',        correct: 'uncountable', hint: '"Spam" is uncountable — like unsolicited mail in general.' },
  { word: 'speed',       correct: 'uncountable', hint: '"Speed" in IT is uncountable: "processing speed", "connection speed".' },
];

const COUNTABLE_MAP = Object.fromEntries(COUNTABLE_ITEMS.map(it => [it.word, it]));

function ctColHtml(items) {
  return items.map(it => `
    <div class="ct-row" data-word="${exEsc(it.word)}">
      <span class="ct-word">${exEsc(it.word)}</span>
      <select class="ct-select">
        <option value="">—</option>
        <option value="countable">dénombrable</option>
        <option value="uncountable">indénombrable</option>
      </select>
      <span class="ct-hint-reveal">${exEsc(it.hint)}</span>
    </div>`).join('');
}

function ctShowTypesModal() {
  const ov = document.createElement('div');
  ov.className = 'ex-expert-overlay';
  ov.innerHTML = `
    <div class="ex-expert-modal" style="max-width:560px">
      <div class="ex-expert-hdr"><span>Types of Noun</span><button class="ex-expert-close">✕</button></div>
      <div class="ex-expert-body" style="font-size:.92rem;line-height:1.75">
        <p>It is important to distinguish between <strong>countable</strong> and <strong>uncountable</strong> nouns in English because their usage is different in regards to articles and verbs.</p>
        <p><strong>Countable nouns</strong> are for things we can count using numbers. They have a singular and a plural form: <em>student, computer, mouse</em>. The singular form can use the article "a" or "an".</p>
        <p><strong>Uncountable nouns</strong> are for the things that we cannot count with numbers. They may be the names for abstract ideas or qualities or for physical objects that are too small or too amorphous to be counted (liquids, powders, gases, etc.). Uncountable nouns are used with a singular verb. They usually do not have a plural form: <em>computer science, design, processing</em>.</p>
      </div>
    </div>`;
  document.body.appendChild(ov);
  ov.querySelector('.ex-expert-close').addEventListener('click', () => ov.remove());
}

function initCountable(container, onBack) {
  container.innerHTML = '';
  buildExHdr(container, 'UNIT 2 — ARTICLES', 'COUNTABLE / UNCOUNTABLE', onBack, ctShowTypesModal);
  const body = document.createElement('div');
  body.className = 'ex-body';
  container.appendChild(body);

  if (!document.getElementById('ct-style')) {
    const st = document.createElement('style');
    st.id = 'ct-style';
    st.textContent = `
      .ct-grid{display:flex;gap:20px;margin-bottom:10px}
      .ct-col{flex:1;display:flex;flex-direction:column;gap:2px}
      .ct-row{display:flex;align-items:baseline;gap:8px;padding:3px 6px;border-radius:4px}
      .ct-word{min-width:110px;font-weight:600;font-size:.88rem}
      .ct-select{font-size:.82rem;padding:2px 4px;border-radius:4px;cursor:pointer}
      .ct-row.wrong .ct-select{border-color:#c0392b;background:#fdecea;color:#c0392b}
      .ct-row.correct .ct-select{border-color:#27ae60;background:#eafbea;color:#27ae60}
      .ct-hint-reveal{display:none;font-size:.74rem;color:#c0392b;font-style:italic}
      .ct-row.wrong .ct-hint-reveal{display:inline}
      .ct-footer{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:12px}
      .ct-err-block{display:flex;align-items:center;gap:6px;font-size:.85rem;font-weight:600;color:#c0392b}
      .ct-err-count{min-width:28px;text-align:center;font-size:1rem}
    `;
    document.head.appendChild(st);
  }

  function buildGrid() {
    const half = Math.ceil(COUNTABLE_ITEMS.length / 2);
    body.innerHTML = `
      <div class="ct-grid">
        <div class="ct-col">${ctColHtml(COUNTABLE_ITEMS.slice(0, half))}</div>
        <div class="ct-col">${ctColHtml(COUNTABLE_ITEMS.slice(half))}</div>
      </div>
      <div class="ct-footer">
        <div class="ct-err-block">
          <span>Erreurs&nbsp;:</span>
          <span class="ct-err-count" id="ct-err">—</span>
        </div>
        <button class="ex-card-btn" id="ct-check">Vérifier →</button>
        <button class="back-btn" id="ct-reset" style="color:var(--blue);border-color:var(--blue)">Reset</button>
      </div>`;

    body.querySelector('#ct-check').addEventListener('click', () => {
      let errors = 0;
      body.querySelectorAll('.ct-row').forEach(row => {
        const sel = row.querySelector('.ct-select');
        row.classList.remove('wrong', 'correct');
        if (sel.value === COUNTABLE_MAP[row.dataset.word].correct) row.classList.add('correct');
        else { row.classList.add('wrong'); errors++; }
      });
      body.querySelector('#ct-err').textContent = errors;
    });

    body.querySelector('#ct-reset').addEventListener('click', () => {
      body.querySelectorAll('.ct-select').forEach(s => { s.value = ''; });
      body.querySelectorAll('.ct-row').forEach(r => r.classList.remove('wrong', 'correct'));
      body.querySelector('#ct-err').textContent = '—';
    });
  }

  buildGrid();
}
