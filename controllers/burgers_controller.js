var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

// Import the model (cat.js) to use its database functions.

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.selectAll((data) => {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne(req.body.name, (data) => {
        //console.log(data);
        res.json({ id: data.insertId });
    });
});

// Export routes for server.js to use.
module.exports = router;
