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


# React.js Phase 2
- Using React Hooks, from 16.8+
    - An approach of creating a component using Functions rather than classes
    - Functional Components with Following Syntaxes
        - function returning HTML
            - function MyComponent(){..... return(<HTML/>);}
                - This contains inner functions for the Logic
        - a constant function expression that returns HTML
            - const MyExpressionComponent=()=>{
                return (<HTML/>);
            }
        - function expression that itself act as a HTML UI than returning HTML DOM
            - const ExpressionComponent=()=>(<HTML/>) 
    - Advantages
        - Code is simple
        - the function component auto-define the 'this' scope, so it is not required to use 'this' prefix for any function call with the functional component
        - Not Class, no Constructor and inheritence
        - the 'props' is as it is
        - the bind() method is not necessary for binding
        - Class COmponent's complexity e.g. Lifeccycle methods are emploetly removed
        - WE can have small focused utility funcational components and reuse them , this was difficult in Class Components because of the Lifecycle methods 
    - Facts of Functional Components
        - They can have local properties declared and intialized 
        - These properties can be bound to HTML elements and their value can be shown on UI
        - BUT these are not 'state properties'
        - WHAT ABOUT STATE IN FUNCTIONAL COMPONENTS?    
    **** IMP ***
        - Class Components are NOT REMOVED OR RETIRED   
    - Using the React Hooks, defined for managing the State, Lifecycle, Data Sharing across functional components
    - They are functions with 'pre-defined' behavior
        - Standard Hooks are always accessed at component level
        - Except the standard Hooks can be called inside a function, if you are creating CUSTOM HOOKS 
        - Basic Hooks (used in all React Apps)
            - useState()
                - Managing State of the funcational Component
                - const [state, setState]=useState(initialState);
                    - The 'state' is the state that will be bound to Component
                        - The 'state' can be
                            - primitive type
                            - Object
                            - Array
                    - The 'setState' is the funcation that will modify the state
                        - This function will be used to update the 'state' from 'initialState' to new state based on DOM's Events   
                    - The 'inistalState' is the initial state of the state object 
                    - function useState<TST>(initialState: TST | (() => TST)): [TST, Dispatch<SetStateAction<TST>>];
                        - TST, is the state object having defautl value as 'initialState'
                        - Dispatch is the Function that will listen to the event or any other actoin that causes the state update 
            - useEffect()
                - The hook which is a combination of 'componentDidMount()' and 'componentWillUnMount()'
                    - Use this hook for
                        - Async or long running oeprations
                        - performing cleanup operations e.g. Releasing events
                    - Syntax
                        - useEffect({LongRunningOperations} return {cleanup operations}, Dependency Parameter);     
                            - LongRunningOperations: will be immediately executed when component is mounted
                                - THis will update state and hence result into rendering
                                - this process will continue executing unless we inform that the process to stop
                            - cleanup operations: this will be executed for component unmounting
                            - Dependency Parameter: This is a parameter that signals to the useEffect() that the state is updated and the longRunningProcess can stop executing
                                - There May be multiple State properties those will be updated using longRunningProcess, so inform the state update once-for-all, pass the dependency parameter as an 'EMPTY ARRAY' 

            - useContext()
                - This is the hook that will be used to pass data from parent component to specific child component
                    - This is an implementation of React.Context
                - The 'createContext()' object from 'react' is used for creating a Context of data to be send from parent component to the child component
                    - const DataContext = createContext(InitialValue) 
                        - The 'InitialValue' is the value to be communicated.
                        - The InitialValue can be
                            - {object} 
                            - {{object, callback}}   
                                - An 'callback' is actually a Dispatch Action passed to the child component to receive data from the child component when the child component raise an event. THis 'callback' will be used to update the state in parent component 
                    - Passing data from parent
                        - <DataContext.Provider value={}> <ChildCompoennt>   </DataContext.Provider>
                            - ChildComponent is the component to which the data is sent    
                            - The 'value' represents the data that is sent
                   - In ChildComponent, the data can be read as
                        - let data = useContext(DataContext) 

        - Additional Requirement Based Hooks (used only in sapplied cases)
            - useReducer()
                   - a hookthat is used to update an initial state to final state based on external conditions
                    - USe Case
                        - COnsider that, the component is executing a long running process, and this process my be successfully executed and return  data or may be crashed.
                        - If the execution is successful then update the state with successful data or else if failed then update the state with error
                        - e.g. Init--> Process --> Successful
                               Init --> Process --> Failed  
                    - useReducer() is used to manage the State of the COmponent w/o using any external State Management
                - useState() Vs useReducer()  
                    - useState(InitislState)
                        - Dispatch the action based on Event and immiditely update the state or generate an error and crash
                    - useReducer(appReducer, initialState)
                        - appReducer Object, this is a function that will monitor an external execution and based on the state of external execution, the initialState will be toggeled from Init-to-Final ot Init-to-Error without any crash
                        - initialState: The the State Object that defines, initialState of external operations, error state and final successful result form the external operations                     

            - useMemo()
                - Memoization
                    - Process of caching the data in the broeser instead of reloading it it again and again
                    - This is meant for improvising tyhe performance of the JS that contains functions which is resursively executed and generate results again and again
                - const fact = num=>{ if(!fact.cache){ fact.cache={} } 
                    if(fact.cache[num] !== undefined return fact.cache[num]; // Cache the value
                        else  { // do sdomething }
                        fact.cahce[num] = num === 0?1: num* *fact(num-1)
                        return fact.cache[num];
                      }       
            - useRef
            - useCallback()        
            - useLayoutEffect()
            - useDebuggerVlaue()
            - useInperativeHandler()      
        - CReating a Custom Hook
            - USe Case:
                - The need of similar operation (or executable logic) to be performed across various components    
                - Generally they are used for state based validations aka custom validations, AJAX Calls, ect.
                - Technically, they are functions those uses standard Hooks in it.
            - Write a generic functionality in the custom hook for reusability    
- Code-Splitting
    - Segregating the Code in separate modules and loading these modules aynshronously
    - Divide the Front-End UI in separate files and load them (use them) as per the requiremnets
    - SOlutions 1: for Missing Dependencies
        - Use and asynchronous import to look for the file and load it
            - Use the fallback function to execute a covering code, if the file to download is missing or has error during load
    - Solution 2: For the Component that is taking time to load or the compnent being loaded has so heavy load operations
        - Use The React.js 'Lazy Loading'  (Recommended) From 16.8     
            - <Suspense> the default component that will be acting as a fallback UI if the component is not loaded     
- Fragments
    - Auto Layouting
    - <Fragment> for defining the Layout
    - Also uses as <></>
- Portals
    - Managing the DOM Rendering effectively
- Profilers            
    - Profiler Measures

# Using Redux
- State Management for React Apps
- Store
    - Global Application State Object for React + Redux Apps
    - Contains Data that is required for all Components
    - Its has Schemas for storing soecific data. e.g. Products, Customers, etc.
    - This can be queried for Read Operations
- Views
    - React Components
    - responsible to contains UI events so that actions with or without data can be dispatched
    - Each Component Subscribes to Store
    - The Component gets data from Store
- Actions
    - They are the Objects those are responsible to gets executed whn an event fired by component
    - Each Action mey accept data as input parameter from View
    - Action can be Synchronous or Asynchronous
    - The output from the action is always provided to the reducer
- Reducers
    - This is a PURE Function in JavaScript that is responsible to update the store
    - Input parameter of the reducer function is state and the type of actoin executed
    - Output is the state object that is updated in store
    - IMP***: The reducer will not have any Business Logic or Long Running Operations
        - No Async Operations
        - No Complex Data Structuture Operations
        - No COmplex Date Time Operations

- Packages for Redux
    - redux
        - The 'createStore()' method, this is used to create an Application State Object i.e. Store
            - createStore(REDUCER, ENHANCER)
                - REDUCER: The Reducer Object created using 'combineReducer()'
                - combineReducer() aggrigates all reducer functions in a single object
                - combineReducers() is also present inside the 'redux' package
                    - The combibeReducer() is responsible to provide the data (state) that is updated in the store   
                - The reducer is finally responsible to monitor all the actoins and their execution
           - Enhancer
                - Object that provides an additional behavior to the store object as follows
                    -  The In-Browser simulation of the Redux App e.g.Dispatched Actoins, Sync and Async Calls, the STore Initial Data and Updated / Final Data
                    - Recommended to be used in the Developent phase and not in production
                - The Middleware(?)
                    - Used to Monitor and execute all Async Actions dispatched from UI
                    - Mandatory in case of Async Programming
                    - SAGA (Industry Standard Middleware, recommended for REDUX APPs)   
                    - THUNK            

    - react-redux
        - Bridge between React Object Model and Redux
        - The 'Provider' Object
            - Manages the Lifecyce of the React Components under the Readux store
                - <Provider store={STORE-OBJECT> <React-Component/> </Provider> 
        - mapDispatchToProps Object
            - Bind the Action to Be dispatched to UI element using the 'props'
            - When an event is fired on UI element, the action is dispatched
        - mapStateToProps object
            - Map the data (state) from the redux store to the 'props' so the tha data can be shown in the component
            - Query to the redux store and retrive data from store so the UI can show tat data
        - connect(mapDispatchToProps, mapStateToProps) (React-Component)
            - Subscribe the redux Store to react components    
        - The Redux Hooks from React 16.8+
            - useDispatch() hook
                - Used to dispatch an acion from UI based on event fired by the UI element
                    - replacement for mapDispacthToProps
            - useSelector()
                - Subscribe the store to the React Component
                - replacement of mspStateToProps
    - Implementatoin
        - Plan for Views
        - Plan for All Events from Views
        - Define Action Methods (Sync / Async)
        - Define Reducers and Combine all Reducers
        - Create a Store Object
        - Pass the Store Object to Provider to use it with React Apps                        

- REdux with Async Operations
`- USe SAGA Middleware
    - saga
        - A recommended Middleware for React-Redux Stae Management Applications for maintaining promise based ajax calls
        - Saga makes sure that any action dispatched by the component is monitored and executed as per the logic (Sync / Async) 
        - If the async operations are to be performed then the SAGA will uses the Generator functions to subscribe to Async Operations and Receiving the result after completing the async operations
    - redux-saga Package
        - applyMiddleware
            - A method provided by 'redux' packlage and used by redux-saga package
        - createSagaMiddleware() method
            - used to create and register the 'SAGA' middleware object(?) in the redux store along with the reducer
            - Listen to an actions that needs async operations
            - Manage and handle async promises with its subscriptions
            - When an Async Operation is completed the SAGA will dispatch the output action`
        - redux-saga/effects
            - The package used to provide methods for Handling SAGA Operations
                - all()
                    - Like reducers there can be multiple SAGA generators available in the application.
                    - The all() method is responsible for monitoring all generator at application level 
                - put()
                    - Used to Dispatch the Output action when the Promise is resolved /  rejected after the call() method completed its execution
                        - The Output action dispatched using the put() method is listened by Reducer and the data returned by the  put()  method i.e. action type and payload will be used by reducer to update the state in the store 
                - take()
                    - Listen to the specific action dispatched by the component
                    - take('ACTION_NAME')
                        - This internally uses the gennerator and yield the generator reponse. i.e. the method which is using call() method to invoke the Promise based operations 
                        - The take() is actually responsible to process the action dispatched from the View
                - takeLatest()
                    - Same as the take() except it processed the latest action dispatched by the view
                - call()
                    - INvokes a method that returns a resolved promise  object
                    - Internally it uses a generator to yield the promise response
                    - The returned value from the yield may be a 'Promise' or 'resolved Promise' containing the execution state of the promise
                        - Success or Failed           

- STeps of  Implementing SAGA
    - CReate Views
    - Create Actions nand Action Creators (Logic)
    - Create SAGA Middleware methods
    - CReate Reducers
    - Creatr Store with Reducers and SAGA Middleware
    - Pro0vide the store to the React Components
- Execution Process
    - SAGA and Reducers are executing at Application level and MOnitring Action
    - View DIspatch Action --> SAGA Listen to the Action --> SAGA Executes the action using Generator Functions --> The Response of the Async Execution is Collected by SAGA Generator Functions --> The Generator function Dispatch the Output action with Result--> The Reducer Listen to the Output Action Dispatched by SAGA Generator FUnction --> Reducre Stae the lates State and Update it in store --> The data from Store is Updated back in COmponent over the subscription



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

# Date:23-09-2021
1. Create a Route Based Navigation for  DOctor, Patient, Staff, Rooms, Wards, Medicines, ect for CRUD
2. Makse sure that the Login COmponent is Displayed first.  The Register User, Activate User links can only be activated / displayed for 'Admin' Role users.
    - The Receptionist Role can register the Patient
    - The Doctor Role can only record observation on Patients
    - The Doctor Role can only suggest the Patient Admission and Discharge
    - The Bill Can be generated only by the Accountant Role
    - Room / Ward Can be assigned to Patient only by the Admin Role User
    - Only Nurse Role can update the infromation of Medicines applied to to the patient
    - The Mewdicine-Staff can only Register medicines (Inward) and Issue Medicines to patient   

  # Date: 24-09-2021
  1. Create a Component that will perform the CRUD operations with Express REST APIs.   

  # Date: 04-Oct-2021
  - Modify the Redux App using the following
    - Create an action, that will  be dispatched when the row in the table is clicked
        - Select the Department Object
    - THis action has to monitor by the reducer and the reducer will return the selected record from the store and this record will be shown in the other component  
        - Based on the department object the department details must be shown in the CreateDepartmentReduxComponent textboxes 