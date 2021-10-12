const { response } = require('express');
const express = require('express');
const instance = express();
instance.use(express.json());
instance.use(express.urlencoded({extended:false}));

let port = process.env.PORT || 9081;

let data = [
    {id:1,name:'A',age:20},
    {id:2,name:'B',age:30}
];

 

instance.get('/api/person',(req,resp)=>{
    resp.status(200).send(JSON.stringify(data));
});

instance.get('/api/person/:id',(req,resp)=>{
    let id = parseInt(req.params.id);
    if(id === 0) return resp.status(500).send('Parameter cannot be 0');
    let result = data.find((d,i)=> d.id === id);
    resp.status(200).send(JSON.stringify(result));
});

instance.post('/api/person',(req,resp)=>{
    data.push(req.body);
    resp.status(200).send(JSON.stringify(data));
});


instance.listen(port,()=>{
    console.log('started on port 9081');
});

 