const faker = require("faker");

const { name, internet, address, phone } = require("faker");


function identity() {
  const id = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    city: faker.address.city(),
    phoneNumber: faker.phone.phoneNumber(),
    email : "John.Doe@fake.local",
    //email: function () {return `${this.firstName}.${this.lastName}@fake.local`;},
    //email: this.firstName+"."+this.lastName+"@fake.local",
    avatar : "https://avatar.com"
    //avatar: faker.internet.avatar(),
  };
  return id;
};

module.exports = identity;