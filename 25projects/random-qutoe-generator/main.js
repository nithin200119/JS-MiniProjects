"https://api.quotable.io/quotes/random";
const quoteWrapper = document.querySelector(".quote-wrapper");
const refreshBtn = document.querySelector(".refresh");
const loaderText = document.querySelector(".loader");

function showLoader() {
  loaderText.classList.add("show");
  quoteWrapper.classList.add("hide");
}
function removeLoader() {
  loaderText.classList.remove("show");
  quoteWrapper.classList.remove("hide");
}
async function fetchRandomQuote() {
  showLoader();
  const response = await fetch("https://api.quotable.io/quotes/random");
  const result = await response.json();
  if (result) {
    removeLoader();
    displayQuote(result[0]);
  }
}

function displayQuote(getQuote) {
  console.log(getQuote);
  quoteWrapper.innerHTML = `<div class='quoteItem'>
        <p>${getQuote.author}</p>
        <p>${getQuote.content}</p>
        <p>${getQuote.dateAdded}</p>
        <p>${getQuote.tags[0]}</p>
    </div>`;
}
fetchRandomQuote();
refreshBtn.addEventListener("click", () => {
  fetchRandomQuote();
});


// async function check(){
//   await Promise.resolve(console.log(1))
//   console.log(2)
// }
// console.log(3)
// check()
// console.log(4)