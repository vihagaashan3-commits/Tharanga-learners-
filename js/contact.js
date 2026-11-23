const list = $("shop-list"),
  frame = $("map-frame");

list.innerHTML = SHOPS.map(
  (s, i) => `
  <div class="shop card-x mb-3" data-i="${i}" style="cursor:pointer;height:auto">
    <b><img src="images/pin.png" class="pin-icon" alt="location"> ${s.name}</b>
    <p class="muted small mb-1">${s.address}</p>
    <a href="tel:${s.phone}">📞 ${s.phone}</a> ·
    <a href="${s.link}" target="_blank" rel="noopener">Directions</a>
  </div>`,
).join("");

function show(i) {
  frame.src = SHOPS[i].map;
  list
    .querySelectorAll(".shop")
    .forEach((el, k) => el.classList.toggle("active", k === i));
}
list
  .querySelectorAll(".shop")
  .forEach((el) => (el.onclick = () => show(+el.dataset.i)));
show(0);
