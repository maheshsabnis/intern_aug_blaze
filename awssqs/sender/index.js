const AWS = require('aws-sdk');
const express = require('express');

let instance = express();
instance.use(express.json());

// 1. Configure AWS
AWS.config.update({
    region: 'us-east-1'
});
// 2. create an instance of SQS
const sqs = new AWS.SQS({apiVersion: '2012-11-05'});

// 3. create a SQS on the AWS Portal or Createn it using Code
const queueURL = 'https://sqs.ap-south-1.amazonaws.com/472804039072/blaze-sqs-serv';
// 4. the post request that will
// analyze the message and define a message format so that it can be
// sent in SQD 
instance.post('/api/person',(req,resp)=>{
    // 4a. analyze the message from the body
    let person = {
        PersonId: req.body.PersonId,
        PersonName: req.body.PersonName,
        Age: req.body.Age
    }; 
    console.log(`Received Data ${JSON.stringify(person)}`);

    // 4b. define the message structure
    // 4b.1: the MessageAttribute, the object that contains the Key, DataType and Data
    // 4b.2: MessageBody
    // 4b.3: The Queue URL aka Queue Endpoint
    
    let mesageMetadata = {
        MessageAttributes:{ 
            "personId":{
                DataType: "String",
                StringValue: person.PersonId
            }, 
            "personName":{
                DataType: "String",
                StringValue: person.PersonName
            },    
            "age":{
                DataType: "String",
                StringValue: person.Age
            } 
        },
        MessageBody: JSON.stringify(person), // message Body
        QueueUrl: queueURL // The URL of teh SQS
    };

    // 4c. Send the Message as Async messaging
    let sendMessageToSQS = sqs.sendMessage(mesageMetadata).promise();
    // Make sure that the Promise is Subscribed
    sendMessageToSQS.then((data)=>{
        console.log(`Data is send to SQS Succesfully ${data.MessageId}`);
        resp.send(`Data is send to SQS Succesfully ${data.MessageId}`);
    }).catch((error)=>{
        console.log(`Sorry! Messaging is in trouble ${error}`);
    });
});


instance.listen(9086,()=>{
    console.log('service started on 9086');
});