// write to file.
var fs = require('fs');
var content = 'Matthew was here!';
// could use var = filename;
fs.writeFile('matthew.txt', content, function(err) {
  if (err) {
    // print stacktace(return error encountered)
    console.log(err.stack);
    return;
  }
  console.log('Wrote to file');
});

// will overwrite data in file
// will make new file if file doesnt exist
