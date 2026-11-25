const PASS_PERCENT = 75;   // change to your school's pass rule

const SAMPLE = {
  minutes: 60,
  questions: [
    { img: "images/exam/q1.png",   // optional picture, delete the line if none
      q: "What does this sign mean?",
      o: ["Road closed ahead.", "Railway crossing ahead.", "Unprotected railway crossing.", "Unprotected railway crossing ahead."], c: 3 },
    { q: "What does a red octagonal sign mean?", o: ["Give way", "Stop", "No parking"], c: 1 },
    { q: "When must you use your indicator?", o: ["Only at night", "Before turning or changing lanes", "Never"], c: 1 }
  ]
};

/* Add papers by number. Copy a block to make Paper 3, 4 and so on. */
const PAPERS = {
  en: { 1: SAMPLE, 2: SAMPLE, 3: SAMPLE, 4: SAMPLE },
  si: { 1: SAMPLE, 2: SAMPLE, 3: SAMPLE, 4: SAMPLE },
  ta: { 1: SAMPLE, 2: SAMPLE, 3: SAMPLE, 4: SAMPLE }
};