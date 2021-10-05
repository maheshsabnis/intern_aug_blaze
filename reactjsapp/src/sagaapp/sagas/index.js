import {DepartmentHttpService} from './../../services/service';

import {take, takeLatest, call, put, all} from 'redux-saga/effects'

// create a function that will call the method from the Http Service

function getDepartments(){
    let serv = new DepartmentHttpService();
    // get the promise and read the data from it
    // the resolve using 'then()' also returns a promise object 
    const response = serv.getData().then((result)=> result.data);
    // collect the promise object containing the data in it and return it
    // by resolving the promise object explicitely so that teh caller of the method
    // need not subscribe it again
    return  Promise.resolve(response); 
}

function postDepartment(dept){
    let serv = new DepartmentHttpService();
    const response = serv.postData(dept).then((result)=>result.data);
    // response.then((d)=>{
    //     console.log(JSON.stringify(d));
    // });
   return Promise.resolve(response);   
}



// write 2 combination methods 1 for monitoring the dispatched input action and other
// for dispatching the output action with the data received from the Promise call

function* outputActionGetDepartmentsSuccessGenerator(){
    console.log('linking Get Departments oitput action');

    // call to the method that is returning the resolved promise
    const response = yield call(getDepartments);
    console.log(`Received Response ${JSON.stringify(response)}`);
    // dispatch the output action
    yield put({
        type: 'GET_DEPARTMENTS_SUCCESS',
        departments: response || [{error: 'GET_DEPARTMENTS_FAILED'}]
    });
}

function* inputActionGetDepartmentsGenerator(){
    console.log('MOnitoring Get Departments input action');
    // Listen to the input ispatched action and map it to the 
    // output action
    yield takeLatest('GET_DEPARTMENTS', outputActionGetDepartmentsSuccessGenerator);
}

function* outputActionSaveDepartmentSuccessGenerator(){
    // read parameters of the action which is dispatched
    const parameters = yield take('SAVE_DEPARTMENT');
    // read the data passed to action method when the dispatch has been taken place
    const dept = parameters.dept;
    console.log(`Received Parameter for Post ${JSON.stringify(dept)}`);
    // call the method
     //const response = yield call(postDepartment, dept);
       const response = yield call(()=>postDepartment(dept)); 
    console.log(`Generator in Post success is = ${JSON.stringify(response)}`);
    // dispatch an putput action 
    yield put({
        type: 'SAVE_DEPARTMENT_SUCCESS',
        department: response || [{error: 'SAVE_DEPARTMENT_FAILED'}]
    });
}

function* inputActionSaveDepartmentGenerator(){
    yield takeLatest('SAVE_DEPARTMENT', outputActionSaveDepartmentSuccessGenerator);
}

// create a single root saga that will be used in store creation along with the 
// reducer and will be used to monitor the dispatched actions

export default function*  rootSaga(){
    console.log('SAGA is monitoring all');
    yield all([inputActionGetDepartmentsGenerator(),inputActionSaveDepartmentGenerator()]);
}

