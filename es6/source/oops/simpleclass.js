class SimpleClass {
    // default constructor
    constructor(){}

    // public method
    add(x,y){
        return Math.pow(x,y) + Math.pow(y,x);
    }
}

// define an instance
let o1 = new SimpleClass();
console.log(`Add = ${o1.add(2,3)}`);