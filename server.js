// Requirements
//==========================
var express = require("express");

var PORT = process.env.PORT || 6969;

var app = express();


// Add static files to 'public'
//==========================
app.use(express.static("public"));


// Parses body in json format
//==========================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Sets up handlebars
//==========================
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Sets up router
//==========================
// var bcRoute = require("./controller/bcController.js");
var empRoute = require("./controller/employerController.js");


// Ability to use two seperate routes
//===================================
// app.use(bcRoute);
app.use(empRoute);


// Sends user to homepage
//==========================
// app.get("/", function(req, res) {
//     res.render("index");
// });


// Start server
//==========================
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});