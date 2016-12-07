/**
 * Created by peter on 2016-12-06.
 */
var http = require("http");

http.createServer(function (request,response) {

    response.writeHead(200);
    request.end("sdfsd")
}).listen(3000);
console.log('sdfds');
