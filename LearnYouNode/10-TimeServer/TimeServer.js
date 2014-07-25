var net = require('net')

var port =process.argv[2];
var server = net.createServer(function (socket) {
    // socket handling logic
    date = new Date();
    socket.end(
        date.getFullYear() + '-' +
        String("0" + (date.getMonth()+1)).slice(-2) + '-' +
        String("0" + date.getDate()).slice(-2) + ' ' +
        String("0" + date.getHours()).slice(-2) + ':' +
        String("0" + date.getMinutes()).slice(-2) +
        '\n'
    );
})
server.listen(port)
