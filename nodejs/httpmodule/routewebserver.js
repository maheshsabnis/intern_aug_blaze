const http = require("http");
const fs = require("fs");
const path = require("path");

const serverPath = path.join(__dirname, "./../views");

const server = http.createServer((req, resp) => {
  if (req.url === "/home") {
    fs.readFile(
      `${serverPath}/home.html`,
      { encoding: "ascii" },
      (error, file) => {
        if (error) {
          resp.writeHead(404, { "Content-Type": "text/html" });
          resp.write(`File Npot Founf ${error.message}`);
          resp.end();
        }
        resp.writeHead(200, { "Content-Type": "text/html" });
        resp.write(file);
        resp.end();
      }
    );
  } else {
    if (req.url === "/about") {
      fs.readFile(
        `${serverPath}/about.html`,
        { encoding: "ascii" },
        (error, file) => {
          if (error) {
            resp.writeHead(404, { "Content-Type": "text/html" });
            resp.write(`File Npot Founf ${error.message}`);
            resp.end();
          }
          resp.writeHead(200, { "Content-Type": "text/html" });
          resp.write(file);
          resp.end();
        }
      );
    } else {
      if (req.url === "/contact") {
        fs.readFile(
          `${serverPath}/contact.html`,
          { encoding: "ascii" },
          (error, file) => {
            if (error) {
              resp.writeHead(404, { "Content-Type": "text/html" });
              resp.write(`File Npot Founf ${error.message}`);
              resp.end();
            }
            resp.writeHead(200, { "Content-Type": "text/html" });
            resp.write(file);
            resp.end();
          }
        );
      } else {
        resp.write('Please check the URL');
        resp.end();
      }
    }
  }
});

server.listen(9080);
console.log("Started on 9080");
