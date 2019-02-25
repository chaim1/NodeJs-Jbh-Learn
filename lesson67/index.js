// const app = require('express')();

var mysql = require('mysql');
const express = require('express');
const cors = require('cors');
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
        console.log('The solution is: ', results[0].solution);
      });
    res.json(JSON.stringify(students));
});

app.post('/', function (req, res) {
    res.send('post home');
});



app.listen(PORT, function() {
    console.log('server started at port ' + PORT)
});