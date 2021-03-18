const developer = {
  isCoding: false,
  daysCoding: 0,
  projectStatus: "waiting for a project",
  codeLinesProduced: 0,
  linesNeeded: 0,
  maxDelay: 0,
  initiateProject: function () {
    this.daysCoding = 0;
    this.codeLinesProduced = 0;
    this.isCoding = true;
    this.projectStatus = "project in progress";
    return this;
  },
  startProject: function (lines, delay) {
    this.initiateProject();
    this.linesNeeded = lines;
    this.maxDelay = delay;
    return this;
  },
  mightStop: function () {
    if (this.daysCoding === this.maxDelay && this.daysCoding != 0) {
      this.isCoding = false;
      this.projectStatus = "project stopped";
    }
    if (this.linesNeeded === this.codeLinesProduced && this.codeLinesProduced != 0) {
      //console.log(`Project took ${this.linesNeeded} days.`);
      this.isCoding = false;
      this.projectStatus = "project finished";
    }
    return this;
  },
  codeForOneDay: function () {
    let isThereABug = false;
    if (this.nbOfCodedLines < 80) isThereABug = 0.1 > Math.random();
    else if (this.nbOfCodedLines < 150) isThereABug = 0.2 > Math.random();
    else if (this.nbOfCodedLines > 150) isThereABug = 0.4 > Math.random();

    if (isThereABug) {
      this.daysCoding += 3;
    } else {
      this.daysCoding += 1;
      this.codeLinesProduced += 2;
    }
    return this;
  },
};

let testDeveloper1 = {
  ...developer,
  isCoding: true,
  daysCoding: 100,
  maxDelay: 150,
  codeLinesProduced: 100,
  linesNeeded: 100,
};

testDeveloper1.mightStop();

developer.codeForOneDay();

console.log(developer.mightStop());
console.log(testDeveloper1);

const testDeveloper2 = {
  ...developer,
  isCoding: true,
  daysCoding: 150,
  maxDelay: 150,
};

testDeveloper2.mightStop();

console.log(testDeveloper2);

module.exports = developer;
