var elModalOpenButton = document.querySelector(".js-modal-open-button");
var elModalCloseButton = document.querySelector(".js-close-modal");
var elModal = document.querySelector(".modal");

elModalOpenButton.addEventListener("click", function () {
  elModal.classList.add("modal-show");
});

elModalCloseButton.addEventListener("click", function () {
  elModal.classList.remove("modal-show");
});

// const elCloseBtn = document.querySelector(".js-close-modal");

// elCloseBtn.addEventListener("click", ()=>{
//   elModal.classList.remove("modal-show");
// })
