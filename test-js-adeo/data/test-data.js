const testData = {
  countries: [
    {
      name: "USA",
      people: [
        {
          name: "Alice",
          animals: [{ name: "a" }, { name: "b" }, { name: "c" }, { name: "d" }],
        },
        {
          name: "Bob",
          animals: [{ name: "k" }, { name: "l" }, { name: "m" }, { name: "n" }],
        },
      ],
    },
    {
      name: "RFR",
      people: [
        {
          name: "Peter",
          animals: [
            { name: "o" },
            { name: "p" },
            { name: "r" },
            { name: "s" },
            { name: "t" },
          ],
        },
        { name: "Sam", animals: [{ name: "Uganda Kob" }] },
        {
          name: "Luca",
          animals: [{ name: "x" }, { name: "y" }, { name: "z" }],
        },
      ],
    },
  ],

  expectedResult1: [
    {
      name: "RFR",
      people: [
        {
          name: "Luca",
          animals: [
            {
              name: "x",
            },
          ],
        },
      ],
    },
  ],

  expectedResult2: [
    {
      name: "RFR",
      people: [
        {
          name: "Sam",
          animals: [
            {
              name: "Uganda Kob",
            },
          ],
        },
      ],
    },
  ],
};

module.exports = {
  testData,
};
