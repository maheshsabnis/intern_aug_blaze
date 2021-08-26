let obj = {name:'ABC'};
console.log(`obj Name = ${obj.name}`); // name is reachable in object
let obj1 = obj;
console.log(`obj1 Name = ${obj1.name}`); // name is reachable in object
// overwrite the reference
obj = null; // remove the obj from memory using GC
console.log('After setting obj to null');
// console.log(`obj = ${obj.name} obj1 = ${obj1.name}`);  // error because obj is removed
console.log(`obj1 = ${obj1.name}`);

let o1 = {name:'AA'};
console.log(`o1.name = ${o1.name}`);
let arr = [o1]; // storing o1 in array arr, the arr will copy values of o1 in it
o1 = null; // garbage collect (Broake link between the Reference and its values)
console.log(`Print Array ${JSON.stringify(arr)}`); // although o1 is killed its values will be maintained in array
 // console.log(o1.name); //will product error because the 'name' is not discoverable to the o1
// Since o1 is present in global scope on browser or JS DOM, the new schema can still be associted with it
 o1 = {id:101,name:"BB"}; // rebirth of the object by overwriting the 'null'
console.log(o1.name);
arr.push(o1);
console.log(`Print Array ${JSON.stringify(arr)}`);
