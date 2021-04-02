type Person = {
  firstName: string;
  lastName: string;
}

export function parseName(name: string): Person {
  return( {firstName: name.split(" ")[0], lastName: name.split(" ")[1]})
}
