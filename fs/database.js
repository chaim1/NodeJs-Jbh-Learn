const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;


const mongoConnect = callback => {
    MongoClient.connect('mongodb+srv://chaim:cohen1234@learnmongo-7mmbh.mongodb.net/test?retryWrites=true',{useNewUrlParser: true})
        .then(result => {
            console.log('conecting')
            callback(result);
        })
        .catch(err => {
            console.log(err);
        });
}


module.exports = mongoConnect;