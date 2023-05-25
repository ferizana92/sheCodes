let days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday","sunday" ];
console.log(days);
console.log(days[0]);
console.log(days[6]);

// Challenge 3

days[6] = "Funday";
console.log(days);

// Challenge 4

days.shift();
days.shift();
console.log(days);

// Challenge 5
days.forEach(function(day) {
  console.log(`Temperature on ${day} is 18 degrees`);
});

// or
function showDay(day) {
  console.log(`Temperature on ${day} is 18 degrees`);
}
days.forEach(showDay);
