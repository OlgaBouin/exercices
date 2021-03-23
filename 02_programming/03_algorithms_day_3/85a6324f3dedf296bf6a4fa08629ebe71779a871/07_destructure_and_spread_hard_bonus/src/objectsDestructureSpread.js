const { configs } = require("eslint-plugin-prettier");

function getConfig(config = {}) {
  const defaultConfig = {
    user: {
      name: "root",
      password: "admin",
    },
    hardware: {
      CPUThreads: 4,
      memory: 2,
      diskSpace: 20,
    },
  };



  return {user : {...defaultConfig.user, ...config.user}, hardware : {...defaultConfig.hardware, ...config.hardware}};
  // if (configToDisplay.user.name === undefined) configToDisplay.user.name = "root";
  // if (configToDisplay.user.password === undefined) configToDisplay.user.name = "admin";
  // if (configToDisplay.hardware.CPUThreads === undefined) configToDisplay.hardware.CPUThreads = 4;
  // if (configToDisplay.hardware.memory === undefined) configToDisplay.hardware.memory = 2;
  // if (configToDisplay.hardware.diskSpace === undefined) configToDisplay.hardware.diskSpace = 20; 


  // (configToDisplay.user.name === undefined) ? configToDisplay.user.name = "root" : console.log("...");
  // (configToDisplay.user.password === undefined) ? configToDisplay.user.name = "admin" : console.log("...");
  // (configToDisplay.hardware.CPUThreads === undefined) ? configToDisplay.hardware.CPUThreads = 4 : console.log("...");
  // (configToDisplay.hardware.memory === undefined) ? configToDisplay.hardware.memory = 2 : console.log("...");
  // (configToDisplay.hardware.diskSpace === undefined) ? configToDisplay.hardware.diskSpace = 20 : console.log("...");
  // return configToDisplay;
}

function logInfos(user = {}) {
  const redactedUser = {
    firstName: "<REDACTED>",
    lastName: "<REDACTED>",
    address: {
      city: "<REDACTED>",
      country: "<REDACTED>",
    },
  };
  // const userToDisplay = {...redactedUser,...user};
  //const userToDisplay = {...redactedUser, ...user};

  const userToDisplay = Object.assign({},redactedUser,user);
  userToDisplay.address = Object.assign({},redactedUser.address,user.address);
  // (userToDisplay.address.city === undefined) ? userToDisplay.address.city = "<REDACTED>" : console.log("...");
  // (userToDisplay.address.country === undefined) ? userToDisplay.address.country = "<REDACTED>" : console.log("...");
  
  console.log(
    `${userToDisplay.firstName} ${userToDisplay.lastName} lives in ${userToDisplay.address.city}, ${userToDisplay.address.country}.`);
}

// let {
//   firstName,
//   lastName,
//   address: { city, country },
// } = user; // Change here

//let finelUser = {...user, ...redactedUser}; //added

//console.log(`${firstName} ${lastName} lives in ${city}, ${country}.`);
//}

module.exports = {
  getConfig,
  logInfos,
};
