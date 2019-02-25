// const app = require('express')();

var mysql = require('mysql');
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const redline = require('readline');
const dns = require('dns');
const PORT = 8888;
const app = express();

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'my_db'
  });
  
  connection.connect();

  
app.use(cors());
app.get('/student', function (req, res) {
    connection.query('SELECT `id`, `name` FROM `users` WHERE 1', function (error, results, fields) {
        if (error) throw error;
        res.json(JSON.stringify(results));      });
});

app.post('/', function (req, res) {
    res.send('post home');
});

// app.get('/file', function (req, res) {
//   const line
// });

app.listen(PORT, function() {
    console.log('server started at port ' + PORT)
});