let hrs = document.getElementById('hrs');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

setInterval(() => {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  // Check whether AM or PM
  let newformat = hours >= 12 ? 'PM' : 'AM';

  // Find current hour in AM-PM Format
  hours = hours % 12;

  // To display "0" as "12"
  hours = hours ? hours : 12;

  hrs.innerHTML =
    (hours < 10 ? '0' : '') + hours;
  min.innerHTML =
    (currentTime.getMinutes() < 10 ? '0' : '') + currentTime.getMinutes();
  sec.innerHTML =
    (currentTime.getSeconds() < 10 ? '0' : '') + currentTime.getSeconds();
}, 1000);
