const $ = (id) => document.getElementById(id);
const NAV = [
  ["index.html", "Home", "home"],
  ["about.html", "About Us", "about"],
  ["contact.html", "Contact Us", "contact"],
  ["event.html", "Event", "event"],
];

const icon = document.createElement("link");
icon.rel = "icon";
icon.type = "image/png";
icon.href = "images/logo.png";
document.head.appendChild(icon);

const page = document.body.dataset.page;

$("site-header").innerHTML = `
<div class="bar topbar"><div class="container d-flex justify-content-between flex-wrap gap-2">
  <span><img src="images/pin.png" class="pin-icon" alt="location">Tharanga Learners: ${SHOPS.map((s) => s.name.replace("Tharanga Learners - ", "")).join(" | ")}</span></div></div>
<div class="site-header"><div class="container d-flex align-items-center justify-content-between" style="height:64px">
  <a href="index.html" class="logo"><img src="images/3dlogo.png" alt="Tharanga Learners Driving School"></a>
  <nav class="d-none d-md-block">${NAV.map((n) => `<a class="nav-link-x ${page === n[2] ? "on" : ""}" href="${n[0]}">${n[1]}</a>`).join("")}</nav>
  <button class="btn d-md-none fs-4" data-bs-toggle="collapse" data-bs-target="#mnav" aria-label="Menu">☰</button>
</div>
<div class="collapse d-md-none container pb-3" id="mnav">${NAV.map((n) => `<a class="d-block py-1 fw-semibold" href="${n[0]}">${n[1]}</a>`).join("")}</div></div>`;

$("site-footer").innerHTML = `
<div class="site-footer"><div class="mb-2">${Object.entries(SCHOOL.social)
    .map(([k, v]) => `<a href="${v}">${k}</a>`)
    .join("")}</div>
© ${new Date().getFullYear()} ${SCHOOL.name} | Mobile: ${SCHOOL.phone}</div>`;

if ($("stats"))
  $("stats").innerHTML = STATS.map((s) => {
    const icon = /\.(png|svg|jpe?g|webp|gif)$/i.test(s[3])
      ? `<img src="${s[3]}" alt="" class="stat-icon">`
      : `<span class="fs-1">${s[3]}</span>`;
    return `<div class="col-sm-4 d-flex gap-3">${icon}<div><div class="num">${s[0]}</div><b class="small">${s[1]}</b><p class="small opacity-75 mb-0">${s[2]}</p></div></div>`;
  }).join("");

if ($("courses"))
  $("courses").innerHTML = COURSES.map(
    (c) =>
      `<div class="col-sm-6 col-lg-3"><div class="card-x"><div class="fs-2">${c.icon}</div><h3 class="ttl fs-6 my-1">${c.title}</h3><ul class="muted small ps-3 mb-0">${c.points.map((p) => `<li>${p}</li>`).join("")}</ul></div></div>`,
  ).join("");
if ($("events"))
  $("events").innerHTML = EVENTS.map(
    (e) =>
      `<div class="col-sm-6"><div class="card-x"><span class="small fw-bold" style="color:var(--red)">${e[0]}</span><h3 class="fs-6 fw-bold">${e[1]}</h3><p class="muted small mb-0">${e[2]}</p></div></div>`,
  ).join("");
if ($("contact-info"))
  $("contact-info").innerHTML =
    SCHOOL.branches.map((b) => `<p>📍 ${b}</p>`).join("") +
    `<p>📞 ${SCHOOL.phone}</p><p>✉️ ${SCHOOL.email}</p>`;
