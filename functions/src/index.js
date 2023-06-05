// Challenge
// 1. Create a function isWindy and alert 'It is windy'
// 2. Call the function twice
function isWindy(){
        alert("It is windy");
}
isWindy();
isWindy();
// ===========
function sayFact() {
  let name = prompt("What's your name?");

  if (name === "Sofia") {
    alert("Your name comes from the Greek -> Sophia");
  }
}

sayFact();
// ===========
function fullName(firstName, lastName) {
  alert(firstName + " " + lastName);
}

let firstName = prompt("What's your first name?");
let lastName = prompt("What's your last name?");
fullName(firstName, lastName);
fullName("Kate", "Robinson");
// ===========
function hello() {
  function go(name) {
    alert(name);
  }

  let name = "SheCodes";
  go(name);
}

hello();
// ===========
// Challenge
// 1. Create a function isWindy
// 2. Add a speed parameter to the function
// 3. If speed is greater than 5, alert ‘It is windy’
// 4. Else, alert ‘It is not windy’
// 5. Call the function twice with different arguments to test both scenarios
function isWindy() {
  let speed = prompt("How much is speed?");

if (speed > 5) {
  alert("It is windy");
} else {
  alert("It is not windy");
}
}
isWindy();
isWindy();
// ===============
function isWindy(speed) {
  if (speed > 5) {
    alert("It is windy");
  } else {
    alert("It is not windy");
  }
}
isWindy(5);
isWindy(10);
// ===========
function add(x, y) {
  return x + y;
}

let result = add(3, 4);
let result2 = add(result, 0);


function getFullName(firstName, lastName) {
  let fullName = firstName + " " + lastName;
  return fullName;
}

let userFullName = getFullName("Kate", "Robinson");
alert(userFullName); // Kate Robinson
alert(getFullName("Julie", "Smith")); // Julie Smith
