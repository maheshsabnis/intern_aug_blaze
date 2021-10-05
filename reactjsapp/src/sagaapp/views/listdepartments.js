import React from "react";
import {connect} from 'react-redux';
const ListDepartmentsReduxComponent =(props)=> {

  
    if(props.departments === undefined || props.departments.length === 0){
        return <div className="alert alert-danger">
             <strong>No Records to Display</strong>
        </div>
    } else {
         
    return (
      <div className="container">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
               <th>DeptNo</th>
               <th>DeptName</th>
               <th>Location</th>
               <th>Capacity</th>

            </tr>
          </thead>

          <tbody>
            {props.departments.map((dept, idx) => (
              <tr key={idx}>
                
                  <td>{dept.DeptNo}</td>
                  <td>{dept.DeptName}</td>
                  <td>{dept.Location}</td>
                  <td>{dept.Capacity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );}
 
}

// define mapStateToProps so that the component will subscribe to the store
const mapStateToProps = state=>({
    // props: the dtaa updated in store using GET_PRODUCTS_SUCCESS action
    departments: state.departments
}) ;

// export default ListDepartmentsReduxComponent;
// use connect to connect the component with store to read data
export default connect(mapStateToProps,null)(ListDepartmentsReduxComponent);