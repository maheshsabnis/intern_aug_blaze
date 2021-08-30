function getData(){
    console.log('In The Method');
    let products  =[];
    // start performing async calls
    let http = new XMLHttpRequest();

    // subscribe to the Callback EVent Methods i.e. Asynchronous Methods to received the data
   // suvvessfull Completion of call
    http.onload =function(){
        // if the response is 200 the write data into products array
        products = http.response;
        console.log(`Received the Response ${http.response}`);
    }

    // error subscription if call failed or Error Occured
    http.onerror =function(e){
        console.log(`Error Occred ${e}`);
    }

    // start making call to external REST API
    http.open("GET", "https://apiapptrainingnewapp.azurewebsites.net/api/Products");
    // send the request
    http.send();
    console.log('Getting and Returning the response');
    return products;
}