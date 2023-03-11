const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "354a1b5512msh6dbab005d3bc7a7p14661fjsn02af8acef524",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

getWeather = (usercity) => {
    // city.innerHTML= city;
    city.innerHTML = usercity;
    // document.getElementById("city").innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + usercity,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cloud_pct.innerHTML = response.cloud_pct;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      temp.innerHTML = response.temp;
      wind_degrees.innerHTML = response.wind_degrees;
      wind_speed.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};

sub.addEventListener("click", (e) => {
  e.preventDefault(); // prevent page reload
  getWeather(inp.value);
});
