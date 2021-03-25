import { Interface } from "readline";
import { sanitizeUserInput } from "./utils/format";

function holidayLocationFinder(reader: Interface) {
  // Write your code here

console.log("***Welcome to HOLIDAY LOCATION FINDER***\n
  This program will help you find a location based on the continent you will input.\n
  Here is the list of continent to chose from:");


  - Europe
  - North America
  - South America
  - Asia
  - Africa
  - Oceania
  reader.question("Please input your choice:",sanitizeUserInput);
  console.log("You chose Europe. I think you really should go spend some time in Bruxelles, Belgium.")


  function suggestACityfromContinent (continent) : string => {

  }
  > Europe
  
  


}

// Leave the line below for tests to work properly.
export { holidayLocationFinder };
