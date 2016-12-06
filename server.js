var http = require('http');
http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'text/plain'});
 res.end('it is running\n');
}).listen(process.env.PORT || 5000);