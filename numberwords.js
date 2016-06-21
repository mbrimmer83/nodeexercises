var fs = require('fs');

var natural = require('natural');

var fileName = process.argv[2];
fs.readFile(fileName, function(err, buffer) {
  if (err) {
    console.log(err.stack);
  }
var string = buffer.toString();
tokenizer = new natural.WordTokenizer();
var newString = (tokenizer.tokenize(string)).length;
console.log('Words: ' + newString);
});
