let myModule = (function(){
    // x is scopped inside the Module

    var x = 10;
    console.log(`Inside module x = ${x}`);
    // function isn scopped inside the Module
    function power(y){
        return Math.pow(x,y);
    }
    return {
        pow:power
    };
})();


// console.log(`Outside module x = ${x}`);
console.log(`Power = ${myModule.pow(4)}`);