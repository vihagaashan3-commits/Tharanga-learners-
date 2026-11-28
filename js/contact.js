const list = $("shop-list"),
  frame = $("map-frame");

list.innerHTML = SHOPS.map(
  (s, i) => `
  <div class="shop card-x mb-3" data-i="${i}" style="cursor:pointer;height:auto">
    <b><img src="images/pin.png" class="pin-icon" alt="location"> ${s.name}</b>
    <p class="muted small mb-1">${s.address}</p>
    <a href="tel:${s.phone}">📞 ${s.phone}</a> ·
    <a href="${s.link}" class="dir-link" target="_blank" rel="noopener"><img src="images/direction-32.png" class="dir-icon" alt=""> Directions</a>
  </div>`,
).join("");

function show(i, scroll = true) {
  frame.src = SHOPS[i].map;

  const cards = list.querySelectorAll(".shop");
  cards.forEach((el, k) => el.classList.toggle("active", k === i));

  if (scroll) {
    const card = cards[i];
    const top = card.offsetTop - list.offsetTop;   // card position inside the list box
    list.scrollTo({ top: top - 8, behavior: "smooth" });
  }
}

list
  .querySelectorAll(".shop")
  .forEach((el) => (el.onclick = () => show(+el.dataset.i)));

show(0, false);   // first branch on load, without scrolling


