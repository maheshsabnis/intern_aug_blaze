var n1 = 123;
console.log('Using toString() = ' + n1.toString());
// evaluate an expression as Numeric and convert it into string 
console.log((300+600).toString());

// toExponential() method
// returns string by rounding the rightmost deigit after .
var n2 = 10.6567;
console.log(n2.toExponential(4)); // 1.656+e
// toFixed()
// Rounding of the decimal number
var n3 = 9.6754;
console.log(n3.toFixed()); // 10
console.log(n3.toFixed(2)); // 9.68

// Number Parsing methods
// these will be used to parse the value to Number
var v1 = "123tyd";
// parse the v1 to integer
console.log('parse of v1 = ' + v1 + '  to integer as = ' + parseInt(v1) ); 
// parseInt() will accept a string that starts from number and scan it untill
// the first string does not occure, and the parsed values will; be converted 
// into number

var v2 = "5665.78yri";
// parse the v2 to float
console.log('parse of v2 = ' + v2 + '  to float as = ' + parseFloat(v2) ); 
// parse the v2 to number
console.log('parse of v2 = ' + v2 + '  to number as = ' + parseInt(v2) ); 