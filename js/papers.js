const PASS_PERCENT = 75; // change to your school's pass rule

/* ---------- ENGLISH: Paper 1 ---------- */
const PAPER_EN_1 = {
  minutes: 60,
  questions: [
    {
      q: "What does a red octagonal sign mean?",
      o: ["Give way", "Stop completely", "Slow down", "Parking is allowed"],
      c: 1,
    },
    {
      q: "When must you use your indicator?",
      o: [
        "Only at night",
        "Before turning or changing lanes",
        "Never",
        "Only when driving fast",
      ],
      c: 1,
    },
    {
      q: "What must you do when the traffic light is red?",
      o: [
        "Stop behind the stop line",
        "Slow down and go",
        "Go if no one is coming",
        "Sound the horn and go",
      ],
      c: 0,
    },
    {
      q: "On which side of the road do vehicles drive in Sri Lanka?",
      o: ["Right side", "Left side", "Middle", "Any side"],
      c: 1,
    },
    {
      q: "When is it safe to overtake?",
      o: [
        "On a sharp bend",
        "When the road ahead is clear and you can see far enough",
        "Near a pedestrian crossing",
        "At a junction",
      ],
      c: 1,
    },
    {
      q: "A pedestrian is on a pedestrian crossing. What should you do?",
      o: [
        "Sound the horn",
        "Stop and let them cross",
        "Drive around them",
        "Speed up",
      ],
      c: 1,
    },
    {
      q: "Is it allowed to drive after drinking alcohol?",
      o: ["Yes, a little", "No", "Only at night", "Only on short trips"],
      c: 1,
    },
    {
      q: "What does a steady amber light mean?",
      o: [
        "Speed up",
        "Stop if it is safe to do so",
        "Sound the horn",
        "Turn right",
      ],
      c: 1,
    },
    {
      q: "What is the speed limit in built-up areas for most vehicles?",
      o: ["30 km/h", "50 km/h", "70 km/h", "90 km/h"],
      c: 1,
    },
    {
      q: "Using a hand-held mobile phone while driving is",
      o: [
        "Allowed in light traffic",
        "Dangerous and not allowed",
        "Allowed on straight roads",
        "Allowed at low speed",
      ],
      c: 1,
    },
    /* picture question example (delete the // to use it):
    ,{ img: "images/signs/dws10.jpg", q: "What does this sign mean?",
      o: ["Road narrows on the left ahead", "Road narrows on the right ahead", "Two-way traffic ahead", "Cross roads ahead"], c: 0 }
    */
  ],
};

/* ---------- SINHALA: Paper 1 ---------- */
const PAPER_SI_1 = {
  minutes: 60,
  questions: [
    {
      q: "රතු අටපට්ටම් සලකුණෙන් දැක්වෙන්නේ?",
      o: [
        "මඟ දෙන්න",
        "සම්පූර්ණයෙන් නවත්වන්න",
        "වේගය අඩු කරන්න",
        "නැවැත්වීමට අවසර ඇත",
      ],
      c: 1,
    },
    {
      q: "දර්ශක (ඉන්ඩිකේටර්) භාවිතා කළ යුත්තේ කවදාද?",
      o: [
        "රාත්‍රියේ පමණි",
        "හැරීමට හෝ පථය වෙනස් කිරීමට පෙර",
        "කිසිවිටෙක නොවේ",
        "වේගයෙන් යන විට පමණි",
      ],
      c: 1,
    },
    {
      q: "රතු එළිය දැල්වී ඇති විට ඔබ කළ යුත්තේ?",
      o: [
        "නැවතුම් රේඛාවට පෙර නවත්වන්න",
        "වේගය අඩු කර යන්න",
        "කිසිවෙකු නොපැමිණෙන්නේ නම් යන්න",
        "හෝන් ගසා යන්න",
      ],
      c: 0,
    },
    {
      q: "ශ්‍රී ලංකාවේ වාහන ධාවනය කරන්නේ මාර්gයේ කුමන පැත්තෙන්ද?",
      o: ["දකුණු පැත්ත", "වම් පැත්ත", "මැද", "ඕනෑම පැත්තක්"],
      c: 1,
    },
    {
      q: "මත්පැන් පානය කර වාහනයක් පැදවීම?",
      o: [
        "ටිකක් නම් කමක් නැත",
        "තහනම්ය",
        "රාත්‍රියේ පමණක් තහනම්",
        "කෙටි දුරට කමක් නැත",
      ],
      c: 1,
    },
  ],
};

/* ---------- TAMIL: Paper 1 ---------- */
const PAPER_TA_1 = {
  minutes: 60,
  questions: [
    {
      q: "சிவப்பு எண்கோண அடையாளம் குறிப்பது?",
      o: [
        "வழிவிடவும்",
        "முழுமையாக நிறுத்தவும்",
        "வேகத்தைக் குறைக்கவும்",
        "நிறுத்த அனுமதி உண்டு",
      ],
      c: 1,
    },
    {
      q: "சமிக்ஞை விளக்குகளை (இண்டிகேட்டர்) எப்போது பயன்படுத்த வேண்டும்?",
      o: [
        "இரவில் மட்டும்",
        "திரும்புவதற்கு அல்லது பாதை மாற்றுவதற்கு முன்",
        "ஒருபோதும் இல்லை",
        "வேகமாகச் செல்லும்போது மட்டும்",
      ],
      c: 1,
    },
    {
      q: "சிவப்பு விளக்கு எரியும்போது நீங்கள் செய்ய வேண்டியது?",
      o: [
        "நிறுத்தக் கோட்டுக்கு முன் நிறுத்தவும்",
        "வேகத்தைக் குறைத்துச் செல்லவும்",
        "யாரும் வராவிட்டால் செல்லவும்",
        "ஒலிப்பானை ஒலித்துச் செல்லவும்",
      ],
      c: 0,
    },
    {
      q: "இலங்கையில் வாகனங்கள் சாலையின் எந்தப் பக்கம் ஓட்டப்படுகின்றன?",
      o: ["வலது பக்கம்", "இடது பக்கம்", "நடுவில்", "எந்தப் பக்கமும்"],
      c: 1,
    },
    {
      q: "மது அருந்திவிட்டு வாகனம் ஓட்டுவது?",
      o: [
        "சிறிதளவு என்றால் பரவாயில்லை",
        "தடை செய்யப்பட்டது",
        "இரவில் மட்டும் தடை",
        "குறுகிய தூரத்துக்குப் பரவாயில்லை",
      ],
      c: 1,
    },
  ],
};

/* ---------- Which papers appear on the page ---------- */
/* Add Paper 2 by writing PAPER_EN_2 above, then adding   2: PAPER_EN_2   to the list. */
const PAPERS = {
  en: { 1: PAPER_EN_1 },
  si: { 1: PAPER_SI_1 },
  ta: { 1: PAPER_TA_1 },
};
