// "data/2.5/weather?q= Ashgabat &appid=cn33f1fa73169b9c1cf4186a69375fb9e&units=TextMetrics";


let weather = {
  apiKey: "33f1fa73169b9c1cf4186a69375fb9e",
  fetchWeather: function(city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=c" + this.apiKey + "&units=TextMetrics"
    ).then((response) => response.json())
    .then((data) => this.displayWeather(data));
  },
  displayWeather: function(data) {
    const { name } = data;
    console.log(data);
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city span").textContent = name;
    document.querySelector(".temp span").textContent = Math.floor(temp - 273);
    document.querySelector(".humidity span").textContent = humidity;
    document.querySelector(".wind span").textContent = speed;
    document.querySelector(".weather").classList.remove("loading");
    
    let randomNum = Math.floor(Math.random() * 5 + 1);
    document.body.style.background = `url(./images/background${randomNum}.jpg)`
  },
  search: function() {
    this.fetchWeather(document.querySelector(".search_bar").value);
  }
}
document.querySelector(".search_bar").addEventListener("keyup", function(event) {
  if(event.key === "Enter") {
    weather.search();
  }
})

// async function getData() {
//   try {
//     const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Ashgabat&appid=c33f1fa73169b9c1cf4186a69375fb9e&units=TextMetrics");
//     const data = await response.json();
//     console.log(data);





//   } catch (error) {
//     console.error(error);
//   }
// }

// getData();

