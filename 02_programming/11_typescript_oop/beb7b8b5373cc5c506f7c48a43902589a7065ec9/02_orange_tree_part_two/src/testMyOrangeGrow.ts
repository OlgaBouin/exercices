function growOranges(age : number): void {
  const oranges: string [] =[];
  let numberOfOrangesToGrow; 

  if (age > 4 && age < 11) numberOfOrangesToGrow = 10;
  else if (age >= 11 && age < 21) numberOfOrangesToGrow = 20;
  else if (age >= 21 && age < 41) numberOfOrangesToGrow = 5;
  else numberOfOrangesToGrow = 0;

  for(let i = 0; i<numberOfOrangesToGrow; i++){
  oranges.push("🍊");
  }
  console.log(oranges);
}



function experienceTheLife(age: number): boolean {
  if (age > 50) return ((Math.random() <= ((age - 50) / 50)));
  else return false;
}



for(let j=50;j<101;j++) {
  console.log(j);
  // console.log(growOranges(j));
  console.log(experienceTheLife(j));
}