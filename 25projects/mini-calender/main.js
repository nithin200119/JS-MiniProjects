const month = document.querySelector(".month");
const day = document.querySelector(".day");
const date = document.querySelector(".date");
const year = document.querySelector(".year");

let currDate = new Date();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
month.innerHTML = months[currDate.getMonth()];
day.innerHTML = days[currDate.getDay()];
date.innerHTML = currDate.getDate();
year.innerHTML = currDate.getFullYear();
