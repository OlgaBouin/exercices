const co = require("co");

exports.filterCountriesByAnimalsNames = (coutriesArray, filterKeyPhrase) => {
  if (!coutriesArray || !filterKeyPhrase || filterKeyPhrase.includes(";")) {
    console.log("Please enter at least one filtering letter");
    return;
  }
  const specialCharacters = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;

  filterKeyPhrase.split("").forEach((symbolOfKeyWord) => {
    if (specialCharacters.test(symbolOfKeyWord)) {
      console.log("Please don't use special charecters in your filter request");
      return;
    }
  });
  const doesAnimalsNameContainSuchPhrase = (animal) => {
    if (animal && animal.name)
      return animal.name.toLowerCase().includes(filterKeyPhrase.toLowerCase());
  };

  const doesContryHasPeopleWithSuchAnimals = (country) => {
    let response = false;
    if (country && country.people) {
      for (let i = 0; i < country.people.length; i++) {
        response = response || doesPersonHasSuchAnimals(country.people[i]);
      }
      return response;
    }
  };

  const doesPersonHasSuchAnimals = (person) => {
    let reply = false;
    if (person && person.animals) {
      for (let k = 0; k < person.animals.length; k++) {
        reply = reply || doesAnimalsNameContainSuchPhrase(person.animals[k]);
      }
      return reply;
    }
  };

  try {
    const filteredResult = JSON.stringify(
      coutriesArray
        .filter(doesContryHasPeopleWithSuchAnimals)
        .map((country) => {
          return {
            name: country.name,
            people: country.people
              .filter(doesPersonHasSuchAnimals)
              .map((person) => {
                return {
                  name: person.name,
                  animals: person.animals.filter(
                    doesAnimalsNameContainSuchPhrase
                  ),
                };
              }),
          };
        }),
      null,
      1
    );
    return filteredResult.length != 2 ? filteredResult : "";
  } catch (e) {
    console.log(e);
    return;
  }
};
