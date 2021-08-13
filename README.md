# Date:13-08-2021
# Browser Features
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



# Assignments
# Date: 13-08: Create a Simple Calculator like Windows Calculator by adding a wincalc.html page in the application 
