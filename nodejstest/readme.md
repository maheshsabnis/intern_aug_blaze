# Node.js REST API Testing
- Plan for Test Approaches
    - API Testing with AUto-Calls to the using Command Line Test Script (Recommended)
        - mocha
            - COmamnd Line tool that runs the Code that Makes Http calls to REST APIs
                - JavaScript Test Framework runs on Node.js as well as in browser
                - Uses to make an Async calls to REST APIs
                - Manages an accurate and flexible testing execution
                    - Successful Test
                    - Crash Test aka Error Test
                        - npm install -g mocha
                - mocha 
                    - Read all test files in 'test' folder and run them
                    - Mocha Loads in the Node.js Process
                        - Load the Test File(s)
                        - Evaluate each Test Case in Test File(s)
                            - Uses the Supportive Libraries
                                - Chai
                                    - Assertion Library for Unit Tets
                                        - Assert the Expected Result from the Test with Actual Result returned from the test
                                    - Chai uses 'Request' module of Node.js to make REST API calls
                        - npm install --save-dev chai mocha request    
            - Guldelines for Testing REST APIs using Mocha+Chai+Request
                - Implement All calls are Async calls     
                    - Make sure that the Test Case has the Promise or async operations subscription object
                    - use the 'done()', thsi will make sure that the asnc call is completed and the promise is resolved                 
    - Use the Sweagger UI (Open SOurce Projects)
        - Used Large Scale Enterprise Level REST APIs   
        - THis is a tool shed with the client so that the client app can visit and experience the REST APIs with URLs
        - The Swagger is for Trying the REST API and not for TESTING                  


# Testing Assignments
# Date : 07-10-2021

1. Write a Test on CreateDepartmentComponent to check if the <div> tag is showing validation error messages for following validation Rules, when the 'Save' button is clicked (Mandatory)
    - DeptNo is mandatory, it must be +ve 
    - DeptName is mandatory
    - Location is mandatory
    - Capacity is mandatory, it must be +ve 
2. Write a Test to make sure that, when the 'save' button is clicked, the Table Showing List of Departments is added with a new row in it (Mandatory)
3. Write a test to varify that when a table row is clicked, its each cell value is shown in the Text Boxes  (Optional)   
4. Write a test for registeing a new user by calling a REST API, the test must verify that the user is created
5. Write a test for Authenticating the user based on user name and password. Write the following test cases
    - If UserName  is not exist then the REST API mkust return Error (Mandatory)
    - If Password  does not match then the REST API mkust return UnAuthorized Error i.e. 401 (Mandatory)
    - If Login is successful, the make sure that the Token object receivd as NOT Undefined in sessionStorage (optional)