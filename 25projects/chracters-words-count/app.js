const textArea = document.querySelector("#content");
const charCount = document.querySelector("#cCount");
const wordCount = document.querySelector("#wCount");

textArea.oninput = () => {
  let chars = textArea.value;
  charCount.textContent = chars.replace(/\s/g, "").length;

  let words = textArea.value.split(" ");
  console.log(words);
  wordCount.textContent = words.filter((item) => item !== "").length;
};

// const obj = {
//   sal: 50000,
// };
// var a=10
// {
//   console.log(a)
//   let a=10
//   console.log(a)
// }

const a = [{ name: "jhon" }, { name: "jane" }];
const b = [...a];
console.log(b);
console.log(b[0]);
b[0].name = "oliver";
console.log(b);

function birth(obj) {
  obj += 1;
  console.log(obj)
}
const age = 20;
// const person={age:20}
birth(age);
console.log(age);
// console.log(person)
