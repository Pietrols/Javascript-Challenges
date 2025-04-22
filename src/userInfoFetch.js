const container = document.querySelector(".container");

const form = document.createElement("form");
form.id = "form";
container.append(form);

const title = document.createElement("h2");
title.textContent = "Fetch User Info";
form.append(title);

const label = document.createElement("label");
label.setAttribute("for", "user-id");
label.textContent = "Enter User ID (1-10): ";
form.append(label);

const input = document.createElement("input");
input.setAttribute("id", "user-id");
input.type = "number";
input.setAttribute("min", "1");
input.setAttribute("max", "10");
input.textContent = "Enter User ID (1-10): ";
form.append(input);

const fetchBtn = document.createElement("button");
fetchBtn.id = "fetch-id";
fetchBtn.type = "submit";
fetchBtn.textContent = "Get User Info";
form.append(fetchBtn);

const clearBtn = document.createElement("button");
clearBtn.id = "clear-id";
clearBtn.textContent = "Clear";
form.append(clearBtn);

const message = document.createElement("p");
message.id = "message";
container.append(message);

const userInfo = document.createElement("div");
userInfo.id = "user-info";
container.append(userInfo);

const userName = document.createElement("p");
userName.id = "user-name";
const userNameTitle = document.createElement("strong");
userNameTitle.id = "user-name";
userNameTitle.textContent = "Name: ";
userName.append(userNameTitle);
userInfo.append(userName);

const email = document.createElement("p");
email.id = "user-email";
const emailTitle = document.createElement("strong");
emailTitle.textContent = "Email: ";
email.append(emailTitle);
userInfo.append(email);

const city = document.createElement("p");
city.id = "user-city";
const cityTitle = document.createElement("strong");
cityTitle.textContent = "City: ";
city.append(cityTitle);
userInfo.append(city);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const id = input.value.trim();

  //clears previous messages
  message.textContent = "";
  userName.textContent = "Name: ";
  email.textContent = "Email: ";
  city.textContent = "City: ";

  if (!id) {
    message.textContent = "❌ Type in User ID";
  }
  if (id < 1 || id > 10) {
    message.textContent = "❌ Insert ID in range 1-10";
  }

  fetchBtn.disabled = true;
  fetchBtn.textContent = "Loading...";

  fetchUser(id);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const id = input.value.trim();

  // Clear previous messages
  message.textContent = "";
  userName.textContent = "Name: ";
  email.textContent = "Email: ";
  city.textContent = "City: ";

  if (!id) {
    message.textContent = "❌ Please enter a User ID.";
    return;
  }

  if (id < 1 || id > 10) {
    message.textContent = "❌ ID must be between 1 and 10.";
    return;
  }

  fetchBtn.disabled = true;
  fetchBtn.textContent = "Loading...";

  fetchUser(id);
});

async function fetchUser(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    if (!response.ok) throw new Error("User not found");

    const data = await response.json();

    userName.textContent = `Name: ${data.name}`;
    email.textContent = `Email: ${data.email}`;
    city.textContent = `City: ${data.address.city}`;
    message.textContent = "✅ User fetched successfully!";
  } catch (err) {
    message.textContent = `❌ ${err.message}`;
  } finally {
    fetchBtn.disabled = false;
    fetchBtn.textContent = "Get User Info";
  }
}

clearBtn.addEventListener("click", () => {
  input.value = "";
  message.textContent = "";
  userName.textContent = "Name: ";
  email.textContent = "Email: ";
  city.textContent = "City: ";
});
