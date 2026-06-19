// ── UNIT 4 · Exercice 6 — Remettre en ordre ───────────────────────────────────
// Content extracted from: 188-Computer_Parts/Section_4/Reorder.tbk

const INSTALL_STEPS = [
  'Shut down your computer by choosing Shut Down from the menu.',
  'Unplug all the cables except the power cord from your computer.',
  'If there are security screws on the vertical plate, remove them with a Philips screwdriver.',
  'Release the two catches underneath and lift up to remove the panel.',
  'Pulling gently, slide the tray out.',
];

function initReorder(container, onBack) {
  runOrder(container, {
    unit: 'UNIT 4 — COMPOSANTS',
    title: 'REMETTRE EN ORDRE',
    steps: INSTALL_STEPS,
    onBack,
  });
}
