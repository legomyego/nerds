var link = document.querySelector(".write-us");

var popup = document.querySelector(".pop-up");
var close = popup.querySelector(".pop-up-close");

var form = popup.querySelector("form");
var message = popup.querySelector("[name=message]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("visible");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("visible");
  popup.classList.remove("pop-up-error");
});

form.addEventListener("submit", function (evt) {
  if (!message.value) {
    evt.preventDefault();
    popup.classList.add("pop-up-error");
  }
});
