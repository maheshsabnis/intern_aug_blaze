import React,{useMemo, useState} from 'react';

const UseMemoComponent=()=>{

    const [x,setX] = useState(0);


    const fact = num=>{ if(!fact.cache)
        {
             fact.cache={} ;
        } 
        if(fact.cache[num] !== undefined ){
            console.log(` Cached value  ${num}`);    
            return fact.cache[num]; // Cache the value
        } else {
            console.log(`Not Cached value  ${num}`);    
        }
        fact.cache[num] = num === 0?1: num * fact(num-1);
        return fact.cache[num];
      }
      
      const memoizedValue = useMemo(()=> fact(x), [x]);
    
   //   document.write(`Result  ${fact(4)} <hr/>`); // not ncached
    //  document.write(`Result  ${fact(5)} <hr/>`); // Cached value do result will be immediaqly generated
    

      return (
         <div>
             <h2>Use Memo</h2>
             x = <input type="text" valu={x} onChange={(evt)=>setX(parseInt(evt.target.value))}/>
             <hr />
             <strong>
                 {memoizedValue}
             </strong>
         </div>
      );
                           
                        
}

export default UseMemoComponent;
