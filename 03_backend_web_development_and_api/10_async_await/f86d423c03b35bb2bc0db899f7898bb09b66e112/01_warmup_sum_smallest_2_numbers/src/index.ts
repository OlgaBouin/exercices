// ✓ Should return the sum of the lowest two numbers of an array (2 ms)
// Bonus
//   ✕ Should throw an error if there are less than 4 numbers (1 ms)
//   ✕ Should throw an error if there are non positive numbers (1 ms)

import { exit } from "node:process";

export function sumTwoSmallestNumbers(arrayOfNumbers: number[]): number {
  if (arrayOfNumbers.length < 4) throw new Error("Less than 4 numbers in Array");
  arrayOfNumbers.forEach((numberInArray) => {if (numberInArray<0) {throw new Error("Negative numbers in Array");}}

  const arrayOfOrderedNumbers = arrayOfNumbers.sort(function (a, b) {
    return a - b;
  });
  return arrayOfOrderedNumbers[0] + arrayOfOrderedNumbers[1];
}
