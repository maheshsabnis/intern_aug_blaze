# USing AWS DynamoDB using Node.js
- The aws-sdk
    - the Node.js package released by AWS for JavaScript APIs for
        - Accessing AWS Resources
            - e.g. 
                - DynamoDB
                - Serverless
    - npm install -g aws-sdk
    - npm install --save aws-sdk
- Use AWS CLI Tool to Connect to the AWS from the COmmand Line
    - This is used to deploy the serverless from the command line
        - https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-windows.html#cliv2-windows-install


# Reference. 
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.NodeJs.03.html

# Assignment  (SHOW it on 19-Oct-2021)
# Date: 14-10-2021
1. Create a Patients Table using AWS-SDK using Node.js in the DynamoDB with the following attributes
    - WardName
        - PrititionKey : String
            - Possible Values: Cancer, Heart, Dermitology, General
    - PatientID
        - Sort Key: String
    - PatientName, DoctorName, Age,City,Bill
2. Create a REST API using Express to Perform CRUDm Operations    
3. There MUST be get methods available for
    - Listing All PAtients by DOctorName, WardName
    - Provide Count of Patients based on WardName
(Mandatory. becuase the same service will be deployed as LAMBDA and Microservice on EKS)