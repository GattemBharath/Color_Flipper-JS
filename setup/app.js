const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const color = document.querySelector(".color");
const btn = document.querySelector("#btn");
const main = document.querySelector(".main");

function changeColor() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  color.textContent = randomColor;
  main.style.backgroundColor = randomColor;
}

btn.addEventListener("click", changeColor);
