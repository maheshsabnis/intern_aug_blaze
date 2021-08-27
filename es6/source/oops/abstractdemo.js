class MyAbstractClass {
    constructor(){
        // write a logic to prevent an instance creation for the class
        if(new.target === MyAbstractClass){
            throw new TypeError(`This is an Abstract class`);
        }
    }

    myFunction(){
        console.log('I am from Abstract Class');
    }
}
let o = new MyAbstractClass(); // this will call constructor and new.target will check if the target id MyAbstactclass and if yes then the error will thrown and the statement for reation of instance will be terminated. 
class DeriveClass extends MyAbstractClass {
    constructor(){
        super();
    }
    deriveMethod(){
        console.log('I am a method from Deried clas');
    }
}

let obj =new DeriveClass();
obj.myFunction(); // method from the base class
obj.deriveMethod(); // method from the derived class