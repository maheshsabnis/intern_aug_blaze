"use strict";

// IN ES 6 when an array is declared it will become an instance of Array Class
var array = [10, 20, 30, 40]; // Iretare over the Array
// Using the forEach() method of the Array
// the printValues will be executed as CallBack Function
// defined Explicitely

array.forEach(printValues); // CReate a Function that will be used to print records from Array

function printValues(num, idx) {
  console.log("Number at index = ".concat(idx, " is = ").concat(num));
}

console.log();
console.log('Using Implict Callback'); // Usisng Implicit Callback

array.forEach(function (num, idx) {
  console.log("Number at index = ".concat(idx, " is = ").concat(num));
});
console.log();
console.log('Using Arrow Operator');
array.forEach(function (num, idx) {
  console.log("Number at index = ".concat(idx, " is = ").concat(num));
});
