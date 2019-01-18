var connection = require("../config/connection");
var express = require("express");
var jobs = require("../models/bootcamper")

var router = express.Router();


// form submission route
router.get("/form/submit", function(req, res) {
    res.render("employer");
})

// database route after submitting form
router.get("/json", function(req, res) {
    jobs.allJobs(function(err, data){
        if (err) return err;

        var jobs = {
            jobs: data
        }
        res.json(data);
    });
})


//Send Route For Job Postings
router.get("/jobs", function(req, res) {
    var queryString = "SELECT * FROM jobs;"
    connection.query(queryString, function (err, results) {
        if (err) throw err;
        res.render("bootcampers");
    })
});

router.post("/json", function(req, res) {
    // ORM function from bootcamper.js
    // will POST all fields submitted by employer
    jobs.createJob([
        "job_title", "empl
      
      oyer", "employer_picture", "job_type", "description",
         "beg_price", "int_price", "adv_price", "emp_email", "emp_phone", 
         "emp_linkedin", "emp_site"
    ], [
        // data grabbed from each field in form
        req.body.job_title, req.body.employer, req.body.employer_picture, req.body.job_type,
        req.body.description, req.body.beg_price, req.body.int_price, req.body.adv_price,
        req.body.emp_email, req.body.emp_phone, req.body.emp_linkedin, req.body.emp_site
    ],
    // callback function - result not needed to be displed - will redirect user instead
    function(result){
        // redirects user after 'submit' button clicked
        res.redirect("/");
    }
    )
})

module.exports = router;