const http = require('http');
// instaed of using http, you can use fetch, axios
// instaed of using q, you can use the bluebird
const q  =require('q');
class ServiceConsumer {
    // options will be the object taht is going to contain
    // the remore server definition 
    getData(options){
        // use the q to set the promise monitor
        let defer  =q.defer();
        let request; // request object
        let products; // obejct to store the result
        if(!options){
            // reject the promise execution
            defer.reject('The Server Information is missing');
        }else {
            request = http.request(options, (result)=>{
                result.on('data', (data)=>{
                    products = data;
                });

                result.on('end', ()=>{
                    try {
                        // if the data received and processed Successfully
                        defer.resolve(products);
                    }catch(ex){
                        // if any error occur
                        defer.reject(`Error Occured ${ex}`);
                    }
                });
            });
        }
        // end the request (Complete it either success /failure)
        request.end();
        // return the promise object
        return defer.promise;
    }
}

module.exports = ServiceConsumer;