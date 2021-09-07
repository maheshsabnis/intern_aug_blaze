const http = require('http');
// creating a server
const server = http.createServer((request,response)=>{
    // write a response Header
    response.writeHead(200, {'Content-Type': 'text/html'});
    // write response data in header
    response.write('Hello World!!!!!!');
    // end the response
    response.end();
});

// start listening on a port
server.listen(9080);
console.log('STarted listening on port 9080');