# React Apps

- Install the React CLI
  - It is a template by React Team to create a react project with production-ready structure
  - npm inastall -g create-react-app
    - installa a CLI to create react project
  - Create a React app
    - create-react-app [PROJECT-NAME]
- Project Structure
  - package.json 
  - Contains all dependencies for the react project 
    - "@testing-library/jest-dom": "^5.14.1",
        - The 'JEST' JavaScript Tesing Object Model
    - "@testing-library/react": "^11.2.7",
        - React.js Testing Environment Object Model
    - "@testing-library/user-event": "^12.8.3",
        - Used to Test the DOM Events w/o Browser
    - "react": "^17.0.2",
        - The React Library Object Model
    - "react-dom": "^17.0.2",
        - The React DOM rendering Object Model for generating the Virtual DOM and Manage rendering
    - "react-scripts": "4.0.3",
        - The Standard CLI libraries used by the create-react-app for follwoing
            - Building the react application
            - Testing the react application
            - Executing the react application
        - react-scripts start
            - Start Compiling the Project from index.js and all of its import dependencies
                - e.g. if index.js imports a.js, if a.js imports b.js and so on
                    - The Compilation for all imported js files will takes place
                    - Then the build will takes place
                    - the build files will be loaded into the index.js and react will be rendered    
    - "web-vitals": "^1.1.2"
        - the standard module to manage the server-side build for the react application during the development
  - node_modules
    - contains all modules installed for the current application
  - src folder
    - all source code for the react app
    - index.js
        - An entry point for React App Development
        - All Components are rendered using this file
    - index.css
        - the css file for the UX
    - App.js
        - a default component provided by React
    - App.css
        - The css file used by App component    
  - public folder
    - contains the build files those are ready for the production

# React.js Object Model
    - Component
        - An autonumous object the contains following
            - Data
                - The Data properties and its values to be shown and updated from UI
            - Events using functions
                - these are logical blocks of the component used to be executed based on event raised on UI
            - User Interface (UI) aka DOM
                - The UI of the component
                - This will be bound with data and events  
        - Two Types of Components by Syntax
            - Class Component, the ES 6 class, traditional React Development
            - Funcational Components, Standard JS functions, introduced from React 16.0+ / recommended from React 16.8+                                 
        - Conceptual way of implementing Components (Class and Functional component)
            - Stateless Components
                - The component contains JUST A STATIC UI
            - Stateful Components
                - The component contains state aka data, which will be used to generate the UI and there will be events and function used to manipulate the data and hence update the UI  
    - The Component<P,S> class
        - S, is the state local to component
            - the 'state' property. This is an object that is used to define propeties local to the component
            - The 'state' is always scopped to the component 
        - P, is the state or data received by the current component by from its parent 
        component
            - the 'props' is the property object, that represents data received from the parent        
            - the 'props' is always readonly
        - Methods for the class component
            - setState({STATE-PROPERTY:NEW-VALUE},callback)
                - update the state local to the component      
                - Parameter 1: The object that will update the state property to the new value
                - Parameter 2: The callback function, that will update and commit the state, so that the DOM will be updated based on the new Value
                    - IMP ***: The callback is optional if the STATE-PROPERTY is non-collection, but it is mandatory if the STATE-PROPERTY is collection or the update value is received from the HTML select element. 
            - render()
                - This contains the HTML DOM that is the UI for the component
            - Lifecycle methods        
        - The component can be reused as a child component of a parent component     
    - IMP***, One jsx file can have multiple component, but only one component can be exported as a defualt e.g. 'export default'        

    - The Statefull COmponent contains data either locally declared using the 'state' object or the data received from the parent component
        - The data displayed in the Reda-only elements
            - {property-name}
                - e.g. if data is received from Parent Component using props
                    - {this.props.[PROPERTY-NAME]}
                - e.g. if data is locally defined using state object
                    - {this.state.[PROPERTY-NAME]}    
            - If the data is to bind with the HTML element's attribute then use the followign syntax
                - {PROPERTY-NAME}
                - e,g,
                    - <input type="text" value={this.state.PROPERTY-NAME}>        
                - Binding the state property with HTML Editable elements e.g. input, select, radio, checkbox, etc. will amke the element as read-only but will also generate the error in browser. To make the editable element to accept value or change, perform event binding to it using 'onChange'
                    - e.g.
                         - <input type="text" value={this.state.firstName} onChange={this.[SOME-METHOD].bind(this)}>
                            - SOME-METHOD is the function in class component  that will accept the updated valeu from HTML element and update the state property 
                            - This is known as 'UniDirectional Data Flow' in react application 
    - The 'JSX' is JavaScript XML Rule engine, that is used to Compile the HTML based on XML tags
        - The Start tag must have end tag
        - The Tag is case sensitive                
    - To read the values for editable elements for the state propeies bound to it, set the 'name' attribute of all these editable elements same as the state property name and then write a single function that will accept  values from editable elements based on the 'name'
        - this.setState({[e.target.name]:e.target.value});
            - internally the setState will use 'Object.keys()' to read the 'name' attributes of editable elements and assigne it to the curresponding value for the current updating editable element.   



# React.js Assignments

# Date: 17-09-2021
1. Create a Calculator Component (NO-GOOGLE) using React.js like windows Scientific Calculator