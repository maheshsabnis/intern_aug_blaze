var x,y;
x = 10;
y = 20;
console.log(x > y); // false
console.log(x < y); // true
console.log(x !== y); // true

x = 10; // number
y = "10"; // string
console.log("Equate x == y");
console.log(x == y); // true, becasue of value equality
console.log("Equate x === y");
console.log(x === y); // false, becasue of type chack and then value equality

// Type Equality with Objects
var obj1 = {a:10};
var obj2 = {a:10};
console.log('Object Eqialuty obj1 == obj2');
console.log(obj1 == obj2); //false both objects are stored serperately an JS in browser cannot compar schema
console.log(obj1.a == obj2.a); // true because schema in comparision is provided explicitely

// facts object object equality
var obj3 = obj1; // equating obj1 to obj3
console.log('value of obj3.a = ' + obj3.a + ' and value of obj1.a = ' + obj1.a); 
// lets modify obj3.a to 100;
obj3.a = 100;
console.log('After modifying value of obj3.a to 100 value of obj3.a = ' + obj3.a + ' and value of obj1.a = ' + obj1.a); 
// to avoid the obejct equality to created a copy of object, use 'Object.assign()' method
// obj1 with its schem and data will be stored in target empty object and the target object 
// will be pointed by the obj4
var obj4 = Object.assign({}, obj1);
console.log('value of obj4.a = ' + obj4.a + ' and value of obj1.a = ' + obj1.a);
// lets modify the obj4
obj4.a = 600; 
console.log('After modifying value of obj4.a to 600 value of obj4.a = ' + obj4.a + ' and value of obj1.a = ' + obj1.a); 










