let knowledge = {
  knowsJavascript: true,
  knowsTypescript: true,
  knowsReact: true,
  knowsNext: true,
  knowsMongoDB: true,
  timeSpent: "10 weeks",
};


let student = {
  hasComputer: true,
  knowsTypescript: false,
  knowsReact: false,
  knowsNext: false,
  knowsMongoDB: false,
  timeSpent: "4 days",
};


let developer = {
  ...student,
  ...knowledge,
};



let application = ["bug", "code", "code", "code", "code", "code", "code", "code", "code"];

const [bug, ...code] = application;

module.exports = {
  developer,
  bug,
  code,
};
