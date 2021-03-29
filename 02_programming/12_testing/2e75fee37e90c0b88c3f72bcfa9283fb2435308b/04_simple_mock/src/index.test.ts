import { helloSailor } from ".";
import * as fs from "fs";
let output = fs.createWriteStream("outputHello.txt");

test("Test the console output of hello function", () => {
  const mockHello = jest.spyOn(console, "log").mockImplementation();

  helloSailor();
  helloSailor("Captain Blackbeard");

  expect(mockHello).toHaveBeenCalledWith("Howdy Sailor! Good day to you!");
  expect(mockHello).toHaveBeenCalledWith("Howdy Captain Blackbeard!");
  console.clear();
});

