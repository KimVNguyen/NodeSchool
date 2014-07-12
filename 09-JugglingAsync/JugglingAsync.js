var http = require ('http');

var retVal = []

for (x=2;x<process.argv.length; x++){
    var url =process.argv[x];
    myFunction(url,x-2, function(err,data){
        retVal.push(data);
        if (process.argv.length-2==retVal.length){
            retVal.sort(function(a,b){
                return a.index - b.index;
            });
            retVal.forEach(function(item){
              console.log(item.data);
            });
        }

    });

}

function myFunction(url,index,callback){
    var data = {
        "data": '',
        "index": index
    };
    http.get(url,function(resp) {
        resp.setEncoding('utf8');
        resp.on('data',function(chunk){
            data.data +=chunk;
        });
        resp.on('error',console.error);
        resp.on('end',function(chunk){

            callback(null,data);
        });

    });

}

// // Proper Way to achieve solution:
//   var http = require('http')
//    var bl = require('bl')
//    var results = []
//    var count = 0
//
//    function printResults () {
//      for (var i = 0; i < 3; i++)
//        console.log(results[i])
//    }
//
//    function httpGet (index) {
//      http.get(process.argv[2 + index], function (response) {
//        response.pipe(bl(function (err, data) {
//          if (err)
//            return console.error(data)
//
//          results[index] = data.toString()
//          count++
//
//          if (count == 3) // yay! we are the last one!
//            printResults()
//        }))
//      })
//    }
//
//    for (var i = 0; i < 3; i++)
//      httpGet(i)

