const readyForm = (reader) => {
  // Code here
  reader.question("Hello user! \n Are you ready for today ??!", (response) => {
    console.log(`WOW, ${response} ??!! Really Nice! Let's goo !!`);
  });
};
// Leave line below for tests to work
module.exports = readyForm;
