let names = ['Mahesh', 'Ajay', 'Akash', 'Raju', 'Amit', 'Mahesh', 'Akash', 'Pushkar'];

let morenames = ["Vikram", "Suprotim", "Subodh"];
// names will be appended with morenames
let allnames = names.concat(morenames);
console.log(allnames);
// Slicing of array. Break array  based on the STart Position and the count
// starts from the 0th index the 5 values from array will be put into output array
let ar1 = allnames.slice(0,5);
console.log(ar1);
console.log(allnames);
// The Removing an element from array
// from the 0th position, remove 2 records aka deletecount, numbner of records tyo be deleted from array
allnames.splice(0,2);
console.log('AFTER DELETE FIRST 2 RECORDS`');
console.log(allnames);
allnames = names.concat(morenames);
console.log(allnames);
// deleting a specific record from the array
// 1 Retrieve the index of the record
let index = allnames.indexOf('Pushkar');
console.log(index);
// 2 Splice the index with deletecount as 1
allnames.splice(index,1);
console.log('Records after deleting Pushkar`');
console.log(allnames);
