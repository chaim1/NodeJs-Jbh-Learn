const express = require('express');
var mysql = require('mysql2');
const fs = require('fs');
const rl = require('readline');
const dns = require('dns');

const mongo = require('./database');


const PORT = 8888;
const app = express();


// var db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'cohen1234',
//     database: 'db_host'
// });

// db.connect();


// const lineReader = rl.createInterface({
//     input: fs.createReadStream('list.txt')
// });
// var num =0;
// lineReader.on('line', function (line) {
//     app.get(dns.resolve4(line, function (err, d) {
//         num ++;
//         if (err) {
//             console.log(num);
//             db.query('INSERT INTO `host_sts` (`host`,`error`) VALUES (?,?)',[num,err.errno] );
//                         // db.query('TRUNCATE TABLE host_sts');
                        
//         } else {
//             console.log(d);
//             db.query('INSERT INTO `host_sts` (`host`, `seccses`) VALUES (?, ?)',[num, line] );
//             // connection.query('INSERT INTO dns SET ?', { host: line, dnssecsses: d }, function (error, results, fields) {
//             // });
//         }
//     }))
// });
mongo( client => {
    console.log(client);
    app.listen(3000)
});

// app.listen(PORT, function () {
//     console.log('server started at port ' + PORT)
// });