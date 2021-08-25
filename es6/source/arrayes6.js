let names = [
  "Mahesh",
  "Ajay",
  "Akash",
  "Raju",
  "Amit",
  "Mahesh",
  "Akash",
  "Pushkar",
];
// Using the for..of iterator to read or iterate over the array
for (let n of names) {
  console.log(`Name = ${n}`);
}
// Using forEach()
console.log("USing forEach");
names.forEach((n, i) => {
  console.log(`Name at index ${i} is  = ${n}`);
});
// using map() function
console.log("USing Map");
names.map((n, i) => {
  console.log(`Name at index ${i} is  = ${n}`);
});

// using filter method
console.log("Using filter()");
// return a new array based on the expression condition
let res1 = names.filter((n, i) => {
  return n.length > 4;
});
console.log(res1);
