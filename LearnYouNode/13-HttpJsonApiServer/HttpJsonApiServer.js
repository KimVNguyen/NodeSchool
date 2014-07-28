var http = require('http')
var url = require('url')

var port =Number(process.argv[2]);

function parseTime(timeString,format){

    var time = new Date(timeString)
    if (format == 'parsetime'){
        return {
            hour: time.getHours(),
            minute: time.getMinutes(),
            second: time.getSeconds()
        };
    } else if (format == 'unixtime'){
         return { unixtime : time.getTime() };
    } else {
        return
    }


}

var server = http.createServer(function (req, res) {
    // request handling logic...
    parsedURL = url.parse(req.url,true);
    queryIso = parsedURL.query.iso;
    pathArray = parsedURL.pathname.split("/");


    resObject = parseTime(queryIso,pathArray[2]);

    if (resObject && pathArray[1] =="api"){

        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(resObject))
    }else
    {
        res.writeHead(404)
        res.end()
    }

})
server.listen(port)
