 function joinUs() {
        const name = prompt("What is your name?");
        const age = prompt("How old are you?");
        let h1 = document.querySelector("h1");
        if (age >= 18) {
          alert("Hello " + name + ",welcome to sheCodes!");
        } else {
          alert("Sorry! " + name + ",you can not apply to sheCodes!");
        }
      }
      let contactButton = document.querySelector("button");
      contactButton.addEventListener("click", joinUs);