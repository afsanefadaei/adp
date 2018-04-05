var fs = require('fs');

fs.appendFile('sampleFile.txt', '["aa", "bb", "cc", "dd"]', function (err) {
  if (err) throw err;
  console.log('Updated!');
}); 