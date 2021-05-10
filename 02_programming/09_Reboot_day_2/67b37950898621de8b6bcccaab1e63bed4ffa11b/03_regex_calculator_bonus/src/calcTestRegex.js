// const readline = require("readline");

// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// reader.question("Enter an operation for test > ", (operation) => {
//   // const result = calculator(operation);
//   // console.log(`${operation} = ${result}`);
//   if (!operation.match(/(\+|-|\*|\/)/)) console.log("Can't process the operation");
//   reader.close();
// });

const e = new Error("Voila");
console.log(e.type);
