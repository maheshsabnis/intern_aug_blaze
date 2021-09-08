// import Express
const express = require('express');
const path = require('path');

// define an instance of express
const instance = express();

// Add a middleware that will also send the Static Resources 
// e.g. js and css files to response
// the 'static()' method will condifure the server-side poath for
// the static resources so that they will be mapped with 
// HTTP request and responses for Express server 
instance.use(
    express.static(path.join(__dirname, './../../node_modules/bootstrap/dist/css'))
);

instance.use(
    express.static(path.join(__dirname, './../views'))
);

// define a Router  object. This will evaluate the URL and will process the request accordingly

// the 'router' object will create a Table where URL and its Page will be stored
// e.g. for URL '/home' the page will be 'home.html'
let router = express.Router();

// add the router object in the Express Midddleware
instance.use(router);

router.get('/', (req,resp)=>{
    // respond the file using 'sendFile()'
    resp.sendFile('index.html', {
        root: path.join(__dirname, './../views')
    });
});

router.get('/home', (req,resp)=>{
    // respond the file using 'sendFile()'
    resp.sendFile('home.html', {
        root: path.join(__dirname, './../views')
    });
});
router.get('/about', (req,resp)=>{
    // respond the file using 'sendFile()'
    resp.sendFile('about.html', {
        root: path.join(__dirname, './../views')
    });
});
router.get('/contact', (req,resp)=>{
    // respond the file using 'sendFile()'
    resp.sendFile('contact.html', {
        root: path.join(__dirname, './../views')
    });
});



// start listing on the port
instance.listen(9080, ()=>{
    console.log('Started on port 9080`');
});