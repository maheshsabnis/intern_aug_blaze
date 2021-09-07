const http = require('http');
const fs = require('fs');
const path = require('path');

const serverPath = path.join(__dirname, './../views');

const server = http.createServer((req,resp)=>{
    fs.readFile(`${serverPath}/home.html`, {encoding:'ascii'},(error,file)=>{
        if(error){
            resp.writeHead(404,{'Content-Type':'text/html'});
            resp.write(`File Npot Founf ${error.message}`);
            resp.end();
        }
        resp.writeHead(404,{'Content-Type':'text/html'});
        resp.write(file);
        resp.end();
    });
});

server.listen(9080);
console.log('Started on 9080');
