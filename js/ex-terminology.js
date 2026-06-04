// ── TERMINOLOGIE INFORMATIQUE ─────────────────────────────────────────────────
// Content extracted from: 185-Computing_Terminology/Section_1/COL.txt

const TERMS = [
  { term: 'Abort', def: 'To stop the running of a computer program, usually when things go wrong.' },
  { term: 'Access time', def: 'The time taken by the computer to fetch data from an address within the computer or other storage device.' },
  { term: 'Accumulator', def: 'A special location used to hold the result of calculations during processing.' },
  { term: 'Algorithm', def: 'A planned set of instructions or steps designed to solve a particular problem.' },
  { term: 'Applet', def: 'A simple, single-function program that is often part of a larger package.' },
  { term: 'Arithmetic Logic Unit (ALU)', def: 'The part of the computer where calculations are carried out and logic operations are performed.' },
  { term: 'Array', def: 'An arranged set of locations any of which can be accessed from a common starting address.' },
  { term: 'Artificial intelligence (AI)', def: 'The ability a machine has to learn from its experiences and to make decisions based on these experiences.' },
  { term: 'Assembly Language', def: 'A low-level language similar to the way the computer hardware works, but easier to use than machine code.' },
  { term: 'ADSL', def: 'Provides a connection through telephone copper wires, receiving data between 2 and 8 Mbps.' },
  { term: 'ALGOL', def: 'ALGorithmic Oriented Language — a high-level programming language developed in Europe.' },
  { term: 'Analog-to-digital converter', def: 'A device that converts a continuously varying signal into a series of numbers.' },
  { term: 'Adder', def: 'A device which performs addition on digital signals giving both the sum and the carry digit.' },
  { term: 'AND gate', def: 'A logic circuit whose output is logic value 1 only when all its inputs have logic value 1.' },
  { term: 'Acronym', def: 'A word formed from the initial letters of a group of words or a phrase.' },
  { term: 'Address', def: 'The reference number given to each location in a computer\'s memory that stores data.' },
  { term: 'Analogue computer', def: 'A machine designed to work on data represented by a physical quantity that varies continuously.' },
  { term: 'Backup', def: 'A spare copy for when things go wrong and to avoid the disaster which can follow the damaging or corruption of disks or data.' },
  { term: 'Default', def: 'An instruction or value that will be used by a program unless it is altered by the user.' },
  { term: 'Documentation', def: 'Printed information which accompanies a computer program and gives advice on how to use the package.' },
  { term: 'E-commerce', def: 'The use of the Internet for commercial purposes, reducing the need for people to meet face to face.' },
  { term: 'Encryption', def: 'The changing of data for security so that it cannot be recognized except by an authorized receiver.' },
  { term: 'File', def: 'A collection of related data. Just as sheets of paper form a file in a cabinet, data can be formed into a file suitable for a computer.' },
  { term: 'Flowchart', def: 'A set of special boxes or shapes drawn on paper and connected by lines to show the order of a set of events, used by programmers.' },
  { term: 'Hotspot', def: 'Highlighted words on a web page, usually in blue and underlined, which are hyperlinks jumping the user to a linked web page.' },
  { term: 'Hub', def: 'The central node of a star arrangement of a local area network (LAN) which has a separate connection to each computer.' },
  { term: 'JPEG', def: 'A standard for data compression of still pictures which, unlike GIF, is a lossy compression as some original data cannot be recovered.' },
  { term: 'Microcomputer', def: 'A computer which uses a microprocessor chip (Intel, AMD).' },
  { term: 'MP3', def: 'A format for storing digitised music which compresses data by a factor of about 10, enabling fast Internet downloads.' },
  { term: 'On/Off line', def: 'Connected or not connected to the computer. Off-line terminals are often used for data preparation.' },
  { term: 'Password', def: 'A group of characters required by a computer before it will allow access by the user.' },
  { term: 'Piracy', def: 'The illegal copying of software for use on more than one machine. Most programs are licensed for use on just one computer.' },
  { term: 'Plug-ins', def: 'Software programs usually available on the Internet which are added to the web browser to display downloaded data.' },
  { term: 'Portability', def: 'The ability of software to run on different machines with little modification.' },
  { term: 'SMS', def: 'Short Message Service — for sending messages of up to 160 characters to mobile phones using GSM communication.' },
  { term: 'Sorting', def: 'The arranging of items of data into a predetermined order (alphabetical or numerical — names, types, date of creating).' },
  { term: 'Spam', def: 'Junk electronic mail which is unsolicited, sent to a large number of users without their consent.' },
  { term: 'Transistor', def: 'A semiconductor invented in 1948 that replaced vacuum tubes, revolutionising electronics and computing.' },
  { term: 'Validation', def: 'A check to ensure that data is sensible and accurate during collection, inputting or transferring.' },
  { term: 'Variable', def: 'A numerical value or text string that can change; the OS reserves a memory location for it, labelled for immediate access.' },
  { term: 'Verification', def: 'A check that something has been accurately typed and transmitted — a second keyed copy is compared to the first.' },
  { term: 'Video conference', def: 'A discussion between groups in different places who can see and hear each other via telecommunication networks.' },
  { term: 'Virtual memory', def: 'Simulating more memory than actually exists, allowing the computer to run larger programs or more programs concurrently.' },
  { term: 'Virus', def: 'A routine introduced into a program that, when activated, produces unwanted results ranging from screen messages to data corruption.' },
  { term: 'Volatile memory', def: 'All types of memory which lose their stored data as soon as the power is switched off (e.g. RAM, cache).' },
  { term: 'Workstation', def: 'A computer in a modern office having its own terminal connected to the company\'s network.' },
  { term: 'WWW', def: 'World Wide Web — a widely distributed multimedia information resource on the internet, viewed through a browser.' },
];

// Exercise 1: Match term → short definition (6 at a time)
function initTermMatching(container, onBack) {
  const subset = exShuffle([...TERMS]).slice(0, 6).map(t => ({
    left: t.term,
    right: t.def,
  }));
  runMatching(container, {
    unit: 'UNIT 5 — TERMINOLOGIE',
    title: 'TERME → DÉFINITION',
    pairs: subset,
    onBack,
  });
}

// Exercise 2: MCQ — which term matches this definition?
function initTermMCQ(container, onBack) {
  const shuffled = exShuffle([...TERMS]);
  const questions = shuffled.slice(0, 8).map((t, i) => {
    const distractors = shuffled.filter((_, j) => j !== i).slice(0, 3);
    return {
      q: t.def,
      options: exShuffle([
        { text: t.term, correct: true },
        ...distractors.map(d => ({ text: d.term, correct: false })),
      ]),
    };
  });
  runMCQ(container, {
    unit: 'UNIT 5 — TERMINOLOGIE',
    title: 'QUEL TERME ?',
    questions,
    onBack,
  });
}
