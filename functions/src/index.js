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
