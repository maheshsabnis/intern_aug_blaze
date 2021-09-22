const express  =require('express');
const cors = require('cors');
const authLogic = require('./dal/tokenlogic');
const instance = express();
instance.use(express.urlencoded({extended:false}));
instance.use(express.json());

instance.use(
  cors({
    origin: "*", // all oriogins are allowd OR specify orogins as per your demand
    allowedHeaders: "*", // allow all headers OR specifiy headers
    methods: "*", // allow all method OR specify http methods
  })
);
// apply the middleware for the token in express instance
 
// define an object for the secret key
const jwtSettings = {
    jwtSecret: "utfsbibombmwwmb0987887890bmwwmbmobibsftu",
  };
// this can be omitted if the express-jwt package is used instaed of jsonwebtoken
// the 'set()' method of the express will be used toi provide server level configuration
// so all requests and responses will be able to use the configuration using the 'get()' method
instance.set("jwtSecret", jwtSettings.jwtSecret);


let auth = new authLogic();

instance.post('/api/app/register', auth.registerUser);
instance.post('/api/app/auth', auth.authUser);
instance.get('/api/app/get', auth.getData);
 




instance.listen(8010,()=>{
    console.log('Server Started on port 8010');
});