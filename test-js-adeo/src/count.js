const addCountToNameField = (elementToAddCountOnName, arrayName) => {
  return {
    name:
      elementToAddCountOnName.name +
      " [" +
      elementToAddCountOnName[arrayName].length +
      "]",
    arrayName: elementToAddCountOnName[arrayName],
  };
};

exports.countNumberOfChildren = (arrayOfCountries) => {
  return JSON.stringify(
    arrayOfCountries.map((country) => {
      return {
        name: country.name + " [" + country.people.length + "]",
        people: country.people.map((person) =>
          addCountToNameField(person, "animals")
        ),
      };
    }),
    null,
    1
  );
};
