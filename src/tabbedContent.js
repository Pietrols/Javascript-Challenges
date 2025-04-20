const container = document.querySelector(".container");

const btnContainer = document.createElement("div");
btnContainer.id = "btn-container";
btnContainer.setAttribute = ("class", "tabs");
container.appendChild(btnContainer);

const headerTitle = document.createElement("h2");
headerTitle.id = "header-title";
headerTitle.textContent = "Tabbed Interface Demo";
btnContainer.appendChild(headerTitle);

const homeBtn = document.createElement("button");
homeBtn.id = "home-btn";
homeBtn.setAttribute("class", "active tab");
homeBtn.setAttribute("data-tab-target", "#home");
homeBtn.textContent = "Home";
btnContainer.appendChild(homeBtn);

const aboutBtn = document.createElement("button");
aboutBtn.id = "about-btn";
aboutBtn.setAttribute("class", "tab");
aboutBtn.setAttribute("data-tab-target", "#about");
aboutBtn.textContent = "About";
btnContainer.appendChild(aboutBtn);

const contactBtn = document.createElement("button");
contactBtn.id = "contact-btn";
contactBtn.setAttribute("class", "tab");
contactBtn.setAttribute("data-tab-target", "#contact");
contactBtn.textContent = "Contact";
btnContainer.appendChild(contactBtn);

const tabContainer = document.createElement("div");
tabContainer.id = "content-container";
tabContainer.setAttribute = ("class", "tab-content");
container.appendChild(tabContainer);

const homeTab = document.createElement("div");
homeTab.setAttribute("data-tab-content", "");
homeTab.setAttribute("class", "active");
homeTab.id = "home";
homeTab.textContent = "Welcome to the homepage!";
tabContainer.appendChild(homeTab);

const aboutTab = document.createElement("div");
aboutTab.setAttribute("data-tab-content", "");
aboutTab.id = "about";
aboutTab.textContent = "We are passionate about clean javaScript.";
tabContainer.appendChild(aboutTab);

const contactTab = document.createElement("div");
contactTab.setAttribute("data-tab-content", "");
contactTab.id = "contact";
contactTab.textContent = "Reach out at content@example.com";
tabContainer.appendChild(contactTab);

const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);

    // Hide all tab contents
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });

    // Remove active class from all buttons
    tabs.forEach((t) => {
      t.classList.remove("active");
    });

    // Activate clicked tab and its content
    tab.classList.add("active");
    target.classList.add("active");
  });
});
