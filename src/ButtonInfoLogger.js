const container = document.querySelector(".container");

const dogBtn = document.createElement("button");
const catBtn = document.createElement("button");
const cowBtn = document.createElement("button");

dogBtn.setAttribute("data-animal-type", "dog");
dogBtn.setAttribute("data-sound", "woof");
catBtn.setAttribute("data-animal-type", "cat");
catBtn.setAttribute("data-sound", "meow");
cowBtn.setAttribute("data-animal-type", "cow");
cowBtn.setAttribute("data-sound", "moo");

dogBtn.textContent = "Dog";
catBtn.textContent = "Cat";
cowBtn.textContent = "Cow";

container.appendChild(dogBtn);
container.appendChild(catBtn);
container.appendChild(cowBtn);

const animals = document.querySelectorAll("[data-animal-type]");

animals.forEach((btn) => {
  btn.addEventListener("click", () => {
    const animal = btn.dataset.animalType;
    const sound = btn.dataset.sound;
    console.log(`The ${animal} goes ${sound}`);
  });
});
