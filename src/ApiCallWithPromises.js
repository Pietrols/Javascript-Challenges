const container = document.querySelector(".container");

const form = document.createElement("form");
form.id = "api-form";
container.append(form);

const userLabel = document.createElement("label");
userLabel.setAttribute("for", "user");
userLabel.textContent = "Name: ";
form.append(userLabel);

const user = document.createElement("input");
user.type = "text";
user.id = "user";
form.append(user);

const passwordLabel = document.createElement("label");
passwordLabel.setAttribute("for", "password");
passwordLabel.textContent = "Password: ";
form.append(passwordLabel);

const password = document.createElement("input");
password.type = "password";
password.id = "password";
form.append(password);

const loginBtn = document.createElement("button");
loginBtn.id = "login-btn";
loginBtn.type = "submit";
loginBtn.textContent = "Login";
form.append(loginBtn);

const message = document.createElement("p");
message.id = "message";
message.style.marginTop = "10px";
form.append(message);

// Mock login function
function mockLogin(user, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user === "admin" && password === "1234") {
        resolve("✅ You have logged in successfully!");
      } else if (user !== "admin" && password === "1234") {
        reject("❌ Incorrect username.");
      } else if (user === "admin" && password !== "1234") {
        reject("❌ Incorrect password.");
      } else {
        reject("❌ Incorrect username and password.");
      }
    }, 2000);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = user.value.trim();
  const pwd = password.value.trim();

  //  Validate inputs
  if (!username || !pwd) {
    message.textContent = "⚠️ Please fill in all fields.";
    message.style.color = "orange";
    return;
  }

  loginBtn.disabled = true;
  loginBtn.textContent = "Logging in...";
  message.textContent = "⏳ Please wait...";
  message.style.color = "black";

  mockLogin(username, pwd)
    .then((message) => {
      message.textContent = msg;
      message.style.color = "green";
    })
    .catch((error) => {
      message.textContent = error;
      message.style.color = "red";
    })
    .finally(() => {
      loginBtn.disabled = false;
      loginBtn.textContent = "Login";
    });
});
