const faker = require("faker");

const { internet, company } = require("faker");


function motivation() {
  return {
    catchPhrase: faker.company.catchPhrase(),
    //description: faker.company.catchPhraseDescriptor(),
    description: "Lorem Ipsum",
  };
};

module.exports = motivation;
