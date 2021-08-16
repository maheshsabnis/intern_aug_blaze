// here i is declared for the scope of loop
for(var i=0; i<=6;i++){
    console.log('Value of i in loop = '  + i);
}
// trying to access i outside of loop

console.log('Outside of loop i = ' + i);
i++;
console.log('Outside of loop i after increament = ' + i);

function f1(x){
  if(x == true) {
      var y = 10;
      console.log('In if  confition y = ' + y);
  } else {
    console.log('In else confition y = ' + y);
  }
  // although y is declared inside the if condition, the 'var'
  // declaration will make it available throughout the function
  y = 90; // dirty write
  console.log('Out of  confition y = ' + y); // dirty read
}

f1(true);
f1(false);
// when the variable is not declared for a looping scope,
// it will become a 'default global' for the current entire Js file 
for(j=0; j<=6;j++){
    console.log('Value of j in loop = '  + j);
}
console.log('out of loop j  = '  + j);

function f2(){
    console.log('use of j in f2() function  = '  + j);
    j++;
}
f2();

function f3(){
    console.log('use of j in f3() function  = '  + j);
    j++;
}
f3();