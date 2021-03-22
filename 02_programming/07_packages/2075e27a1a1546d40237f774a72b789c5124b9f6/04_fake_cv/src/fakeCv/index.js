const identity = require("./identity");
const motivation = require("./motivation");
const currentJob = require("./currentJob");

function fakeCV() {
  return {
    identity: identity(),
    motivation: motivation(),
    currentJob: currentJob(),
  };
};

module.exports = fakeCV;