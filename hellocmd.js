var nodeExecutablePath = process.argv[0];

var nodeProgramPath = process.argv[1];

var firstCommandLineArgument = process.argv[2];
var secondCommandLineArgument = process.argv[3];

console.log(nodeExecutablePath);
console.log(nodeProgramPath);
console.log("Hello, " + firstCommandLineArgument);
