const serviceClient = require('./callexternalservice');

const clientObject = new serviceClient(); 
// the 'http' is the default value for the protocol
const options = {
    host: 'apiapptrainingnewapp.azurewebsites.net',
    path: '/api/Products',
    method: 'GET'
};
// make call to the method of the module
clientObject.getData(options).then((data)=>{
    console.log(`Received Data ${data}`);
}).catch((error)=>{
    console.log(`Communication Error ${error}`);
});