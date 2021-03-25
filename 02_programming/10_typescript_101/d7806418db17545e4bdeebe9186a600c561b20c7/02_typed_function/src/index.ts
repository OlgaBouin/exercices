// handleTuple
// should only accept tuples as props
//   ✕ shouldn't use console.log if not provided with a tuple (4 ms)
// should output:
//   ✕ two console.log with correct values and types
//   ✕ the value of the first item at the start of the string (2 ms)
//   ✕ the value of the second item at the start of the string



// class tuplePrint {
//   entryOne : string;
//   entryTwo : number;
//   constructor (one:string, two:number){
//     console.log(one+"."+typeof one);
//     console.log(two);
//     console.log(typeof two);
//   }
// }
//   displayEntryOne(): void {
//     console.log(this.entryOne);
//   }
//   displayEntryTwo(): void {
//     console.log(this.entryTwo);
//   }
// }

// function displayString(toDisplayString :string): void {
//   console.log(toDisplayString);
// }
// function displayNumber(toDisplayNumber :number): void {
//   console.log(toDisplayNumber);
// }


// function handleTuple(tuple: [string, number]): void {
//   new tuplePrint(tuple[0],tuple[1])
// }



function handleTuple(tuple: [string, number]): void {
  tuple.forEach(element => {
    if (typeof element == "string")
    console.log(element + `The type of ${element} value is string.}`);
    if (typeof element == "number")
    console.log(element + `The type of value ${element} is number.`);
  });
}

handleTuple(["voila",3]);

// Leave the line below for tests to work properly.
export { handleTuple };
