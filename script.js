let weather = {
  apiKey: "9ec210488f0c57acf9f5af4d4a22c5e8",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metrics&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },

  //create variables using data then calling a specific part of each data parameter
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    //console.log(name, icon, description, temp, humidity, speed);

    //display items
    document.querySelector("city").innerHTML = "Weather in " + name;
    document.querySelector("icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector("decription").innerText = description;
    document.querySelector("temp").innerText = temp + "°C";
    document.querySelector("humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector("wind").innerText = "Wind Speed: " + speed + "km/h";
  },

  search: function () {
    this.fetchWeather(document.querySelector("search-bar").value);
  },
};
document.querySelector("button").addEventListener("click", function () {
  weather.search();
});
document.querySelector("weather").classList.remove("loading");
document.body.style.backgroundImage =
  "url('https://source.unsplash.com/2050x950/?nature,water" + name + "')";

document
  .querySelector("search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Seattle");
