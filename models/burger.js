const { insertOne } = require("../config/orm.js");
var orm = require("../config/orm.js");

var burger = {

    selectAll: function(cb) {
        orm.selectAll((data) => {
            cb(data);
        })
    },

    insertOne: function(burgerName, cb) {
        orm.insertOne(burgerName, (data) => {
            cb(data);
        });
    }
}

module.exports = burger;