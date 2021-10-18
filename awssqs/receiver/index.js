const AWS = require('aws-sdk');
const {Consumer} = require('sqs-consumer');
// 1. Configure AWS
AWS.config.update({
    region: 'us-east-1'
});
// 2. create an instance of SQS
const sqs = new AWS.SQS({apiVersion: '2012-11-05'});
// 3. Read the Queue URL to Subscribe to read the data
const queueURL = 'https://sqs.ap-south-1.amazonaws.com/472804039072/blaze-sqs-serv';

// create a consumer to the SQS

const consumer = Consumer.create({
    queueUrl: queueURL,
    // subscribe to the event to
    // read data asynchronously 
    handleMessage: async(message)=>{
        // logic to process the message
        console.log('====================================');
        console.log(`Received Message is = ${JSON.stringify(message.Body)}`);
        console.log('====================================');
    },
    sqs: sqs, // the instance from which the SQS COntext is crearted so that the metadata of the SQS object is known e.g. Size, ENcryption, Attributes, etc
    batchSize:10 // the message Btach to read number of messages
});

// subscibe to events for 1. Communication Error and 2. Processing Error
// THis is Mandatory so that the consumer will know what couse the failure 
consumer.on('error',(error)=>{
    console.log(`Communication Error ${error.message}`);
});

consumer.on('processing_error',(error)=>{
    console.log(`Processing Error ${error.message}`);
});

console.log('Consumer is Styarting for Running');
consumer.start();