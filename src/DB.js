var express = require("express");
var bodyParser = require("body-parser");
var sql = require("mssql");
var app = express(); 


// Body Parser Middleware
app.use(bodyParser.json()); 

//CORS Middleware
app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

//Setting up server
 var server = app.listen(process.env.PORT || 5000, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
 });

//Initiallising connection string
var dbConfig = {
    user: 'sa',
    password: 'Net0802310965',
    server: 'localhost', 
    database: 'master' ,
    port :1433
};

//Function to connect to database and execute query
var  executeQuery = function(res, query){             
    sql.connect(dbConfig, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        // query to the database and get the records
        request.query(query, function (err, recordset) {
            if (err) console.log(err)
            // send records as a response
            res.send(recordset);
        }).then(result => {
            sql.close();;
        })
    });
}

//GET API
app.get("/ai", function(req , res){
                var query = "select * from AI";
                executeQuery (res, query);
});


