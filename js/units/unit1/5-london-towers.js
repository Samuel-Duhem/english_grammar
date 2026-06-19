// ── UNIT 1 · Exercice 5 — London Towers (prononciation du -ed) ────────────────
// Content extracted from: 182-Preterite_Present_Perfect/Section_5/VBED.TBK

const LONDON_TOWERS_ITEMS = [
  { word: 'generated',   category: 'id' },
  { word: 'watched',     category: 't'  },
  { word: 'asked',       category: 't'  },
  { word: 'combined',    category: 'd'  },
  { word: 'interpreted', category: 'id' },
  { word: 'decided',     category: 'id' },
  { word: 'logged',      category: 'd'  },
  { word: 'scaled',      category: 'd'  },
  { word: 'published',   category: 't'  },
  { word: 'produced',    category: 't'  },
  { word: 'persuaded',   category: 'id' },
  { word: 'developed',   category: 't'  },
  { word: 'programmed',  category: 'd'  },
  { word: 'arranged',    category: 'd'  },
  { word: 'distributed', category: 'id' },
];

const LONDON_TOWERS_CATEGORIES = [
  { id: 't',  label: '[t]'  },
  { id: 'd',  label: '[d]'  },
  { id: 'id', label: '[id]' },
];

function initLondonTowers(container, onBack) {
  runSort(container, {
    unit: 'UNIT 1 — PRÉTÉRIT & PRESENT PERFECT',
    title: 'LONDON TOWERS',
    items: LONDON_TOWERS_ITEMS,
    categories: LONDON_TOWERS_CATEGORIES,
    help: 'Cliquez sur un verbe pour le sélectionner, puis cliquez sur la colonne correspondant à la prononciation de sa terminaison -ed. Si la colonne refuse le verbe, vous vous êtes trompé.',
    onBack,
  });
}
