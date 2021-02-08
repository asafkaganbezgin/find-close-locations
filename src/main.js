const deepClone = require("./modules/deepClone").deepClone;
const arrangeMeal = require("./modules/closeOffices").arrangeMeal;
const calculateDistance = require("./modules/closeOffices").calculateDistance;
const partners = require("./partners.json");

console.log(arrangeMeal(partners));
