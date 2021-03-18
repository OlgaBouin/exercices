const person = {
  firstname: "Abdel",
  lastname: "Sadki",
  age: 42,
  fullname: function () {
    return `${this.firstname} ${this.lastname}`;
  },
  introduceMyself: function () {
    return `Hello! I'm ${this.fullname()} and I'm ${this.age}.`;
  }
};

module.exports = person;
