// Module Creation in JavaSCript using IIFE Function

var iifeReference =  (function(){
  var i = 10;   // i is scopped only to all function defined inside the IIFE
  console.log('I am Inside IIFE with i = ' + i);
  // the function is also scopped inside the IIFE
  function square(){
      return i * i;
  }
  // returning the object from the IIFE of which reference is stored
  // in the iifeReference
  return {
      kSquare:square
  }
})();
 