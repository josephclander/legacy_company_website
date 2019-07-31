function classToggle() {
  const nav = document.getElementById("menu__mobile");
  nav.classList.toggle("mobile__toggle");
}

var prevScrollpos = window.pageYOffset;
function scrollUp() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-66px";
  }
  prevScrollpos = currentScrollPos;
}

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("mobile").addEventListener("click", classToggle);
  document
    .getElementById("menu__mobile")
    .addEventListener("click", classToggle);
  window.addEventListener("scroll", scrollUp);
});
