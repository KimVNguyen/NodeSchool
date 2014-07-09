
function filterLS(directory,extension,callback) {
    var fs = require('fs');
    var path = require ('path');

    var fileList = []
    fs.readdir(directory, function(err,files){
        if (err) {return callback(err)}

        files.forEach(function(item){

            if (path.extname(item) === "." + extension){
                fileList.push(item);

            }
        })
        callback(null,fileList);
    });



}

module.exports = filterLS
