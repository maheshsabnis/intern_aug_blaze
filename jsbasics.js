// 1 declare a variable
// x will be now able to store 'any' data type in it
// Number (integer, floating point)
// string, array,object,date
var x; 
x = 10; 
console.log('type of x = ' + typeof(x) + ' and the value of x = ' + x);
console.log();
x = 10.2
console.log('type of x = ' + typeof(x) + ' and the value of x = ' + x);
console.log();
x = "Mahesh";
console.log('type of x = ' + typeof(x) + ' and the value of x = ' + x);
console.log();
x = 'A';
console.log('type of x = ' + typeof(x) + ' and the value of x = ' + x);
console.log();
x = {}; // EMpty Object aka Object Literal or Literal aka JavaScript Object Notation (JSON) Object
console.log('type of x = ' + typeof(x) + ' and the value of x = ' + x);
console.log();
// add properties in object after its declaration
x.FirstName = "James";
x.LastName = "Bond";
console.log('type of x = ' + typeof(x) + ' and the value of x.FirstName = ' + x.FirstName + ' and x.LastName = ' + x.LastName);
console.log(); 
// define an object with predefined properties
x= {fName:'Indiana',lName:'Jones'};
console.log('type of x = ' + typeof(x) + ' and the value of x.FirstName = ' + x.fName + ' and x.LastName = ' + x.lName);
console.log(); 
// modify the x by adding more properties in it
x.country="US";
console.log('type of x = ' + typeof(x) + ' and the value of x.FirstName = ' + x.fName + ' and x.LastName = ' + x.lName + "  and country = " + x.country);
console.log(); 
// define the type of x as JavaScript Date object
// used to provide the date details as mm/dd/yyyy based on date settings(?)  
x = new Date();
console.log('type of x = ' + typeof(x) + ' and the value of x' + x);
console.log(); 
// Parameters
// 1. Year as number
// 2. MOnth as number, its strts from 0 based index, 0 as January
// 3. date as number
// 4,5,6, Hours, Minuts, Seconds
x = new Date(2021, 7, 16);
console.log('type of x = ' + typeof(x) + ' and the value of x' + x);
console.log();

// Additional Power to the Datatypes
// 1. an Array
x = []; // an empty no limit array
// initial data in array with all data types
x = [10,20,30,40,50, 60, 60.4, 'A', 'B', 'C', {},
   {id:1,name:'A'}, ['N','A', 'M', 'E'], new Date(), new Date(2021,7,16)];

console.log('type of x = ' + typeof(x) + ' and the value of x' + x);
console.log();   

// Using for..loop read data from array
for(var i=0; i< x.length;i++) {
    console.log('type of x[i] = ' + typeof(x[i]) + ' and the value of x[i] ' + x[i]);
}
console.log();
console.log('Reading only numbers from array');
for(var i=0; i< x.length;i++) {
    if(typeof(x[i]) == 'number'){
        console.log('type of x[i] = ' + typeof(x[i]) + ' and the value of x[i] ' + x[i]);
    }
}

for(var i=0; i< x.length;i++) {
    if(typeof(x[i]) == 'string'){
        console.log('type of x[i] = ' + typeof(x[i]) + ' and the value of x[i] ' + x[i]);
    }
}

for(var i=0; i< x.length;i++) {
    if(typeof(x[i]) == 'object'){
        console.log('type of x[i] = ' + typeof(x[i]) + ' and the value of x[i] ' + x[i].toString());
    }
}