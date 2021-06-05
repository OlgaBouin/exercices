const countFn = require("../src/count");
const data = require("../data/test-data");

describe("#count", () => {
  describe("Counting - basic functionalities:", () => {
    it("The number of People is displayed", () => {
      expect(
        JSON.parse(countFn.countNumberOfChildren(data.testData.countries))[0]
          .name
      ).toEqual("USA [2]");
    });
    it("The number of Animals is displayed", () => {
      expect(
        JSON.parse(countFn.countNumberOfChildren(data.testData.countries))[1]
          .people[0].name
      ).toEqual("Peter [5]");
    });
    it("The number of children is appended in the name", () => {
      expect(
        JSON.parse(countFn.countNumberOfChildren(data.testData.countries))[1]
          .people[0].name.split("[")[1]
          .split("]")[0]
      ).toEqual(`${data.testData.countries[1].people[0].animals.length}`);
    });
  });
  //add specific & try - catch & cas node app.js --filter="Deer Mouse" --count
  describe("Counting - specific cases:", () => {
    it("The number of children is appended in the name", () => {
      expect(2 + 2).toEqual(4);
    });
    it("The number of children is appended in the name", () => {
      expect(2 + 2).toEqual(4);
    });
    it("The number of children is appended in the name", () => {
      expect(2 + 2).toEqual(4);
    });
  });
});
