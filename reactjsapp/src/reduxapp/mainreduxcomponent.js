import React from 'react';

// Since the store must be subscribed by the React Components please 
// import corresponding hooks

// the 'useDispacth': used to dispatch action from the View
// the  'useSelector': hook is used to subscribe to the store
// and retrive data from it
import {useDispatch, useSelector} from 'react-redux'; 
import addDepartment from './actions/actions';
import selectDepartment from './actions/selectdept';

import CreateDepartmentReduxComponent from './views/createdept';
import ListDepartmentsReduxComponent from './views/listdepts';
const MainReduxComponent=()=>{
    // define a dispatch object using useDispatch  hook
    let dispatch = useDispatch();
    let depts = useSelector(state=>state.listDepartmentsReducer);
    const dept = useSelector(state=>state.selectDepartmentReducer);
  return (
        <div className="container">
            <h1>The React Redux Application</h1>
            {/* The AddDepatyment is a props that is bound with the addDepartment dispatched 
            action with the 'department' parameter */}
            <CreateDepartmentReduxComponent
             SelectedRow={dept}
             AddDepartment= {(department)=> dispatch(addDepartment(department))}></CreateDepartmentReduxComponent>
            <hr />
            {/* The MainReduxComponent is reading the 'depts' from the store
            using 'useSelector' and passing the latest state of departments from
            the store to 'departments' props of the  ListDepartmentsReduxComponent*/}
            <ListDepartmentsReduxComponent
             departments={depts}
             RowClick={(dept)=>dispatch(selectDepartment(dept))}
             ></ListDepartmentsReduxComponent>
        </div>

  );
};

export default MainReduxComponent;
