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
    - Map and WeakMap
    - Set and WeakSet
