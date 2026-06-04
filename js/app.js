// ── NAVIGATION ────────────────────────────────────────────────────────────────
function showMenu() {
  document.getElementById('view-exercise').classList.remove('active');
  document.getElementById('view-menu').classList.add('active');
  renderUnits();
}

function openExercise(initFn, backFn) {
  const view = document.getElementById('view-exercise');
  document.getElementById('view-menu').classList.remove('active');
  view.innerHTML = '';
  initFn(view, backFn || showMenu);
  view.classList.add('active');
}

// ── COURSES DATA ──────────────────────────────────────────────────────────────
const COURSES = [
  {
    unit: 'UNIT 1',
    title: 'PRÉTÉRIT & PRESENT PERFECT',
    img: 'images/PreteriteAndPresentPerfect2.png',
    exercises: [
      {
        title: 'CHOISISSEZ LA BONNE TRADUCTION',
        desc: 'Associez chaque phrase française à sa traduction anglaise correcte — prétérit ou present perfect.',
        tags: ['prétérit', 'present perfect', 'traduction'],
        init: initTenses,
      },
      {
        title: 'TRADUIRE EN ANGLAIS',
        desc: 'Choisissez le temps puis tapez la traduction. Correction mot par mot, 4 essais. Aide : Expert, Lexique, Verbes irréguliers.',
        tags: ['traduction', 'prétérit', 'present perfect', 'saisie libre'],
        init: initTenseChoice,
      },
      {
        title: 'EXPRESSION DU TEMPS ET DE LA DURÉE',
        desc: 'Prétérit, present perfect ou past perfect ? Choisissez le temps et traduisez 13 phrases sur for / since / ago.',
        tags: ['traduction', 'durée', 'for', 'since', 'ago', 'past perfect'],
        init: initTenseExpression2,
      },
      {
        title: 'TEST DE RÉVISION',
        desc: '11 phrases de révision complète — prétérit, present perfect et past perfect. Correction mot par mot, 4 essais.',
        tags: ['test', 'révision', 'prétérit', 'present perfect', 'past perfect'],
        init: initBigTest,
      },
    ],
  },
  {
    unit: 'UNIT 2',
    title: 'LES ARTICLES',
    img: 'images/Articles.png',
    exercises: [
      {
        title: 'CHOISISSEZ L\'ARTICLE',
        desc: 'Sélectionnez A / AN / THE ou ∅ pour chaque phrase.',
        tags: ['A', 'AN', 'THE', '∅', 'MCQ'],
        init: initArticlesMCQ,
      },
      {
        title: 'COUNTABLE / UNCOUNTABLE',
        desc: 'Classez les noms selon qu\'ils sont dénombrables ou non.',
        tags: ['countable', 'uncountable'],
        init: initCountable,
      },
      {
        title: 'ARTICLES DANS UN TEXTE',
        desc: 'Complétez les blancs avec le bon article dans un texte télécoms.',
        tags: ['fill-in', 'texte', 'A/AN/THE'],
        init: initArticlesFill,
      },
    ],
  },
  {
    unit: 'UNIT 3',
    title: 'PRÉPOSITIONS',
    img: 'images/Preposition.png',
    exercises: [
      {
        title: 'LIEU',
        desc: 'Positionnez la souris par rapport à l\'ordinateur.',
        tags: ['next to', 'on', 'under', 'in', 'above'],
        init: (c, back) => { c.innerHTML = ''; initPrepositions(c, 'place'); c.querySelector('.back-btn')?.addEventListener('click', back); },
      },
      {
        title: 'MOUVEMENT',
        desc: 'Décrivez la trajectoire de la souris.',
        tags: ['around', 'past', 'over', 'through'],
        init: (c, back) => { c.innerHTML = ''; initPrepositions(c, 'movement'); c.querySelector('.back-btn')?.addEventListener('click', back); },
      },
      {
        title: 'PHRASES',
        desc: 'Complétez des phrases — lieu et mouvement mélangés.',
        tags: ['mixed', 'fill-in'],
        init: (c, back) => { c.innerHTML = ''; initPrepositions(c, 'sentences'); c.querySelector('.back-btn')?.addEventListener('click', back); },
      },
      {
        title: 'FILL IN THE BLANKS',
        desc: 'Complétez les blancs avec la bonne préposition dans des phrases informatiques.',
        tags: ['fill-in', 'computing', 'prepositions'],
        init: initPrepFill,
      },
      {
        title: 'VERBE + PRÉPOSITION',
        desc: 'Associez chaque verbe informatique à sa préposition.',
        tags: ['matching', 'verbes', 'computing'],
        init: initVerbPrep,
      },
      {
        title: 'PRÉPOSITIONS DE TEMPS',
        desc: 'Associez les prépositions de temps anglaises à leur équivalent français.',
        tags: ['matching', 'temps', 'at/in/on'],
        init: initPrepTime,
      },
    ],
  },
  {
    unit: 'UNIT 4',
    title: 'COMPOSANTS DE L\'ORDINATEUR',
    img: 'images/PartsOfAComputer.png',
    exercises: [
      {
        title: 'COMPOSANTS — NOMS',
        desc: 'Associez chaque composant à sa description.',
        tags: ['matching', 'hardware'],
        init: initPartsMatch,
      },
      {
        title: 'SYSTÈME INFORMATIQUE',
        desc: 'Associez composants et définitions du système informatique.',
        tags: ['matching', 'CPU', 'RAM', 'I/O'],
        init: initSystemMatch,
      },
      {
        title: 'VERBES — TRADUCTIONS',
        desc: 'Choisissez la bonne traduction française du verbe informatique.',
        tags: ['MCQ', 'verbes', 'traductions'],
        init: initVerbMCQ,
      },
      {
        title: 'VERBES ANTONYMES',
        desc: 'Associez chaque verbe à son antonyme.',
        tags: ['matching', 'antonymes'],
        init: initAntonyms,
      },
      {
        title: 'VERBES D\'INSTRUCTION',
        desc: 'Associez les verbes d\'instruction à leur traduction.',
        tags: ['matching', 'instructions'],
        init: initInstrVerbs,
      },
      {
        title: 'REMETTRE EN ORDRE',
        desc: 'Remettez les étapes d\'installation dans le bon ordre.',
        tags: ['ordering', 'instructions'],
        init: initReorder,
      },
    ],
  },
  {
    unit: 'UNIT 5',
    title: 'TERMINOLOGIE INFORMATIQUE',
    img: 'images/terminology.png',
    exercises: [
      {
        title: 'TERME → DÉFINITION',
        desc: 'Associez chaque terme informatique à sa définition anglaise.',
        tags: ['matching', 'vocabulaire'],
        init: initTermMatching,
      },
      {
        title: 'QUEL TERME ?',
        desc: 'Retrouvez le terme informatique à partir de sa définition.',
        tags: ['MCQ', 'vocabulaire'],
        init: initTermMCQ,
      },
    ],
  },
];

// ── HEADER HELPERS ────────────────────────────────────────────────────────────
function setMenuHeader(label, title, sub, showBack) {
  document.getElementById('menu-header-label').textContent = label;
  document.getElementById('menu-header-title').textContent = title;
  document.getElementById('menu-header-sub').textContent = sub;
  document.getElementById('menu-back-btn').style.display = showBack ? '' : 'none';
}

// ── RENDER UNITS (level 1) ────────────────────────────────────────────────────
function renderUnits() {
  setMenuHeader('S1 – S2', 'EXERCICES', 'choisissez une unité', false);

  const grid = document.getElementById('menu-grid');
  grid.innerHTML = '';
  grid.className = 'units-grid';

  COURSES.forEach(course => {
    const card = document.createElement('div');
    card.className = 'unit-card';
    const n = course.exercises.length;
    card.innerHTML = `
      <img src="${course.img}" alt="${course.title}" class="unit-card-img">
      <div class="unit-card-body">
        <div class="unit-card-num">${course.unit}</div>
        <div class="unit-card-title">${course.title}</div>
        <div class="unit-card-count">${n} exercice${n > 1 ? 's' : ''}</div>
        <button class="unit-card-cta">VOIR LES EXERCICES →</button>
      </div>`;
    card.addEventListener('click', () => renderExercises(course));
    grid.appendChild(card);
  });
}

// ── RENDER EXERCISES (level 2) ────────────────────────────────────────────────
function renderExercises(course) {
  setMenuHeader(course.unit, course.title, 'choisissez un exercice', true);
  document.getElementById('menu-back-btn').onclick = renderUnits;

  const grid = document.getElementById('menu-grid');
  grid.innerHTML = '';
  grid.className = 'menu-grid';

  course.exercises.forEach((ex, i) => {
    const card = document.createElement('div');
    card.className = 'ex-card';
    card.innerHTML = `
      <img src="${course.img}" alt="${course.title}" class="ex-card-img">
      <div class="ex-card-top">
        <div class="ex-card-unit">EXERCISE ${i + 1}</div>
      </div>
      <div class="ex-card-title">${ex.title}</div>
      <div class="ex-card-desc">${ex.desc}</div>
      <div class="ex-card-tags">${ex.tags.map(t => `<span class="ex-card-tag">${t}</span>`).join('')}</div>
      <button class="ex-card-btn">OUVRIR →</button>`;
    card.addEventListener('click', () => {
      const back = () => {
        document.getElementById('view-exercise').classList.remove('active');
        document.getElementById('view-menu').classList.add('active');
        renderExercises(course);
      };
      openExercise(ex.init, back);
    });
    grid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', renderUnits);
