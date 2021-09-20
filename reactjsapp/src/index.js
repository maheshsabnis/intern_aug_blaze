// imporing the React Modules the ES 6 Concept of Module Export and Import
import React from 'react';
import ReactDOM from 'react-dom';

// load bootstrap
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

// imporing the CSS file as a Module. This file will be loaded in the current JS Object context
// and will be available for all React Components loaded under the current context
import './index.css';
// importing the App Component
import App from './App';
import SimpleComponent  from './components/statelesscomponent/simplecomponent'
import SimpleStateComponent from './components/statefulcomponent/simplestatecomponent';
import EmployeeFormComponent from './components/employeeformcomponent/employeeformcomponent';
import EmployeeFormComponentReusable from './components/employeeformcomponent/employeeformcomponentreusable';
// web utilities for creating a build and hosting
import reportWebVitals from './reportWebVitals';
import MultipleReusableComponent from './components/somecomponents/multipledropdowncomponent';

// the render() function of ReactDOM object aceepts tow parameters
// Parameter 1: The component to be rendered in HTML DOM aka Mounted
// Parameter 2: The DOM element on index.html where the component will be mounted  

const mymessage = "I am the message from parent";
ReactDOM.render(
  <React.StrictMode>
    {/* The JSX Parser of the React wil generate propeties dynamically for the Component */}
    {/* the SimpleStateCompopnent will read value of  'message' using this.props.message */}
    <MultipleReusableComponent/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
