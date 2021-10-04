// imporing the React Modules the ES 6 Concept of Module Export and Import
import React from 'react';
import ReactDOM from 'react-dom';

// load bootstrap
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

// imporing the CSS file as a Module. This file will be loaded in the current JS Object context
// and will be available for all React Components loaded under the current context
import './index.css';
import reportWebVitals from './reportWebVitals';


// import the redux and react-redux object model
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reduxapp/reducers/reducers';
import MainReduxComponent from './reduxapp/mainreduxcomponent';
 
// define a store object
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: will subscribe to the REDUX extension 
// of the browser to show the simulation
let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());

ReactDOM.render(
  <React.StrictMode>
    {/* the MainReduxComponent will now have its lifecycle under the redux store*/}
      <Provider store={store}>
        <MainReduxComponent></MainReduxComponent>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
