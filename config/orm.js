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

    updateOne: function(id, cb){
        let sql = `UPDATE burgers SET devoured = true WHERE id = ${connection.escape(id)};`;
        console.log(sql);
        connection.query(sql, (err, data) => {
            if(err) console.log(err);

            cb(data);
        });
    },

    resetAll: function(cb) {
        let sql = 'UPDATE burgers SET devoured = false WHERE id > 0;';
        connection.query(sql, (err, data) => {
            if(err) console.log(err);

            cb(data);
        })
    }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
