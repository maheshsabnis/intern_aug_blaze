# USing SQS
1. install aws-sdk, express and sqs-consumer
    - sqs-consumer
        - THis will provide a mechansim to consume messages from the SQS by creating a subscriber  to the SQS

# Assignment
# Date: 18-10-2021
1. Create a Node.js application, that will send messages to a queue for precessing the data
    - The Message will be send for the registration of the patients
    - This information will be stored into the queue if the patient registration is successful (meas the patient data is stored in  registration table), else it will not be stored into the queue
2. Create a COnsumer application for the following
    - When the data is in Queue, it will read the data from the queue and then data from the    Queue will be received and then the Doctors will be assigned to patient by the Consumer application.             