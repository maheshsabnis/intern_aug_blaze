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
    - Managing Resources
        - Server-Side Objects aka in-memory Data (Arrays, Set, Map)
        - File Resources
    - Security
        - OAuth, JWT, Cryptography, etc.
    - Data Access          


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