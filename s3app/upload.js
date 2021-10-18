const AWS = require('aws-sdk');
const fs = require('fs');
 
const s3 = new AWS.S3({
    accessKeyId: '',
    secretAccessKey: ''
});

const bucket_name = 'blaz-bucket-int';

const uploadImage=(image)=>{
    // read the file
    const imgFile = fs.readFileSync(image);

    // upload the file
    s3.upload({
        Bucket: bucket_name,
        Key: 'eye.png', // the file name using which the file will be uploaded and saved 
        Body: imgFile // the file contents to be send to bucket
    },(error, data)=>{
        if(error){
            console.log(`Error Occured in Uploading the file ${error.message} ${error.stack}`);
        }
        console.log(`File Upload is successfull ${data.Bucket} ${data.Location}`);
    });
};

uploadImage('eye.png');