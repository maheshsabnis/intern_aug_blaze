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


- React Application Development Scenarios aka guidelines to be considered for Using React.js
    - A Complete Functional UI for Front-End of the the application 
        - e.g. A Form for Accepting the Doctors information
            - HTML Form with Editable Elements
            - Model class for Defining the Logic for the form
            - The UI Validations aka Front-End validation 
            - Making an External AJAX Calls
    - Requirements for Building a Functional UI
        - Using the HTML 5 Form
        - Manage the React Lifecycle(?) for Appropriate coding
            - AJAX Calls
            - Validation
            - Error Handling     
        - Planning for the UI Composition
            - An approach of dividing the COmplex UI into small reusable Components and eastablish comunication across components     
                - E.g. For Registering Employee create a Form having 2 Dropdowns e.g. Departments and Desginations
                    - Instead of Creating droptdonw i.e. Select element repeatedly create a Dropdown resuabale components
                        - Plan for Reusable component based on Following
                            - Frequency of requiring the same UI across multiple Components
                        - Challanges of Creaing Reusable UI
                            - Planning for DataSource
                                - The data passed to the reusable component to generate the DOM
                            - What propeties will be exposed by the Reusable component for accepting data as well as emitting the data?
                                - A scalar property (number,string, boolean, etc) or a collection (array,Map,Set, etc.)that will be accepted as input as well as emitted as output 
                                - these properties will be passed to teh reusable component by its parent as input data and also accepted by parent when emitted by the reusable component 
                            - How the Child component will emit data to parent component?
                                - The child component (aka reusable component) will emit data using an event.
                                - An event will be raised by the child component and must be subscribed by the parent component
                            - What will be the UI?

- Diff. Between export and export default
    - The 'export' just export a type so that it must be imported using expression
        - e.g. export class MyClass{...}
        - then import it as
            - import {MyClass} from 'filename'  
    - The  'export default' exports a type with default schema
        - e.g. class MyClass {....}. 
            - export default MyClass;
        - then import it as
            - import MyClass from 'filename'            

- to use CSS classes in component's UI elements uses 'className' attribute instaed of 'class' attribute. The reason is the the 'class' is akeyword in ES 6
- If the DOM is generated dynamically, then a 'key' must be specifoed for the Element. The Key must be unique for the element

- IMP***, the React STATE properties of the Collection Type can be updated explicitely 'using events' by using 'an assignment statement'. (aka Cannot be mutated), instaed use 'setState()' 

# React Lifecycle
    - Used for Good Coding Practices to decide what code goes where
    - Guide to choose appropriate event to write an AJAX Call
        - MAke an AJAX call inside the componentDidMount() method if the data is expected immediately when the component is loaded
            - using axios library
                - The Node.js based promise library that is used to make an AJAX calls from Node.js apps as well as Browser based apps
                    - npm install --save axios
                        - get(), post(), put(), delete()
                            - all these returns promise object
                        - get(url, options)
                            - url is URL of REST API
                            - options: Headers Values
                        - post(url, data, options)/put(url, data, options)
                            - data : the JSON object to be posted
                        - delete(url)
                    - all these m,ethods returns promise object                  
    - Manage the explicit Event Subscription
    - Error Handling in Components for Fallback UI

- MERN
    - MySQL, Express, React, Node
- Validating the Front-End App
- Secure AJAX Call
- Building Single Page Application
- Handling Error Boundries
    - a Container Component that will manage lifecycle of children components and any exception thrown by them
        - This  COmponent will implement 'componentDidCache(error, logInfo)' Method 
            - error: is the error listened by the Error Boundry Component
            - logInfo: Use3d to gtenerate the component's Statck Trace in the browser to show all error details with detailed error messages
        - The component will also implement the Lifecycle Static Property of name 'getDErivedStateFromError(error)'
            - This is a readonly property that will be used to listen the 'error' and make it available to the componentDidCache()       
- Routing for Single Page Application (SPA) for React.js
    - react-router-dom
        - PAckage that supports the Routing based Single Page Application Development using React.js
        - BrowserRouter
            - A Container Component that is used to manage the navigation across Components
        - Route
            - A compponent that is used to define a Route Expression using following props
                - exact: the Path Matcher
                - path: the URL for Routing
                - component: the component which will be loaded 
        - Link
            - The anchor tag, a component for querying the Route
            - to: the Props that is used to accept the 'path' value of Route to route to the component
        - Redirect
            - The Component that will redirect to a default route path if the 'path' of Route is not found
            - to: the Prop represent to which 'path' of Route to navigate to    
        - Switch
            - A component that is used to create a Route Table 
        - The BrowserRouter is Container Component that is used to manage the navigations across COmponents using Route and its Child Router.Consumer
            - The Router.Consumer, is used to perform following operations
                - uses the props.history() to store the previous route state (the component from which the navigation is done
                ) 
            - the props.match.params.[ROUTE-PARAMETER]
                - USed to pass data across components
- Hight-Order-COmponent (HoC)
    - The FActory Method (aka Pure Function in JavaScript), that will accept an input parameter as COmponent and return the output as component
        - GUidelines for HOC
            - The name of the function must in Pascal case (MUST start from Uppercase character)
            - The Plan is mandatiory before using the HOC

# React.js Assignments

# Date: 17-09-2021
1. Create a Calculator Component (NO-GOOGLE) using React.js like windows Scientific Calculator

# Date: 20-09-2021
1 a. (Mandatory) Create a DataTableComponent with following specifications
    - dataSource property: Used to generate columns and rows
    - event method: getSelectedRow(), this will return the data of selected row
    - canDelete: If this is true then shoe Delete button
    - canSort: If this is true then the table will be sorted
    - soryKey: the name of the property based on which the table will be sorted if canSort is true
    - isPagination: if this is set to true, then pageSize property must be passed as non-zero positive value. If this property is false, then display all records
    - pageSize: based on this property, the component will show rows and then the pagination will be displayed based on total number od records in dataSource 
1 b. (Mandatory) Use the DataTable component to show data in it. When the Delete button is clicked, the record MUST be removed from the parent component's collection
1.c. (optional) To the DataTableComponent pass a property as 
    - canSearch: if this value is set to true, then display a Text Input element above the table and when data is entered in this text element, show the matched record in the table 

2. (Mandatory) Create a Dropdown component that will allow multi-select. These multi-selected values must be returned to parent 

3. (NOW) CReate a reusable component that will show the CheckBoxList as well as RadioButtonList
    - Pass the datasource and generate CheckBoxList and RadioButtonList
    - Return all selected CheckBox values to parent
    - Only-One radio button value can be emitted from chiuld to parent


# Date:22-09-2021
1. Create a Validation Summary Component. THis will be used for showing validation errors those occures for each component. Tis validation summary componmust be displayed at the bottem of each Component
2. Start working on Healthcare Project.
    - DOctor, Patient, Staff, Rooms, Wards, Medicines (Inshort Components for CRUD MUST be done by this weekend) withe SECURE REST API Call along with Register User and Login User Components     
3. REad About UnControlleed Components    