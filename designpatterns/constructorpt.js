let myObject = {};  // define an empty object
myObject.x = 100;
myObject.y = 200;
console.log(`in myObject x  = ${myObject.x} and y = ${myObject.y}`);
// define a new object same as the myObject
let o1 = Object.create(myObject); // cloaning the myObject
console.log(`in o1 x  = ${o1.x} and y = ${o1.y}`);
o1.z  =1000;
console.log(`in o1 x  = ${o1.x} and y = ${o1.y} and z = ${o1.z}`);
// the z is a exclusive part of o1
console.log(`in myObject x  = ${myObject.x} and y = ${myObject.y} and z = ${myObject.z}`); // here z is undefined

console.log(`Properties of myObject are ${Object.keys(myObject)}`);

// using a Object COnstructor to create a new Object
// Object: is the standard JS object
// Object.prototype: will be using a Prototype to enhance the 'Object'
//  Object.create(Object.prototype): will create a new EMpty Object
// based on Object.prototype
let o2 = Object.create(Object.prototype);
// unde defined new properties and functions will not be added in the
// o2 by default and hene it will be a new 'Empty' object like calling a Constructor
console.log(`o2 = ${JSON.stringify(o2)}`);
// a new instance form o2
let o3 = Object.create(o2);
console.log(`o3 = ${JSON.stringify(o3)}`);

// Constructor min ES 3, ES 5, using FUnction Object
// The Person() is a function object that has
// the internal Parameterized Constructor()
function Person(name, age){
     
    this.name = name;
    this.age  = age;
    this.getDetails = function(){
        console.log(`Details are ${this.name} and ${this.age}`);
    };
}



const p1 = new Person('Mahesh', 45);
p1.getDetails();

// Using Constructor Pattern for Instance creations using 
// ES 6 Class and COnstructor
class Employee{
    constructor(eno,ename){
        this.eno = eno;
        this.ename = ename;
        console.log('COnstructor is called');
    }
    getDetails(){
        console.log(`Eno = ${this.eno} and Ename = ${this.ename}`);
    }
}
// the 'new' is calling the Constructor
let e1 = new Employee(101, "Mahesh");
e1.getDetails();
// let e2 = new Employee(201, "Neeta");
// e2.getDetails();
let e2 = Object.create(e1); // deep copy of the object i.e. schema and data
e2.getDetails();
e2.eno=201;
e2.ename = "Neeta";
e2.getDetails();

console.log(`Are they same ${e1 === e2}`);
