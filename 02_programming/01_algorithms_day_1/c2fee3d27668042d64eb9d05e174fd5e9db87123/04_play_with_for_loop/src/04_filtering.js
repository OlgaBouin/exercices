// ## Iteration on arrays with filter
//
// -  Create an array called `literalDigits` from `zero` to `nine` where each array entry is a spelled-out number;
// -  Using `length`, write on `stdout` each odd values of the table.
let litteralDigits=["zero","one","two","three","four","five","six","seven","eight","nine"];

for (let i=1;i<litteralDigits.length;i=i+2){console.log(litteralDigits[i]);}