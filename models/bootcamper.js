var orm = require("../config/orm.js");

var jobs = {
    allJobs: function(cb) {
        orm.all("jobs", function(res) {
            cb(res);
        });
    },
    // The Variables cols and vals are arrays
    createJob: function(cols,vals,cb) {
        orm.create("jobs", cols, vals, function(res) {
            cb(res);
        });

    },
    updateJob: function(objColVals, condition, cb) {
        orm.update("jobs", objColVals, condition, function(res){
            cb(res);
        });
    },
    deleteJob: function(condition, cb) {
        orm.delete("jobs", condition, function(res) {
            cb(res);
        });
    }
};

module.exports = jobs;