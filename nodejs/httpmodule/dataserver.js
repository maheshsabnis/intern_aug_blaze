const http = require("http");
const { isGeneratorFunction } = require("util/types");
const emps = [
  { eno: 101, ename: "A", sal: 3100 },
  { eno: 102, ename: "B", sal: 3200 },
  { eno: 103, ename: "C", sal: 3300 },
  { eno: 104, ename: "D", sal: 3400 },
  { eno: 105, ename: "E", sal: 3500 },
];
// const server = http.createServer((request,response)=>{
//     // write a response Header
//     response.writeHead(200, {'Content-Type': 'application/json'});
//     // write response data in header
//     response.write(JSON.stringify(emps));
//     // end the response
//     response.end();
// });

const server = http.createServer((request, response) => {
  let id = request.headers.id;
//   const auth = request.headers.authorization;
  
//   console.log(`Authorization Value = ${auth}`);
//   const method = request.method;
//   console.log(`Method = ${method}`);

//   console.log(`id = ${id}`);

  
  if (id === undefined || id === 0) {
    // write a response Header
    response.writeHead(200, { "Content-Type": "application/json" });
    // write response data in header
    response.write(JSON.stringify(emps));
    // end the response
    response.end();
  } else {
        // write a response Header
    response.writeHead(200, {'Content-Type': 'application/json'});
    // write response data in header
    let res =  emps.filter((e,i)=> {return e.eno === parseInt(id);});
    console.log(`Data in Else ${JSON.stringify(res)}`)
    response.write(JSON.stringify(res));
    // end the response
    response.end();
  }
});

// start listening on a port
server.listen(9080);
console.log("STarted listening on port 9080");
