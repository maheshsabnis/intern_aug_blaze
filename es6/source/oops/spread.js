let obj1 = {a:10};
let obj2 = Object.assign({}, obj1);
console.log(JSON.stringify(obj2));
obj2.x  =90; // runtime modifying the schema of obj2 
console.log(JSON.stringify(obj2));
// a anonymous object will be created with schema as {c:80} and then data
// from obj2 will be added in it adn then ut will be assigned to obj3 
let obj3 = Object.assign({c:80}, obj2);
console.log(JSON.stringify(obj3));


let obj4 ={x:100};
console.log(JSON.stringify(obj4));
// build an immutable object using spread ...

obj4 = {...obj4, y:900, z:800};
console.log('obj4 with spread with new propertis and values');
console.log(JSON.stringify(obj4));

console.log('using Standard JavaSCript "arguments" array');
function sumData(values) {
    let sum = 0;
    if(values.length >0){
        values.forEach((v,i)=>{
            sum+=v;
        });
    }
    return sum;
}
console.log(`2 Parameters ${sumData([1,2])}`);  // single Parameter of array
console.log(`3 Parameters ${sumData([1,2,3])}`); // single Parameter of array
console.log(`4 Parameters ${sumData([1,2,3,4])}`); // single Parameter of array
console.log();
console.log('USing Spread');


// a single 'arguments' array of JavaScript will be spreaded with mulitiple parameters values
// with an invocation of sumDataSpread()
// this is also known as  'rest parameters' to a method in ES 6
function sumDataSpread(...values) { 
    console.log(arguments.length);
    let sum = 0;
    if(values.length >0){
        values.forEach((v,i)=>{
            sum+=v;
        });
    }
    return sum;
}

console.log(`2 Parameters ${sumDataSpread(1,2)}`);   // object with 2 values mutation
console.log(`3 Parameters ${sumDataSpread(1,2,3)}`); // object with 3 values mutation
console.log(`4 Parameters ${sumDataSpread(1,2,3,4)}`);  // object with 4 values mutation