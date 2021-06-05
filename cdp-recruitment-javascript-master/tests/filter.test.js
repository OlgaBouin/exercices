const filterFn = require("../src/filter");
const data = require("../data/test-data");

describe("#filter", () => {
  describe("Filtering - basic functionalities:", () => {
    it("Only animals containing keyphrase are displayed", () => {
      expect(
        JSON.parse(
          filterFn.filterCountriesByAnimalsNames(data.testData.countries, "x")
        )
      ).toEqual(data.testData.expectedResult1);
    });
    it("Empty array after filtering are NOT returned", () => {
      expect(
        filterFn.filterCountriesByAnimalsNames(data.testData.countries, "xyz")
      ).toEqual("");
    });
  });
  describe("Filtering - specific cases:", () => {
    it("Filtering by one letter brings result", () => {
      expect(
        JSON.parse(
          filterFn.filterCountriesByAnimalsNames(data.testData.countries, "g")
        )
      ).toEqual(data.testData.expectedResult2);
    });
    it("Filtering by first letters brings result", () => {
      expect(
        JSON.parse(
          filterFn.filterCountriesByAnimalsNames(data.testData.countries, "Uga")
        )
      ).toEqual(data.testData.expectedResult2);
    });
    it("Filtering by more than one word works", () => {
      expect(
        JSON.parse(
          filterFn.filterCountriesByAnimalsNames(
            data.testData.countries,
            "Uganda Kob"
          )
        )
      ).toEqual(data.testData.expectedResult2);
    });
    it("Filtering is not case sensitive", () => {
      expect(
        JSON.parse(
          filterFn.filterCountriesByAnimalsNames(data.testData.countries, "kob")
        )
      ).toEqual(data.testData.expectedResult2);
    });
  });
});
