import React from 'react';

import {getDepartments,saveDepartment} from './../actions/actions';

import {connect} from 'react-redux';

const GetDepartmentsComponent=(props)=>{
  let d = {};
  return (
      <div className="container">
          <input type="button" className="btn btn-primary" value="Get Departments"
           onClick={props.getDepartments}/>
          <button className="btn btn-success" onClick={()=>props.saveDepartment(d)}>
              Save
          </button>
           <hr/>
           <div className="alert alert-danger">
               <strong>
                   Newly Added Department is
                   <br/>
                   {JSON.stringify(props.dept)} 
               </strong>
           </div>
      </div>
  );
};

// implement the mapDispatchToProps object that will
// map the action to be dispatched to props of the  component

const mapDispatchToProps ={
    // props:actual action name to be dispatched
    getDepartments: getDepartments,
    saveDepartment: saveDepartment
};

const mapStateToProps=state=>({
   dept:state.department
});
// export default GetDepartmentsComponent;
// lets connect the mapDispatchToProps with the redux Store
// using 'connect()' method
// Parameters to connect() method
// P1: the MapStateToProps: used to subscribe / connect the state from store
// with the component
// P2: Mapping the action to the event of the component and hence
// connecting it to store so that the reducer and middleware will
// monitor the action 
export default connect(mapStateToProps, mapDispatchToProps)(GetDepartmentsComponent);
