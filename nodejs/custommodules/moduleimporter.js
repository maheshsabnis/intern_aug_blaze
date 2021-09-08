// 1. importing, loading and Caching the module 
const dataModule = require('./datamodule');
const math = require('./mathmodule');
const obj = new dataModule();

// access methods from the exported class
console.log(JSON.stringify(obj.getData()));
console.log();
console.log(JSON.stringify(obj.saveData({id:102,name:'B'})));
console.log();
console.log(`Power = ${math.power(5,10)}`);
console.log(`Sqrt = ${math.sqrt(7)}`);

