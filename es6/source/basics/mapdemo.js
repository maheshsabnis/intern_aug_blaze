let map = new Map();
// add datab into map
map.set(1, {id:101,name:'A'});
map.set(2, {id:102,name:'B'});
map.set(3, {id:103,name:'C'});
map.set(4, {id:104,name:'D'});
map.set(5, {id:105,name:'E'});
map.set(6, {id:106,name:'F'});
map.set(6, {id:107,name:'G'}); // the record at previous matching key will be overwritten
console.log(`Size of Map is = ${map.size}`);
// get valeu based on Key
console.log(`Value of 5th key is = ${JSON.stringify(map.get(5))}`);
// iterate over all keys and Values
map.forEach((val,key)=>{
    console.log(`Value at Key = ${key} is = ${JSON.stringify(val)}`);
});

// delete record
map.delete(6);
map.forEach((val,key)=>{
    console.log(`Value at Key = ${key} is = ${JSON.stringify(val)}`);
});


