import fetch from "node-fetch"

function getChuckNorrisJoke(category: string) {
  // code the function here
  return fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
  .then((resp) => resp.json())
  .then((resp2) => console.log(resp2.value))
  .catch((e) => console.error(e));}

// leave line below for tests to work properly
export { getChuckNorrisJoke }
