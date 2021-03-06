//Routes
//=======================
var jobs = require("../models/bootcamper.js");

var express = require("express");
var router = express.Router();




// Sends User To Homepage
//===========================
router.get("/", function(req, res, next) {
    res.render("index");
});
//User Click Re-directs
router.post("/clickpostbutton", function(req,res) {
    res.redirect("/postJobs");
    console.log(a);
});
router.post("/clickbuttonsearch", function(req,res) {
    res.redirect("/");
    console.log(b);
});

// Redirect to "see job" card scroll
router.post("/clickpostjob", function(req,res){
    res.redirect("/seeJobs");
    console.log("see the job!");
});


// Shows "jobs" Table As JSON
//==============================
router.get("/json", function(req, res) {
    jobs.allJobs(function(data){
        var showAllJobs = {
            jobs: data
        }
        console.log(showAllJobs);
        res.json(showAllJobs);
    });
});


// Renders Job Submission Form
//=============================
router.get("/postJobs", function(req, res) {
    res.render("employer");
})



// Post Route For Job Submission Form
//====================================
router.post("/postJobs", function(req, res) {
    // ORM function from bootcamper.js
    // will POST all fields submitted by employer
    jobs.createJob([
        "job_title", "employer", "employer_picture", "job_type", "job_description",
         "beg_price", "int_price", "adv_price", "emp_email", "emp_phone", 
         "emp_linkedin", "emp_site"
    ], [
        // data grabbed from each field in form
        req.body.job_title, req.body.employer, req.body.employer_picture, req.body.job_type,
        req.body.job_description, req.body.beg_price, req.body.int_price, req.body.adv_price,
        req.body.emp_email, req.body.emp_phone, req.body.emp_linkedin, req.body.emp_site
    ],
    // callback function - result not needed to be displed - will redirect user instead
    function(result){
        // redirects user after 'submit' button clicked
        res.redirect("/");
    });
});



//Send Route For Job Postings
//==================================
router.get("/seeJobs", function(req, res) {
    jobs.allJobs(function(data, err){
        if (err) return err;
        var bcJobs = {
            jobs: data
        }
        res.render("bootcampers", bcJobs);
        console.log(bcJobs);
    });
});

module.exports = router;