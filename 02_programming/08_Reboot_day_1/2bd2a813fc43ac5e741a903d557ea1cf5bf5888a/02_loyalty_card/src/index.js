import readline from "readline";

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//----------------------pseudo code-----------------------
// menu principal Welcome :
// 1 - Add new customer
// 2 - Access customer data
// 3 - Quit
//
//Object customer par defaut
//avec des modules changer le nom, le prénom etc
// firstName
// lastName
// email jon.doe@fake.local
// birthDate:
// > ??/??/????
// city:
// country:>
// avec des modules dans l'objet
// 1 - Show account
// 2 - Add purchase
// 3 - Use loyalty points
// 4 - Show purchase history
// 5 - Choose another customer
// 6 - Back to menu
// 7 - Quit

// functions : addNewCustomer(NewCustomerObj)
// return {...NewCustomerObj,...this};
//function createCustomer reader.question nom, prenom,.... après appel module de l'objet customer pour mise à jour
//
// function accessCustomerData(CustomerObj){}
// tableau d'objets pour stockage et pour y ajouter un objet on fait array.push(newCustObj);
//recherche en parcourant le tableau avec for :

// 1 - Show account
// 2 - Add purchase
// 3 - Use loyalty points
// 4 - Show purchase history
// 5 - Choose another customer
// 6 - Back to menu
// 7 - Quit

//Notre tableau des customers
const arrayOfObj = [];

//------------DATE---------------
const getDateForPuchase = () => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  today = dd + "/" + mm + "/" + yyyy;
  return today;
};

//Notre customer par defaut
const customerObjectDefault = {
  firstName: "Joe",
  lastName: "Doe",
  email: "jon.doe@fake.local",
  birthDate: "01/01/1995",
  city: "Lille",
  country: "Egypte",
  totalPurchase: 0,
  loyaltyPoints: 0,
  historyOfPurchases: [],
  addPurchase: function (newPurchaseAmount) {
    this.totalPurchase += parseInt(newPurchaseAmount);
    this.loyaltyPoints += Math.round(parseInt(newPurchaseAmount) / 10); //1 point pour 10€
    this.historyOfPurchases.push(getDateForPuchase() + " - " + newPurchaseAmount);
  },
  useLoyaltyPoints: function (newLoyaltyPointsUsed) {
    this.loyaltyPoints -= parseInt(newLoyaltyPointsUsed);
  },
  showPurchaseHistory: function () {
    console.log(`********************************************************\n
    ${this.firstName.toUpperCase()} ${this.lastName.toUpperCase()}'S PURCHASE HISTORY\n
********************************************************\n`);
    for (let j = 0; j < this.historyOfPurchases.length; j++) {
      console.log(this.historyOfPurchases[j]);
    }
  },
};

const addNewCustomer = () => {
  let objectCustomerToReturn = { ...{}, ...customerObjectDefault };
  console.log(`********************************************************\n
CREATE NEW \n
********************************************************\n`);
  reader.question("- first name: >", (firstN) => {
    reader.question("- last name : >", (lastN) => {
      reader.question("- email : >", (em) => {
        reader.question("- birthday: >", (bd) => {
          reader.question("- city : >", (ct) => {
            reader.question("- country : >", (ctr) => {
              objectCustomerToReturn.firstName = firstN;
              objectCustomerToReturn.lastName = lastN;
              objectCustomerToReturn.email = em;
              objectCustomerToReturn.birthDate = bd;
              objectCustomerToReturn.city = ct;
              objectCustomerToReturn.country = ctr;
              arrayOfObj.push(objectCustomerToReturn);
              console.log(arrayOfObj);
              console.log("Customer created\n");
              displayWelcomeMenu();
            });
          });
        });
      });
    });
  });
};

const displayWelcomeMenu = () => {
  console.log(`********************************************************\n
Welcome\n
********************************************************\n
  1 - Add new customer\n
  2 - Access customer data\n
  3 - Quit\n`);
  reader.question("Choose an action\n", (welcomeMenuChoiceNb) => {
    if (welcomeMenuChoiceNb === "1") {
      addNewCustomer();
    } else if (welcomeMenuChoiceNb === "2") {
      chooseACustomer();
    } else if (welcomeMenuChoiceNb === "3") {
      console.log("Bye bye \n");
      reader.close();
    } else displayWelcomeMenu();
  });
};

const displayCustomerAccount = (customerNb) => {
  console.log(`********************************************************\n
${arrayOfObj[customerNb - 1]["firstName"].toUpperCase()} ${arrayOfObj[customerNb - 1][
    "lastName"
  ].toUpperCase()}'S INFORMATION\n
********************************************************\n
Customer information:\n
Name:             ${arrayOfObj[customerNb - 1]["firstName"]} ${arrayOfObj[customerNb - 1]["lastName"]}\n
Email:            ${arrayOfObj[customerNb - 1]["email"]}\n
Address:\n
 - City:          ${arrayOfObj[customerNb - 1]["email"]}\n
 - Country:       ${arrayOfObj[customerNb - 1]["country"]}\n
Total purchase:   ${arrayOfObj[customerNb - 1]["totalPurchase"]}\n
Loyalty points:   ${arrayOfObj[customerNb - 1]["loyaltyPoints"]}\n`);
  displayCustomerMenu(customerNb);
};

const displayCustomerMenu = (customerNumber) => {
  console.log(`********************************************************\n
  ${arrayOfObj[customerNumber - 1]["firstName"].toUpperCase()} ${arrayOfObj[customerNumber - 1][
    "lastName"
  ].toUpperCase()}\n
  ********************************************************\n
  1 - Show account\n
  2 - Add purchase\n
  3 - Use loyalty points\n
  4 - Show purchase history\n
  5 - Choose another customer\n
  6 - Back to menu\n
  7 - Quit\n`);
  reader.question(
    `Choose an action for ${arrayOfObj[customerNumber - 1]["firstName"]} ${
      arrayOfObj[customerNumber - 1]["lastName"]
    }\n`,
    (menuNumber) => {
      if (menuNumber === "1") {
        displayCustomerAccount(customerNumber);
      } else if (menuNumber === "2") {
        reader.question("What's the purchase amount?\n", (purchaseAmount) => {
          arrayOfObj[customerNumber - 1].addPurchase(purchaseAmount);
          console.log("Purchase is added\n");
          displayCustomerMenu(customerNumber);
        });
      } else if (menuNumber === "3") {
        reader.question("What's the loyalty points number to deduce?\n", (loyPoints) => {
          arrayOfObj[customerNumber - 1].useLoyaltyPoints(loyPoints);
          console.log("Loyalty points deduced\n");
          displayCustomerMenu(customerNumber);
        });
      } else if (menuNumber === "4") {
        arrayOfObj[customerNumber - 1].showPurchaseHistory();
        displayCustomerMenu(customerNumber);
      } else if (menuNumber === "5") {
        chooseACustomer(customerNumber);
      } else if (menuNumber === "6") {
        displayWelcomeMenu();
      } else if (menuNumber === "7") {
        console.log("Bye bye \n");
        reader.close();
      } else displayCustomerMenu(customerNumber);
    },
  );
};

const chooseACustomer = () => {
  if (arrayOfObj.length === 0) {
    console.log("Aucun resultat\n");
  } else {
    console.log(`********************************************************\n
  CHOOSE A CUSTOMER\n
  ********************************************************\n`);
    for (let i = 0; i < arrayOfObj.length; i++) {
      console.log(`${i + 1} - ${arrayOfObj[i]["firstName"]} ${arrayOfObj[i]["lastName"]}`);
    }
    reader.question("Choose a customer\n", displayCustomerMenu);
  }
};

displayWelcomeMenu();