var modal = document.querySelector(".modal");
var link = document.querySelector(".competition-form__btn");


link.addEventListener("click", function (event) {
  event.preventDefault();
  modal.classList.add("modal_show");
});

var modal_close_button = document.querySelector(".modal__btn");

modal_close_button.addEventListener("click", function (event) {
  event.preventDefault();
  modal.classList.remove("modal_show");
});
window.addEventListener("keydown", function (event) {
if (event.keyCode === 27) {
  if (modal.classList.contains("modal_show")) {
    modal.classList.remove("modal_show");
    }
  }
});
