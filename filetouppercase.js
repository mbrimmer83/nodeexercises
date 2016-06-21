var fs = require('fs');
var content;
fs.readFile('matthew.txt', function(err, buffer) {
  var contentString = buffer.toString();
  var contentString2 = contentString.toUpperCase();
  if (err) {
    console.log(err.stack);
    return;
  }
  console.log(contentString2);
});
