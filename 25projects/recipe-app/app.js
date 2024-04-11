const recipeListContainer = document.querySelector(".recipe-list");
const loader = document.querySelector(".loader");
const recipeDetails = document.querySelector(".recipe-details");

function showLoader(){
    loader.classList.add('show')
    recipeListContainer.classList.add('hide')
}
function removeLoader(){
    loader.classList.remove('show')
    recipeListContainer.classList.remove('hide')
}
async function fetchListOfRecipes() {
    showLoader()
  const response = await fetch(" https://dummyjson.com/recipes", {
    method: "GET",
  });
  const result = await response.json();
  console.log(result);
  if (result && result.recipes && result.recipes.length > 0) {
    removeLoader()
    displayRecipeList(result.recipes);
    
    console.log(result);
  }
}

fetchListOfRecipes();
function displayRecipeList(getRecipeList) {
  getRecipeList.forEach((recipeItem) => {
    const { name, id, image, cuisine, ingredients, mealType, rating, tags } =
      recipeItem;
    const recipeItemWrapper = document.createElement("div");
    recipeItemWrapper.classList.add("recipe-item");

    recipeItemWrapper.innerHTML += `<p class='recipe-name'>
        ${name}
    </p>
        <img src=${image}>
        <p class='recipe-cuisine'>${cuisine}</p>
        <p class='recipe-ingredients'>${ingredients
          .map((item) => item)
          .join(",")}</p>
        <p class='meal-type'>${mealType}</p>
        <p class='rating'>${rating}</p>
        <button class="recipe-button-details" onclick="handelRecipeDetails(${id})" >Recipe Details</button>
    `;

    recipeListContainer.appendChild(recipeItemWrapper);
  });
}

async function handelRecipeDetails(getId) {
  const response = await fetch(`https://dummyjson.com/recipes/${getId}`);
  const result = await response.json();
  // console.log(result)

  if (result) {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
    displayRecipeDetailsData(result);
  }
}

function displayRecipeDetailsData(getRecipeData) {
  recipeDetails.innerHTML = `
  <h1> you are seeing the recipe for the ${getRecipeData.name} dish </h1>
   
        ${getRecipeData.instructions.map((item,i) => `<p>step ${i+1} ${item}</p>`).join(" ")}
    `;
}