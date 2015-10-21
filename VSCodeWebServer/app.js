//1.
var http = require('http');
//2.
var server = http.createServer(function (req, resp) {
    //3.
    resp.writeHead(200, { 'Content-Type': 'text/html' });
   
    //4.
    resp.end("Hello, this is the test web server created");
});
//5.
server.listen(5050);
console.log('Server Started');