let setValues =  new Set();
// add simple values
setValues.add(10);
setValues.add(20);
setValues.add(30);
setValues.add(40);
setValues.add(50);
setValues.add(10); // 10 will be ignored because it is already present
setValues.add("10");

console.log(`Size of 'setValues' is = ${setValues.size}`); // 6
// check if the record is present into the Set
console.log(`Is 10 available ${setValues.has(10)}`); // true
console.log(`Is 70 available ${setValues.has(70)}`); // false
console.log(`Is "10" available ${setValues.has("10")}`); // true
// List of all keys
console.log(`All Keys ${setValues.keys()}`); // this is Iterator, means that the Set is having capability to read its values and retrun it as sequence
for(let k of setValues.keys()){
    console.log(`Key = ${k}`);
}
console.log('Print Values');
for(let v of setValues.values()){
    console.log(`Key = ${v}`);
}


