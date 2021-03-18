const humanFactory = (humanData = {}) => {
  const defaultPerson = {
    firstName: "John",
    lastName: "Doe",
    genre: "male",
    job: "unemployed",
    fullname: function () {
      return (this.firstName + " " + this.lastName);
    },
    introduction: function () {
      return ("Hello! My name is " + this.fullname() + ".");
    },
  };
  if ((humanData.firstName === undefined) && (humanData.genre === "female")) defaultPerson.firstName = "Jane";

  return {
    ...defaultPerson,
    ...humanData,
  };
};

const createHumans = (humans) => {
  return humans.map(humanFactory);
};

module.exports = {
  humanFactory,
  createHumans,
};
