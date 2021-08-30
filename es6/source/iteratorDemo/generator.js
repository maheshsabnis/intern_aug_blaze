let numArray = [10,20,30,40,50,60,70];

// function* is an indicator that internally the iterator will be called
function* dataGenerator(start=0,end=Infinity,step=1){
    let iterationCount = 0;
    for(let i=start;i<end;i+=step){
        iterationCount++;
        yield i; // read, return and movenext
    } 
    return iterationCount; // return the iterator value from the collection using generator function
}

const generator = dataGenerator(numArray[0], numArray[numArray.length-1], 20);
// start iterating from first record
let dataReader = generator.next();
while(!dataReader.done){
    console.log(`The Current Value is = ${dataReader.value}`);
    dataReader = generator.next(); // move next
}