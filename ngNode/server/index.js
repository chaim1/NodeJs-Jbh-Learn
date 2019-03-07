const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const fs = require('fs');


const app = express();
app.use(cors());
app.use(express.json());

function connection(query, callback){
    var connection  = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cohen1234',
    database: 'db_host'
});
connection.connect();
connection.query(query, callback);
connection.end();
}

function writeToFile(user) {
    const line = 'Name: ' + user.name + ', Email: ' + user.email + ', Phone: ' + user.phone + '.';
    fs.appendFile("usersList.txt", line + "\n", function (err) {
        if (err) {
            return console.log(err);
        }
    });
}

app.post('/user', function (req, res) {    
    const query = 'INSERT INTO `ng_node`(`username`, `email`, `phone`) VALUES("' + req.body.userName + '","' + req.body.email + '","' + req.body.phone + '")';
    connection(query, function (error, results) {
        if (error) throw error;
        else {
            writeToFile(req.body);
            res.end('ok');
        }
    });
});


app.post('/add-recipe', function (req, res) {  
    console.log(req.body);
      
    const query = 'INSERT INTO `recipes`(`name`, `instraction`) VALUES("' + req.body.Name + '","' + req.body.instraction  + '")';
    connection(query, function (error, results) {
        if (error) throw error;
        else {
            res.end('ok');
        }
    });
});

app.get('/recipes', function (req,res) {
    const query = 'SELECT * FROM `recipes` WHERE 1 ';
    connection(query, function (error, results) {
        if (error) throw error;
        else {
            console.log(results);
            res.json(results);
        }
    });
});



app.listen(8888,function(){
    console.log('server 8888'); 
});



