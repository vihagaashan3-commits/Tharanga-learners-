const pick = $("pick"),
  view = $("view"),
  grid = $("signs");

function cell(i, l) {
  const pic = i.img
    ? `<img src="${i.img}" loading="lazy" decoding="async" width="110" height="110" alt="" onerror="this.outerHTML='<div class=&quot;sign-emoji&quot;>${i.emoji || ""}</div>'">`
    : `<div class="sign-emoji">${i.emoji || ""}</div>`;
  return `<div class="sign-cell">${pic}<div class="fw-semibold">${i.text[l]}</div>${i.desc ? `<p class="sign-desc">${i.desc[l]}</p>` : ""}</div>`;
}

function setLang(l) {
  pick.hidden = !!l;
  view.hidden = !l;
  grid.innerHTML = l
    ? SIGNS.map(
        (sec) => `
    <h2 class="sign-title">${sec.title[l]}</h2>
    <div class="sign-grid">${sec.items.map((i) => cell(i, l)).join("")}</div>`,
      ).join("")
    : "";
}

document
  .querySelectorAll("[data-lang]")
  .forEach((b) => (b.onclick = () => setLang(b.dataset.lang)));
$("back").onclick = () => setLang("");
setLang("");
