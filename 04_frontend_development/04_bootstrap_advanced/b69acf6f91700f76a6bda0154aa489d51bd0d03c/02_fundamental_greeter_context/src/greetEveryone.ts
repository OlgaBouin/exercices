// Copy your function greetEveryone here
type ParamRest = string[];

export function greetEveryone(...arrayOfFistnames: ParamRest): void {
  // Code your function here
  arrayOfFistnames.forEach((firstName) => console.log(`Welcome to ${firstName}`));
}
