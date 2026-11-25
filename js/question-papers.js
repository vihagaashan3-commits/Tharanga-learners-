const COLS = [
  {
    code: "en",
    name: "ENGLISH",
    hint: "Select a question paper",
    label: "Paper",
  },
  {
    code: "si",
    name: "සිංහල",
    hint: "ප්‍රශ්න පත්‍රයක් තෝරාගන්න",
    label: "ප්‍රශ්න පත්‍ර",
  },
  {
    code: "ta",
    name: "தமிழ்",
    hint: "வினாத்தாளைத் தேர்ந்தெடுக்கவும்",
    label: "காகிதம்",
  },
];

const T = {
  en: {
    title: "Written test on the Highway Code",
    sub: "Rehearsal question paper (time: 60 minutes)",
    rules: [
      "Do not write anything on this paper.",
      "Choose the one correct answer for each question.",
      "The timer starts when you press Start.",
      "You cannot go back to an earlier question.",
    ],
    example:
      "Example: A yellow diamond sign with a “T” shape means<br>1. A bridge is ahead<br>2. A T-junction is ahead<br><b>Answer: 2</b>",
    paper: "Question paper",
    time: "Time",
    start: "Start",
    next: "Next",
    finish: "Finish",
    back: "← All papers",
    score: "Your score",
    passed: "Passed 🎉",
    failed: "Not passed – keep practising",
    review: "Review your answers",
    yours: "Your answer",
    correct: "Correct answer",
    none: "No answer",
    again: "Try again",
    timeup: "Time is up!",
  },
  si: {
    title: "මහා මාර්ග නීති සංග්‍රහය පිළිබඳ ලිඛිත පරීක්ෂණය",
    sub: "පුහුණු ප්‍රශ්න පත්‍රය (කාලය විනාඩි 60 යි)",
    rules: [
      "මෙම පත්‍රයේ කිසිවක් ලියන්න එපා.",
      "සෑම ප්‍රශ්නයකටම නිවැරදි පිළිතුර එක බැගින් තෝරන්න.",
      "ආරම්භ කරන්න එබූ විට කාලය පටන් ගනී.",
      "පෙර ප්‍රශ්නයකට ආපසු යා නොහැක.",
    ],
    example:
      "උදාහරණය: “T” හැඩය සහිත කහ දියමන්ති සලකුණෙන් දැක්වෙන්නේ<br>1. ඉදිරියෙන් පාලමක් ඇත<br>2. ඉදිරියෙන් T හන්දියක් ඇත<br><b>පිළිතුර: 2</b>",
    paper: "ප්‍රශ්න පත්‍රය",
    time: "කාලය",
    start: "ආරම්භ කරන්න",
    next: "ඊළඟ",
    finish: "අවසන් කරන්න",
    back: "← සියලු ප්‍රශ්න පත්‍ර",
    score: "ඔබේ ලකුණු",
    passed: "සමත් 🎉",
    failed: "අසමත් – තවත් පුහුණු වන්න",
    review: "පිළිතුරු සමාලෝචනය",
    yours: "ඔබේ පිළිතුර",
    correct: "නිවැරදි පිළිතුර",
    none: "පිළිතුරක් නැත",
    again: "නැවත උත්සාහ කරන්න",
    timeup: "කාලය අවසන්!",
  },
  ta: {
    title: "நெடுஞ்சாலைக் குறியீடு பற்றிய எழுத்துத் தேர்வு",
    sub: "பயிற்சி வினாத்தாள் (நேரம்: 60 நிமிடங்கள்)",
    rules: [
      "இந்தத் தாளில் எதுவும் எழுத வேண்டாம்.",
      "ஒவ்வொரு கேள்விக்கும் சரியான ஒரு பதிலைத் தேர்ந்தெடுக்கவும்.",
      "தொடங்கு என்பதை அழுத்தியவுடன் நேரம் தொடங்கும்.",
      "முந்தைய கேள்விக்குத் திரும்ப முடியாது.",
    ],
    example:
      "எடுத்துக்காட்டு: “T” வடிவம் கொண்ட மஞ்சள் வைர அடையாளம் குறிப்பது<br>1. முன்னால் பாலம் உள்ளது<br>2. முன்னால் T சந்திப்பு உள்ளது<br><b>பதில்: 2</b>",
    paper: "வினாத்தாள்",
    time: "நேரம்",
    start: "தொடங்கு",
    next: "அடுத்து",
    finish: "முடி",
    back: "← அனைத்து வினாத்தாள்கள்",
    score: "உங்கள் மதிப்பெண்",
    passed: "தேர்ச்சி 🎉",
    failed: "தேர்ச்சி இல்லை – மேலும் பயிற்சி செய்யுங்கள்",
    review: "பதில்களின் மறுஆய்வு",
    yours: "உங்கள் பதில்",
    correct: "சரியான பதில்",
    none: "பதில் இல்லை",
    again: "மீண்டும் முயற்சி",
    timeup: "நேரம் முடிந்தது!",
  },
};

let lang, paper, idx, answers, left, timer;
const t = () => T[lang];
const fmt = (s) =>
  String(Math.floor(s / 60)).padStart(2, "0") +
  ":" +
  String(s % 60).padStart(2, "0");
function panel(name) {
  ["list", "intro", "quiz", "result"].forEach(
    (p) => ($(p).hidden = p !== name),
  );
  scrollTo(0, 0);
}

/* paper list */
$("cols").innerHTML = COLS.map(
  (
    c,
  ) => `<div class="col-sm-4 text-center"><h2 class="ttl fs-6">${c.name}</h2><p class="muted small">${c.hint}</p>
  ${Object.keys(PAPERS[c.code])
    .map(
      (p) =>
        `<button class="card-x paper-btn" data-l="${c.code}" data-p="${p}">${c.label} | ${p}</button>`,
    )
    .join("")}</div>`,
).join("");
document
  .querySelectorAll(".paper-btn")
  .forEach((b) => (b.onclick = () => openIntro(b.dataset.l, b.dataset.p)));

/* instructions page */
function openIntro(l, p) {
  lang = l;
  paper = PAPERS[l][p];
  const x = t();
  $("back1").textContent = x.back;
  $("i-title").textContent = x.title;
  $("i-sub").textContent = x.sub;
  $("i-rules").innerHTML = x.rules.map((r) => `<li>${r}</li>`).join("");
  $("i-example").innerHTML = x.example;
  $("i-paper").textContent = `${x.paper} (${p})`;
  $("start").textContent = x.start;
  panel("intro");
}
$("back1").onclick = () => panel("list");
$("start").onclick = start;

/* quiz */
function start() {
  idx = 0;
  answers = Array(paper.questions.length).fill(-1);
  left = (paper.minutes || 60) * 60;
  clearInterval(timer);
  tick();
  timer = setInterval(() => {
    left--;
    tick();
    if (left <= 0) finish(true);
  }, 1000);
  panel("quiz");
  showQ();
}
function tick() {
  $("timer").textContent = `${t().time} ${fmt(Math.max(left, 0))}`;
}

function showQ() {
  const q = paper.questions[idx],
    n = paper.questions.length;
  $("bar").style.width = ((idx + 1) / n) * 100 + "%";
  $("count").textContent = `${idx + 1} / ${n}`;
  $("qbox").innerHTML =
    (q.img
      ? `<img class="q-img" src="${q.img}" alt="" onerror="this.remove()">`
      : "") + `<h2 class="h5 fw-bold">${q.q}</h2>`;
  $("opts").innerHTML = q.o
    .map(
      (o, j) =>
        `<button class="opt ${answers[idx] === j ? "sel" : ""}" data-j="${j}">${j + 1}. ${o}</button>`,
    )
    .join("");
  $("opts")
    .querySelectorAll(".opt")
    .forEach(
      (b) =>
        (b.onclick = () => {
          answers[idx] = +b.dataset.j;
          $("opts")
            .querySelectorAll(".opt")
            .forEach((x) => x.classList.toggle("sel", x === b));
        }),
    );
  $("next").textContent = idx === n - 1 ? t().finish : t().next;
}
$("next").onclick = () => {
  idx < paper.questions.length - 1 ? (idx++, showQ()) : finish(false);
};

/* result */
function finish(timeUp) {
  clearInterval(timer);
  const qs = paper.questions,
    x = t();
  const score = qs.filter((q, i) => answers[i] === q.c).length;
  const pct = Math.round((score / qs.length) * 100),
    ok = pct >= PASS_PERCENT;
  const review = qs
    .map((q, i) => {
      const a = answers[i],
        right = a === q.c;
      return `<div class="rev ${right ? "ok" : "bad"}"><b>${i + 1}. ${q.q}</b><br>${x.yours}: ${a < 0 ? x.none : q.o[a]} ${right ? "✓" : "✗<br>" + x.correct + ": " + q.o[q.c]}</div>`;
    })
    .join("");
  $("result").innerHTML = `
    <div class="text-center">
      ${timeUp ? `<p class="fw-bold" style="color:var(--red)">${x.timeup}</p>` : ""}
      <h2 class="fw-bold">${x.score}: ${score} / ${qs.length} (${pct}%)</h2>
      <p class="fs-5 fw-bold" style="color:${ok ? "#16a34a" : "var(--red)"}">${ok ? x.passed : x.failed}</p>
      <button class="btn-brand me-2" id="again">${x.again}</button>
      <button class="btn-brand" id="home">${x.back}</button>
    </div>
    <h3 class="h5 mt-4">${x.review}</h3>${review}`;
  panel("result");
  $("again").onclick = start;
  $("home").onclick = () => panel("list");
}
