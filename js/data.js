/* Edit your school details and content here */
const SHOPS = [
  {
    name: "Tharanga Learners - Galle",
    address: "Street, Town",
    phone: "+94 91 223 0025",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.70740937573!2d80.21592907447784!3d6.034831628650292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173bafc65c075%3A0x2e5b80995c88e1bf!2sTharanga%20Learners.!5e0!3m2!1sen!2slk!4v1795033604868!5m2!1sen!2slk",
    link: "https://maps.google.com/?q=Tharanga+Learners+Town",
  },
  {
    name: "Tharanga Learners - Rathnepura",
    address: "Street, Town",
    phone: "+94 45 222 3802",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.5073967616017!2d80.38041387448139!3d6.707756820995744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3bf99177a32f7%3A0xfa3e78142c05478!2sTharanga%20Learning%20school!5e0!3m2!1sen!2slk!4v1795033344586!5m2!1sen!2slk",
    link: "https://maps.google.com/?q=Branch+2+address",
  },
  {
    name: "Tharanga Learners - Maharagama",
    address: "Street, Town",
    phone: "+94 77 111 1111",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.38359586473!2d79.93159417448206!3d6.844533419350582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25137d5116225%3A0xa41dcbc76d05bb2c!2sTharanga%20Lerners!5e0!3m2!1sen!2slk!4v1795033731686!5m2!1sen!2slk",
    link: "https://maps.google.com/?q=Branch+2+address",
  },
  {
    name: "Tharanga Learners - Matara",
    address: "Street, Town",
    phone: "+94 77 111 1111",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.3031915783245!2d80.53220367447773!3d5.952897429532251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae13f057b79556d%3A0xc1baa3dd0b575d2a!2sTharanga%20Driving%20School!5e0!3m2!1sen!2slk!4v1795088291957!5m2!1sen!2slk",
    link: "https://maps.google.com/?q=Branch+2+address",
  },
  {
    name: "Tharanga Learners - Weligama",
    address: "Street, Town",
    phone: "+94 77 111 1111",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9437.832676940729!2d80.4190785236305!3d5.97823278397438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1156567170d65%3A0x803887f36823b3c!2sTharanga%20Driving%20School!5e0!3m2!1sen!2slk!4v1795198154257!5m2!1sen!2slk",
    link: "https://maps.google.com/?q=Branch+2+address",
  },
  {
    name: "Tharanga Learners - Karapitiya",
    address: "Street, Town",
    phone: "+94 77 111 1111",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.480908103587!2d80.22162484747358!3d6.0656916382303825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1710036b21755%3A0xe9b1a57e54d6b4fb!2sTharanga%20Learners%20-%20Karapitiya!5e0!3m2!1sen!2slk!4v1795233308059!5m2!1sen!2slk",
    link: "https://maps.google.com/?q=Branch+2+address",
  },

  // add more shops by copying a block
];
const SCHOOL = {
  name: "Tharanga Learners Driving School",
  phone: "+94 77 000 0000",
  whatsapp: "94770000000", // country code + number, no + or spaces
  email: "info@yourschool.lk",
  branches: SHOPS.map((s) => s.name),
  social: { Facebook: "#", YouTube: "#", WhatsApp: "#" },
};

const STATS = [
  [
    "100,000+",
    "HAPPY STUDENTS",
    "Beginners turned into confident drivers.",
    "images/degree-96.png",
  ],
  [
    "20+",
    "EXPERT TRAINERS",
    "Male and female professional trainers.",
    "images/training-96.png",
  ],
  [
    "18",
    "TRAINING BRANCHES",
    "Quality training close to you.",
    "images/school-96.png",
  ],
];

const COURSES = [
  {
    icon: "🚗",
    title: "Full Course",
    points: [
      "Mainly for beginners",
      "Group or individual classes",
      "Flexible class times",
      "Lady instructors available",
    ],
  },
  {
    icon: "🔄",
    title: "Refresher Course",
    points: [
      "For license holders",
      "Car, van, three-wheeler, bike",
      "Our vehicle or your own",
      "Lady instructors available",
    ],
  },
  {
    icon: "⭐",
    title: "V.I.P Course",
    points: [
      "Air-conditioned vehicles",
      "Test vehicle provided",
      "Full or refresher students",
    ],
  },
  {
    icon: "🚛",
    title: "Prime Mover Course",
    points: [
      "Train in our vehicles",
      "Longer training period",
      "Written test practice",
    ],
  },
];

const EVENTS = [
  [
    "DEC 2026",
    "Free road-safety workshop",
    "Open to all learners. Add your own details here.",
  ],
  [
    "JAN 2027",
    "New batch starts",
    "Registrations are open for the next full-course batch.",
  ],
];

/* Question papers: q = question, o = options, c = index of the correct option 
const SAMPLE = [
  {
    q: "What does a red octagonal sign mean?",
    o: ["Give way", "Stop", "No parking"],
    c: 1,
  },
  {
    q: "What is the safest action near a school zone?",
    o: ["Speed up", "Slow down and watch", "Use the horn"],
    c: 1,
  },
  {
    q: "When must you use your indicator?",
    o: ["Only at night", "Before turning or changing lanes", "Never"],
    c: 1,
  },
];
const PAPERS = {
  en: { A: SAMPLE, B: SAMPLE, C: SAMPLE, D: SAMPLE },
  si: { A: SAMPLE, B: SAMPLE, C: SAMPLE, D: SAMPLE },
  ta: { A: SAMPLE, B: SAMPLE, C: SAMPLE, D: SAMPLE },
};*/
