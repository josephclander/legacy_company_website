function classToggle() {
  const nav = document.getElementById("menu__mobile");
  nav.classList.toggle("mobile__toggle");
}

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("mobile").addEventListener("click", classToggle);
});
