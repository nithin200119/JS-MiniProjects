const mainBtn = document.querySelector(".change");
const body = document.querySelector("body");

mainBtn.addEventListener("click", () => {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
    body.style.color = "#fff";
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    body.style.color = "#000";
  }
  if (mainBtn.classList.contains("light")) {
    mainBtn.classList.remove("light");
    mainBtn.classList.add("dark");
  } else {
    mainBtn.classList.remove("dark");
    mainBtn.classList.add("light");
  }
});

 