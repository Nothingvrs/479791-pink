var navMain = document.querySelector(".main-nav");
var menuMain = document.querySelector(".main-header__menu");
var navbtn = document.querySelector(".main-header__menu-btn");

navMain.classList.remove("main-nav_nojs");

navbtn.addEventListener("click", function() {
if (navMain.classList.contains("main-nav_closed")) {
  navMain.classList.remove("main-nav_closed");
  navMain.classList.add("main-nav_opened");
  menuMain.classList.remove("main-header__menu_closed");
  menuMain.classList.add("main-header__menu_opened");
} else {
  navMain.classList.add("main-nav_closed");
  navMain.classList.remove("main-nav_opened");
  menuMain.classList.add("main-header__menu_closed");
  menuMain.classList.remove("main-header__menu_opened");
}
});