let data = 'Object is similar to Map—both for settings, let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. For this reason (and because there were no built-in alternatives), Object has been used as Map historically. This can be used to store data like SET collection.' ;
// Symbol.search()
// accept a data in its constructor, based on the data, the expression is created by symbol
// when search operation is performed, the expression will be compared based on the 'unique-natch' of the expression  

console.log(data.search('set')); // 34, the index

// using match
// returns an array of strings that match against the regular expression

let res1 = data.match(/ set /g); // return an array where set,SET based strings are exists in the string, return an exact match of strings
console.log(res1);
// get the match for Upper and LOwer Case string
let res2 = data.match(/set/gi);
console.log(res2);

// USing include(), to verify if the specified string is present in string
// Safary 9+, Edgde 12, CHeomwe 41, FIrefox 40
console.log(data.includes('the'));

console.log('Using StartsWirth');
// STarts with, evaluate the strting and return it if it starts with a specific string or substing
let names = ['Ajay', 'Amar', 'Anil', 'Amit', 'Anita', 'Abhas', 'Ashok', 'Abhijit', 'Anish', 'Ajit'];

names.forEach((n,i)=>{
    console.log(n.startsWith('Am'));
});

console.log('USing endsWith()');
names.forEach((n,i)=>{
    console.log(n.endsWith('it'));
});
