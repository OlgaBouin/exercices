const data = require("../modules/data");
//console.log(JSON.stringify(data, null, 1));

const parametersFromCommandLine = process.argv.slice(2);

const doesContryHasPeopleWithSuchAnimals = (country) => {
  let response = false;
  for (let i = 0; i < country.people.length; i++) {
    response = response || doesPersonHasSuchAnimals(country.people[i]);
  }
  return response;
};

const doesPersonHasSuchAnimals = (person) => {
  let reply = false;
  for (let k = 0; k < person.animals.length; k++) {
    reply = reply || doesAnimalsNameContainSuchPhrase(person.animals[k]);
  }
  return reply;
};

const doesAnimalsNameContainSuchPhrase = (animal) => {
  return animal.name
    .toLowerCase()
    .includes(parametersFromCommandLine[0].split("=")[1].toLowerCase());
};

const filterCountriesByAnimalsNames = (coutriesArray) => {
  return JSON.stringify(
    coutriesArray.filter(doesContryHasPeopleWithSuchAnimals).map((country) => {
      return {
        name: country.name,
        people: country.people
          .filter(doesPersonHasSuchAnimals)
          .map((person) => {
            return {
              name: person.name,
              animals: person.animals.filter(doesAnimalsNameContainSuchPhrase),
            };
          }),
      };
    }),
    null,
    1
  );
};

const addCountToNameField = (elementToAddCountOnName, arrayName) => {
  return {
    name:
      elementToAddCountOnName.name +
      "[" +
      elementToAddCountOnName[arrayName].length +
      "]",
    arrayName: elementToAddCountOnName[arrayName],
  };
};

const countNumberOfChildren = (arrayOfCountries) => {
  return JSON.stringify(
    arrayOfCountries.map((country) => {
      return {
        name: country.name + "[" + country.people.length + "]",
        people: country.people.map((person) =>
          addCountToNameField(person, "animals")
        ),
      };
    }),
    null,
    1
  );
};

switch (parametersFromCommandLine[0].split("=")[0]) {
  case "--filter":
    console.log(filterCountriesByAnimalsNames(data.data));
    break;
  case "--count":
    console.log(countNumberOfChildren(data.data));
    break;
  default:
    console.log(
      "Please run the command as follows : node app.js --filter=<your_filter> or node app.js --count"
    );
}
