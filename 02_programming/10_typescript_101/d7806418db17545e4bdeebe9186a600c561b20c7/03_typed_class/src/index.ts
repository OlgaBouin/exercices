class Bird {
  // Write your code here.
  age: number;
  constructor(ageOfBird: number){
    this.age = ageOfBird;
  }
  sing(): void{
    console.log("Cui cui");
  }
  fly(seconds: number): void{
    if (this.age <=1 && this.age > 0) console.log("The bird is too young to fly");
    else if (this.age > 1 && this.age <= 3) console.log(`The bird flew ${seconds} meters in ${seconds} seconds`);
    else if (this.age > 3 && this.age < 1200) console.log(`The bird flew ${2*seconds} meters in ${seconds} seconds`);
    else console.log("No way");
  }
  
}

// Leave the line below for tests to work properly.
export { Bird };
