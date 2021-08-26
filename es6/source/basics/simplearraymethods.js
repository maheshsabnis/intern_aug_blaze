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
