var http = require('http')
var map = require('through2-map')

var port =Number(process.argv[2]);

var server = http.createServer(function (req, res) {
    // request handling logic...
    if (req.method == 'POST'){
        req.pipe(map(function(chunk) {
            return chunk.toString().toUpperCase()
        })).pipe(res);
    }else{
        return res.end("Only POST request will be accepted");

    }
})
server.listen(port)

