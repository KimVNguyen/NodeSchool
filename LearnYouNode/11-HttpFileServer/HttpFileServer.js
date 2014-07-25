var http = require('http')
var fs = require('fs')

var port =Number(process.argv[2]);
var input_file =process.argv[3];

var server = http.createServer(function (req, res) {
    // request handling logic...
    res.writeHead(200, {'content-type': 'text/plain'})
    fs.createReadStream(input_file).pipe(res)
})
server.listen(port)

