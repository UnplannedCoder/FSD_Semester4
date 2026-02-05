//Import the custom module
const utils = require("./utils");

//Accessing the nested object
console.log("App Name:", utils.config.name);
console.log("Current Theme:", utils.config.settings.theme);

//Using the exported function
const message = utils.greet("Aman");
console.log(message);


// middleware - jo apki har request ko intercept karte hai 
// server.js - create server/middleware
// routing - user.js, order.js
// controller - functionalities
// service - depedent
// importing - import(import necessary module. ES6 feature) use karna hai to export karte hai, require(import complete module.common js feature) use karna hai to module.exports use karte hai. frontend me use nhi hota 