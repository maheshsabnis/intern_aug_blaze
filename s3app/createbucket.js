const AWS = require('aws-sdk');

// set the ACL for the S3 so that the
// connection can be done with AWS S3
// and resource operations can be staretd 
const s3 = new AWS.S3({
    accessKeyId: '',
    secretAccessKey: ''
});

// object will be used to define
// S3 Configurations so that it will be sued while creating the Bucket 
// create bucket with the configuration
s3.createBucket({
   Bucket: 'blaz-bucket-int',  // bucket name
   CreateBucketConfiguration:{  // the Location Configuration of the bucket
       LocationConstraint: 'us-east-2',
   }
},(error,data)=>{
    if(error) console.log(`Error Occured during tye bucker creation ${error.message} ${error.stack}`);
    else
        console.log(`Bucket is created successfully ${data.Location}`);
});