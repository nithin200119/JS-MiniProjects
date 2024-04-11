const hexBtn = document.querySelector(".hex-btn");
const hexColorValue = document.querySelector(".hex-color-value");
const hexColorContainer = document.querySelector(".hex-color-container");
const hexCopy = document.querySelector(".hex-copy");
hexBtn.addEventListener("click", () => {
  let characterSet = "0123456789ABCDEF";
  let hexColorOutput = "#";
  for (let i = 0, charSetLength = characterSet.length; i < 6; ++i) {
    hexColorOutput += characterSet.charAt(
      Math.floor(Math.random() * charSetLength)
    );
  }
  hexColorValue.textContent = hexColorOutput;
  hexColorContainer.style.background = `${hexColorOutput}`;
  hexBtn.style.color = `${hexColorOutput}`;
  //   console.log(hexColorOutput)
});
hexCopy.addEventListener("click", () => {
  // console.log(hexColorValue.textContent)
  navigator.clipboard.writeText(hexColorValue.textContent);
  alert("hex color is copied to clipboard");
});
// !rgb color generator
const rgbBtn = document.querySelector(".rgb-btn");
const redInputRange = document.querySelector("#red");
const greenInputRange = document.querySelector("#green");
const blueInputRange = document.querySelector("#blue");
const rgbCon = document.querySelector(".rgb-color-container");
const rgbCopy = document.querySelector(".rgb-copy");
const rgbValue = document.querySelector(".rgb-color-value");
rgbBtn.addEventListener("click", () => {
  let extractRedValue = redInputRange.value;
  let extractGreenValue = greenInputRange.value;
  let extractBlueValue = blueInputRange.value;
  rgbCon.style.backgroundColor = `rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`;
  rgbBtn.style.color = `rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`;
  rgbValue.textContent = `rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`;
});
rgbCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(rgbValue.textContent);
  alert("rgb color is copied to clipboard");
});
