const articles = require("./data/products");

module.exports = function initShop() {
  return {
    articles,
    checkQuantity: function (article, wantedQuantity) {
      return article.quantity >= wantedQuantity;
    },
    getArticles: function () {
      return this.articles;
    },
    buyArticle: function (index) {
      return this.articles[index];
    },
    searchArticles: function (searchWord) {
      const allArticlesObject = this.getArticles();
      const selectionArrayOfObjects = [];
      for (let i = 0; i < allArticlesObject.length; i++) {
        const regExp = new RegExp(searchWord, "i");
        if (allArticlesObject[i].label.match(regExp)) selectionArrayOfObjects.push(allArticlesObject[i]);
      }
      //console.log(selectionArrayOfObjects.forEach())
      return selectionArrayOfObjects;
    },
  };
};
