// ── BOOTSTRAP D'UNE PAGE D'UNITÉ ──────────────────────────────────────────────
// Chargé par unitN.html APRÈS l'engine, le(s) js/ex-*.js de l'unité, et son
// fichier de données js/units/unitN.js (qui définit window.UNIT). Affiche la
// liste des exercices (niveau 2) et ouvre chaque exercice en JS (niveau 3).

function setMenuHeader(label, title, sub) {
  document.getElementById('menu-header-label').textContent = label;
  document.getElementById('menu-header-title').textContent = title;
  document.getElementById('menu-header-sub').textContent = sub;
}

function openExercise(initFn, backFn) {
  const view = document.getElementById('view-exercise');
  document.getElementById('view-menu').classList.remove('active');
  view.innerHTML = '';
  initFn(view, backFn);
  view.classList.add('active');
}

function renderExercises() {
  const u = window.UNIT;
  setMenuHeader(u.unit, u.title, 'choisissez un exercice');

  const grid = document.getElementById('menu-grid');
  grid.innerHTML = '';
  grid.className = 'menu-grid';

  u.exercises.forEach((ex, i) => {
    const card = document.createElement('div');
    card.className = 'ex-card';
    card.innerHTML = `
      <img src="${u.img}" alt="${u.title}" class="ex-card-img">
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
        renderExercises();
      };
      openExercise(ex.init, back);
    });
    grid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', renderExercises);
