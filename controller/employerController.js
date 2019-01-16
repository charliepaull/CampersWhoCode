var connection = require("../config/connection.js");
var express = require("express");

var router = express.Router();

    


router.get("/", function(req, res) {
    res.render("employer");
})


router.get("/json", function(req, res) {
    var queryString = "SELECT * FROM jobs;"
    connection.query(queryString, function(err, result) {
        if (err) throw err;
        res.json(result);
    })
})

// router.post("/", function())



module.exports = router;