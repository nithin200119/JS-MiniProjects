const progress = document.querySelector(".progress");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const iconsWrapper = document.querySelectorAll(".icon-wrapper");
console.log(iconsWrapper.length);

let currentSelected = 1;
//! next button functionality
nextBtn.addEventListener("click", () => {
  if (currentSelected < iconsWrapper.length) {
    currentSelected++;
  }
  handelUpdateState();
});

//! prev button functionality
prevBtn.addEventListener("click", () => {
  if (currentSelected > 1) {
    currentSelected--;
  }
  handelUpdateState();
});

// !! helper function
function handelUpdateState() {
  iconsWrapper.forEach((item, i) => {
    // console.log(item);
    if (i < currentSelected) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
//calculating the width of progress bar
  progress.style.width =
    ((currentSelected - 1) / (iconsWrapper.length - 1)) * 100 + "%";
  if (currentSelected === 1) {
    prevBtn.disabled = true;
  } else if (currentSelected === iconsWrapper.length) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
}
