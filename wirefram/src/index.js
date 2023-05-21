
      function changeCity() {
        const city = prompt("Where is your city?");
        const temp = prompt("What temperature is it?");
        let h1 = document.querySelector("h1");
        if (temp >= 0) {
          h1.innerHTML = "😊<br/> Currently " + temp + "° in " + city;
        } else {
          h1.innerHTML = "🥶<br/> Currently " + temp + "° in " + city;
        }
      }
      let cityButton = document.querySelector("button");
      cityButton.addEventListener("click", changeCity);
  