const stars = document.querySelectorAll(".fa-star-o");
const selectedRatingValue = document.querySelector(".selecetd-rating-value");
let currentTotalSelectedStars = -1;
stars.forEach((starItem, index) => {
  starItem.dataset.rating = index + 1;
  starItem.addEventListener("mouseover", handelMouseOver);
  starItem.addEventListener("click", handelMouseClick);
  starItem.addEventListener("mouseleave", handelMouseLeave);
});
function handelMouseOver(e) {
  const currentRatingValue = e.target.dataset.rating;
  //   console.log(currentRatingValue)
  if (!currentRatingValue) return;
  else handelUpdateRatingState(currentRatingValue);
}
function handelUpdateRatingState(getCurrentRatingValue) {
//   console.log(getCurrentRatingValue);
  for (let i = 0; i < 5; i++) {
    if (i < getCurrentRatingValue) {
      stars[i].classList.replace("fa-star-o", "fa-star");
      console.log(i);
    } else {
      stars[i].classList.replace("fa-star", "fa-star-o");
    }
  }
}
function handelMouseClick(e) {
    const currentRatingValue = e.target.dataset.rating;
    currentTotalSelectedStars=currentRatingValue
    handelUpdateRatingState(currentTotalSelectedStars)
    selectedRatingValue.textContent=currentTotalSelectedStars

}
function handelMouseLeave() {
    handelUpdateRatingState(currentTotalSelectedStars);
}
