const usersList = document.querySelector(".users-list");
const loader = document.querySelector(".loader");
const toTopBtn = document.querySelector(".totopBtn");
const toBottomBtn = document.querySelector(".toBottomBtn");
function showLoader() {
  loader.classList.add("show-loader");
  usersList.classList.add("hide-list");
}
function removeLoader() {
  loader.classList.remove("show-loader");
  usersList.classList.remove("hide-list");
}
async function fetchUsersList() {
  showLoader();

  const response = await fetch("https://dummyjson.com/users?limit=100", {
    method: "GET",
  });
  const result = await response.json();
  console.log(result);
  if (result && result.users) displayUserList(result.users);

  removeLoader();
}

function displayUserList(getUsers) {
  usersList.innerHTML = getUsers
    .map(
      (item) => `
    <li>
        <p>${item.firstName} ${item.lastName}</p>
    </li>
   `
    )
    .join(" ");
}
fetchUsersList();
toTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

toBottomBtn.addEventListener("click", () => {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
});
