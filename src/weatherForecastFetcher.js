const container = document.querySelector(".container");

const form = document.createElement("form");
form.id = "weather-form";
container.append(form);

const title = document.createElement("h2");
title.textContent = "Weather App";
form.append(title);

const label = document.createElement("label");
label.setAttribute("for", "city-input");
label.textContent = "Enter a City: ";
form.append(label);

const input = document.createElement("input");
input.setAttribute("id", "city-input");
input.setAttribute("required", "");
input.type = "text";
form.append(input);

const fetchBtn = document.createElement("button");
fetchBtn.id = "fetch-weather";
fetchBtn.type = "submit";
fetchBtn.textContent = "Weather Data";
form.append(fetchBtn);

const clearBtn = document.createElement("button");
clearBtn.id = "clear-weather";
clearBtn.textContent = "Clear";
form.append(clearBtn);

const message = document.createElement("p");
message.id = "weather-message";
container.append(message);

const weatherInfo = document.createElement("div");
weatherInfo.id = "weather-info";
container.append(weatherInfo);

const cityName = document.createElement("p");
cityName.id = "city-name";
const cityNameTitle = document.createElement("strong");
cityNameTitle.id = "city-name";
cityNameTitle.textContent = "Name: ";
cityName.append(cityNameTitle);
weatherInfo.append(cityName);

const temperature = document.createElement("p");
temperature.id = "temperature";
const temperatureTitle = document.createElement("strong");
temperatureTitle.textContent = "Temperature: ";
temperature.append(temperatureTitle);
weatherInfo.append(temperature);

const description = document.createElement("p");
description.id = "description";
const descriptionTitle = document.createElement("strong");
descriptionTitle.textContent = "Description: ";
description.append(descriptionTitle);
weatherInfo.append(description);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const weatherInput =
    input.value.trim().charAt(0).toUpperCase() + input.value.slice(1);

  //Clear previous messages
  message.textContent = "";
  cityName.textContent = "Name: ";
  temperature.textContent = "Temperature: ";
  description.textContent = "Description: ";

  if (!weatherInput) {
    Y;
    message.textContent = "❌ Please enter a City.";
    return;
  }

  fetchBtn.disabled = true;
  fetchBtn.textContent = "Loading...";

  fetchWeather(weatherInput);
});

async function fetchWeather(weatherInput) {
  try {
    const response =
      await fetch(`https://goweather.herokuapp.com/weather/${weatherInput}
            `);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    cityName.textContent = `Name: ${weatherInput}`;
    temperature.textContent = `Temperature: ${data.temperature}`;
    description.textContent = `Desccription: ${data.description}`;
  } catch (error) {
    message.textContent = `❌ ${error.message}`;
  } finally {
    fetchBtn.disabled = false;
    fetchBtn.textContent = "Weather Data";
  }
}

clearBtn.addEventListener("click", () => {
  input.value = "";
  message.textContent = "";
  cityName.textContent = "Name: ";
  temperature.textContent = "Temperature: ";
  description.textContent = "Desccription: ";
});
