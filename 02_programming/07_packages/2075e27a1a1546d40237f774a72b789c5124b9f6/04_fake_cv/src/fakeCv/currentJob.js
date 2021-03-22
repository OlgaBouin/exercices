const faker = require("faker");

const { internet, name, company } = require("faker");

function currentJob() {
  return {
    companyName: faker.company.companyName(),
    jobDescriptor: faker.name.jobDescriptor(),
    jobTitle: faker.name.jobTitle(),
  };
};

module.exports = currentJob;