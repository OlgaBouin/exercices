import { timingSafeEqual } from "crypto";
import { Tree } from "./Tree";

// Tree class
// ✕ encountered a declaration exception (2 ms)
// OrangeTree class:
// ✕ should be a sub-class of Tree (1 ms)
// class properties:
//   ✕ encountered a declaration exception (1 ms)
// class methods:
//   ageOneYear:
//     ✕ should be implemented in the OrangeTree class
//     ✕ should increment the age property by one (1 ms)
//     ✕ should check if the tree is alive
//     ✕ should call grow oranges (1 ms)
//     height increment:
//       ✕ should grow 25 centimeters per year, from 1 to 9 years old (included)
//       ✕ should grow 10 centimeters per year, from 10 to 20 years old (included) (1 ms)
//       ✕ should stop growing after 20 years old
//   isAlive:
//     ✕ should be implemented in the OrangeTree class (1 ms)
//     ✕ should return a boolean (1 ms)
//     ✕ should return `true` for the first 50 years of its life (1 ms)
//     ✕ should have a probability to die from 50 years old to 99 years old (included)
//     ✕ should die at 100 years old (1 ms)
//     ✕ should have more probability to die the longer it aged
//   growOranges:
//     ✕ should be implemented in the OrangeTree class (1 ms)
//     ✕ should grow 0 oranges each years, from 0 to 4 years old (included)
//     ✕ should grow 10 oranges each years, from 5 to 10 years old (included) (1 ms)
//     ✕ should grow 20 oranges each years, from 11 to 20 years old (included)
//     ✕ should grow 5 oranges each years, from 21 to 40 years old (included) (1 ms)
//     ✕ should not grow any oranges from year 40 to the rest of its life
//     ✕ should remove all oranges from the tree before growing new ones
//   pickAnOrange:
//     ✕ should be implemented in the OrangeTree class (1 ms)
//     ✕ should not pick an orange if `oranges` is empty
//     ✕ should pick an orange if `oranges` is not empty (1 ms)

// Code your class here.

class OrangeTree extends Tree {
  oranges: string [] = [];
  ageOneYear(): void {
    if (this.isAlive()) {
      this.age += 1;
      this.growOranges();
      this.height=this.heightFromAge(this.age);
    }
  }
  isAlive(): boolean {
    this.experienceTheLife();
    return this.alive;
  }
  growOranges(): void {
    this.oranges=[];
    let numberOfOrangesToGrow;
    if (this.age > 4 && this.age < 11) numberOfOrangesToGrow = 10;
    else if (this.age >= 11 && this.age < 21) numberOfOrangesToGrow = 20;
    else if (this.age >= 21 && this.age < 41) numberOfOrangesToGrow = 5;
    else numberOfOrangesToGrow = 0;
    for(let i = 0; i<numberOfOrangesToGrow; i++){
    this.oranges.push("🍊");
    }
    }
  pickAnOrange(): void {
    if (this.oranges.length > 0) this.oranges.pop();
  }
  experienceTheLife(): void {
    if (this.age >= 100) this.alive = false;
    else if (this.age >= 50 && this.alive) this.alive = !(Math.random() <= ((this.age - 50 +1) / 50));
  }
}

// Leave the line below for tests to work properly.
export { OrangeTree };
