let objectsSet = new WeakSet();
let o1 = {name:'A'};
let o2 = {name:'B'};
let o3 = {name:'C'};
let o4 = {name:'D'};
let o5 = {name:'A'}; // o1 and o5 are same with schema and value but differnt in STore (memory location)

objectsSet.add(o1);
objectsSet.add(o2);
objectsSet.add(o3);
objectsSet.add(o4);
objectsSet.add(o5);
objectsSet.add(o1); // duplicate entry
 
console.log(`is o5 available ${objectsSet.has(o5)}`);
 

o5 =null; // kill the o5 and ask the Browser to garbage collect it

console.log(`is o5 available afetr garbage collection ${objectsSet.has(o5)}`);
o5={name:'ABCD'};
objectsSet.add(o5);
console.log(`After Rebirth of the o5 ${objectsSet.has(o5)}`);

 
