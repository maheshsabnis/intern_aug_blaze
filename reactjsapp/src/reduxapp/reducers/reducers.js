// define a reducer theat will monitor the dispatch action
// and based upon it the store will be updated

import {combineReducers} from 'redux';


// create a reducer that will monitor the ADD_DEPARTMENT action

export const addDepartmentReducer=(state,action)=>{
    switch(action.type) {
        case 'ADD_DEPARTMENT':
            // the state will contain tthew newly created department object
            return {
                department: action.department // this is returned from 
                // the addDepartment action see actions.js
            };
        default:
             return state; // return a default state       
    }
};

// create a single reducer function that will listen to all actions at once and
// invoke individual reducers functions and update store based on the state 
//returned from it
// the state=[] means the current state of the store is an empty array
export const listDepartmentsReducer=(state=[], action)=>{
    switch(action.type){
        case 'ADD_DEPARTMENT':
            // the current reducer function is invoking the
            // addDepartmentReducer function
            // the 'department' state returned by the 
            // addDepartmentReducer function will be
            // mutated into the state and hence the store 
            // will have newly added department
            return [...state, addDepartmentReducer(undefined,action)];
        default:
            return state;    
    }   
}

// use the combineReducers object from the redux package
// so that the single reducer will be used to declare the store
// since the 'listDepartmentsReducer' is invoking the 
// 'addDepartmentReducer' the combinbeReducers will have only
// the 'listDepartmentsReducer'
const reducers = combineReducers({listDepartmentsReducer});

export default reducers;