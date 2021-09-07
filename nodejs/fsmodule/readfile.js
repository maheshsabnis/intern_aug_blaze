// 1 Load the fs Module
const fs = require('fs');
// 2. the path module is used to extract directories and files on the server
const path = require('path');

// __dirname, the Node.js global variable that represents the current file path from where the app is executing

const filePath = path.join(__dirname, './../files/myfile.txt');
console.log(filePath);
// Synchronous Read
 let data = fs.readFileSync(filePath);
 console.log(`Data = ${data}`);

// Asynchronous Read
// Parameter 1: the File Path
// Parameter 2: the encoding of data read from the file 
// Parameter 3: Callback Back [err: the error, data: data read from file]
fs.readFile(filePath, {encoding:'ascii'} ,(err,data)=>{
    // check for the error
    if(err){
        console.log(`Error Occured ${err.message}`);
        return; // STope the execution and return
    }
    console.log(`Async Data = ${data}`);
});

console.log('done');