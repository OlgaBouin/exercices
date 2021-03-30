import fetch from "node-fetch"

function getCategories() {
  fetch("curl https://api.chucknorris.io/jokes/categories/")
  .then((resp) => resp.json())
  .then((resp2) => console.log(resp2))
}
getCategories();
// leave line below for tests to work properly
export { getCategories }
