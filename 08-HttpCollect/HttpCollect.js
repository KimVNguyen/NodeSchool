var http = require ('http');

var url =process.argv[2];

http.get(url,function(resp) {
    var data = '';
    resp.setEncoding('utf8');
    resp.on('data',function(chunk){
        data +=chunk;
    });
    resp.on('error',console.error);
    resp.on('end',function(chunk){
        console.log(data.length);
        console.log(data);
    });
});
