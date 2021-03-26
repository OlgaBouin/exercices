// Paste your previous `Tree` class here.
abstract class Tree {
  age: number = 0; //years
  height : number; //centimeters
  alive: boolean = true; //true alive
  constructor(age: number){
    this.age=age;
    this.height=this.heightFromAge(this.age);
  } 
  protected heightFromAge(ageInput: number): number{
    if (ageInput >= 20) return 335;
    else if (ageInput > 17) return 315+ageInput%9*10;
    else if (ageInput >9) return 225+ageInput%9*10;
    else if (ageInput >=1) return ageInput*25;
    else return 0;
  }
  abstract ageOneYear(): void;
  abstract isAlive(): boolean;
  seed() : void {
    this.age=0;
    this.height=0;
    this.alive=true;
  }
}
// Leave the line below for tests to work properly.
export { Tree };
