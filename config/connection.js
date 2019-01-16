// Requirements
//====================
var mysql = require("mysql");

// Creating the connection for mysql
//==================================
var connection = mysql.createConnection({
    host: "localhost",
    port: 1433,
    user: "root",
    password: "4tigres",
    database: "camperswhocode"
}); 

// Make the connection to sql database
//====================================
connection.connect(function(err){
    if (err) {
        // error message for connection to sql if need
        console.error("error connecting: " + err.stack);
    };
    console.log("connected as ID: " + connection.threadId);
});

// Export connection to bcController & employerController files
//=============================================================
module.exports = connection;