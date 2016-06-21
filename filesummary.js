var fileName = process.argv[2];
var fs = require('fs');

fs.readFile(fileName, function(err, buffer) {
  var string = buffer.toString();
  var lines = string.split('\n');
  var countLines = lines.length;
  if (err) {
    console.log(err.stack);
    return;
  }
  var stringLength = string.length;
  console.log('Characters: ' + stringLength);
  console.log('Lines: ' + countLines);
});
