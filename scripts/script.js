//Feature 1: Get current day, format, and display dynamically
let now = new Date();
let dayTimeSpan = document.querySelector('#dayTime');
dayTimeSpan.innerHTML = formatDate(now);

function formatDate(now){
  let day = getDayName(now.getDay());
  let hour = parseTimeToString(now.getHours());
  let minutes = parseTimeToString(now.getMinutes());

  return `${day} ${hour}:${minutes}`;
}

function getDayName(num){
  let days = ['Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'];

  return days[num];
}

/*Checks if time is between 0-9, then add '0' to the minutes or hours*/
function parseTimeToString(time){
  if(time < 10){
    return `0${time}`;
  }
  return time;
}

//Feature 2: Updates heading to the city inputted by user 
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

// Feature 3: Alternate between celcius to fahrenheit 
let currentCityTemp = document.querySelector('#cityTemp').innerHTML;

//Display temperature in fahrenheit
document.querySelector('#fahrTemp').addEventListener('click',function(){
  let cityTempSpan = document.querySelector('#cityTemp');
  cityTempSpan.innerHTML = getFahrFromCelcius(currentCityTemp);
  console.log('in displayFahrenheit');
});

//Display temperature in celcius
document.querySelector('#celciusTemp').addEventListener('click',function(){
  let cityTempSpan = document.querySelector('#cityTemp');
  cityTempSpan.innerHTML = currentCityTemp;
});

//Conversion from celcius to fahrenheit
function getFahrFromCelcius(celcius){
  return Math.round((celcius * 9/5) + 32);
}