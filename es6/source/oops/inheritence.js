class BaseClass {
    #val=0;
    constructor(v){
        this.#val = v;
    }
    #validateValue(){
        if(this.#val<=0) return this.#val = 1;
    }
    getPower(){
        this.#validateValue();
        return Math.pow(this.#val,5);
    }
}

class DerivedClass extends BaseClass {
    constructor(v){
        super(v);
        this.number = v;
    }
    getSquasreRoot(){
        return Math.sqrt(this.number);
    }
}


let objDerive =new DerivedClass(100);
console.log(`Raised to Power is = ${objDerive.getPower()}`);
console.log(`Square Root is = ${objDerive.getSquasreRoot()}`);
let objBase  =new BaseClass(16);
console.log(`Raised to Power is = ${objBase.getPower()}`);