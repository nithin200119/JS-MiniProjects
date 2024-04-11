const openModelBtn = document.querySelector(".openModal");
const ModalBackground = document.querySelector(".modal-background");
const closeIcon = document.querySelector(".close-icon");
const closeBtn = document.querySelector(".close-btn");

openModelBtn.addEventListener("click", () => {
  ModalBackground.style.display = "block";
});

closeIcon.addEventListener("click", () => {
  ModalBackground.style.display = "none";
});
closeBtn.addEventListener("click", () => {
  ModalBackground.style.display = "none";
});

window.addEventListener("click", (e) => {
//   console.log(e.target);
  if (event.target === ModalBackground) {
    ModalBackground.style.display = "none";
  }
});
