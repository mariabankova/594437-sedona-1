var link = document.querySelector(".modal-form-open");
var popup = document.querySelector(".hotel-search");
var form = popup.querySelector("form");
var checkin = popup.querySelector("[name=check-in-date]");
var checkout = popup.querySelector("[name=check-out-date]");
var adults = popup.querySelector("[name=adults]");
  
popup.classList.add("visually-hidden");

  
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("visually-hidden");  
    popup.classList.toggle("modal-animation");
   });

  form.addEventListener("submit", function (evt) {
    if (!checkin.value || !checkout.value) {
      evt.preventDefault();
      popup.classList.add("modal-error")
    }
  });