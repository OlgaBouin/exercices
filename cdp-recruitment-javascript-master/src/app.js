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

const addCountToNameField = (arrayOfElements) => {
  const subArrayName = Object.keys(arrayOfElements[0])[1];
  if (subArrayName === undefined) return arrayOfElements;
  console.log("**************", subArrayName);
  return arrayOfElements.map((element) => {
    console.log("%%%%%%%%%%%%%%%%%%%%", element);
    element[`name`] = element.name + `[` + element[subArrayName].length + `]`;
    element[subArrayName] = addCountToNameField(element[subArrayName]);
    return element;
  });
  // );
  //);
};

if (parametersFromCommandLine[0]) {
  switch (parametersFromCommandLine[0].split("=")[0]) {
    case "--filter":
      console.log(filterCountriesByAnimalsNames(data.data));
      break;
    case "--count":
      console.log(addCountToNameField(data.data));
      // console.table(addCountToNameField(data.data));
      // console.dir(addCountToNameField(data.data));
      break;
    default:
      console.log(
        "Please run the command as follows : node app.js --filter=<your_filter> or node app.js --count"
      );
  }
} else
  console.log(
    "Please run the command as follows : node app.js --filter=<your_filter> or node app.js --count"
  );
