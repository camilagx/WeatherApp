/*Adding the current day and time to the weather app */
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

