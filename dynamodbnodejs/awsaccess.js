// File to access the AWS dynamodb

// 1. Load the package
const aws = require('aws-sdk');
// 2. configure the access key and access id for authenticating
// the Node.js app (aka current Node.js Process) against the
// the AWS

aws.config.update({
    // Access OR Authentication Info
    accessKey:'',
    secretAccessKey:'',
    // Location Info
    region:'us-east-2',
    // Endpoint (PUBLIC Endpoint)
    endpoint:'https://dynamodb.us-east-2.amazonaws.com'
});

// define an the service instance e.g. dynamodb
let dynamoDB = new aws.DynamoDB();

createTable();

function createTable(){
    dynamoDB.createTable({
        TableName: "Interns",
        // Primary Key Specifications: PartitionKey and RowKey
        KeySchema:[
            {
                AttributeName: "BusinessUnit",
                KeyType: "HASH" // for the Partition Key
            },
            {
                AttributeName: "InternID",
                KeyType:"RANGE" // for the Sort Key
            }
        ],
        // Set additional Attributes for the table
        AttributeDefinitions:[
            {
                AttributeName: "BusinessUnit",
                AttributeType: "S"
            },
            {
                AttributeName: "InternID",
                AttributeType: "S"
            }
        ],
        // Provision Throughput aka Read/Write Units
        ProvisionedThroughput:{
            ReadCapacityUnits:5,
            WriteCapacityUnits:5
        }
    },(error, data)=>{
        if(error){
            console.log(`Error Occured During the Table Creation ${error.message}`);
            return;
        }
        // return the table description
        console.log(`Table is created successfully ${data.TableDescription.TableName}`);

    });
}