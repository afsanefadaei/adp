process.stdout.write("MyFirsJSStart")
var http = require('http');
var dt = require('./mymodules/myfirstmodule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Iran's DateTime of current: " + dt.myDateTime());
    res.write("Inline Date: " + Date());
    res.end();
}).listen(3010);
process.stdout.write("MyFirsJSEnds")
