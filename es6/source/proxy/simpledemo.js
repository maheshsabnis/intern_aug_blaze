// the actual target object
let targetObject = {
    message: 'I am a message from the target object',
    message1: 'I am new'
};

// the ES 6 class as a TArgetobject
class MyTarget {
    constructor(){
        this.data = "I am from the ES 6 class";
    }
}


// the handler currently an empty object
const handler = {};

// lets define a proxy object for targetyObject
const proxyObject = new Proxy(targetObject,handler);
let obj = new MyTarget();
// define proxy for ES 6 class
const proxy  =new Proxy(obj, handler);


// creating a consumer function

function consumer(){
    // the proxy object encapsulate the actual object from the consumer
    let msg = proxyObject.message;
    console.log(`Message = ${msg}`);
    console.log(`Hide actual ES 6 class ${proxy.data}`);
}

// call consumer function
consumer();