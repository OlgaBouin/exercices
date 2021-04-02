/* global db */

// write your MongoDB shell command here

import * as mongo from "mongodb";
const dbUrl = process.env.MONGODB_DATABASE_URL;

const stranaRussia = {
  name: "Russia",
  capital: "Moscow",
  continent: "Europe",
};

// const stranaUkraine = {
//   name: "Ukraine",
//   capital: "Kiev",
//   continent: "Europe",
// };

// const stranaBelguim = {
//   name: "Belgium",
//   capital: "Brussels",
//   continent: "Europe",
// };

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

mongo`${dbUrl}mongo-basics`;
db.worldAtlas.insertMany([stranaRussia, stranaIceland, stranaAustralia]);
