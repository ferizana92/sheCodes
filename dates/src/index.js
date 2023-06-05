// ============get current time
let now = new Date();
// ============get date data
now.getMinutes(); // 0,1,2, 12
now.getHours(); //1, 2, 3, 4
now.getDate(); //1, 2, 3, 4
now.getDay(); // 0, 1, 2
now.getMonth(); // 0, 1, 2
now.getFullYear(); // 2021
// ============get date data
let date = new Date();
console.log(date);
date.getMilliseconds();
date.getDay();
date.getFullYear();
date.getMonth();
alert("Today is" + date.getDate);
function formatDate() {
    date.getHours();
}
console.log(formatDate(new Date()))
let currentTime = new Date();
// ==============================
// Challenge 1
console.log(currentTime);

// Challenge 2
console.log(currentTime.getMilliseconds());

// Challenge 3
console.log(currentTime.getDay());

// Challenge 4
console.log(currentTime.getFullYear());

// Challenge 5
console.log(currentTime.getMonth());

// Challenge 6
let currentYear = currentTime.getFullYear();
let currentDay = currentTime.getDay();
let currentMonth = currentTime.getMonth();
let currentDate = currentTime.getDate();
let date1 = "Today is monday, June 5, ${currentYear},${currentMonth},${currentDay}";
alert(date1);
// Challenge 7
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let months = [
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
    "December"
  ];

  let currentYear = date.getFullYear();
  let currentDay = days[date.getDay()];
  let currentMonth = months[date.getMonth()];
  let currentDate = date.getDate();

  let formattedDate = `Today is ${currentDay}, ${currentMonth} ${currentDate}, ${currentYear}`;

  return formattedDate;
}

console.log(formatDate(currentTime));
