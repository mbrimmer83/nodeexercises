var fs = require('fs');
fs.readFile('matthew.txt', function(err, buffer) {
  console.log('Why did this happen second?');
  if (err) {
    console.log('Error:', err);
  }
  var contentString = buffer.toString();
  console.log(contentString);
});

  console.log('This happened before data returned!');
