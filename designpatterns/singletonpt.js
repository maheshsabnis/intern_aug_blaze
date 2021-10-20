var Singleton = (function(){
    let instance;
    function createInstance(){
        var obj = new Object('Hay! I am an Instance');
        return obj;
    }
    return {
        getInstance:function(){
            // if the 'instance' is not a new object
            // then create a new object else return the same 
            // object
            if(!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

function check(){
    let inst1 = Singleton.getInstance();
    let inst2 = Singleton.getInstance();
    console.log(inst1 === inst2); // MUST print true
}

check();