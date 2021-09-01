# CSS 3
# Text Stylying
- padding, Alignment, transform, ident, letter-spacing, decoration
# event based CSS , introduce3d in CSS 3
    - Styles are applied on events registered on UI elements using style object
        - syntax : [selector]:event [classname] {define style}

# Positional STyles based on indxes of elements
- :first, :last, :nth:child(index)
- :nth-last-child(index)

# Postion Styles based on order of  the DOM Elements 
- element ~ element2
    - all element2 comes after element 1
- >, <

# Applying Styles based on Appearance of DOM ELement in DOM Tree
- first-of-type, the first occurance of element
- last-of-type, last-occurance of the element

# Applying CSS to DOM elements based on Class Value
    -  tag[attribute^=<value>]
        - class will be applied if the attribute value starts from specified value
        - e.g.
            - input[class^='first']
                - all input elements having class value starts from specified 'first' 
    -  tag[attribute$=<value>]
        - class will be applied if the attribute value ends with value
        - e.g.
            - input[class$='first']
                - all input elements having class value ends with 'first' 
    -  tag[attribute*=<value>]
        - class will be applied if the attribute value at any postion
        - e.g.
            - input[class*='first']
                - all input elements having class value at any position as 'first'    
# Using Bootstrap
    - Install Bootstrap
        - create package.json
            - npm init -y
        - install bootstrap
            - npm install --save bootstrap               
                - folder
                    - scss
                        - The actual source code for Bootstrap
                    - js
                        - JS dependency files for plugins
                            - folders
                                - js
                                    - Source code in JavaScript for all Bootstrap Plugins
                                - dist
                                    - Distribution folder used for deployment  in production
                                    - Contains minified files so that they can be used on browser      
                    - dist
                        - Folder for deployment
                            - css
                                - Contains minified css files to use on browser
                            - js
                                - Contains minified JavaScript files reeferring the Minified JS files for Plugins      
    - Using Bootstrap
        - Layouting
            - Container
                - class applied on div tag
                    - Fixed Container (Default)
                        - Fixed Width
                    - FLuid Container
                        - SPan across full available width
                - container Padding
                    - Set the aka spacing from left and right
            - Table
                - Standard Set of Classes for CReating RICH and Responsive Tables
                    - table, table-bordered, table-striped,  table-dark, table-danger, etc                    
            - Grid                            
        - Look and Feel Classes
            - bg-primary    
        - Forms
            - Heavily USed Styles across all front-end JS Libraries and Frameworks those are using Bootstrap
                - form-group
                - form-control
                - Button Styles
                    - btn, btn-default, btn-primary, btn-success, btn-warning, btn-danger
                - Text Styles
                    - alert, alert-danger, alert-warning
                - Input Styles
                    - form-control, text, select, textarea
                        - form-control-sm, form-contrl-lg
                    - form-check-input, checkbox, redio
                    - form-check-inine, inline (hprizontal checkboxes, radios) 
                    - form-check-label, label for checkboxes
                    - form-control-file border
                        - file control for file upload with border
                    - form-control-range    


# Assignments Date 31-08-2021
1. CReate a table (Hard-Code) and apply style on each row when a mouse is entered on the row

# Date: 01-09-2021
1 Apply the Table COntext styles in Table Row based on COnditions
    - If Salary > 200000 , danger
    - Salary >150000 and <200000 , success
    - Salary >100000 and <150000, light
2. Create a table with 20 Rows, (Just Hard-Code)
    - By default, just show 5 rows
        - at the botteom of the table dynamically generate the Paginagion 
        - generate page numbers based on number of rows in the table,. e.g. if total number of rows are 40, thene generate 8 pages number
        - when a page number is selected, show 5 rows for that number 