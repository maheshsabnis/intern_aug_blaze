"use strict";

function doWork(x) {
  if (x == true) {
    var _y = 10;
    console.log('In If Condition y = ' + _y);
  }

  console.log('Out of If Condition y = ' + y);
}

console.log('For True');
doWork(true);
console.log('For False');
doWork(false);

for (var _i = 0; _i < 9; _i++) {
  console.log('in loop i  = ' + _i);
}

console.log('Outside of loop i = ' + i);
