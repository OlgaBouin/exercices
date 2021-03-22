// Fake CV
// #identity
//   ✕ Should be a function (3 ms)
//   ✕ Should import 'faker' (9 ms)
//   ✕ Should return an identity object (3 ms)
// #motivation
//   ✕ Should be a function (1 ms)
//   ✕ Should import 'faker' (1 ms)
//   ✕ Should return a motivation object
// #currentJob
//   ✕ Should be a function
//   ✕ Should import 'faker' (1 ms)
//   ✕ Should return a currentJob object
// #fakeCv
//   ✕ Should return a CV object (1 ms)
//   CV identity
//     ✕ Should have valid information, coming from 'faker' functions
//   CV motivation
//     ✕ Should have valid information, coming from 'faker' functions
//   CV current job
//     ✕ Should have valid information, coming from 'faker' functions


const fakeCv = require("./fakeCv");
console.log(fakeCv());
