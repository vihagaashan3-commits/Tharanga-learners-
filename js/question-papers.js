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

let current = [];
document
  .querySelectorAll(".paper-btn")
  .forEach((b) => (b.onclick = () => openPaper(b.dataset.l, b.dataset.p)));

function openPaper(l, p) {
  current = PAPERS[l][p].map((q) => ({ ...q, a: -1 }));
  $("list").hidden = true;
  $("quiz").hidden = false;
  $("result").textContent = "";
  $("qtitle").textContent = l.toUpperCase() + " – Paper " + p;
  $("qs").innerHTML = current
    .map(
      (q, i) => `<div class="mb-4"><p class="fw-semibold">${i + 1}. ${q.q}</p>
    ${q.o.map((o, j) => `<label class="d-flex gap-2 align-items-center my-1"><input type="radio" name="q${i}" value="${j}"> ${o}</label>`).join("")}</div>`,
    )
    .join("");
  document
    .querySelectorAll("#qs input")
    .forEach(
      (r) => (r.onchange = () => (current[+r.name.slice(1)].a = +r.value)),
    );
}
$("check").onclick = () => {
  $("result").textContent =
    `Score: ${current.filter((q) => q.a === q.c).length} / ${current.length}`;
};
$("all").onclick = () => {
  $("quiz").hidden = true;
  $("list").hidden = false;
};
