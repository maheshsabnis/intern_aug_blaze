let FirstName = "Tejas";
let MiddleName = "Mahesh";
let LastName = "Sabnis";

// older Syntax
let fullName = FirstName + ' ' + MiddleName + ' ' + LastName;
console.log('Full Name = ' + fullName);

// Using String INterpolation or ES 6 Template String
// String Object will be Parsed as 'Expressions ${}' and will be interpolated
// aka merged into a single string Object to build a Immutable String
fullName = `${FirstName} ${MiddleName} ${LastName}`;
console.log(`Full Name = ${fullName}`);
