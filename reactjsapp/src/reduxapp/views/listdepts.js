import React from "react";
const ListDepartmentsReduxComponent =(props)=> {

  const handleRowClick=(p)=>{
    props.RowClick(p);
 }

    if(props.departments === undefined || props.departments.length === 0){
        return <div className="alert alert-danger">
             <strong>No Records to Display</strong>
        </div>
    } else {
        // let columnHeaders =[];
        // columnHeaders = Object.keys(props.departments[0]);
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
              <tr key={idx} onClick={()=>handleRowClick(dept)}>
                
                  <td>{dept.department.DeptNo}</td>
                  <td>{dept.department.DeptName}</td>
                  <td>{dept.department.Location}</td>
                  <td>{dept.department.Capacity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );}
 
}

export default ListDepartmentsReduxComponent;
