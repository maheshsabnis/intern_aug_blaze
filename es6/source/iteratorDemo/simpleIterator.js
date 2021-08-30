let numArray = [10,20,30,40,50,60,70];

// ask the Execuor Engine to read all records frome numArray until the end is not discovered

// 1. Define the custom iterator
// start position, end postion, step for increament counter
function rangeIterastor(start=0,end=Infinity,step=1){
  // logic for iteration
  let nextIndex =start;
  let iterationCount = 0; // the increament index to read records

  // define a process for iteration
  const dataIterator = {
      next:function(){
          // the object that contains current state of iteration
          // i.e. currentValue and whether record is present to read
          let result; 
          if(nextIndex<=end){
              console.log(`Current nextIndex = ${nextIndex}`);
              // start from the first-Index of the collection and flag that says that ther are more records, done is false
              result = {value:nextIndex,done:false};
              // increase the step and move to next record
              nextIndex+=step;
              console.log(`iterationCount ${iterationCount}`);
              iterationCount++; // increase the counter so that end of collection can be reached
              return result; // return the record and the flag
          }  
          // return the final result of itaration
          return {value:nextIndex, done :true};
      }
  };
  
  return dataIterator;

}


// 2: using iterator for the numArray
// reder will point to each record and read ir
let reader  = rangeIterastor(numArray[0], numArray[numArray.length-1],20);
let currentRecord = reader.next(); // FIRST RECORD   
while(!currentRecord.done){
    console.log(`Curent Value in Sequence is = ${currentRecord.value}`);
    currentRecord = reader.next(); // go to next record in collection
}

