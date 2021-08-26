let names = ['Mahesh', 'Ajay', 'Akash', 'Raju', 'Amit', 'Mahesh', 'Akash', 'Pushkar'];

console.log('Using forEach() function');
// try to update the record in array and return it using forEach()
let res1 = names.forEach((n,i)=>{
    if(n.length > 4){
        n = n.toLocaleUpperCase();
        console.log(`In Iteration of forEach n = ${n}`);
        return n;
    }
});
console.log(`For Each Iteration with Changes ${res1}`);
console.log(`Original Array ${names}`);

console.log();

console.log('Using map() function');
res1 = names.map((n,i)=>{
    if(n.length > 4){
        n = n.toLocaleUpperCase();
        console.log(`In Iteration of map n = ${n}`);
        return n;
    }
});

console.log(`For map() Iteration with Changes ${res1}`);
console.log(res1);
console.log(`Length of Returnd Array from map() = ${res1.length} and length of original array = ${names.length}`);
console.log(`Original Array ${names}`);

