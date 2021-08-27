class UserInfo {
    constructor(){
        this.firstName="Mahesh";
        this.lastName ="Sabnis";
        this.Email = "sabnis_m@hotmail.com";
        this._Secret  ="********"; // needs to hide this
        this.occupation = "Own Business"; // make it readonly using proxy
    }
}

// Configure the hanldler to prevent all propeties starts from _
// hanlder object for proxy, has 3 methods
// 1. get() to read propeties
// 2. set() to write properties means will write extended behavior
// 3. ownKeys() to check properties in the target object
// when the handler object is pased to the Proxy() object, it has an access 
// of the target object
const handler={
    // target: the actual object
    // prop: the property form the actual object
    get(target, prop){
        if(prop.startsWith('_')){
            throw new Error('Access is denied');
        }else{
            // read property values and return it
            let v = target[prop];
            return v;
        }
    },
    // writing data to target object's prop as val 
    set(target,prop,val){
       if(prop === 'Occupation'){
           throw new Error('Sorry, this property cannot be written');
       } else {
           target[prop] = val;
           return true;
       }
    },
    // read all properties of the target object
    ownKeys(target){
        let keys = Object.keys(target);
        // filter properties starts with '_'
        let properties = keys.filter((p,i)=>{
            return p[0]!=='_';
        });
        return properties;
    },
    // read values of all properties
    ownValues(target,prop){
        let values = target[prop];
        return values;
    }
};
// handler has an access on an instance of the UserInfo
const proxy = new Proxy(new UserInfo(),handler);

// COnsumer will not able to access _Secret
function Consumer(){

     console.log(Object.keys(proxy)); // read all properties
     console.log(Object.values(proxy)); // read all values
     
     console.log(`First Name ${proxy.firstName}`);
     console.log(`Last Name Name ${proxy.lastName}`); 
     console.log(`Email ${proxy.Email}`);   
   //  console.log(`Secret ${proxy._Secret}`);   

    proxy.firstName = 'MAHESH';
    proxy.lastName = "SABNIS";
    console.log(`First Name ${proxy.firstName}`);
    console.log(`Last Name Name ${proxy.lastName}`); 
    proxy.Occupation ="Service"; // made readonly
 
    console.log(`Last Name Name ${proxy.Occupation}`); 
}
try {
    Consumer();
}catch(e) {
    console.log(e.message);
}
