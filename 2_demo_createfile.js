//creating a new file
var fs = require('fs');
fs.appendFile('new_document.txt', 'a file named new_document created!', function (err) {
	if (err) throw err;
	console.log('Saved!');
}); 
