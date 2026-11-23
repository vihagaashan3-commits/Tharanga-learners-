const pick = $("pick"),
  view = $("view"),
  grid = $("signs");

function cell(i, l) {
  const pic = i.img
    ? `<img src="${i.img}" alt="" onerror="this.outerHTML='<div style=&quot;color:red;font-size:11px;word-break:break-all&quot;>NOT FOUND:<br>${i.img}</div>'">`
    : `<div class="sign-emoji">${i.emoji || ""}</div>`;
  return `<div class="sign-cell">${pic}<div>${i.text[l]}</div></div>`;
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
