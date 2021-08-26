# ES 6
- A Modern JavaScript for Modern Web Front-End as well as JavaScript FullStack Applications
- Developers' features
    - Local Block Scope using 'let' keyword
    - Template String aka String Interpolation
    - Arrow Operator, a Simple Syntax for Callback Functions
    - Array Methods
    - String Methods
    - Date Methods
    - Spread Operator
    - Object Oriented Programming
    - Modules
    - Promise, ES 7, Modern Mechanism of Handling Asynchronous Operations
    - Async/Await, ES 8, server-side compatibility for Asynchronous JavaScript Execution

# Languages Supporting ES 6
    - Modern JavaScript aka ES 6 aka High-Level JavaScript
        - Developed and Maintained by Mozilla Foundation with OpenJS
    - TypeScript
        - Powerful and Popular language for Front-End Development, like Angular, React, etc.
        - Developed by Microsoft
    - Dart
        - Language by Google
        - Based on C        
# Libraries Releases for ES 6
    - ES 2015 --> ES 6
    - ES 2016 --> ES 7
    - ES 2017 --> ES 8
    - ES 2019 --> ES 9
    - ES 2020 --> ES 10
    - ExNext        

# Configuring the ES 6 Development Environment
    - Node.js
        - Server-Side Runtime for JavaScript
        - Execute JavaScript on Server
    - Transpilers
        - babel
            - @bable/core
                - Contains Transpilation Services for ESx Code (x:6,7,8,9,next)
            - @bale/cli
                - Command Line interface for Transpilation
            - @babel/preset-env
                - Code Environment Configuration for Transpilation
                - Polyfills, make sure that the non-supported code for browser will be executed successfully
            - babel-loader
                - The Loader for Bable Object Model for Transpilation
                - Used in case of Auto-Transpilation COnfioguration of Multiple ES 6 Files
            - babel-preset-es2015
                - The Minimum Transpilation Support for the ES 6
                - ES 6                    
        - tracure
    - Installing and using Transpilares
        -  Use the 'npm' utility. The Node Package Manager     
        - INstall the Package(s) in GLobal Scope, those are required across all applications
            - npm install -g [PACKAGE-NAME]
                - e.g. npm install -g @bable/core @bable/cli 
        - If Packages are used for a specific application, then open command prompt and perform following
            - Create 'package.json' file, the file used for following
                - Command to create package.json with default
                    - npm init -y
                - Containing Listing of all packages used for Application in Production
                    - INstalling Packages for Production for Current Application
                        - npm install --save [PACKAGE-NAME]
                        - The packege list will be put inside 'dependencies' section of package.json
                - Containing Listing of all packaged used during development and testing of Application  
                    - Installing Packages for Development and Testing
                        - npm install --save-dev [PACKAGE-NAME]
                        - The package list will be put inside 'devDependencies' section of package.json       
                - Section to contain commands for Build, Test and Run the application is
                    - scripts
                    - e.g. 
                        - scripts: {build: [Command], test:[Command], start:[Command]}        
    - Configure a Transpilation Settings in the Current Application
        - Add a new file of name '.babelrc', the Babel Resource File
        - Add Following Settings in it
``` javascript
{
    "presets": [
        "@babel/preset-env"
    ]
}
```
    - High-Level aka ES 6 JS to the Browser Compatible Transpilation
        - bable [Source-File-Path] -o [Target-File-Path] 
            - -o is the output
        - e.g.
            - babel .\source\scopes.js -o .\build\scopes.build.js    
    - Running the output file on server
        - node [File-Path].js        

# Programming with ES 6
- Using the 'let' keyword for Scope
``` javascript
function doWork(x){
    if(x == true) {
        let y = 10;
        console.log('In If Condition y = ' + y);
    }
    console.log('Out of If Condition y = ' + y);

}

console.log('For True');
doWork(true);
console.log('For False');
doWork(false);

```
- String COncatination using String Interpolation aka Template String
    - a Mechanism of Building a 'Single' OR 'Immutable' strting object to concatinate multiple strings into a Single String

``` javascript
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

```
- Using Arrow Operator
    - USed for a method which is accepting callback function as input parameter
    - Offer a Simple SYntax as an alternative to CallBack functions
```  javascript
// IN ES 6 when an array is declared it will become an instance of Array Class
let array =[10,20,30,40];

// Iretare over the Array
// Using the forEach() method of the Array
// the printValues will be executed as CallBack Function
// defined Explicitely
array.forEach(printValues);

// CReate a Function that will be used to print records from Array
function printValues(num,idx){
    console.log(`Number at index = ${idx} is = ${num}`);
}

console.log();
console.log('Using Implict Callback');


// Usisng Implicit Callback
array.forEach(function(num,idx){
    console.log(`Number at index = ${idx} is = ${num}`);
});


console.log();
console.log('Using Arrow Operator');

array.forEach((num,idx)=>{
    console.log(`Number at index = ${idx} is = ${num}`);
});

```    

- Collections in ES 6
    - Array
        - push(), pop(), indxOf(), lastIndexOf(), shift(), unshift(), sort() methods from  ES 3 and ES 5
``` javascript
let names = ['Mahesh', 'Ajay', 'Akash', 'Raju', 'Amit', 'Mahesh', 'Akash', 'Pushkar'];
// check if the record is present in array
// using indexOf(), if the record is not present in array then it will return -1. If the record found it will stope for the first occurance of the record in array
console.log(names.indexOf('Mahesh')); // 0
console.log(names.indexOf('Raju')); // 3
console.log(names.indexOf('Tejas')); // -1

// lastIndexOf(), start reading the array and will proviode the last index of the record
console.log(names.lastIndexOf('Mahesh')); // 5
console.log(names.lastIndexOf('Akash')); // 6
console.log(names.lastIndexOf('Tejas')); // -1

// Append a Record at the end
names.push('Atul');
console.log(names);
// remove the last element from the array
console.log(names.pop());
console.log(names);
// remove record from the first (0th) position of the array
console.log(names.shift());
console.log(names);
// add record at the first (0th) position of the array
names.unshift('Ramesh');
console.log(names);
// Sort Array ES 5
console.log(names.sort()); // the default is alphabetical order
// Sort array by length of each record

// a and b are first 2 records of array and will be iterated towards end of array
let res = names.sort((a,b)=>{
    return  a.length - b.length;   // compare based on length by ascending order, if result is +ve b is lesser than a in length, if -ve a is less in length than b, if result is 0 then same length  
});
console.log('Sort by Length in Ascending order');
console.log(res);
res = names.sort((a,b)=>{
    return  b.length - a.length;   // compare based on length by descending order
});
console.log('Sort by Length in Descending order');
console.log(res);
```
        
        - ES 6 Methods
            - forEach()
            - reverse()
            - find()
            - filter()
            - map()
            - reduce()
                - The method that is used for in-Memory, self iteration for perfoming various operations. E.g. Frequency of elements, Grouping of elements, sum of elements, etc.
``` javascript
let names = [
  "Mahesh",
  "Ajay",
  "Akash",
  "Raju",
  "Amit",
  "Mahesh",
  "Akash",
  "Pushkar",
];
// Using the for..of iterator to read or iterate over the array
for (let n of names) {
  console.log(`Name = ${n}`);
}
// Using forEach()
console.log("USing forEach");
names.forEach((n, i) => {
  console.log(`Name at index ${i} is  = ${n}`);
});
// using map() function
console.log("USing Map");
names.map((n, i) => {
  console.log(`Name at index ${i} is  = ${n}`);
});

// using filter method
console.log("Using filter()");
// return a new array based on the expression condition
let res1 = names.filter((n, i) => {
  return n.length > 4;
});
console.log(res1);

```
    - Additional Demos
``` javascript
let names = ['Mahesh', 'Ajay', 'Akash', 'Raju', 'Amit', 'Mahesh', 'Akash', 'Pushkar'];
// check if the record is present in array
// using indexOf(), if the record is not present in array then it will return -1. If the record found it will stope for the first occurance of the record in array
console.log(names.indexOf('Mahesh')); // 0
console.log(names.indexOf('Raju')); // 3
console.log(names.indexOf('Tejas')); // -1

// lastIndexOf(), start reading the array and will proviode the last index of the record
console.log(names.lastIndexOf('Mahesh')); // 5
console.log(names.lastIndexOf('Akash')); // 6
console.log(names.lastIndexOf('Tejas')); // -1

// Append a Record at the end
names.push('Atul');
console.log(names);
// remove the last element from the array
console.log(names.pop());
console.log(names);
// remove record from the first (0th) position of the array
console.log(names.shift());
console.log(names);
// add record at the first (0th) position of the array
names.unshift('Ramesh');
console.log(names);
// Sort Array ES 5
console.log(names.sort()); // the default is alphabetical order
// Sort array by length of each record

// a and b are first 2 records of array and will be iterated towards end of array
let res = names.sort((a,b)=>{
    return  a.length - b.length;   // compare based on length by ascending order, if result is +ve b is lesser than a in length, if -ve a is less in length than b, if result is 0 then same length  
});
console.log('Sort by Length in Ascending order');
console.log(res);
res = names.sort((a,b)=>{
    return  b.length - a.length;   // compare based on length by descending order
});
console.log('Sort by Length in Descending order');
console.log(res);



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
  "Mahesh", "Akash", "Vaibhav", "Ajay"
];

let morenames = ["Vikram", "Suprotim", "Subodh"];
// names will be appended with morenames
let allnames = names.concat(morenames);

// list all names having length more that 5
let res1 = allnames.filter((n, i) => {
  return n.length > 5;
});
console.log(`Records hvinf length more than 5 ${res1}`);
// findout frequency of 'Mahesh' in array
let res2 = allnames.filter((n,i)=> {
    return n == 'Mahesh';    
}); 
console.log(`Count of Mahesh in array = ${res2.length}`);

let names = ['Mahesh', 'Ajay', 'Akash', 'Raju', 'Amit', 'Mahesh', 'Akash', 'Pushkar'];

let morenames = ["Vikram", "Suprotim", "Subodh"];
// names will be appended with morenames
let allnames = names.concat(morenames);
console.log(allnames);
// Slicing of array. Break array  based on the STart Position and the count
// starts from the 0th index the 5 values from array will be put into output array
let ar1 = allnames.slice(0,5);
console.log(ar1);
console.log(allnames);
// The Removing an element from array
// from the 0th position, remove 2 records aka deletecount, numbner of records tyo be deleted from array
allnames.splice(0,2);
console.log('AFTER DELETE FIRST 2 RECORDS`');
console.log(allnames);
allnames = names.concat(morenames);
console.log(allnames);
// deleting a specific record from the array
// 1 Retrieve the index of the record
let index = allnames.indexOf('Pushkar');
console.log(index);
// 2 Splice the index with deletecount as 1
allnames.splice(index,1);
console.log('Records after deleting Pushkar`');
console.log(allnames);

```
    - Array Reduce function
        - Array.reduce(Function Predicate)
            - Function Predicate: the implmenetation for executing a logic on the array
``` javascript
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

```
    - Set and WeakSet
        - Set is the collection taht can store only unique value
        - THis will ingore the repeated value to be added in the collection 
        - The 'Set()' is predefined object of ES 6
            - methods
                - add(), forEach(), keys(), to read all keys, values(), to read all values from Set
            - property
                -size, the size of the Set    
        - The WeakSet() can stored only objects' references        
    - Map and WeakMap
        - STored data in Key/Value pair
        - Key is UNique and Value can be number, string, object
        - WeakMap() can have Keys and Values as Objects only
    - If the Data Schema under the manipulation is complex and takes time to proces (e.g. Search, Filter, Sort, etc.), then use Set or Map collection to store the data

- ES 6 String Methods
    - search()
        - search an existance of specified string in a given string and returns its index
            - an alternative to indexOf() and lastIndexOf()
            - indexOf(string-to-search, Start-Position-from-which-the-search-starts)
            - serach(string-to-search)
                - can accept a regular expresion to find a match for powerful search    
                - starts reading a string from 0th postion with character match in search string, so if match not found the whole word is skipped
                    - STring: JavaScript is Powerfull language for Full Stack development, so laugh and use
                    - String.search('language') , String.search('laugh')
                        - FIrst 3 words will be skipped because first character does not match 
    - match()
        - Purely written for Regular-Expression Based Search      

- Date Object and its methods          
    - Date()
        - getFullYear(), getMonth(), getDate(), getHoures(), getMinuts(), getSeconds(), getDay()
        - setFullYear(), setMonth(), setDate(), setHours(), setMinutes(), setSeconds(), setDay()      
-  Using Object Oriented Programming
    - 'class' is the keyword
        - The class name must starts from Uppercase character 
    - 'constructor()' is a standard method
    - NO method overloading by default
    - public members are exposed using 'this.' prefix
    - private members needs additional packages and configuration in .babelrc file
        - @babel/plugin-proposal-class-properties
            - get/set properties
        - @babel/plugin-proposal-private-methods
            - for private members
        - npm install --save @babel/plugin-proposal-class-properties @babel/plugin-proposal-private-methods    
``` javascript
{
    "presets": [
        "@babel/preset-env"
    ],
    "plugins": [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-private-methods"
    ]
}
```
    - NO Abstract CLass by Default
    - SUpport for STatic Methods available
    - INheritence is possible using 'extends' keyword 
# Hands-on-Labs on ES 6

# Date : 25-Aug-2021
1. Create a Map by accepting data from UI that is going store the Patient Information like
    - PatientId: Used as Key and will be Auto Generated
    - PatientName, must be string and Mandatory
    - DoctorName, Must be String and Mandatory,
    - Age, Numeric Mandatory,
    - Gender, String, Mandatory
    - Dieses, String, MAndatory
        - General, Cancer, Heart, Sugar, Pnumonia, etc. 
    - Ward, (General, Special) 
    - RoomNo

2. CReate UI That will display, Patients Group by Doctors
3. CReate UI That will display, Patients Group by Dieses
4. CReate UI That will display, Patients Group by Ward    
   
# Date : 26-Auh-2021
1. Create a HTML Page with following input Elements
    - input:date and input:time for FROM Date
    - input:date and input:time for To Date
    - input:button
    - When From Date and From Time is Selected reads its value as From DateTime and When To Date and To Time is selected , read its value as ToTime, when the button is clicked, the exact Date Difference must be shown on page  
        - Difference is 1 Year, 2 Months,10 Days, 5 Hours, 30 minutes, 50 seconds
   - If Date differnce is more than 365 add an year for Leap Year difference of days is 366, add 1 to year
   - If MOnth Difference is more that 12 then add 1 to Year
   - If Day Difference is more than 28,29,30,31, then add 1 to Month
   - If Hours difference is more than 24, then add 1 to Day
   - If Min diff is more than 60 then add 1 to Hours
   - If Seconds diff is more than 60 the add 1 to minuts     