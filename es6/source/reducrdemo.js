// a simple reducer dmo, for calculationg sum of data from array
let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// using reduce() to calculate sum of all records
const reducerLogic = (finalValue, currentValue) => finalValue + currentValue;
// using the logic for finding the sum of data
console.log(`SUm of Elements from Array = 
 ${numbers.reduce(reducerLogic)}`);
// reduce((finalValue, currentValue)=> finalValue+currentValue);
// currenuValue is the each record in iteration from array starts from 0th index,
// this will value will be added into finalValue for each reord in iteration
let names = [
  "Mahesh",
  "Ajay",
  "Akash",
  "Raju",
  "Amit",
  "Mahesh",
  "Akash",
  "Pushkar",
  "Mahesh",
  "Vikram",
  "Suprotim",
  "Ajay",
  "Mahesh",
  "Akash",
  "Vaibhav",
  "Ajay",
  "Vikram",
  "Suprotim",
  "Subodh",
];

// finding out the frequency of each record in array
// srcNames, is the previous value that will be checked using the
// currentName. The srcNames will be the source array reference
// on which the redcuce() function is invoked
let frequency = names.reduce((srcNames, currentName) => {
  // the 'in' operator in if condition will check an existing of
  // LHS value of 'in' operator in RHS collection value
  if (currentName in srcNames) {
    srcNames[currentName]++; // increament the count of frequency in srcName
  } else {
    srcNames[currentName] = 1; // frequency will be 1
  }
  // return the modified state of the sourve array i.e. names
  return srcNames;
}, {}); // the initial state of the Source array i.e. 'names' that will be used by reduce() function for modification
console.log(`Frequence = ${JSON.stringify(frequency)}`);

// Using Reduecr on COmplex Array
let emps = [
    {eno:1,ename:'A', dname:'d1'},
    {eno:2,ename:'B', dname:'d2'},
    {eno:3,ename:'C', dname:'d3'},
    {eno:4,ename:'D', dname:'d1'},
    {eno:5,ename:'E', dname:'d2'},
    {eno:6,ename:'F', dname:'d3'},
    {eno:7,ename:'G', dname:'d1'},
    {eno:8,ename:'H', dname:'d2'},
    {eno:9,ename:'I', dname:'d3'}
];
// display all departments by group
// define a function
// Parameter 1: The Source Array on which the query will be executed
// Parameter 2: The value of the property (property name) for creating group
function printGroup(sourceArray, pname){
    // emp, the current record to check
    // obj, is the iteration value on the array aka, each record from the source array 
    return sourceArray.reduce((emp,obj)=>{
        // read the key or property name for grouping
        let key = obj[pname];
        console.log(`The Group key = ${key}`);
        // if no record the the output group will be empty
        if(!emp[key]){
            emp[key] = []; // empty arry aka no grouping
        }
        
        console.log(`The 'obj' in Iteration ${JSON.stringify(obj)}`);
        // create a group 
        emp[key].push(obj); // pushed the searched object from the sourceArray in group
        console.log(`The 'emp' state based on match of 'obj' is = ${JSON.stringify(emp[key])}`);
        return emp; // a new object with modified state that the original array showing group of records
    },{});
};
console.log();
// get the group of employeed based on the 'dname' property
let output = printGroup(emps, 'dname');
console.log(`Group by recoreds = ${JSON.stringify(output)}`);
