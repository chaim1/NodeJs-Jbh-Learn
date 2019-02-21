const app = require('express')();
const cors = require('cors');
// const express = require('express');


const PORT = 8888;

// const app = express();
app.use(cors());
app.get('/', function (req, res)  {
    res.send('get home');
});

app.get('/student', function (req, res)  {
    res.setHeader('Comtent-Type', 'text/html');
    res.send([{
        id: 1,
        name: 'name'
    }]);
});

app.post('/', function(req, res){
    res.send()
});

app.listen(PORT, function ()  {
    console.log('server stated at port '+ PORT); 
})