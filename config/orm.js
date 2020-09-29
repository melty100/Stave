// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {

    selectAll: function(cb){
        let sql = "SELECT * FROM burgers;";
        connection.query(sql, (err, data) => {
            if(err) console.log(err);
            cb(data);
        });
    },

    insertOne: function(burgerName, cb){
        let sql = `INSERT INTO burgers (burger_name, devoured) VALUES (${connection.escape(burgerName)}, false);`;
        connection.query(sql, (err, data) => {
            if(err) console.log(err);

            cb(data);
        });
    },

    updateOne: async function(burgerName){
        let sql = `UPDATE burgers SET devoured WHERE burger_name LIKE '${connection.escape(burgerName)}';`;
        return await query(sql);
    }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
