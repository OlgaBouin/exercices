import { toWords } from ".";


describe("Separators one by one",() => {
test("Words separated by spaces should be parsed.", () => {
  expect(toWords("Words separated")).toMatchObject(["Words", "separated"]);
  expect(toWords("Words separated by   ")).toMatchObject(["Words", "separated", "by"]);
});
test("Words separated by dots should be parsed.", () => {
  expect(toWords("F.ran.cis")).toMatchObject(["F", "ran", "cis"]);
});
test("Words separated by exclamation should be parsed.", () => {
  expect(toWords("Fra!ran!cis")).toMatchObject(["Fra", "ran", "cis"]);
});
test("Words separated by comma should be parsed.", () => {
  expect(toWords("Fra,ran,cis")).toMatchObject(["Fra", "ran", "cis"]);
});
test("Words separated by colon should be parsed.", () => {
  expect(toWords("Fra:ran:cis")).toMatchObject(["Fra", "ran", "cis"]);
});
});

describe("All of them",() => {
test("Words separated by all separtors should be parsed.", () => {
  expect(toWords("    :... , !    ,,,Today.is a.good:day!0!!!!:    ")).toMatchObject(["Today","is","a","good","day","0"]);
});
});


