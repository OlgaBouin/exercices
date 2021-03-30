
import { rl } from "../interface";

// #ask
// ✕ Must return a promise (2 ms)
// ✕ Must resolve the user input if !== "" (3 ms)
// ✕ Must reject the user input if === ""

function ask(questionToAsk: string, reader = rl): Promise<string> {
  // Your code goes here

  return new Promise((resolve, reject) => {
    reader.question(`${questionToAsk}`, (responseOfUser) => {
      if (responseOfUser !== "") {
        resolve(responseOfUser);
      } else {
        reject(new Error("Invalid input"));
      }
    });
  });
}

// Leave line below for tests to work properly
export default ask;
