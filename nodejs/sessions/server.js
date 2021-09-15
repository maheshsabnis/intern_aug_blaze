const express  =require('express');
const session =require('express-session');
const authLogic = require('./dal/sessionlogic');
const instance = express();
instance.use(express.urlencoded({extended:false}));
instance.use(express.json());


// Confifure the session information
// session secret: is the encryption key used for maninatining the Integrity of the session Communcation
instance.use(
    session({
        secret:'xyz007700zyx',
        resave: false, // if the request is already enabled for auth login session please fo not save it again and again in the sessionstore
        saveUninitialized:true, // force the request for Login so that the session Store will monitoir it from login-to-logout
        // The coo9kie will be created for the client in the client device (Browser, ARC,POSTMAN) for the current login user and it will be exchanged for each request from that client device
        cookie:{
            maxAge:3600000 // 1 hour
        }
    })
);

let auth = new authLogic();

instance.post('/api/app/register', auth.registerUser);
instance.post('/api/app/auth', auth.authUser);
instance.get('/api/app/get', auth.getData);
instance.post('/api/app/logout', auth.logout);




instance.listen(8010,()=>{
    console.log('Server Started on port 8010');
});