// Tree class
// ✓ should be a class (1 ms)
// ✓ should be abstract (1 ms)
// class constructor:
//   ✓ Tree should have a constructor
//   ✓ constructor should have only one parameter
//   ✕ should initialize age (2 ms)
//   height computation:
//     ✓ should have a height of 0 if initialized at 0 years old (1 ms)
//     ✓ should grow 25 centimeters per year, from 1 to 9 years old (included) (1 ms)
//     ✕ should grow 10 centimeters per year, from 10 to 20 years old (included)
//     ✕ should have reach an height of 335cm after 50 years (1 ms)
//     ✓ should stop growing after 20 years old (6 ms)
// class properties:
//   ✓ should have a property called age.
//   ✕ should have a property called height, that get computed based on its age (1 ms)
//   ✕ should have a property called alive, with a default value of `true`. (2 ms)
// class methods:
//   isAlive:
//     ✓ should have a method called isAlive. (1 ms)
//     ✓ should be an abstract method.
//     ✕ should return a boolean. (2 ms)
//   ageOneYear:
//     ✓ should have a method called ageOneYear.
//     ✓ should be an abstract method.
//     ✕ should return a boolean. (1 ms)
//   seed
//     ✓ should have a method called seed.
//     ✓ should not be an abstract method.
//     ✓ the seed method should reset the tree properties. (1 ms)



// Code the class here.
abstract class Tree {
  age: number = 0; //years
  height : number; //centimeters
  alive: boolean = true; //true alive
  constructor(age: number){
    this.age=age;
    this.height=this.heightFromAge(this.age);
  } 
  private heightFromAge(ageInput: number): number{
    if (ageInput >= 20) return 335;
    else if (ageInput > 17) return 315+ageInput%9*10;
    else if (ageInput >9) return 225+ageInput%9*10;
    else if (ageInput >=1) return ageInput*25;
    else return 0;
  }
  abstract ageOneYear (): void;
  abstract isAlive(): boolean;
  seed() : void {
    this.age=0;
    this.height=0;
    this.alive=true;
  }
}

// Leave the line below for tests to work properly.
export { Tree };
