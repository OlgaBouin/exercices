// ⚠️ don't change this code!

const readline = require("readline");
const ticTacToe = require("./ticTacToe");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

ticTacToe.start(reader);
// ⚠️ don't change this code!


// Refactor Tic Tac Toe
// Game state
//   ✕ the file exists (4 ms)
//   ✕ Should export the game 'state' (18 ms)
//   #updateState
//     ✕ Should export the 'updateState' function (1 ms)
//     ✕ Should take a 'coordinate' and a 'player' parameters (2 ms)
//     ✕ Should update the state (1 ms)
// Game display
//   ✕ the file exists (1 ms)
//   #renderBoard
//     ✕ Should export the 'renderBoard' function (1 ms)
//     ✕ Should take the state as parameter
//     ✕ Should render the board (1 ms)
// Utilities
//   ✕ the file exists (1 ms)
//   #isNotNull
//     ✕ Should export the 'isNotNull' function (1 ms)
//     ✕ Should return 'false' when called with 'null' (1 ms)
//   #flattenArray
//     ✕ Should export the 'flattenArray' function (1 ms)
//     ✕ Should flatten two arrays (1 ms)
// The game
//   ✕ Should be playable (2 ms)
//   ticTacToe.js
//     ✕ the file exists
//     ✕ Should export a 'start' function (2 ms)
