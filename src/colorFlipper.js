const users = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Frank",
  "Grace",
  "Hannah",
];

const container = document.querySelector(".container");

const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Filter users...");
input.id = "filter-input";
container.appendChild(input);

const userList = document.createElement("div");
userList.id = "user-list";
container.appendChild(userList);

const noResult = document.createElement("p");
noResult.id = "no-products";
noResult.setAttribute("class", "hidden");
noResult.textContent = "No users found.";
container.appendChild(noResult);

// Render all users
function renderUsers(userArray) {
  userList.innerHTML = "";
  userArray.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = user;
    userList.appendChild(li);
  });
}

renderUsers(users);

input.addEventListener("input", () => {
  const searchTerm = input.value.toLowerCase();
  const filtered = users.filter((user) =>
    user.toLowerCase().includes(searchTerm)
  );
  renderUsers(filtered);
  if (filtered.length === 0) noResult.style.display = "block";
  else {
    noResult.style.display = "none";
  }
});
