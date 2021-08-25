let objectsSet = new Set();
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
o1={name:'E'};
objectsSet.add(o1); // duplicate entry
console.log(`Size of 'objectsSet'  is =  ${objectsSet.size}` ); // 5
console.log();
console.log('List of Keys');
for(let obj of objectsSet.keys()){
    console.log(`Key = ${obj} and ${JSON.stringify(obj)}`);
}
console.log();
o5 =null;
console.log(`Size of 'objectsSet' after o5=null will be ${objectsSet.size}`);
console.log();
console.log('List of Keys');
for(let obj of objectsSet.keys()){
    console.log(`Key = ${obj} and ${JSON.stringify(obj)}`);
}

console.log(JSON.stringify(o5));

