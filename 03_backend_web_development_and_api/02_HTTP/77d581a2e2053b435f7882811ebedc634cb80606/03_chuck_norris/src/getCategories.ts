import fetch from "node-fetch"

// Chuck Norris API
// #getCategories
//   ✕ Must use 'node-fetch' package to get a list of categories (5 ms)
//   ✕ Must print the error with 'console.error' when the API respond with error (7 ms)
//   ✕ Must not print anything with 'console.log' when an error is throwned (1 ms)
//   ✕ Must print a list of categories with 'console.log' (14 ms)
// #getChuckNorrisJoke
//   ✓ Must print an error with 'console.error' when the API respond with error (7 ms)
//   ✕ Must not print anyt hing with 'console.log' when an error is throwned (1 ms)
//   ✓ Must use 'node-fetch' package to get a joke (1 ms)
//   ✓ Must use the category parameter in the API url (1 ms)
//   ✕ Must print a joke with 'console.log' (1 ms)


function getCategories() {
  return fetch("https://api.chucknorris.io/jokes/categories")
.then((resp) => resp.json())
.then((resp2) => console.log(resp2[3]))
.catch((e) => console.error(e));}

// leave line below for tests to work properly
export { getCategories }
