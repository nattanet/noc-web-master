var express = require('express');
var app = express();
var sql = require("mssql");
// config for your database
var config = {
    user: 'sa',
    password: 'Net0802310965',
    server: 'localhost', 
    database: 'master' ,
    port :1433
 };
 
app.get('/ai', function (req, res) { 
 
 // connect to your database
 sql.connect(config, function (err) {
 
 if (err) console.log(err);
 
 // create Request object
 var request = new sql.Request();
 
 // query to the database and get the data
 request.query('select * from AI', function (err, recordset) {
 
 if (err) console.log(err)
 
 // send data as a response
 res.send(recordset);
 
 });
 });
});

/*app.get('/sp', function (req, res) { 
 
 // connect to your database
 sql.connect(config, function (err) {
 
 if (err) console.log(err);
 
 // create Request object
 var request = new sql.Request();
 
 // query to the database and get the data
 request.execute('dbo.GetAllStudents', function (err, recordset) {
 
 if (err) console.log(err)
 
 // send data as a response
 res.send(recordset);
 
 });
 });
});*/
 
var server = app.listen(4000, function () {
 console.log('Server is running.. on Port 4000');
});