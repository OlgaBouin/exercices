const data = require("./data/data");
const filter = require("./src/filter");
const count = require("./src/count");

const parametersFromCommandLine = process.argv.slice(2);
if (parametersFromCommandLine.length) {
  const commandLineOption = parametersFromCommandLine[0].split("=")[0];
  const commandLineArgs = parametersFromCommandLine[0].split("=")[1];

  switch (commandLineOption) {
    case "--filter":
      {
        const resultAfterFiltering = filter.filterCountriesByAnimalsNames(
          data.data,
          commandLineArgs
        );
        console.log(resultAfterFiltering);
      }
      break;
    case "--count":
      {
        console.log(count.countNumberOfChildren(data.data));
      }
      break;
    default:
      console.log(
        "Please run the command as follows : node app.js --filter=<your_filter> or node app.js --count"
      );
  }
} else {
  console.log(
    "Please run the command as follows : node app.js --filter=<your_filter> or node app.js --count"
  );
}
