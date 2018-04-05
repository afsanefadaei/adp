var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.firstname + " " + q.lastname + " " + q.dob;
  res.end(txt);
}).listen(3010);


// open this URL => localhost:3010/?firstname=afsane&lastname=fadaei&dob=1991