var mystring = "Indiana Jones is an American media franchise based on the adventures of Dr. Henry Walton 'Indiana' Jones, Jr., a fictional professor of archaeology, that began in 1981 with the film Raiders of the Lost Ark. In 1984, a prequel, The Temple of Doom, was released, and in 1989, a sequel, The Last Crusade. A fourth film followed in 2008, titled The Kingdom of the Crystal Skull. A fifth film is in production and is provisionally scheduled to be released in 2022. The series was created by George Lucas and stars Harrison Ford as Indiana Jones.";

// read length of string
console.log('length = ' + mystring.length);
// convert into upper case and then in lower case
console.log(mystring.toUpperCase());
console.log();
console.log(mystring.toLocaleLowerCase());

function getStringLength(){
    return mystring.length;
}

function changeCase(c){
  if(c == 'U' || c == 'u') return mystring.toUpperCase();
  if(c == 'L' || c == 'l') return mystring.toLocaleLowerCase();
  return mystring;
}

function sliceString(startIndex, count){
    // slice() is a standard JS method for string to
    // slice string based on 2 parameters
    // 1. the 0 based index to start reading string
    // 2. the count  of characters upto which the string is sliced
    // the clice() method returns the sliced string
    // slice() method can also accepts -ve value
  return mystring.slice(startIndex, count);
}

function getSubSubString(startIndex, count){
    // same as slice but cannot acept -ve indices
    return mystring.substr(startIndex, count);
}
