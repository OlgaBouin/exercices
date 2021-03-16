const MORSE_CODE = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
};

const transformStringToArray = (string, separator) => string.trim().split(separator);

//decodeMorseWord2 = (array) => array.map(decodeMorseLetter);

const decodeMorseLetter = (morseString) => MORSE_CODE[morseString];

const decodeMorseWord = (morseWordArray) => morseWordArray.reduce(fnForReduce);

const fnForReduce = (word, letter) => word + decodeMorseLetter(letter);



const decodeMorse = (stringToDecode) => {
  const morseDoubleArray = transformStringToArray(stringToDecode, "  ").map((element) =>
    transformStringToArray(element, " "),
  );
  
  for (let i = 0; i < morseDoubleArray.length; i++) morseDoubleArray[i][0] = decodeMorseLetter(morseDoubleArray[i][0]); //a eviter

  return morseDoubleArray.map(decodeMorseWord).join(" ");
};





// Leave line below for tests to work properly
module.exports = decodeMorse;

//const result = decodeMorse(".... . -.--   .--- ..- -.. .");

//console.log(result);
