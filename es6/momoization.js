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

  document.write(`Result  ${fact(4)} <hr/>`); // not ncached
  document.write(`Result  ${fact(5)} <hr/>`); // Cached value do result will be immediaqly generated


                       
                    