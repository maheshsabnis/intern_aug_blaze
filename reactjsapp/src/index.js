// imporing the React Modules the ES 6 Concept of Module Export and Import
import React from 'react';
import ReactDOM from 'react-dom';

// load bootstrap
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

// imporing the CSS file as a Module. This file will be loaded in the current JS Object context
// and will be available for all React Components loaded under the current context
import './index.css';
// importing the App Component
// import App from './App';
// import SimpleComponent  from './components/statelesscomponent/simplecomponent'
// import SimpleStateComponent from './components/statefulcomponent/simplestatecomponent';
// import EmployeeFormComponent from './components/employeeformcomponent/employeeformcomponent';
// import EmployeeFormComponentReusable from './components/employeeformcomponent/employeeformcomponentreusable';
// web utilities for creating a build and hosting
import reportWebVitals from './reportWebVitals';
// import MultipleReusableComponent from './components/somecomponents/multipledropdowncomponent';
import LIfecycleComponent from './components/lifecyclecomponent/LifecycleParentComponent';
import HttpCallComponent from './components/ajaxcallcomponent/httpCallComponent';
import SecureHttpCallComponent from './components/ajaxcallcomponent/securecallcomponent';
import MyContainerComponent from './components/errorhandlingcomponnet/errorwithfallbackuicomponent';
import MyErrorBoundryContainerComponent from './components/errorhandlingcomponnet/errorboundrycomponent';

import CompanyComponent from './components/hocdemocomponent/companycomponent';
import StockComponent from './components/hocdemocomponent/stockcomponent';
import HoC from './components/hocdemocomponent/hocComponent';
import {BrowserRouter} from 'react-router-dom';
import MainSPAComponent from './routingapp/mainroutingcomponent';

import MyFunctionalComponent from './hooksapps/functionalcomponent/simplefunctionalcomponent';
import SimpleCalculatorComponent from './hooksapps/useStatecomponent/simplecalculator';
import DepartmentComponent from './hooksapps/useStatecomponent/departmentcomponent';
import ToggleComponent from './hooksapps/useeffectlifecyle/ToggleComponent';
import UseMemoComponent from './hooksapps/usememocomponent/usememocomponent';
import UsePromiseHookComponent from './hooksapps/customhoolks/usecustomhookcomponent';
import UseReducerComponent from './hooksapps/usereducerdemo/usereducercomponent';
import ImportingComponent from './adv/codesplitting/importingcomponent';
import LazyLoadComponent from './adv/lazyloading/loazyloadcomponent';
import HelloTestComponent from './componentsfortest/hellotestcomponent';
import EventTestComponent from './componentsfortest/EventTestComponent';
import ListNameComponent from './componentsfortest/listnamecomponent';

// the render() function of ReactDOM object aceepts tow parameters
// Parameter 1: The component to be rendered in HTML DOM aka Mounted
// Parameter 2: The DOM element on index.html where the component will be mounted  

const companies = [
  {Id:1,CompanyName:'Microsoft', Budget:120000},
  {Id:2,CompanyName:'Oracle', Budget:620000},
  {Id:3,CompanyName:'Google', Budget:520000},
  {Id:4,CompanyName:'Adobe', Budget:80000},
  {Id:5,CompanyName:'Amazon', Budget:720000}
];

const stocks = [
  {Id:1,StockName:'Microsoft', Count:100},
  {Id:2,StockName:'Oracle', Count:600},
  {Id:3,StockName:'Google', Count:200},
  {Id:4,StockName:'Adobe', Count:800},
  {Id:5,StockName:'Amazon', Count:700}
];

const HocComponent1 = HoC(StockComponent, companies);
const HocComponent2 = HoC(CompanyComponent, companies);
 



// const mymessage = "I am the message from parent";
ReactDOM.render(
  <React.StrictMode>
    {/* The JSX Parser of the React wil generate propeties dynamically for the Component */}
    {/* the SimpleStateCompopnent will read value of  'message' using this.props.message */}
     <ListNameComponent></ListNameComponent>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
