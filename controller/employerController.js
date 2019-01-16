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


router.post("/", function(req, res) {
    jobs.createJob([
        "job_title", "employer", "employer_picture", "job_type", "description",
         "beg_price", "int_price", "adv_price", "emp_email", "emp_phone", "emp_linkedin", "emp_site"
    ], [
        
    ])
})

module.exports = router;