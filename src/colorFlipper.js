const colors = [
  "tomato",
  "skyblue",
  "lightgreen",
  "gold",
  "plum",
  "salmon",
  "teal",
];

const container = document.querySelector(".container");
// Title
const title = document.createElement("h1");
title.textContent = "Background Color Flipper";
container.appendChild(title);
// Paragraph with span
const para = document.createElement("p");
para.textContent = "Current Color: ";
const colorSpan = document.createElement("span");
colorSpan.id = "color-name";
colorSpan.textContent = "white";
para.appendChild(colorSpan);
container.appendChild(para);
// Button
const button = document.createElement("button");
button.id = "change-color";
button.textContent = "Change Background";
container.appendChild(button);

button.addEventListener("click", () => {
  function getRandomColor(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
  }
  const randomColor = getRandomColor(colors);
  document.body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});
