var shellParser = require('node-shell-parser');

var shellOutput = '';
 
process.stdin.on('data', function (chunk) {
  shellOutput += chunk;
});
 
process.stdin.on('end', function () {
  console.log(shellParser(shellOutput))
});
