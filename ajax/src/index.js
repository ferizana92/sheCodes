let root = 'https://jsonplaceholder.typicode.com'
let path = 'users/1'

fetch(root + '/' + path)
  .then(response => (
    response.json()
  ))
  .then(json => (
    console.log(json)
  ));

function displayEmail() {
  let h1 = document.querySelector("h1");
  response.data.array.forEach(user => {
    console.log(user.email);
  });
  h1.innerHTML = "hey $(response.data[0].email)";
}
  