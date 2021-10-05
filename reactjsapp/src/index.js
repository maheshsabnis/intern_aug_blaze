// imporing the React Modules the ES 6 Concept of Module Export and Import
import React from 'react';
import ReactDOM from 'react-dom';

// load bootstrap
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

// imporing the CSS file as a Module. This file will be loaded in the current JS Object context
// and will be available for all React Components loaded under the current context
import './index.css';
import reportWebVitals from './reportWebVitals';

import MainSagaComponent from './sagaapp/mainsagacomponent';

// import redux store, saga middleware and compose object
// applyMiddleware: The method that will build the middleware
// and use this middleware at application level
// so that all dispatched actions will be monitored

// compose: the object that will be used to build the 'ENhancer'
// object so that the REDUX Tools and the SAGA Middleware
// will be passed to the store
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import reducer from './sagaapp/reducers/reducers';
import rootSaga from './sagaapp/sagas/index';
import createSagaMiddleware from 'redux-saga'; 

// build the middleware instance
const appSagaMiddleware = createSagaMiddleware();
// parameter enhancer
const parameterEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create a store
let store = createStore(reducer,
   parameterEnhancer(applyMiddleware(appSagaMiddleware)));

// keep the Root Saga running at the application level
appSagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
       <MainSagaComponent></MainSagaComponent>
    </Provider>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
