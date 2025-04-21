const container = document.querySelector(".container");

const btnOne = document.createElement("button");
btnOne.setAttribute("data-question", "q1");
btnOne.setAttribute("data-correct", "true");
btnOne.textContent = "Option A";
container.appendChild(btnOne);

const btnTwo = document.createElement("button");
btnTwo.setAttribute("data-question", "q1");
btnTwo.setAttribute("data-correct", "false");
btnTwo.textContent = "Option B";
container.appendChild(btnTwo);

const btnThree = document.createElement("button");
btnThree.setAttribute("data-question", "q2");
btnThree.setAttribute("data-correct", "true");
btnThree.textContent = "Option C";
container.appendChild(btnThree);

const btnFour = document.createElement("button");
btnFour.setAttribute("data-question", "q3");
btnFour.setAttribute("data-correct", "false");
btnFour.textContent = "Optiona D";
container.appendChild(btnFour);

const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const question = btn.dataset.question;
    const answer = btn.dataset.correct;
    console.log(`Question ID: ${question}`);
    console.log(`Answer: ${answer}`);
  });
});
