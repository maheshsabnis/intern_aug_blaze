import React, {useReducer, useEffect} from 'react';
import axios from 'axios';
// define an initialState object

const initialState ={
    loading:"", // initial value
    error:'', // error value
    data:[] // final state
};

// a function object that will monitor the state changes based on external operations
// parameter 1: the state to be updated and returned
// parameter 2: the current execution condition e.g. STATE, ERROR, SUCCESS
function appReducer(state, action){
    // the 'useReducer' is responsible for provide the action type e.f. START, ERROR, SUCCESS 
    switch(action.type){
        case 'DATA_FETCH_START':
            return {...state, loading:'yes'}; 
        case 'DATA_FETCH_FAILED':
            return {...state, loading:'Error Occuredd', error: action.payload}; // payload is the error message returnd by the external operation. 'payload' is provided by the useReducer()
        case 'DATA_FETCH_SUCCESS':
            return {...state, loading:'Complete', data: action.payload}; // payload is actual data        
        default: 
            return state;     
    }
} 



// a cusatom hook that will make use of useReducer to make an esxternal ajax call to fetch data

const useAxios=(url)=>{
    // data is the final state and dispatch is the action initiated for external execution
    const [data, dispatch] = useReducer(appReducer, initialState);
    useEffect(()=>{
        // set the state to loading 
        dispatch({type: 'DATA_FETCH_START'});
        axios(url)
        .then((response)=>{
            if(response.status !== 200 || response === undefined) throw Error("Call Failoed"); // error occured
            return response.data; // success
        })
        .then((data)=>{
            // collect the successful result
            console.log(`IN Sucessa ${JSON.stringify(data.rows)}`);
            dispatch({type: 'DATA_FETCH_SUCCESS', payload: data.rows});
        })
        .catch((error)=>{
            console.log('Error');
            // collect the error response
            dispatch({type: 'DATA_FETCH_FAILED', payload: error.message});
        });
 
    },[]);
    return data;
};

const UseReducerComponent=()=>{
  const finalData = useAxios("http://localhost:9081/api/departments");
  if(finalData === undefined) {
      return (
          <div className="container">
              <h3>No Data to display</h3>
          </div>
      );
  }
  return (
      <div className="container">
          {
              JSON.stringify(finalData)
          }
      </div>
  );
}

export default UseReducerComponent;