# Date:13-08-2021
# Browser Features for Forned End Apps
1. Runtime Host
    - Its acts as a host for the JavaScript Application loaded in browser
        - Parse and Compile JavaScript Code
        - Execute the Code
    - Storage Services
        - Used for Storing Data for The Currently Loaded JS app
    - Media Services
        - Provide Audio/Video Support
        - 2-D/ 3-D Graphics
        - Animations
    - File Resources
        -  Read / Write Files
    - Common Look and Feel aka Rendering aka UI Generation   
2. JavaScritp Programming Features (Basic JS Features)
    - Variable Declaration
        - Types
    - Using The JavaScript Object Model with Basic HTML
        - window and document object    
        - window object
            - Represent the Current Active Instance of the browser
                - For the Browser Instance all Elements and their events are bound to the window object
                    - onload, the load event
                    - closed, close the browser instance
        - document object
            - Represent the Document-Object-Model (DOM) aka HTML UI loaded in browser
                - Used to Read UI Elements using its
                    - Tag
                    - name
                    - id
                    - class
            - Used to attach and detach events to UI element
                - attach 
                    - document.addEventListener('[Event-Name]', [CallBack-Function], [boolean]);
                        - Event-Name, the event to be raised, e.g. click, mouseenter, mouseleave,l etc.
                        - CallBack-Function, the function that is executed when an event is raised
                        - boolean, if true: the event is be stored in browser's event queue(?) else false
                - detach
                    - document.removeEventListener('[Event-Name]', [CallBack-Function]);    
            - Used to read/write properties of the UI element
                - The 'value' attribute property is 'string' by default. Parse it to integer for Numeric Operations        

- Variable declaration
    - the 'var' a resevre word
    - The data type of the variable can be read using 'typeof()' operator
    - the 'var' declaration is 'function scope'
        - this will be accessing throughout the function code from the point of declaration  
- Array is the Collection Dataatype in JavaScript
    - This store each entry as object and there is no 'Upper-Limit' for data in array
    - An Array is a Standard object in JavaScript, it has following features
        - Standard properties
            - e.g. 'length', will provide max length of array
        - Data from Array Can be read using iteration e.g. for..loop
        - Standard Methods
            - push(), method to append data in array
            - pop(), remove last record from array
            - toString(), to convert an array in string
- JavaScript Operator System
1. + , by default used for Concatination of String, using type-covertion, its will be used for numeric addtion
2. -,*,/: subsctrcation, multiplicatgion and Division
3. +=,-=,*=, /=
    - +=, add in the LHS, e.g. sum+=i, will be same as  sum = sum+i
4. Comparision
    - >, < , >=, <= 
    - ==, the value comparision. ONly Compare Values of both sides of expression
    - ===, deep equal means
        - e.g. x === y, first typeof(x and y) will be compared and then their value will be compared
 
5. Object Creation
    - Equate one object to the other object. Bothe object will point to same schame. If one object modify the value of schema, the other will receive the modifucation
    - Use 'Object.assign([Target-Object], [Source-Object])'
        - Source-Object, the object to be copied wiht it schema and data 
        - Target-object, the object created based on schema and data of source object
 6. JS Standard Object Methods
    -  Number
        - The object used to store Numeric Data       
        - Its has it5s own methods
    - String
        - The object to store Textual data
        - String as an array of characters
        - Its has its own methods to maipulate strings        

# Assignments
# Date: 13-08: Create a Simple Calculator like Windows Calculator by adding a wincalc.html page in the application 

# Date 16-08-2021
1. Perform Following operations on String by writing logic in seperate JS file and access it in the Html page onb button click event. Show the output in div tag

    - Convert the string in Upper and Lower Case by passing case selection to the ChangeCase() method
    - Add a method of name getCharCount(c) to return the count of character passed as value of c
        - e.g. if c is O then the method must return the count of O in string
    - Add a method of name getIndexofChar(c) to return all indexes or postions of character passed as value of c
        - e e.g. if c is O then the method must return all positions or indexes where O occured in the string
    - Add a method of name vowels() to return numberb of vowels() in string e.g. a,e,i,u,o,u            
    - Add a method of name getNoOfStatements() to return number of statements in string.

