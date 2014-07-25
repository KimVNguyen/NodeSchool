var http = require('http')

var port =process.argv[2];
var input_file =process.argv[3];

var server = http.createServer(function (req, res) {
  // request handling logic...
})
server.listen(port)

