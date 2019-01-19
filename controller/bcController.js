//Routes
//========================
var jobs = require("../models/bootcamper.js");

var express = require("express");
var router = express.Router();


//Send Route For Job Postings
//==================================
router.get("/jobs", function(req, res) {
    jobs.allJobs(function(err, data){
        if (err) return err;

        var bcJobs = {
            bcJobs: data
        }
        res.render("bootcampers", bcJobs);
    });
});