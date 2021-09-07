const http = require("http");

const emps = [
  { eno: 101, ename: "A", sal: 3100 },
  { eno: 102, ename: "B", sal: 3200 },
  { eno: 103, ename: "C", sal: 3300 },
  { eno: 104, ename: "D", sal: 3400 },
  { eno: 105, ename: "E", sal: 3500 },
];
 
const server = http.createServer((request, response) => {
  let id = request.headers.id;
  if(request.method === "GET"){
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
  }
  if(request.method === "POST") {
      // the global object for current request to save the received data
      let receivedData;
      request.on('data', (chunk)=>{
         // read data and store locally
         // wrte logic to validate the data, etc
         receivedData = JSON.parse(chunk);
      });
      // end the request and finally complete the processing
      request.on('end', ()=>{
          emps.push(receivedData);
          response.end(JSON.stringify(emps));
      });
  }
  
  if(request.method === "PUT") {
    // 1. Receive the id from the header
    // 2. Search the Record from array based on the header
    // 3. if found then read data from the body using request.on()
    // 4. Update the original data from array based on receibed data from body
    // 5. if based on id data is not found generate error response e.g. not found
    // 6. if data is successful the send the updated record back

}
  
if(request.method === "DELETE") {
    // 1. Receive the id from the header
    // 2. Search the Record from array based on the header
    // 3. if found then delete from  the array and generate response
    // 4. if based on id data is not found generate error response e.g. not found
     
}
   
  
});

// start listening on a port
server.listen(9080);
console.log("STarted listening on port 9080");
