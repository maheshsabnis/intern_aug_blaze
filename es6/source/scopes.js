function doWork(x){
    if(x == true) {
        let y = 10;
        console.log('In If Condition y = ' + y);
    }
    console.log('Out of If Condition y = ' + y);

}

console.log('For True');
doWork(true);
console.log('For False');
doWork(false);

for(let i=0;i<9;i++){
    console.log('in loop i  = ' + i);
}
console.log('Outside of loop i = ' + i);