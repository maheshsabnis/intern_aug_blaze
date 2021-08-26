let names = [
  "Mahesh",
  "Ajay",
  "Akash",
  "Raju",
  "Amit",
  "Mahesh",
  "Akash",
  "Pushkar",
  "Mahesh", 
  "Vikram",
  "Suprotim",
  "Ajay",
  "Mahesh", "Akash", "Vaibhav", "Ajay","Vikram", "Suprotim", "Subodh"
];

let morenames = ["Vikram", "Suprotim", "Subodh"];
// names will be appended with morenames
let allnames = names.concat(morenames);

// list all names having length more that 5
let res1 = allnames.filter((n, i) => {
  return n.length > 5;
});
console.log(`Records hvinf length more than 5 ${res1}`);
// findout frequency of 'Mahesh' in array
let res2 = allnames.filter((n,i)=> {
    return n == 'Mahesh';    
}); 
console.log(`Count of Mahesh in array = ${res2.length}`);