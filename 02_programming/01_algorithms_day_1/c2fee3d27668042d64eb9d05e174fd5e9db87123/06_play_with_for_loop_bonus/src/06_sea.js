// # The sea with some whirlpools (30 by 9)
// And to spice things up, add an X at the positions 25:2 and 7:9 and a 0 at the positions 6:4 and 18:7
//
// ```
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~X~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~0~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~0~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~X~~~~~~~~~~~~~~~~~~~~~~~
// ```


console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~X~~~~~");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("~~~~~0~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("~~~~~~~~~~~~~~~~~0~~~~~~~~~~~~");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("~~~~~~X~~~~~~~~~~~~~~~~~~~~~~~");

/*
//methode 1

function createThirtyWavesLine() {
  let sousArray = [];
  for (let j = 0; j < 30; j++) {
    sousArray.push("~");
  }
  return sousArray;
}

function createSeaNineLinesThirtyColumns() {
  let doubleArray = [];
  for (let j = 0; j < 9; j++) {
    doubleArray.push(createThirtyWavesLine());
  }
  doubleArray[1][24] = "X";
  doubleArray[8][6] = "X";
  doubleArray[3][5] = "0";
  doubleArray[6][17] = "0";
  return doubleArray;
}

function displayDoubleArray(doubleArray) {
  let stringToDisplay = "";
  for (let i = 0; i < doubleArray.length; i++) {
    stringToDisplay = stringToDisplay + doubleArray[i].join("") + "\n";
  }
  return stringToDisplay.slice(0, -1);
}

function fn() {
  console.log(displayDoubleArray(createSeaNineLinesThirtyColumns()));
}

fn();

//methode 2


function sea() {
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 31; j++) {
      if ((i === 2 && j === 25) || (i === 9 && j === 7)) {
        process.stdout.write("X");
      } else if ((i === 4 && j === 6) || (i === 7 && j === 18)) {
        process.stdout.write("0");
      } else {
        process.stdout.write("~");
      }
    }
    console.log("");
  }
}

sea();
*/
