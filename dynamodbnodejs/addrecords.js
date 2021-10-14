// File to access the AWS dynamodb

// 1. Load the package
const aws = require('aws-sdk');
const fs = require('fs');
// 2. configure the access key and access id for authenticating
// the Node.js app (aka current Node.js Process) against the
// the AWS

aws.config.update({
    accessKey:'AKIAW4FKRDGQKRJQEJZW',
    secretAccessKey:'z0BJWw93+XfqjThMxw9L7Sx+UwZFwgfkjv/B6UOo',
    region:'us-east-2',
    endpoint:'https://dynamodb.us-east-2.amazonaws.com'
});

// define an the service instance e.g. dynamodb
let dynamoDB = new aws.DynamoDB();

// defining the DocumentClient object
// this object will be used to add items as JSON Data in the Table
let documentClient = new aws.DynamoDB.DocumentClient();

// read data from the file 
let interns = fs.readFileSync('./interns.json');
// parse the data in the JSON Objects array
let internsData = JSON.parse(interns.toString());
// iterate over the array and add data into the table
// documentClient.put(); Adding new Item
// .scan(); read all records
// .delete(); delete record
// .update(); update record
// query(); used to return records based on condition
// get(); used to read data based on the Condition
internsData.forEach((intern)=>{
    documentClient.put({
        TableName: "Interns",
        Item:intern
    }, (error,data)=>{
        if(error){
            console.log(`Insert Failed ${error.message}`);
            return;
        }
        console.log(`Done dona done ${data.ConsumedCapacity}`);
    });
});