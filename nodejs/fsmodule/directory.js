const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "./../files1");

// create a new DIrectory
// If the directory available then it will be ignored
fs.mkdir(dirPath, (err) => {
  if (err) {
    return;
  }
  console.log("Directory is created");
});

// REad the directory and list all files

fs.readdir(dirPath, (err, files) => {
  if (err) {
    return;
  }
  // itarate over files
  files.forEach((file, i) => {
    // check if the file is a  'file object' or a 'directory object'
    // the 'stat()' method is used to check the status of the file
    // Is it exist or is it a file or directory
    fs.stat(`${dirPath}/${file}`, (err, stat) => {
      if (err) {
        console.log(`Some Error ${err.message}`);
        return;
      }
      if(stat.isFile()) {
          console.log(file);
          // read conmtents of the file
          console.log(`Data From File is = ${fs.readFileSync(`${dirPath}/${file}`)}`);
      }
    });
  });
});
