const http = require('http');
const calc = require('./calc');
const punycode = require('punycode');
const levinshtain = require('levenshtein-edit-distance');

const server = http.createServer((req, res)=>{
    res.writeHead(200,{
        'Content-Type': 'text/plain'
    });
    // console.log(req.socket);
    // res.end('hi there');
    setTimeout(() => {
        calc.mult(4,4, (err, multData)=>{
            if (err){
                res.end('sory man');
            }else{
                res.end('hi there, 4 * 4 = ' + multData)
            }
        })
    },1000);
});

server.listen(3000);