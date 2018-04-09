// open a file
var fs = require('fs');
fs.open('sampleFile.txt', 'w', function (err, file) {
	if (err) throw err;
	console.log('opened!');
});