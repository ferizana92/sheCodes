let city="Tehran";
let country = "Iran";
const sum = "I am from " +city + ",from "+country
// ====================================================
const userPlace = prompt("please enter your home town!");
      alert(userPlace);
      const userName = prompt("What is your First name?");
      const lastName = prompt("What is your Last name?");
alert("Your name is " + userName + lastName);
// ====================================================
const userAge = prompt("please enter your age!", 0);

if (userAge >= 18) {
    alert( "you can apply to sheCodes!")
}else {
    alert( "you can not apply to sheCodes!")
}
// ====================================================
const Time = prompt("What time is it?");
      if (Time >= 18) {
        alert("Good evening!🌛");
      } else {
        if (Time < 12) {
          alert("Good morning!☀");
        } else {
          alert("Good afternoon!⭐");
        }
      }
// ====================================================
const countryName = prompt("What country are you from?");
      if (
        countryName === "Brazil" ||
        "Portugal" ||
        "BRAZIL" ||
        "PORTUGAL" ||
        "pORTugal"
      ) {
        alert("You speak Portuguese!");
      } else {
        alert("You don't speak Portuguese");
      }
// ====================================================
const countryName1 = prompt("What country are you from?");
countryName1 = countryName1.toLocaleLowerCase();
countryName1 = countryName1.trim();
countryName1 = countryName1.replace("Brasil","Brazil");
if (countryName1 === "Portugal" || countryName1 === "Brazil"
      ) {
        alert("You speak Portuguese!");
      } else {
        alert("You don't speak Portuguese");
      }
// ====================================================
function canSpeakPortuguese() {
        const countryName = prompt("What country are you from?");
        if (countryName === "Portugal" || countryName === "Brazil") {
          alert("You speak Portuguese!");
        } else {
          alert("Go learn Portuguese!");
        }
      }
      canSpeakPortuguese();
// ====================================================
