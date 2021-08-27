class DemoProperties {
    #_data = 0;
    constructor(){

    }
    // public getter/setter properties
    get data(){
       return this.#_data;
    }
    set data(v){
        this.#_data = v;
    }

    static printMessage(msg){
        console.log(`Static Method Message is = ${msg}`);
    }
}

let obj = new DemoProperties();
obj.data =100;
console.log(`Value of public property is = ${obj.data}`);
DemoProperties.printMessage('EEE');