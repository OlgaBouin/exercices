const initShop = require("./eCommerce/shop");

const shop = initShop();

//console.log(shop.getArticles());

console.log(shop.searchArticles("pull turtle neck pink size: S"));

//console.log(blackClothes.slice(0, 4));
