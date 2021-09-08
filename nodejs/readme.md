# Node.js Programming
- Node.js Runtime
    - Node.js process that is used to execure node modules on server using Commandline
        - node [File].js
            - Load the File as Module based on its path and executes it
    - Used to run all Node.js JavaScript apps on the server        
- Node.js Environment
    - The Node.js Object Models
        - Standard and Custom Node.js modules used for the Node.js Application Development or for using Node.js services for the application
    - Node.js Modules
        - An Object Model that contains standard functionality for executing app on server
            - e.g. File OPerations, Database Operations, Http Operations, Sockets, Cryptography, Security, REST APIs, etc. 
    - 3 Types of Node.js Modules
        - Standard Modules: These modules will be installed when Node.js in installed
            - https://nodejs.org/dist/latest-v14.x/docs/api/
            - File System Modules
                - fs
            - Http Request Processing MOdules
                - http and http2
            - System Utility Modules
                - path, util, process, etc.
            - Security
                - Crypto, Policies, etc.
        - Third-Party Modules: Availabler from gtihub and https://www.npmjs.com
            - MVC Apps
                - ExpressJS, KOA, etc.
            - Security 
                - JSON Web Token, Passport, etc.
            - Data Access
                - Node_SQL, sequelize, etc.
            - Third Party Module is installed using 'npm' command
                - npm install --sav [PACKAGE-NAME]
        - Developer Created Modules in application
            - Data Access Layer
            - LOgic
            - REST API
            - Security
- Use the Module is the Code
    - const [Object-Declaration] =  require('[MODULE-NAME]');
    - e.g
        - const fs = require('fs');
            - Looks for the module in Local Applicatiuon Path from where the App is running. If the module is fopund on local path, then it will loaded, instantiated and Cached in memory for the 'whole application' 
            - in File1.js, const fs = require('fs'); 
            - in File2.js, const fs1 = require('fs');
            - in File2.js, const f1 = require('File1.js'); 
                - Loading File.js as Node Module in File2.js    
                - The FIle1.js module will be searched by Node.js Runtime and if found, it will search and load all modules used in File1.js and cache them. E.g. fs in File1.js is alrerady loaded and cached, hence in File2.js the fs module won;t be loaded again insated it will be refer from cache             
           - If it is not present into local path, then it will search the module from the Node.js Hosting Environment from its standard module, if found the load, instantiate and cache
           - If module is nopt found the 'Not FOund' exception        
- Install @types/node module for the current application to experience the intellisense
    - npm install --save-dev @types/node

- The 'fs' Module
File System Module
    -Sync and Async Methods for
        -ReadFile, readFile();[Asynchronous] and readFileSync(); 
        -WriteFile, writeFile(); writeFileSync(), create file if not exist and wrie data in it
    -Creation of Flies, appendFile(), create if not exist and apped data if exists just append data
        -open(), create an empty file if not exist
    -Delete Files: 
        - unlink()
    - Rename to rename the file    
    -Directory: CReate, Read, COpy, Delete

- Use the 'nodemon' package and keep running the file contineously irrespective of changed made in it
    - npm install -g nodemon
    - Run the File
        - nodemon [FileName].js


- Node.js for Application Development
    - HTTP Request Processing
        - Creating HTTP Server aka Web Server
            - HTTP Request and Response
                - Accept HTTP Request (GET/POST/PUT/DELETE)
                - Generate HTTP Response
            - Use  the  'http' module
                - Contains 'createServer(HttpRequestListener)' method
                    - CReate HTTP Server for Http requests and Responses
                    - HttpRequestListener 
                        - An Object, that is used to provide Http Request and Response Processing
                - The 'listen(port)'
                    - Expose a port to listen requests and generate responses
                - request()
                    - Used to create a client app that will make an outgoing HTTP Calls     
            -Http Request Object
                - headers
                    - To REad Headers
                        - request.headers.[key]
                            - Value passed in header
                        - request.headers.authorization
                            - Read Security Authorization values passed in rtequest by the client
                        - request.url
                            - USed to read the URL Values send in the request    
                        - request.on()
                            - USed to process request when the data is received from the client
                                - request.on('data', callback), start receiving the data
                                - request.on('end',callback), once the dtaa is received, process it and the generate the response
            - using http module for creating a webserver e.g. accept HTTP Request and return the file              
    - Custom Modules in Node.js
        - Seggirgate the Logic across seperate JS FIles on the Server
        - 'Export' the FUnctionslities (Functions/Classes) from the file and Import it (load it)  using 'require()' function in the other file 
            - module.exports = {exportable logic};
                - This will expose the function or content of the 'exportable logic' to other module
            - define a function or a class and pass it to 
                - module.exports
            - module: Represent the Node.js Module and 'exports' represent that the the exported objects (function, class)
            - Syntax
                - Create a file e.g. MyModule.js. IN this file write the exportab;e functions/classes
                - IN the other file load the module from  'MyModule.js' as 
                    - const mympodule = required('MyModule')
                        - import,load and cache the module using the file name
    - Node.js Promise Packages
        - The 'q'
            - npm install --save q
            - The q has the defer() function
                - Manage and monitor the Async Operations, ite returns the Promise object to the caller so that the caller can subscribe to it
                    - defer.resolve(), the success
                    - defer.reject(), the error or fail
        - The  'bluebird'
            - npm install --save bluebird
    - Managing Resources
        - Server-Side Objects aka in-memory Data (Arrays, Set, Map)
        - File Resources

    - Security
        - OAuth, JWT, Cryptography, etc.
    - Data Access          

# Building Line-Of-Business (LOB) apps using Node.js + Express
- Installing Express
    - npm install --save express
- Express Object Model
    - Used to provide features for developing Web App, REST APIs, Sessions, Security
    - Web App and REST API Http Methods
        - get('URL', RequestHandler Callback ), post('URL', RequestHandler Callback), put('URL', RequestHandler Callback) and delete('URL', RequestHandler Callback)
            - URL: the http url value
            - RequestHandler Callback : the function the 'process' the request and generate response
                - Read HTML Page or View to be responsed
                - Read Headers
                    - Read Security Header Values 
                - Read Body
                    - Read Posted data mand used it for POST / PUT oeprations
                - Generate JSON Response
        - listen()
            - Host the Express App for Accepting requests on the port
        - static()
            - The method that is used to load the static contents in express Server

    - Express Middlewares
        - Middlewares are those objects which are used to provoide value addition in processiong requests in case of Express Apps
            - The 'use()' is the method used to register the request in HTTP Request processing in cae of Express Apps      
        - In case of the POST and PUT HTTP Requests, the express MUST be able to parse the body as JSON by adding following middlewares
            - express.json(), will parse the JSON,  avaialble from  express 4.0+
            - express.urlEncoded({extended:false}), help the server to read the body for the current POST and PUT Request, avaialble from  express 4.0+         
                - Read the Header value
                    - e.g. {Content-Type:application/json}
            - In previous versions of express we wre using 'body-parser'
                - npm install --save body-parser [deprecated]     
        - If the REST PAI is accessed from different domain then, the express for REST API must add cors() middleware [CROSS-ORIGIN-RESOURCE-SHARING]
            - npm install --save cors           
            -  Different DOMAIN
                - Client is from http://www.myclient.com
                    - http://localhost:9080
                - REST API is from http://www.myservice.com     
                    - http://localhost:9081
            - CORS MUST be used in Following cases
                - Different Domains
                - Same DOMAIN but different headers
                    - Seperate headers {AUTHORIZATION}, {CONMTEMT-TYPE}, {CUSTOM-DOMAIN}        
                - HTTP METHODS
                    - get/post/put/delete    

# Assignments
# Date: 07-09-2021

1. CReate a Single Srever thatn will have following
    - APIs for Performing Http GET/POST/PUT/DELETE Operations on the Products Array
    - Page
        - THis page will use XmlHttpRequest Object to access the APIs for Perfroming CRUD Operations
    - The API must check the following
        - If ProductId is already Present then return Conflict Response
        - CReate a function that will validate the Product as
            - ProductName must start from Character and mx length can be 80 Characters
            - CatrgoryName and Manufacturer must be string
            - Price must be NUmeric and Positive Integer
    - CReate a USers Array having USerName and Password
        - The CLienty Must pass UserName and Password before  performing the CRUD Operations 
            - Use request Headers for Authorization
                - The CRedential value must be passed
                    - Basic UserName:Password       
    - Host the API and Page in the Same Port e.g. 9080
2. Make sure that the Gardcoding for the ROute Pages must be eliminated. MOdify the routewebserver.js file

3. Readall files in a folder as well as in its subfolders.

# Date : 08-09-2021
https://www.dotnetcurry.com/nodejs/1225/call-external-service-using-nodejs
1. Follow the above link and create a seperate module for Performing HTTP Get/post/put/delete operations by creating a class as a Node.js module that contains getData()/saveData()/updateData() and deleteData() method for CRUD operations. ALl These method must use 'http.request()' to perform http methods based oeprations. All these methods must use 'q' / 'bluebird' (self-study) packages to Promise based operations 
2. Complete the REST APIs for following requirements
    - PUT and DELETE operations 
    - MAke sure that the GET/POST/PUT/DELETE will be accessed only for Valid USers
        - CRerate a COllection that contains USerName and Password
        - Validate each request for the Credenmtials against the USers Collection
3. In the Viewa folder add following pages
    - Login.html
        - Will contain the UI for Login
    - Products.html
        - Will SHow List of Products in table by accessing REST API
        - Above the table add a link as 'ADD PRODUCT' this will navigate to AddProduct.html
        - Each Tablbe row will contains Update and Delete button
            - Click on Update button will navigate to UpdateProduct.html to update Product
            - CLick on Delete button will access REST api and delete the record
    - AddProduct.html
        - Will Access API to Add new Product            
    - Make sure that Products.html, AddProduct.html,UpdateProduct.html will be displayed on;y when the user logs in    
            
