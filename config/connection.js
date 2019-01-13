var mysql = require("mysql");

// creating the connection for mysql
var connection = mysql.createConnection({
    host: "localhost",
    port: 1433,
    user: "root",
    password: "",
    database: camperswhocode
}); 

// make the connection to sql database
connection.connect(function(err){
    if (err) {
        // error message for connection to sql if need
        console.error("error connecting: " + err.stack);
    };
    console.log("connected as ID: " + connection.threadId);
});

// export connection to bcController & employerController files
module.exports = connection;