const form = $("reg");
$("branches").innerHTML = SCHOOL.branches
  .map(
    (b, i) =>
      `<label class="d-flex gap-2 my-0 fw-normal"><input type="radio" name="branch" value="${b}" ${i ? "" : "required"}> ${b}</label>`,
  )
  .join("");
form.nic.oninput = () =>
  ($("nicc").textContent = form.nic.value.length + " of 12 max characters.");
form.tel.oninput = () => {
  form.tel.value = form.tel.value.replace(/\D/g, "");
  $("telc").textContent = form.tel.value.length + " of 10 max characters.";
};

form.onsubmit = (e) => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(form));
  const msg = encodeURIComponent(
    `New registration\nName: ${d.name}\nNIC: ${d.nic}\nMobile: ${d.tel}\nLicense: ${d.type}\nBranch: ${d.branch}`,
  );
  $("wa").href = `https://wa.me/${SCHOOL.whatsapp}?text=${msg}`;
  $("who").textContent = d.name;
  form.hidden = true;
  $("thanks").hidden = false;
};
