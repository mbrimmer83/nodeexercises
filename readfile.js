// fs = filesystem = node module. require is a method built in fs
var fs = require('fs');

var fileName = process.argv[2];
// read the file and get a buffer object with binary data in it
var buffer = fs.readFileSync(fileName);
console.log('Buffer:', buffer);
// convert binary data to a string
var stringContent = buffer.toString();
console.log(stringContent);

//only use readFileSync with small scripts
