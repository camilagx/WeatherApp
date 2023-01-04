//Adding the current day and time to the weather app 
let dayTimeSpan = document.querySelector('#dayTime');

function getDayName(num){
  let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  return days[num];
}

let now = new Date();
let day = getDayName(now.getDay());
let hour = now.getHours();
let minutes = now.getMinutes();

dayTimeSpan.innerHTML = `${day} ${hour}:${minutes}`;

// Updates heading to the city inputted by user 
document.querySelector('#cityBtnSearch').addEventListener('click', getCity);

function getCity(){
  let inputCity = document.querySelector('#citySearchBox').value;
  let h1City = document.querySelector('#city');

  h1City.innerHTML = inputCity;
}

// Alternate between celcius to fahrenheit 
let celcius = 17;

function getFahrFromCelcius(celcius){
  return (celcius * 9/5) + 32;
}

//Display temperature in fahrenheit
document.querySelector('#fahrTemp').addEventListener('onclick',displayFahrenheit());

function displayFahrenheit(){
  let cityTempSpan = document.querySelector('#cityTemp');
  cityTempSpan.innerHTML = getFahrFromCelcius(celcius);
}

//Display temperature in celcius
document.querySelector('#celciusTemp').addEventListener('onclick',displayCelcius());

function displayCelcius(){
  let cityTempSpan = document.querySelector('#cityTemp');
  cityTempSpan.innerHTML = celcius;

}


/*
document.querySelector('#celciusTemp').addEventListener('click',displayCelcius());
*/