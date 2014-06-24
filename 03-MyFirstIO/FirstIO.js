var fs = require('fs');

var fileBuffer = fs.readFileSync(process.argv[2].toString());
var rawText = fileBuffer.toString();
var byLines = rawText.split('\n');
console.log(byLines.length-1);
