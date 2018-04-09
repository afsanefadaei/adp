var fs = require('fs');

fs.rename('sampleFile.txt', 'myrenamedsampleFile.txt', function (err) {
	if (err) throw err;
	console.log('File Renamed!');
}); 