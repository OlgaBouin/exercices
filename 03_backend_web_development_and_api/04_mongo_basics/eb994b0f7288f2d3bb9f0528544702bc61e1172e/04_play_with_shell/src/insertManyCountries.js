const stranaRussia = {
  name: "Russia",
  capital: "Moscow",
  continent: "Europe",
};

const stranaIceland = {
  name: "Iceland",
  capital: "Reikiavik",
  continent: "Europe",
};
const stranaAustralia = {
  name: "Australia",
  capital: "Sydney",
  continent: "Oceania",
};

db.worldAtlas.insertMany([stranaRussia, stranaIceland, stranaAustralia]);
