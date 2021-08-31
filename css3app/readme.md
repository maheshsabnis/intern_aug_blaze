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
               

# Assignments Date 31-08-2021
1. CReate a table (Hard-Code) and apply style on each row when a mouse is entered on the row