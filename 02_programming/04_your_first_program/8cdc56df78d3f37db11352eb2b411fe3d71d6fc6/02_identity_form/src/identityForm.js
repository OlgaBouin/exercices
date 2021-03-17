const identityForm = (reader) => {
  // Code here
  reader.question("first name ?", (firstName) =>{
    reader.question("last name ?", (lastName) =>{
      reader.question("age ?", (age)=>{
        console.log(`Your name is ${firstName} ${lastName} and you are ${age}.`);
      });
    });
  });
};

// Leave line below for tests to work
module.exports = identityForm;
