// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {

    selectAll: function(){},

    insertOne(){},

    updateOne(){}
};

// Export the orm object for the model (cat.js).
module.exports = orm;
