var fs = require('fs');
var path = require ('path');

fs.readdir(process.argv[2], function(err,files){
    files.forEach(function(item){
        if (path.extname(item) === "." + process.argv[3]){
            console.log (item);
        }
    })

});
