document.addEventListener("DOMContentLoaded", function () {
  var menuButton = document.getElementById("menuBtn");
  menuButton.addEventListener("click", navToggle);

  function navToggle() {
    var menu = document.getElementById("menu");
    var burger = document.getElementById("nav-burger-icon");
    var close = document.getElementById("nav-close-icon");
    burger.classList.toggle("hidden");
    close.classList.toggle("hidden");
    menu.classList.toggle("hidden");
  }
});
