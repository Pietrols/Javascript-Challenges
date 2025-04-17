const container = document.querySelector(".container");

// Title
const title = document.createElement("h1");
title.textContent = "Simple Counter";
container.appendChild(title);

// Counter Display
const display = document.createElement("p");
display.id = "counter-display";
display.textContent = "0";
container.appendChild(display);

// Button Container
const btnGroup = document.createElement("div");
btnGroup.classList.add("btn-group");
container.appendChild(btnGroup);

// Increment Button
const incBtn = document.createElement("button");
incBtn.id = "increment-btn";
incBtn.textContent = "Increment";
btnGroup.appendChild(incBtn);

// Decrement Button
const decBtn = document.createElement("button");
decBtn.id = "decrement-btn";
decBtn.textContent = "Decrement";
btnGroup.appendChild(decBtn);

// Reset Button
const resetBtn = document.createElement("button");
resetBtn.id = "reset-btn";
resetBtn.textContent = "Reset";
btnGroup.appendChild(resetBtn);

let count = 0;
function updateDisplay() {
  display.textContent = count;
}

function increment() {
  count++;
  updateDisplay();
}

function decrement() {
  count--;
  updateDisplay();
}

function reset() {
  count = 0;
  updateDisplay();
}

// Initial Display
updateDisplay();

incBtn.addEventListener("click", () => {
  increment();
});

decBtn.addEventListener("click", () => {
  if (count > 0) decrement();
  else reset();
});

resetBtn.addEventListener("click", () => {
  reset();
});
