console.clear();
// import { enderElement } from "./utils.js";

const url = "https://swapi.dev/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();

  console.log("response", response);
  console.log("data", data);
  console.log("R2D2", data.results[2].eye_color);

  const pTag = document.createElement("p");
  pTag.textContent = data.results;
  root.appendChild(ptag);
  // renderElement(element);
}

fetchData();

/*

async function fetchJoke() {
const response = await fetch("url")

const data = await response.json();

console.log(response);
}

fetchJoke()


Have a look at the [`js/index.js`](./js/index.js) file: There is an `url` variable and an empty `fetchData()` function.

Inside of the `fetchData()` function, use the `url` variable to fetch data from the Star Wars API.

Log the fetched data to the console and play around with it:

- log the entire data object
- log different values of the data object
- Bonus: Can you log the eye color of R2-D2?

The following hints may guide you:

- make sure to wait for all asynchronous operations

Please switch to the [`js/index.js`](./js/index.js) file: May the force be with you!
*/
