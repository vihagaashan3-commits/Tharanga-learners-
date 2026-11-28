/* Edit your school details and content here */
const SHOPS = [
  {
    name: "Tharanga Learners - Galle",
    address: "Lower Dickson Rd, Galle",
    phone: "+94 91 223 0025",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.70740937573!2d80.21592907447784!3d6.034831628650292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173bafc65c075%3A0x2e5b80995c88e1bf!2sTharanga%20Learners.!5e0!3m2!1sen!2slk!4v1795033604868!5m2!1sen!2slk",
    link: "https://maps.app.goo.gl/FKsvikqxB6SEfjTD6",
  },
  {
    name: "Tharanga Learners - Rathnepura",
    address: "455, Ratnapura",
    phone: "+94 45 222 3802",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.5073967616017!2d80.38041387448139!3d6.707756820995744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3bf99177a32f7%3A0xfa3e78142c05478!2sTharanga%20Learning%20school!5e0!3m2!1sen!2slk!4v1795033344586!5m2!1sen!2slk",
    link: "https://maps.app.goo.gl/LVwEo5cuet2VwX7c8",
  },
  {
    name: "Tharanga Learners - Maharagama",
    address: "230/4/1,lakyan plaza, High Level Rd, Maharagama",
    phone: "+94 77 111 1111",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.38359586473!2d79.93159417448206!3d6.844533419350582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25137d5116225%3A0xa41dcbc76d05bb2c!2sTharanga%20Lerners!5e0!3m2!1sen!2slk!4v1795033731686!5m2!1sen!2slk",
    link: "https://maps.app.goo.gl/fd5kExR8UWwn2xKH6",
  },
  {
    name: "Tharanga Learners - Matara",
    address: "Akuressa Rd, Matara",
    phone: "+94 41 223 1853",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.3031915783245!2d80.53220367447773!3d5.952897429532251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae13f057b79556d%3A0xc1baa3dd0b575d2a!2sTharanga%20Driving%20School!5e0!3m2!1sen!2slk!4v1795088291957!5m2!1sen!2slk",
    link: "https://maps.app.goo.gl/v1c5RY1MFYht7VSG8",
  },
  {
    name: "Tharanga Learners - Weligama",
    address: "No: 05 New Super Market, Weligama",
    phone: "+94 77 516 7167",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9437.832676940729!2d80.4190785236305!3d5.97823278397438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1156567170d65%3A0x803887f36823b3c!2sTharanga%20Driving%20School!5e0!3m2!1sen!2slk!4v1795198154257!5m2!1sen!2slk",
    link: "https://maps.app.goo.gl/AzoYWPJcjRRa6S368",
  },
  {
    name: "Tharanga Learners - Karapitiya",
    address: "Mapalagama Bus Rd, Galle",
    phone: "+94 91 302 1155",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.480908103587!2d80.22162484747358!3d6.0656916382303825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1710036b21755%3A0xe9b1a57e54d6b4fb!2sTharanga%20Learners%20-%20Karapitiya!5e0!3m2!1sen!2slk!4v1795233308059!5m2!1sen!2slk",
    link: "https://maps.app.goo.gl/24CPNALVB7caMGFZ9",
  },
  {
    name: "Tharanga Learners - Hambantota",
    address: "44PG+GRF, Hambantota",
    phone: "+94 47 362 2895",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.959437256953!2d81.1246202434627!3d6.136152464092189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae6bd1ba485a785%3A0xf7a3d4ca56cde7e7!2sTharanga%20Learners!5e0!3m2!1sen!2slk!4v1795876633478!5m2!1sen!2slk",
    link: "https://maps.app.goo.gl/Dc8bSd5kEDdxvFca8",
  },
  {
    name: "Tharanga Learners - Ahangama",
    address: "A2, Ahangama",
    phone: "+94 91 302 1154",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.162762157139!2d80.36132065692829!3d5.972310689154888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1135827b5aaaf%3A0x67abd0d50411d103!2sTharanga%20Lerners!5e0!3m2!1sen!2slk!4v1795876980338!5m2!1sen!2slk",
    link: "https://maps.app.goo.gl/UBXz8Hi196JQ4H3s5",
  },
  {
    name: "Tharanga Learners - Horana",
    address: "18 Sri Ariyavilasa Rd, Horana",
    phone: "+94 91 302 1154",
    map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d495.3045339467912!2d80.06520982899683!3d6.716495570142883!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24b3f69f5afab%3A0x96dd2ad5a7c7adc8!2sTharanga%20learners!5e0!3m2!1sen!2slk!4v1795883589141!5m2!1sen!2slk",
    link: "https://maps.app.goo.gl/BdUMm9Q6u4hBw8r89",
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
