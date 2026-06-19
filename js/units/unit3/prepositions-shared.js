// ── PRÉPOSITIONS — Moteur interactif partagé ──────────────────────────────────
// Machinerie commune aux 3 exercices interactifs (LIEU / MOUVEMENT / PHRASES).
// Les données de chaque exercice sont dans 1-lieu.js, 2-mouvement.js, 3-phrases.js
// qui appellent initPrepositionsExercise(container, data, onBack).

// ── SVG HELPERS ───────────────────────────────────────────────────────────────
function monitor(x, y, w) {
  const h = Math.round(w * 0.72), bdr = Math.round(w * 0.07), chin = Math.round(w * 0.13),
        sw = Math.round(w * 0.3), sh = Math.round(w * 0.09), sb = Math.round(w * 0.05),
        sw2 = Math.round(w * 0.46);
  return `<g>
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="#1a1a1a"/>
    <rect x="${x+bdr}" y="${y+bdr}" width="${w-bdr*2}" height="${h-bdr-chin}" rx="2" fill="#c6e0ef"/>
    <rect x="${x+bdr+2}" y="${y+bdr+2}" width="${w-bdr*2-4}" height="${h-bdr-chin-4}" rx="1" fill="#deeef8" opacity=".6"/>
    <rect x="${x}" y="${y+h-chin}" width="${w}" height="${chin}" rx="0" fill="#2a2a2a"/>
    <rect x="${x}" y="${y+h-chin+1}" width="${w}" height="${chin-1}" rx="0" fill="#333"/>
    <rect x="${x+(w-sw)/2}" y="${y+h}" width="${sw}" height="${sh}" fill="#999"/>
    <rect x="${x+(w-sw2)/2}" y="${y+h+sh}" width="${sw2}" height="${sb}" rx="3" fill="#c0c0c0"/>
  </g>`;
}

function mouse(x, y, w) {
  const h = Math.round(w * 1.42), rx = Math.round(w / 2);
  const ww = Math.round(w * 0.3), wh = Math.round(h * 0.24),
        wx = x + Math.round(w / 2) - Math.round(w * 0.15), wy = y + Math.round(h * 0.1);
  return `<g>
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="#b8c8d4"/>
    <rect x="${x+1}" y="${y+1}" width="${w-2}" height="${Math.round(h*0.55)}" rx="${rx}" fill="#ccdde8" opacity=".5"/>
    <line x1="${x+w/2}" y1="${y+3}" x2="${x+w/2}" y2="${y+h*0.68}" stroke="#7a9ab0" stroke-width="${Math.max(1.5, w*0.1)}"/>
    <rect x="${wx}" y="${wy}" width="${ww}" height="${wh}" rx="${Math.round(ww/2)}" fill="#4e6e80"/>
    <rect x="${wx+1}" y="${wy+1}" width="${ww-2}" height="${Math.round(wh*0.4)}" rx="${Math.round(ww/2)}" fill="#6a8ea0" opacity=".5"/>
  </g>`;
}

function arrowDef(id, color = '#e05a2b') {
  return `<defs><marker id="a${id}" markerWidth="9" markerHeight="9" refX="6" refY="4.5" orient="auto"><polygon points="0,0 9,4.5 0,9" fill="${color}"/></marker></defs>`;
}

function svgLine(x1, y1, x2, y2, id, dashed = false, color = '#e05a2b') {
  return arrowDef(id, color) + `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="2.5"${dashed ? ' stroke-dasharray="6,3"' : ''} marker-end="url(#a${id})"/>`;
}

function curve(path, id, color = '#e05a2b') {
  return arrowDef(id, color) + `<path d="${path}" fill="none" stroke="${color}" stroke-width="2.5" stroke-dasharray="6,3" marker-end="url(#a${id})"/>`;
}

function svgW(inner, vw, vh) {
  return `<svg viewBox="0 0 ${vw} ${vh}" width="90" height="${Math.round(vh * 90 / vw)}">${inner}</svg>`;
}

let _svgId = 0;
function uid() { return 's' + (++_svgId); }

// ── PLACE & MOVEMENT SCENES ───────────────────────────────────────────────────
const SC = {
  'next to':     () => svgW(monitor(38, 10, 66) + mouse(6, 22, 20), 120, 92),
  'on':          () => svgW(monitor(30, 30, 68) + mouse(50, 4, 20), 120, 98),
  'in front of': () => svgW(monitor(30, 5, 68) + mouse(50, 65, 20), 120, 104),
  'under':       () => svgW(monitor(30, 2, 68) + mouse(50, 62, 20), 120, 100),
  'between':     () => svgW(monitor(0, 14, 50) + mouse(46, 27, 18) + monitor(70, 14, 50), 120, 88),
  'among':       () => svgW(mouse(2, 2, 16) + mouse(96, 2, 16) + mouse(2, 68, 16) + mouse(96, 68, 16) + mouse(48, 34, 22), 120, 98),
  'behind':      () => svgW(mouse(46, 24, 22) + monitor(28, 18, 72) + `<rect x="28" y="18" width="72" height="52" rx="4" fill="#1a1a1a" opacity=".3"/>`, 120, 88),
  'far from':    () => svgW(monitor(0, 20, 44) + mouse(96, 26, 20), 120, 88),
  'above':       () => svgW(`<polygon points="20,112 100,112 86,36 34,36" fill="#d0d0d0" stroke="#888" stroke-width="1.5"/><rect x="44" y="43" width="32" height="22" rx="2" fill="#c6e0ef"/>` + mouse(44, 3, 26), 120, 116),
  'in':          () => svgW(monitor(4, 4, 114) + mouse(44, 24, 28), 120, 92),
  'around':      () => { const id = uid(); return svgW(monitor(28, 30, 66) + curve(`M 61 18 A 52 44 0 1 1 60 18`, id) + mouse(48, 2, 22), 120, 108); },
  'to (towards)':() => { const id = uid(); return svgW(monitor(58, 18, 62) + mouse(2, 32, 22) + svgLine(24, 45, 58, 45, id), 122, 92); },
  'past':        () => { const id = uid(); return svgW(monitor(36, 18, 58) + mouse(2, 54, 20) + svgLine(0, 67, 130, 67, id), 132, 92); },
  'away from':   () => { const id = uid(); return svgW(monitor(0, 20, 60) + mouse(92, 28, 22) + svgLine(62, 44, 90, 44, id), 120, 92); },
  'over':        () => { const id = uid(); return svgW(monitor(6, 54, 110) + mouse(0, 38, 20) + curve(`M 11 56 Q 63 3 115 56`, id), 122, 108); },
  'through':     () => { const id = uid(); return svgW(monitor(20, 12, 82) + `<rect x="20" y="12" width="82" height="60" rx="4" fill="#000" opacity=".18"/>` + mouse(0, 42, 20) + svgLine(0, 54, 128, 54, id), 130, 102); },
  'along':       () => { const id = uid(); return svgW(`<line x1="0" y1="74" x2="128" y2="74" stroke="#bbb" stroke-width="3"/>` + mouse(2, 36, 20) + svgLine(22, 52, 122, 52, id), 130, 88); },
  'across':      () => {
    const id1 = uid(), id2 = uid();
    return svgW(
      `<line x1="6" y1="110" x2="118" y2="8" stroke="#bbb" stroke-width="2.5"/>` +
      mouse(2, 78, 20) + mouse(96, 4, 20) +
      arrowDef(id1, '#e05a2b') + arrowDef(id2, '#4a7ed4') +
      `<line x1="22" y1="86" x2="96" y2="24" stroke="#e05a2b" stroke-width="2" stroke-dasharray="5,3" marker-end="url(#a${id1})"/>` +
      `<line x1="96" y1="24" x2="22" y2="86" stroke="#4a7ed4" stroke-width="2" stroke-dasharray="5,3" marker-end="url(#a${id2})"/>`,
      128, 116
    );
  },
};

// ── EXERCISE STATE ────────────────────────────────────────────────────────────
let prepData = null, prepAnswers = {}, prepAttempts = 0, prepLocked = {}, prepDragging = null;

function prepIsSentences() { return prepData.kind === 'sentences'; }
function prepItems()       { return prepData.items; }
function prepOpts()        { return prepData.opts; }
function prepMap()         { return prepData.map; }
function prepGetShort(opt) { if (!opt) return ''; const m = prepMap(); return m[opt] || opt.split(' (')[0]; }
function prepGetOptForAnswer(ans) {
  for (const o of prepOpts()) { if ((prepMap()[o] || o) === ans) return o; }
  return ans;
}

// ── RENDER ────────────────────────────────────────────────────────────────────
function prepRender() {
  prepIsSentences() ? prepRenderSentences() : prepRenderGrid();
  prepRenderChips();
  prepRenderBtn();
}

function prepRenderGrid() {
  const el = document.getElementById('exercise-area');
  el.innerHTML = '<div class="grid" id="grid"></div>';
  const g = document.getElementById('grid');
  prepItems().forEach(item => {
    const ok = prepLocked[item.id], ans = prepAnswers[item.id];
    const card = document.createElement('div');
    card.className = 'card' + (ok ? ' correct' : '');
    const short = ans ? prepGetShort(ans) : '';
    const lbl = ans
      ? item.label.replace('___', `<strong style="color:#222">${short}</strong>`)
      : item.label;
    card.innerHTML = `
      <div class="cnum">#${item.id}</div>
      <div>${(SC[item.answer] || SC['next to'])()}</div>
      <div class="clabel">${lbl}</div>
      <div class="dz${ok ? ' czn' : ans ? ' filled' : ''}" id="dz${item.id}">${ok || ans ? prepGetShort(ans) : 'drop here'}</div>`;
    if (!ok) {
      const dz = card.querySelector('.dz');
      dz.addEventListener('dragover', e => { e.preventDefault(); dz.classList.add('over'); });
      dz.addEventListener('dragleave', () => dz.classList.remove('over'));
      dz.addEventListener('drop', e => { e.preventDefault(); dz.classList.remove('over'); prepHandleDrop(item.id); });
      if (ans) {
        dz.draggable = true;
        dz.addEventListener('dragstart', e => {
          prepDragging = { from: 'dz', itemId: item.id, opt: ans };
          dz.classList.add('dragging');
          e.dataTransfer.effectAllowed = 'move';
        });
        dz.addEventListener('dragend', () => dz.classList.remove('dragging'));
        dz.addEventListener('click', () => { delete prepAnswers[item.id]; prepRender(); });
      }
    }
    g.appendChild(card);
  });
}

function prepRenderSentences() {
  const el = document.getElementById('exercise-area');
  el.innerHTML = '<div class="sentences" id="sents"></div>';
  const s = document.getElementById('sents');
  prepItems().forEach(item => {
    const ok = prepLocked[item.id], ans = prepAnswers[item.id];
    const row = document.createElement('div');
    row.className = 'sent-row' + (ok ? ' correct' : '');

    const numSpan = document.createElement('span');
    numSpan.className = 'snum';
    numSpan.textContent = item.id + '.';
    row.appendChild(numSpan);

    const [before, , after] = item.parts;
    if (before) {
      const t = document.createElement('span');
      t.textContent = before + ' ';
      row.appendChild(t);
    }

    const dz = document.createElement('span');
    dz.id = 'sdz' + item.id;
    dz.className = 'sent-dz' + (ok ? ' czn' : ans ? ' filled' : '');
    dz.textContent = ok || ans ? (prepMap()[ans] || ans) : 'drop here';

    if (!ok) {
      dz.addEventListener('dragover', e => { e.preventDefault(); dz.classList.add('over'); });
      dz.addEventListener('dragleave', () => dz.classList.remove('over'));
      dz.addEventListener('drop', e => { e.preventDefault(); dz.classList.remove('over'); prepHandleDrop(item.id); });
      if (ans) {
        dz.draggable = true;
        dz.addEventListener('dragstart', e => {
          prepDragging = { from: 'dz', itemId: item.id, opt: ans };
          dz.classList.add('dragging');
          e.dataTransfer.effectAllowed = 'move';
        });
        dz.addEventListener('dragend', () => dz.classList.remove('dragging'));
        dz.addEventListener('click', () => { delete prepAnswers[item.id]; prepRender(); });
      }
    }
    row.appendChild(dz);

    if (after) {
      const t = document.createElement('span');
      t.textContent = ' ' + after;
      row.appendChild(t);
    }
    s.appendChild(row);
  });
}

function prepRenderChips() {
  const used = new Set(Object.values(prepAnswers));
  const c = document.getElementById('chips');
  c.innerHTML = '';
  const unlimited = prepIsSentences();
  prepOpts().forEach(opt => {
    if (!unlimited && used.has(opt)) return;
    const ch = document.createElement('div');
    ch.className = 'chip';
    ch.textContent = opt;
    ch.draggable = true;
    ch.addEventListener('dragstart', e => {
      prepDragging = { from: 'bank', opt };
      ch.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
    });
    ch.addEventListener('dragend', () => ch.classList.remove('dragging'));
    c.appendChild(ch);
  });
}

function prepRenderBtn() {
  const hasAny = Object.keys(prepAnswers).length > 0;
  document.getElementById('bchk').disabled = !hasAny || prepAttempts >= 2;
}

function prepHandleDrop(targetId) {
  if (!prepDragging || prepLocked[targetId]) return;
  const prevOpt = prepAnswers[targetId];
  prepAnswers[targetId] = prepDragging.opt;
  if (prepDragging.from === 'dz') {
    if (prevOpt !== undefined) {
      prepAnswers[prepDragging.itemId] = prevOpt;
    } else {
      delete prepAnswers[prepDragging.itemId];
    }
  }
  prepDragging = null;
  prepRender();
}

// ── CHECK ─────────────────────────────────────────────────────────────────────
function checkAnswers() {
  const itms = prepItems(), mp = prepMap();
  const wrong = [];
  itms.forEach(item => {
    if (prepLocked[item.id] || !prepAnswers[item.id]) return;
    const chosen = mp[prepAnswers[item.id]] || prepAnswers[item.id];
    if (chosen === item.answer) { prepLocked[item.id] = true; }
    else wrong.push(item.id);
  });

  wrong.forEach(id => {
    const dzId = prepIsSentences() ? 'sdz' + id : 'dz' + id;
    const dz = document.getElementById(dzId);
    if (dz) { dz.classList.add('wzn'); setTimeout(() => dz.classList.remove('wzn'), 1400); }
    delete prepAnswers[id];
  });

  prepAttempts++;
  const total = itms.length;
  const correctNow = Object.keys(prepLocked).length;
  const sc = document.getElementById('sc');
  const att = document.getElementById('att');

  if (correctNow === total) {
    sc.className = 'sc g'; sc.textContent = `${total}/${total} — Excellent! 🎉`; att.textContent = '';
    document.getElementById('bchk').disabled = true;
  } else if (prepAttempts >= 2) {
    itms.forEach(item => {
      if (!prepLocked[item.id]) { prepAnswers[item.id] = prepGetOptForAnswer(item.answer); prepLocked[item.id] = 'revealed'; }
    });
    sc.className = 'sc b'; sc.textContent = `${correctNow}/${total} — Réponses révélées`; att.textContent = '';
    document.getElementById('bchk').disabled = true;
  } else {
    sc.className = 'sc o'; sc.textContent = `${correctNow}✓ — ${wrong.length}✗ wrong → try again!`;
    att.textContent = `(1 attempt left)`;
  }
  prepRender();
}

// ── RESET ─────────────────────────────────────────────────────────────────────
function resetAll() {
  prepAnswers = {}; prepLocked = {}; prepAttempts = 0;
  document.getElementById('sc').textContent = '';
  document.getElementById('att').textContent = '';
  prepRender();
}

// ── INIT — appelée par chaque fichier d'exercice (1-lieu / 2-mouvement / 3-phrases)
function initPrepositionsExercise(container, data, onBack) {
  prepData = data;
  prepAnswers = {};
  prepAttempts = 0;
  prepLocked = {};
  prepDragging = null;

  container.innerHTML = '';
  // Header standard du moteur → même bouton « ← MENU » que les autres exercices.
  buildExHdr(container, 'UNIT 3 — PRÉPOSITIONS', data.title, onBack);

  const cnt = document.createElement('div');
  cnt.className = 'cnt';
  cnt.innerHTML = `
    <div class="exercise-layout">
      <div class="bank">
        <div class="blabel">PRÉPOSITIONS</div>
        <div class="chips" id="chips"></div>
      </div>
      <div class="exercise-main">
        <p class="inst" id="inst"></p>
        <div class="btns">
          <button class="bchk" id="bchk">CHECK ANSWERS</button>
          <button class="brst" id="brst">RESET</button>
          <span class="sc" id="sc"></span>
          <span class="att" id="att"></span>
        </div>
        <div id="exercise-area"></div>
      </div>
    </div>`;
  container.appendChild(cnt);

  document.getElementById('bchk').addEventListener('click', checkAnswers);
  document.getElementById('brst').addEventListener('click', resetAll);
  document.getElementById('inst').textContent = data.inst;
  prepRender();
}
