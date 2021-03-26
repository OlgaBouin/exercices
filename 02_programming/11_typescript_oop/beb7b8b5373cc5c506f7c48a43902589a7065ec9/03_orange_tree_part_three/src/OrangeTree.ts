import { Tree } from "./Tree";

// OrangeTree class:
// ✓ should be a class (1 ms)
// ✓ should be a sub-class of Tree
// _oranges:
//   ✕ should have a property called _oranges. (1 ms)
//   ✕ _oranges should be protected
// getters:
//   ✕ age should be a getter
//   ✕ height should be a getter
//   ✕ alive should be a getter (1 ms)
//   ✕ oranges should be a getter (1 ms)



// Paste your previous `OrangeTree` class here.
import { timingSafeEqual } from "crypto";

class OrangeTree extends Tree {
  protected _oranges: string [] = [];
  constructor(age: number){
    super(age);
  }

  get age() : number {return this._age}
  get height() : number {return this._height}
  get alive() : boolean {return this._alive}
  get oranges() : string [] {return this._oranges}

  set ageSet(ageToSet: number) {this._age = ageToSet}
  set heightSet(heightToSet: number) {this._height=heightToSet}
  set aliveSet(aliveToSet : boolean) {this._alive=aliveToSet}
  ageOneYear(): void {
    if (this._isAlive()) {
      this._age=this.age+1;
      this.growOranges();
      this._height=this._heightFromAge(this.age);
    }
  }
  _isAlive(): boolean {
    this.experienceTheLife();
    return this.alive;
  }
  growOranges(): void {
    this._oranges=[];
    let numberOfOrangesToGrow;
    if (this.age > 4 && this.age < 11) numberOfOrangesToGrow = 10;
    else if (this.age >= 11 && this.age < 21) numberOfOrangesToGrow = 20;
    else if (this.age >= 21 && this.age < 41) numberOfOrangesToGrow = 5;
    else numberOfOrangesToGrow = 0;
    for(let i = 0; i<numberOfOrangesToGrow; i++){
    this._oranges.push("🍊");
    }
    }
  pickAnOrange(): void {
    if (this._oranges.length > 0) this._oranges.pop();
  }
  experienceTheLife(): void {
    if (this.age >= 100) this._alive=false;
    else if (this.age >= 50 && this.alive) this._alive=!(Math.random() <= ((this.age - 50 +1) / 50));
  }
}

// Leave the line below for tests to work properly.
export { OrangeTree };