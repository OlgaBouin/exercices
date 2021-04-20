import { squareNumber } from "./squareNumber";

export function context(arrayOfNumbers: number[]): number[] {
  return arrayOfNumbers.map(squareNumber);
}
