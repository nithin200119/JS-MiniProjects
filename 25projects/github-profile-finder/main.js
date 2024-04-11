const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");
const gitHubProfileDetails = document.querySelector(".github-profile-details");
const loader=document.querySelector('.loading-text')
function showLoader() {
  loader.classList.add('show')
  gitHubProfileDetails.classList.add('hide')
}
function removeLoader() {
   loader.classList.remove("show");
   gitHubProfileDetails.classList.remove("hide");
}

async function fetchGitHubDetails() {
  showLoader();
  const response = await fetch(
    `https://api.github.com/users/${searchInput.value}`,
    { method: "GET" }
  );
  const result = await response.json();
  if(result){
    removeLoader();
    displayResult(result);
    searchInput.value=""
  }
}
function displayResult(getProfileDetails){
    const {login,avatar_url,public_repos,followers}=getProfileDetails
    console.log(avatar_url);
    gitHubProfileDetails.innerHTML = `<p>${login}</p>
    <img src=${avatar_url} alt=${login}>
      <p>${public_repos}</p>
      <p>${followers}</p>
    `;
}
searchBtn.addEventListener("click", fetchGitHubDetails);