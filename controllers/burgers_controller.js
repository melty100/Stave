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

router.put("/api/burgers/:id", function(req, res) {
    burger.updateOne(req.params.id, (results) => {
        console.log({results});
        if(results.changedRows == 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.put("/api/burgers", function(req, res) {
    burger.resetAll((results) => {
        if(results.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;
