# Points to work on JS FullStack
- Decide The Front-End Technology
    - Angular, Angular+NgRX React, React+Redux+Saga, Vue.js, Vue+VueX
    - Is the Framework or The Library?
        - Wel-Defined and Wel-Organized Coding
            - Code Reusability
            - Code Modularity
            - Code Simplicity
            - Code Flexibility
        - Standard JS Object Model w.g. Framework (Angular) or Library (React)
            - Pre-Defined Coding Standards e.g. React
                - Components, Class or Functional
                - Hooks
                - Lifecycle
                - ErroBoundry
                - Lazy Loading     
        - While writing supportive code for Front-End we MUST follow 'GOOD CODING PRACTICES'
            - The Abstract for Coding, because each BA, Technical Team and Client may have different perception behind it         
            - Cohisive Set of Functionality or Behvior
- Node.js+Express REST for Back-End
    - Back-End Service using API on Cloud
    - Serverless
    - Microservices

# Using the Design Patterns and its Principals for Coding    
- Module Pattern
    - Pattern that helps to organize the code in appropriate way for defining the JS Module
    - THis will used to define a scope of variable and also a function
    - THis is also known as improvisation in
        - Prototype Pattern
        - Constructor Pattern
            - A mechanism defining an insatnce of the class or creating a new object from the existing object
Singleton Pattern
    - A Pattern that is used to instantiate an object 'only-once' throught the application
    - USed in case where the Object Creation COst in More
    - The same objecy is used by all Modules/Classes in the application
    - In JavaScript, this iis implemented as 'Immediate Anonymous Function' that contains a method which returns 'an object'   
    - Caution to be taken while using Singleton
        - The object creation becomes bottleneck, means if the obejct crash all other objects using this object will also crash and hence the design will become fragile, the reason for 'Single-Point-Of-Crash'
        - SIngleton are not unit tested
Observer Pattern
    - Behavioral Pattern
        - The Publisher and Subscriber (Pub/Sub) are already organized by JS in Web Apps in the browser 
    - Redux
        - Action Dipatcher
        - Provider
            - react-redux
            - Manages the Lifecycle of React COmponent under the 'store'
                - <Provider store={store}>
                    - The Provider 'monitores aka observes' and event that is 'dispatced' from the UI
                        - Execute the Logic
    - In JavaScript, the Observer is the 'one' that listens to 'each event' that is dispatched and based on that the coresponding function will be executed
        - window.addEventListener('mousemove', this.getPositions)        
    - Component--> DIspatch and Action (Puiblish) and the to the action, the Action Creator is already subscribing (Logic for Execution)                   
- Proxy Pattern
    - Handle the Behavior of the object using 'Proxy()' class ins ES 6     
Mediator Pattern
    - Behavioral Pattern
    - Used to manage communication across the object based on 'some events' by origanizing these events in appropriate order
        - This is a Central Object that will be ised by all SUbscriber to establish Communication amongst each other
        - Reducer
            - Is the Object that is responsible to establish communication across all components by listening to actions dispatched by each component and updating store accrdingly
Prototype Pattern
    - Creational Pattern
Command Pattern
Factory Pattern
    - CReational
    - Create an object based on the Metadata or properties passed to system or FActory
    - If the Actual Objects containing the logic of generating the Object is complex then the factory method will take ralatively more time to instantiate the object and that will reduce the performance
Façade Pattern