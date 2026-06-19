// ── ACCUEIL : grille des unités (niveau 1) ────────────────────────────────────
// Chaque carte est un lien vers la page de l'unité (vraie navigation multi-pages).
function renderUnits() {
  const grid = document.getElementById('menu-grid');
  grid.innerHTML = '';
  grid.className = 'units-grid';

  UNITS.forEach(u => {
    const card = document.createElement('div');
    card.className = 'unit-card';
    card.innerHTML = `
      <img src="${u.img}" alt="${u.title}" class="unit-card-img">
      <div class="unit-card-body">
        <div class="unit-card-num">${u.unit}</div>
        <div class="unit-card-title">${u.title}</div>
        <div class="unit-card-count">${u.count} exercice${u.count > 1 ? 's' : ''}</div>
        <button class="unit-card-cta">VOIR LES EXERCICES →</button>
      </div>`;
    card.addEventListener('click', () => { window.location.href = u.href; });
    grid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', renderUnits);
