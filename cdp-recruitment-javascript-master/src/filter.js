exports.filterCountriesByAnimalsNames = (coutriesArray, filterKeyPhrase) => {
  const doesAnimalsNameContainSuchPhrase = (animal) => {
    return animal.name.toLowerCase().includes(filterKeyPhrase.toLowerCase());
  };

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

  const filteredResult = JSON.stringify(
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

  return filteredResult.length != 2 ? filteredResult : "";
};
