var nodeExecutablePath = process.argv[0];
var nodeProgramPath = process.argv[1];

var content = process.argv[2];

var fs = require('fs');

fs.writeFile('matthew.txt', content, function(err, buffer) {
  if (err) {
    console.log(err.stack);
    return;
  }
  console.log('I wrote ' + content + ' to matthew.txt');
});
