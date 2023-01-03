let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  oslo: {
    temp: -5,
    humidity: 20
  }
};

let city = prompt("Enter a city: ");
city = city.toLowerCase();

let celciusTemp = Math.round(weather[city].temp);
let fahrenheitTemp = Math.round((weather[city].temp * 9/5) + 32);
let humidity = weather[city].humidity;

if(weather[city] !== undefined){
  alert(`It is currently ${celciusTemp}°C(${fahrenheitTemp}°F) in ${city} with a humidity of ${humidity}`);
}else{
  alert(`Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`);
}
