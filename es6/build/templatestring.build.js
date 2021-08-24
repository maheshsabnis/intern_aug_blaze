"use strict";

var FirstName = "Tejas";
var MiddleName = "Mahesh";
var LastName = "Sabnis"; // older Syntax

var fullName = FirstName + ' ' + MiddleName + ' ' + LastName;
console.log('Full Name = ' + fullName); // Using String INterpolation or ES 6 Template String
// String Object will be Parsed as 'Expressions ${}' and will be interpolated
// aka merged into a single string Object to build a Immutable String

fullName = "".concat(FirstName, " ").concat(MiddleName, " ").concat(LastName);
console.log("Full Name = ".concat(fullName));
