var http = require('http');
var through = require('through')


var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {

        req.pipe(through(function(buff){

            this.queue(buff.toString().toUpperCase());
        })).pipe(res);
    }
    else res.end('send me a POST\n');

});

server.listen(parseInt(process.argv[2]));
