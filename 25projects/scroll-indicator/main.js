"https://dummyjson.com/posts";
const PostListCon = document.querySelector(".posts-container");
const progressBar = document.querySelector(".progress-bar");

function fetchListPosts() {
  fetch("https://dummyjson.com/posts", { method: "GET" })
    .then((response) => response.json())
    .then((result) => displayPosts(result.posts));
}

function displayPosts(getPosts) {
  console.log(getPosts);
  getPosts.forEach((item) => {
    PostListCon.innerHTML += `<div class='post-item-wrapper'>
                <label class='post-item-title'>${item.title}</label>
                <p>${item.body}</p>
                <div class='post-tags'>${item.tags
                  .map((tagItem) => tagItem)
                  .join("")}</div>
            </div>`;
  });
}
fetchListPosts();
// console.log('object')

window.onscroll = function () {
  handelScroll();
};

function handelScroll() {
  const getScrollFromTop =
    document.body.scrollTop || document.documentElement.scrollTop;

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const perAlreadyScrolled = (getScrollFromTop / height) * 100 + "%";
  progressBar.style.width = `${perAlreadyScrolled}`;
}
