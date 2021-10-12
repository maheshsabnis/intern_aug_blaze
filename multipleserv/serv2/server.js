const { response } = require('express');
const express = require('express');
const instance = express();
instance.use(express.json());
instance.use(express.urlencoded({extended:false}));

// define a hosting of the API on the PORT
// If the port is blocked, then process
// will make sure that the port allocation is done
// process: The Curent Nod.js Process
// process.env: THe the OS level integration where the Node.js
// process is running
//  process.env.PORT: the PORT to be allocated for the current app
let port = process.env.PORT || 9082;

let data = [
    {id:1,name:'A',occupation:'Employeed'},
    {id:2,name:'B',occupation:'Self-Employeed'}
];

 

instance.get('/api/profile',(req,resp)=>{
    resp.status(200).send(JSON.stringify(data));
});

instance.get('/api/profile/:id',(req,resp)=>{
    let id = parseInt(req.params.id);
    if(id === 0) return resp.status(500).send('Parameter cannot be 0');
    let result = data.find((d,i)=> d.id === id);
    resp.status(200).send(JSON.stringify(result));
});

instance.post('/api/profile',(req,resp)=>{
    data.push(req.body);
    resp.status(200).send(JSON.stringify(data));
});


instance.listen(port,()=>{
    console.log('started on port 9082');
});

 