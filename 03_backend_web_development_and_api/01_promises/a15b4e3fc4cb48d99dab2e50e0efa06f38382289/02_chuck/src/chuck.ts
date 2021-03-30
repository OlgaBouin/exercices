// Promisified Chuck
// #getCategories
//   ✕ Must use getChuckCategories (6 ms)
//   ✕ Must return an array of categories (1 ms)
// #getJoke
//   ✕ Must take one parameter (1 ms)
//   ✕ Must use the category parameter in the url (1 ms)
//   ✕ Must return a string (1 ms)

import { getChuckCategories, getChuckJoke } from "../utils";

function getCategories(): Promise<any> {
  // Your code goes here
  // return new Promise((resolve) => {
  //   resolve(getChuckCategories());
  // });
  return getChuckCategories();
}

function getJoke(category: string): Promise<string> {
  // Your code goes here
  // return new Promise((resolve) => {
  //   resolve(getChuckJoke(category).then((joke) => joke.value));
  // });
  return getChuckJoke(category).then((joke) => joke.value);
}

// Leave the line below for tests to work properly
export { getCategories, getJoke };
