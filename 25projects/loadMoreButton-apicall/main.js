const productsContainer = document.querySelector(".products-container");
const loadMoreBtn = document.querySelector(".load-more");
let currentStep = 0;
async function fetchListOfProducts(getCurrentStep) {
  try {
    const response = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${
        getCurrentStep === 0 ? 0 : getCurrentStep * 10
      }`,
      {
        method: "GET",
      }
    );

    const result = await response.json();
    // console.log(result);
    if (result && result.products) displayProducts(result.products);
  } catch (e) {
    console.log(e);
  }
}

function displayProducts(productList) {
  productsContainer.innerHTML += productList
    .map((product) => {
      return `
    <div class='product-item-wrapper'>
        <p class='product-title'>${product.title}
        </p>
        <img class='product-img' src=${product.thumbnail}>
        <p class='product-price'>${product.price}</p>
        <p class='product-desc'>${product.description}</p>
    </div>
 `;
    })
    .join(" ");
  if (productsContainer.children.length === 100) {
    loadMoreBtn.setAttribute("disabled", "true");
  }
}
fetchListOfProducts(currentStep);

loadMoreBtn.addEventListener("click", () => {
  fetchListOfProducts((currentStep += 1));
});
