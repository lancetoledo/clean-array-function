// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let array = [0, 1, "hello", "*&^", false, 2, undefined, "", 3, null, 23, 109];
let newArray = [];

function cleanArray(anyArray) {
  for (let i = 0; i < anyArray.length; i++) {
    if (!!array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

console.log(cleanArray(array));
