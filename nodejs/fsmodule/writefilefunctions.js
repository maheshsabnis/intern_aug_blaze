const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, './../files/myfile1.txt');

// using open() method, the default async method
// Parameter 1: The FIle Path
// Parameter 2L The Flag 'w' write the file
fs.open(filePath, 'w', (err, file)=>{
    if(err){
        console.log(`Error occured in creating file ${err.message}`);
        return;
    }
    console.log(`Hay!! File is creared ${file}`);
} );


// Append the File
fs.appendFile(filePath, 'Take the Text', (err)=>{
    if(err){
        console.log(`Error occured in Appending file ${err.message}`);
        return;
    }
    console.log(`Hay!! File is Appended`);
});


// USing the writeFile() and writeFileSync()

fs.writeFileSync(filePath, 'I am the new Data writen using Synchronous Operations');

// Using Asynchronously
// This will overwrite the file if data is already exist in the file 
fs.writeFile(filePath, 'The Async Data',(err)=>{
    if(err){
        console.log(`Error occured in Writing file ${err.message}`);
        return;
    }
});

// Delete the file
fs.unlink(filePath, ()=>{
    console.log('Deleted');
});