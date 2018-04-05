//removing a file
var fs = require('fs');
fs.unlink('new_document.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
}); 