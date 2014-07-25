var fs = require('fs');

fs.readFile(process.argv[2].toString(), function (err, data) {
    var rawText = data.toString();
    var byLines = rawText.split('\n');
    console.log(byLines.length-1);
});
