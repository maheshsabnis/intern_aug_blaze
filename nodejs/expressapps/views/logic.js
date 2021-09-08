function done(){
    alert('I am clicked');
}


function getData() {

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
        "http://localhost:9081/api/Products"
      );
      // send the request
      http.send();
    });
  }
  
  
  function postData(product) {
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
          "POST",
          "http://localhost:9081/api/Products"
        );
        // set the Headers for Passing Message Format
        // Content-Type: Ther MIME-TYPE for the developers it is known as Media Formats
        // application/json: is teh JSON Format
        // application/xml:XML Format
        // text/html: HTML in Text format
        // img/jpg: The Image
        http.setRequestHeader('Content-Type', 'application/json'); 
        // send the request with data in body
        http.send(JSON.stringify(product));
      });
    }
   
   