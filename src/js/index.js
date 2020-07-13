document.addEventListener("DOMContentLoaded", function () {

  console.log('DOM content loaded')
  var menuButton = document.getElementById("menuBtn");


  menuButton.addEventListener("click", navToggle);

  function navToggle() {
    var menu = document.getElementById("menu");
    console.log('navToggle clicked')
    var burger = document.getElementById("nav-burger-icon");
    console.log(burger)

    var close = document.getElementById("nav-close-icon");
    console.log(close)


    
    burger.classList.toggle("hidden");
    close.classList.toggle("hidden");
    menu.classList.toggle("hidden");
  }
});
