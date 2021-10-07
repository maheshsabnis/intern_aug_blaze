const { response } = require('express');
const express = require('express');
const instance = express();
instance.use(express.json());
instance.use(express.urlencoded({extended:false}));

let data = [
    {id:1,name:'A'},
    {id:2,name:'B'}
];

instance.get('/api/message',(req,resp)=>{
    resp.status(200).send('Hello World');
});

instance.get('/api/data',(req,resp)=>{
    resp.status(200).send(JSON.stringify(data));
});

instance.get('/api/data/:id',(req,resp)=>{
    let id = parseInt(req.params.id);
    if(id === 0) return resp.status(500).send('Parameter cannot be 0');
    let result = data.find((d,i)=> d.id === id);
    resp.status(200).send(JSON.stringify(result));
});

instance.post('/api/dataPost',(req,resp)=>{
    data.push(req.body);
    resp.status(200).send(JSON.stringify(data));
});


instance.listen(9080,()=>{
    console.log('started oin port 9080');
});

module.exports = instance;