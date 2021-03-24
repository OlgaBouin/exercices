function eCommerce(reader) {
  const product = {
    name: "tomato",
    price: 0,
    quantity: 0,
  };
  const cart = {
    arrOfObjectOfProduct: [],
    totalOfPrice: 0,
  };
  //Menu***
  //displayCart***
  //checkOut***
  //presentArticles***
  //buyAProduct***
  //addStock***
  let arrayOfAllProduct = [];
  let cartToDisplay = { ...{}, ...cart };
  function menu() {
    reader.question(
      `**************************************************\n
MENU\n
**************************************************\n
0 - Add stock\n
1 - Buy a product\n
2 - Show cart\n
3 - Checkout\n
4 - Quit\n
Choose an action\n
> `,
      (menuResponse) => {
        if (menuResponse === "1") {
          presentArticles();
        } else if (menuResponse === "2") {
          displayCart(cartToDisplay);
        } else if (menuResponse === "3") {
          checkOut();
        } else if (menuResponse === "4") {
          console.log("Bye bye");
          reader.close();
        } else if (menuResponse === "0") {
          addStock();
        }
      },
    );
  }
  function addStock() {
    let PriceOfProduct;
    let quantityOfProduct;
    let nameOfProduct;
    function askPrice() {
      reader.question("Quel est le prix du produit ?\n", (prices) => {
        if (isNaN(prices)) {
          console.log("Entrez un prix en nombre.");
          reader.question("Quel est le prix du produit ?\n", askPrice());
        } else {
          PriceOfProduct = prices;
          askQuantity();
        }
      });
    }
    function askQuantity() {
      reader.question("Quelle est la quantité du produit ?\n", (quantitis) => {
        if (isNaN(quantitis)) {
          console.log("Entrez une quantité en nombre.");
          reader.question("Quel est le quantité du produit ?\n", askQuantity());
        } else {
          quantityOfProduct = quantitis;
          const productToAdd = {
            name: nameOfProduct,
            price: parseInt(PriceOfProduct),
            quantity: parseInt(quantityOfProduct),
          };
          arrayOfAllProduct.push(productToAdd);
          console.log(arrayOfAllProduct);
          reader.question("Voulez vous rajouter d'autres produits ? (y/n)\n", (responseAddAnotherProduct) => {
            if (responseAddAnotherProduct === "y") {
              addStock();
            } else if (responseAddAnotherProduct === "n") {
              menu();
            } else addStock();
          });
        }
      });
    }
    reader.question("Quel est le nom du produit ?\n", (n) => {
      nameOfProduct = n;
      askPrice();
      askQuantity();
      // reader.question("Quel est le prix du produit ?\n", askPrice);
      // reader.question("Quelle est la quantité du produit ?\n", askQuantity);
    });
  }
  function displayCart(cartToDisplay) {
    console.log(`**************************************************\n
  CART\n*************************************************`);
    if (cartToDisplay.arrOfObjectOfProduct.length === 0) {
      console.log("Cart empty");
      menu();
    } else {
      for (let i = 0; i < cartToDisplay.arrOfObjectOfProduct.length; i++) {
        console.log(
          `${i + 1} - ${cartToDisplay.arrOfObjectOfProduct[i].name} : ${
            cartToDisplay.arrOfObjectOfProduct[i].price
          }€ (quantity: ${cartToDisplay.arrOfObjectOfProduct[i].quantity})`,
        );
      }
      console.log(`**************************************************\n
  TOTAL: ${cartToDisplay.totalOfPrice} €\n**************************************************\n
  1 - Back to menu\n
  2 - Quit\n
  Choose an action\n
  > `);
    }
  }
  function checkOut() {
    console.log(`**************************************************\n
CHECKOUT\n
**************************************************`);
    displayCart(cartToDisplay);
    reader.question(`You have to pay: ${cartToDisplay.totalOfPrice} €\n`, (priceToCheckOut) => {
      console.log(`> ${cartToDisplay.totalOfPrice} €`);
      if (parseInt(priceToCheckOut) === cartToDisplay.totalOfPrice) {
        console.log(`Thank you!\n
        **************************************************\n
        GOODBYE!\n
        **************************************************\n`);
        reader.close();
      } else if (parseInt(priceToCheckOut) > cartToDisplay.totalOfPrice) {
        console.log(`> Nous vous rendons ${parseInt(priceToCheckOut) - cartToDisplay.totalOfPrice} €`);
        console.log(`Thank you!\n**************************************************\n
        GOODBYE!\n**************************************************\n`);
        reader.close();
      } else checkOut();
    });
  }
  function presentArticles() {
    console.log(`**************************************************\n
SHOP\n**************************************************\n`);
    for (let i = 0; i < arrayOfAllProduct.length; i++) {
      console.log(
        `${i + 1} - ${arrayOfAllProduct[i].name} : ${arrayOfAllProduct[i].price} € (quantity: ${
          arrayOfAllProduct[i].quantity
        })`,
      );
    }
    console.log(`${arrayOfAllProduct.length + 1} - back to menu\n${arrayOfAllProduct.length + 2} - quit`);
    reader.question("Choose a product\n> ", (productNb) => {
      reader.question("How much?\n", (quantityToAdd) => {
        if (quantityToAdd <= arrayOfAllProduct[productNb - 1].quantity) {
          cartToDisplay.arrOfObjectOfProduct.push({
            name: arrayOfAllProduct[productNb - 1].name,
            price: arrayOfAllProduct[productNb - 1].price,
            quantity: quantityToAdd,
          });
          cartToDisplay.totalOfPrice += arrayOfAllProduct[productNb - 1].price * quantityToAdd; //bug fix, adding *qty
          arrayOfAllProduct[productNb - 1].quantity -= quantityToAdd;
          menu();
        } else {
          console.log("Pas assez de produits disponible.");
          presentArticles();
        }
      });
    });
  }
  menu();
}
module.exports = eCommerce;
