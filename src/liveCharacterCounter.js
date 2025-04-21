const container = document.querySelector(".container");

const textarea = document.createElement("textarea");
textarea.id = "input";
container.append(textarea);

const counter = document.createElement("p");
counter.id = "counter";
counter.textContent = `Characters: 0`;
container.append(counter);

textarea.addEventListener("input", () => {
  const count = textarea.value.length;
  counter.textContent = `Characters: ${count}`;
  counter.style.color = count >= 100 ? "red" : "black";
});
