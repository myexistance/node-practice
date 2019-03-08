var http = require('http');

http.createServer(function(request,response){
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end("Hello Yoobee\n");

}).listen(8080);

console.log("server is running at http://192.168.33.10")

console.log("Welcome to node");
