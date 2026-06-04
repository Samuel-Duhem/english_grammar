// ── COMPOSANTS DE L'ORDINATEUR ────────────────────────────────────────────────
// Content extracted from:
//   188-Computer_Parts/Section_7/Vbqcm.tbk       → verb EN→FR QCM
//   188-Computer_Parts/Section_6/Instvb2.tbk      → verb antonyms
//   188-Computer_Parts/Section_5/Instvb1.tbk      → verbs in instructions
//   188-Computer_Parts/Section_8/Compsyst.tbk     → computer system components
//   188-Computer_Parts/Section_4/Reorder.tbk      → instruction ordering
//   188-Computer_Parts/Section_3/Comparts.tbk     → component names

// Exercise 1 — English verb → French translation (QCM)
const VERB_MCQ = [
  { verb: 'to delete', correct: 'effacer / supprimer', wrong: ['afficher', 'charger', 'traiter'] },
  { verb: 'to display', correct: 'afficher', wrong: ['effacer', 'saisir', 'charger'] },
  { verb: 'to abort', correct: 'abandonner / interrompre', wrong: ['charger', 'afficher', 'traiter'] },
  { verb: 'to input', correct: 'saisir / entrer', wrong: ['effacer', 'signaler', 'charger'] },
  { verb: 'to merge', correct: 'fusionner', wrong: ['sauter', 'traiter', 'afficher'] },
  { verb: 'to load', correct: 'charger', wrong: ['fusionner', 'effacer', 'signaler'] },
  { verb: 'to flag', correct: 'signaler', wrong: ['charger', 'basculer', 'sauter'] },
  { verb: 'to prompt', correct: 'inviter', wrong: ['traiter', 'fusionner', 'charger'] },
  { verb: 'to process', correct: 'traiter', wrong: ['inviter', 'signaler', 'afficher'] },
  { verb: 'to undo', correct: 'annuler', wrong: ['traiter', 'charger', 'fusionner'] },
  { verb: 'to skip', correct: 'sauter / passer', wrong: ['annuler', 'inviter', 'initialiser'] },
  { verb: 'to toggle', correct: 'basculer', wrong: ['sauter', 'annuler', 'charger'] },
  { verb: 'to enable', correct: 'activer', wrong: ['annuler', 'sauter', 'signaler'] },
  { verb: 'to clear', correct: 'initialiser / effacer', wrong: ['activer', 'basculer', 'fusionner'] },
  { verb: 'to disable', correct: 'désactiver', wrong: ['activer', 'charger', 'effacer'] },
  { verb: 'to move', correct: 'déplacer', wrong: ['traiter', 'fusionner', 'signaler'] },
  { verb: 'to match', correct: 'correspondre', wrong: ['déplacer', 'basculer', 'sauter'] },
  { verb: 'to occur', correct: 'se produire', wrong: ['correspondre', 'annuler', 'charger'] },
  { verb: 'to overwrite', correct: 'écraser', wrong: ['afficher', 'se produire', 'traiter'] },
  { verb: 'to shift', correct: 'décaler', wrong: ['écraser', 'basculer', 'déplacer'] },
];

// Exercise 2 — Verb antonyms matching (from Instvb2.tbk)
const ANTONYM_PAIRS = [
  { left: 'to connect', right: 'to disconnect' },
  { left: 'to decrease', right: 'to increase' },
  { left: 'to disable', right: 'to enable' },
  { left: 'to lengthen', right: 'to shorten' },
  { left: 'to plug in', right: 'to unplug' },
  { left: 'to press / depress', right: 'to release' },
  { left: 'to shut off', right: 'to switch on' },
  { left: 'to switch off', right: 'to switch on' },
  { left: 'to separate', right: 'to join' },
  { left: 'to tighten', right: 'to unscrew' },
  { left: 'to turn on', right: 'to turn off' },
];

// Exercise 3 — Computer system: component → description (from Compsyst.tbk)
const SYSTEM_PAIRS = [
  { left: 'Keyboard', right: 'Used to type data.' },
  { left: 'Mouse', right: 'Used to point on the screen.' },
  { left: 'Scanner', right: 'Optical device, used to collect data from texts or pictures.' },
  { left: 'Printer', right: 'Output device that produces a hard copy.' },
  { left: 'Monitor', right: 'Output device with a screen.' },
  { left: 'RAM (Random Access Memory)', right: 'Primary memory — fast, non-sequential access.' },
  { left: 'Hard Disk', right: 'Secondary memory — stores data permanently.' },
  { left: 'Processor / CPU', right: 'A device to make calculations.' },
  { left: 'Arithmetic Logic Unit', right: 'Performs arithmetic and logic operations.' },
  { left: 'Control Unit', right: 'Directs and coordinates processing activities.' },
  { left: 'ROM', right: 'A read-only store location.' },
  { left: 'Lightpen', right: 'Used with a graphical unit to point on screen.' },
];

// Exercise 4 — Put instructions in correct order (from Reorder.tbk)
const INSTALL_STEPS = [
  'Shut down your computer by choosing Shut Down from the menu.',
  'Unplug all the cables except the power cord from your computer.',
  'If there are security screws on the vertical plate, remove them with a Philips screwdriver.',
  'Release the two catches underneath and lift up to remove the panel.',
  'Pulling gently, slide the tray out.',
];

// Exercise 5 — Instruction verbs EN → FR (from Instvb1.tbk)
const INSTR_VERB_PAIRS = [
  { left: 'to plug in', right: 'brancher' },
  { left: 'to check', right: 'vérifier' },
  { left: 'to make sure / ensure', right: 'assurer / s\'assurer' },
  { left: 'to insert', right: 'introduire' },
  { left: 'to refer to', right: 'se reporter à' },
  { left: 'to set', right: 'mettre / régler' },
  { left: 'to slide', right: 'faire glisser' },
  { left: 'to rotate', right: 'tourner' },
  { left: 'to run', right: 'fonctionner / exécuter' },
];

// Exercise 6 — Computer component names (from Comparts.tbk)
const PART_PAIRS = [
  { left: 'Motherboard', right: 'Main circuit board — connects all components.' },
  { left: 'Power Supply Unit', right: 'Converts mains power to DC for the computer.' },
  { left: 'Graphics Card', right: 'Processes and outputs video signals to the monitor.' },
  { left: 'Hard Disk Drive', right: 'Stores data permanently on magnetic platters.' },
  { left: 'Memory Slots (RAM)', right: 'Slots where RAM modules are inserted.' },
  { left: 'CD-ROM Drive', right: 'Reads data from compact discs.' },
  { left: 'Flat Cable', right: 'Ribbon cable connecting drives to the motherboard.' },
  { left: 'PCI Ports', right: 'Expansion slots for additional cards (sound, network…).' },
  { left: 'Cooling Fan', right: 'Maintains safe operating temperature.' },
  { left: 'Loud Speaker', right: 'Outputs audio from the sound card.' },
];

// ── INIT FUNCTIONS ─────────────────────────────────────────────────────────────

function initVerbMCQ(container, onBack) {
  const questions = exShuffle(VERB_MCQ).slice(0, 10).map(v => ({
    q: `Quelle est la traduction de "${v.verb}" ?`,
    options: exShuffle([
      { text: v.correct, correct: true },
      ...v.wrong.map(w => ({ text: w, correct: false })),
    ]).slice(0, 4),
  }));
  runMCQ(container, {
    unit: 'UNIT 4 — COMPOSANTS',
    title: 'VERBES — TRADUCTIONS',
    questions,
    onBack,
  });
}

function initAntonyms(container, onBack) {
  runMatching(container, {
    unit: 'UNIT 4 — COMPOSANTS',
    title: 'VERBES ANTONYMES',
    pairs: exShuffle([...ANTONYM_PAIRS]).slice(0, 8),
    onBack,
  });
}

function initInstrVerbs(container, onBack) {
  runMatching(container, {
    unit: 'UNIT 4 — COMPOSANTS',
    title: 'VERBES D\'INSTRUCTION',
    pairs: exShuffle([...INSTR_VERB_PAIRS]),
    onBack,
  });
}

function initSystemMatch(container, onBack) {
  runMatching(container, {
    unit: 'UNIT 4 — COMPOSANTS',
    title: 'SYSTÈME INFORMATIQUE',
    pairs: exShuffle([...SYSTEM_PAIRS]).slice(0, 8),
    onBack,
  });
}

function initPartsMatch(container, onBack) {
  runMatching(container, {
    unit: 'UNIT 4 — COMPOSANTS',
    title: 'COMPOSANTS DE L\'ORDINATEUR',
    pairs: exShuffle([...PART_PAIRS]).slice(0, 8),
    onBack,
  });
}

function initReorder(container, onBack) {
  runOrder(container, {
    unit: 'UNIT 4 — COMPOSANTS',
    title: 'REMETTRE EN ORDRE',
    steps: INSTALL_STEPS,
    onBack,
  });
}
