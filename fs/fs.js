var mysql = require('mysql');
const express = require('express');
const fs = require('fs');
const rl = require('readline');
const dns = require('dns');
const PORT = 8888;
const app = express();


var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'host_db'
  });
  
  connection.connect();

  connection.query('INSERT INTO `dns`(`id`, `host`, `dns_errors`, `dnssecsses`) VALUES ([value-1],[value-2],[value-3],[value-4])', function (error, results, fields) {
    });

const lineReader = rl.createInterface({
    input: fs.createReadStream('list.txt')
});

lineReader.on('line', function (line) {
    app.get(dns.resolve4(line, function(err, d) {
        if (err) {   
            console.log(err);
                     
            connection.query(`INSERT INTO 'dns'( 'host', 'dns_errors') VALUES ("hostname",'${err}')`, function (error, results, fields) {
            });        } else {
                console.log(d);
                
                connection.query(`INSERT INTO 'dns'( 'host',  'dnssecsses') VALUES ("hostname", '${d.hostname}')`, function (error, results, fields) {
                });        }
    }))
});

app.listen(PORT, function() {
    console.log('server started at port ' + PORT)
});