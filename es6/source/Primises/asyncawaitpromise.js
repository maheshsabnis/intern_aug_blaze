function getDataFirst() {

     
   return new Promise((resolve, reject) => {
     let http = new XMLHttpRequest();
     http.onload = function () {
         
         resolve(http.response); // resolve the result so that the SUbscriber of the Promise will get the response 
     };
     http.onerror = function (e) {
         reject(e); // rejection for error
     };
     // start making call to external REST API
     http.open(
       "GET",
       "https://apiapptrainingnewapp.azurewebsites.net/api/Products"
     );
     // send the request
     http.send();
   });
 }
 

 function getDataSecond() {

  
   return new Promise((resolve, reject) => {
     let http = new XMLHttpRequest();
     http.onload = function () {
         resolve(http.response); // resolve the result so that the SUbscriber of the Promise will get the response 
     };
     http.onerror = function (e) {
         reject(e); // rejection for error
     };
     // start making call to external REST API
     http.open(
       "GET",
       "https://apiapptrainingnewapp.azurewebsites.net/api/Products"
     );
     // send the request
     http.send();
   });
 }
 

 function multiPromise(){
     let promises = Promise.all([getDataFirst(), getDataSecond()]);
     return promises;
 }

 // using async/await

 async function caller(){
     let res1 = await getDataFirst();
     console.log(`res1 = ${res1}`);
     let res2 = await getDataSecond();
     console.log(`res2 = ${res2}`);
     return [res1,res2];
}