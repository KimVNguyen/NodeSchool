var net = require('net')

var port =process.argv[2];
var server = net.createServer(function (socket) {
    // socket handling logic
    date = new Date();
    socket.end(

    );
})
server.listen(port)
