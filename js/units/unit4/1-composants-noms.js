// ── UNIT 4 · Exercice 1 — Composants de l'ordinateur (noms) ───────────────────
// Content extracted from: 188-Computer_Parts/Section_3/Comparts.tbk

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

function initPartsMatch(container, onBack) {
  runMatching(container, {
    unit: 'UNIT 4 — COMPOSANTS',
    title: 'COMPOSANTS DE L\'ORDINATEUR',
    pairs: exShuffle([...PART_PAIRS]).slice(0, 8),
    onBack,
  });
}
