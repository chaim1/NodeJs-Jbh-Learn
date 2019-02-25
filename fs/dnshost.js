const dns = require('dns');


dns.resolve4(host, function(err, d) {
    if (err) {
        console.log(err)
    } else {
      console.log(d);
    }
})