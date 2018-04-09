var fs = require('fs');
fs.writeFile('sampleFile.txt', '["aa", "bb", "cc", "dd"]', function (err) {
	if (err) throw err;
	console.log('Replaced!');
});