//Adding the current day and time to the weather app 
let dayTimeSpan = document.querySelector('#dayTime');

function getDayName(num){
  let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  return days[num];
}

let now = new Date();
let day = getDayName(now.getDay());
let hour = parseTimeToString(now.getHours());
let minutes = parseTimeToString(now.getMinutes());

dayTimeSpan.innerHTML = `${day} ${hour}:${minutes}`;

/*Checks if time is between 0-9, then add '0' to the minutes or hours*/
function parseTimeToString(time){
  if(time < 10){
    return `0${time}`;
  }
  return time;
}
// Updates heading to the city inputted by user 
document.querySelector('#cityBtnSearch').addEventListener('click', getCity);

/*Updates heading to the city inputted by user */
document.querySelector('#cityBtnSearch').addEventListener('click', getCity);

function getCity(){
  let inputCity = document.querySelector('#citySearchBox').value;
  let h1City = document.querySelector('#city');

  h1City.innerHTML = inputCity;
}

function getCity(){
  let inputCity = document.querySelector('#citySearchBox').value;
  let h1City = document.querySelector('#city');

  h1City.innerHTML = inputCity;
}

// Alternate between celcius to fahrenheit 
let currentCityTemp = document.querySelector('#cityTemp').innerHTML;

function getFahrFromCelcius(celcius){
  return Math.round((celcius * 9/5) + 32);
}

//Display temperature in fahrenheit
document.querySelector('#fahrTemp').addEventListener('click',function(){
  let cityTempSpan = document.querySelector('#cityTemp');
  cityTempSpan.innerHTML = getFahrFromCelcius(currentCityTemp);
  console.log('in displayFahrenheit');
});

//Display temp in celcius
document.querySelector('#celciusTemp').addEventListener('click',function(){
  let cityTempSpan = document.querySelector('#cityTemp');
  cityTempSpan.innerHTML = currentCityTemp;
});
/*
document.querySelector('#celciusTemp').addEventListener('click',displayCelcius());
*/