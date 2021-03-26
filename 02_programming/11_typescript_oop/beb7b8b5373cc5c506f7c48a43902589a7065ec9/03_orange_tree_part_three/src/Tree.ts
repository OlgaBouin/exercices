// Tree parent class
// ✓ should be a class (2 ms)
// ✓ should be abstract
// class constructor:
//   ✓ Tree should have a constructor (1 ms)
//   ✓ should initialize _age
// class properties:
//   _age:
//     ✕ should have a property called _age. (2 ms)
//     ✕ _age should be protected (1 ms)
//   _height:
//     ✕ should have a property called _height, that get computed based on its age (1 ms)
//     ✕ _height should be protected
//   _alive:
//     ✕ should have a property called _alive, with a default value of `true`. (1 ms)
//     ✕ _alive should be protected
// class methods:
//   isAlive:
//     ✕ should have a method called _isAlive. (1 ms)
//     ✕ should be an abstract method.
//     ✕ should be protected. (1 ms)
//   ageOneYear:
//     ✓ should have a method called ageOneYear.
//     ✓ should be an abstract method.
//   seed:
//     ✓ should have a method called seed.
//     ✓ should not be an abstract method.

// Paste your previous `Tree` class here.

abstract class Tree {
  protected _age: number = 0; //years
  protected _height : number; //centimeters
  protected _alive: boolean = true; //true alive
  constructor(age: number){
    this._age=age;
    this._height=this._heightFromAge(this._age);
  } 

  protected _heightFromAge(ageInput: number): number{
    if (ageInput >= 20) return 335;
    else if (ageInput > 17) return 315+ageInput%9*10;
    else if (ageInput >9) return 225+ageInput%9*10;
    else if (ageInput >=1) return ageInput*25;
    else return 0;
  }
  abstract ageOneYear(): void;
  protected abstract _isAlive(): boolean;
  public seed() : void {
    this._age=0;
    this._height=0;
    this._alive=true;
  }
}

// Leave the line below for tests to work properly.
export { Tree };
