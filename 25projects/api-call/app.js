const postListCont = document.querySelector(".post-list-container");
//!  XHR

function fetchUsingXHR() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xhr.responseType = "json";
  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 200) {
      displayResults(xhr.response);
    } else {
      console.log("dome error ocurred");
    }
  };
}
function displayResults(posts) {
  postListCont.innerHTML = posts
    .map(
      (postItem) => `
    <div class='post-item'>
        <h3>${postItem.title}</h3>
        <p>${postItem.body}</p>
    </div>
 `
    )
    .join(" ");
}

// fetchUsingXHR();

function fetchUsingFetchMethod() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((result) => displayResults(result))
    .catch((rejected) => console.log(rejected));
}
// fetchUsingFetchMethod()

async function fetchUsingAsyncAwaitMethod() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = await response.json();

  displayResults(result);
}
// fetchUsingAsyncAwaitMethod();

function helperMethod(method, url) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.send();
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject(xhr.response);
      }
    };
  });
  return promise;
}
async function fetchusingxhrasynchawait() {
  const response = await helperMethod(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );
  displayResults(response);
}
fetchusingxhrasynchawait();
