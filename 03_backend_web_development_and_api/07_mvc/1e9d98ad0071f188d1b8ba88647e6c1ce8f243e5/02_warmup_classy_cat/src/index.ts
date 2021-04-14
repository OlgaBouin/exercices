export class Cat {
  name: string;
  color: string;
  age: string;
  constructor(nameToGive: string, colorOfCat: string, ageOfCat: string) {
    this.name = nameToGive;
    this.color = colorOfCat;
    this.age = ageOfCat;
  }

  purr(): string {
    return `${this.name}, the cat, purrs...`;
  }
  meow(): string {
    return `${this.name}, the ${this.color} cat, meows!`;
  }

  attack(withSuccess: boolean): void {
    console.log(withSuccess ? "You've been scratched!" : `Wow, ${this.name} missed you, how lucky!`);
  }
}
