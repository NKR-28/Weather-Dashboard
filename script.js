let weather = {
  apiKey: "9ec210488f0c57acf9f5af4d4a22c5e8",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },

  //create variables for all items to display
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(city, icon, description, temp, humidity, speed);
    document.querySelector("city").innerHTML = "Weather in " + name;
    document.querySelector("icon").src = 
  },
};
