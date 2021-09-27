import React, {useState,useEffect} from 'react';

import {ArrayUtilities} from './operations';

const ImportingComponent=()=>{
    const obj = new ArrayUtilities();
  // Synchronous import uses
  const a1 = obj.sort([2,54,2,25,1,6,789,33]);
  const a2 = obj.reverse([2,54,2,25,1,6,789,33]);
  const [arr,updateArr] = useState([]);  

  // using an async import to load the exportant object
  let sortedArray=[];
  import('./operations').then((obj)=>{
      console.log(obj);
      // the 'obj' is a exported module that contains
      // exportable types e.g. class, function, array, const, etc.
      let o = new obj.ArrayUtilities();
      console.log(o.sort([22,11,33,44]));
       sortedArray = o.sort([22,11,33,44]);
      
  }).then((error)=>{
      console.log(`Error in Import ${error}`);
  });

  useEffect(()=>{
        updateArr(sortedArray);     
},[]);
 

  return (
      <div className="container">
          SORT {a1}
          <hr />
          REVERSE {a2}
          <hr />
            FROM ASYN LOADER: {arr} 
      </div>
  );
};

export default ImportingComponent;