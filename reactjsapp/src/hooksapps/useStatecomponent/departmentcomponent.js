import React, { useState,useEffect } from "react";

import {DepartmentHttpService} from './../../services/service';

// import the DataContext and the COmponent
import {DataContext} from './../dqatacontext';
import TableComponent from "../reusablescomponents/tablecomponent";
import TableWithEventComponent from "../reusablescomponents/tablecomponentwithevent";

const DepartmentComponent = () => {
  const [dept, setDept] = useState({
    DeptNo: 0,
    DeptName: "",
    Location: "",
    Capacity: 0,
  });

  const [departments, updateDepts] = useState([]);
  const [message,setMessage] =useState('');
  const serv = new DepartmentHttpService();

  const clear = () => {
      // clear the department object 
    setDept({
      DeptNo: 0,
      DeptName: "",
      Location: "",
      Capacity: 0,
    });
  };
   

  // useEffect to make call
  useEffect(()=>{
      serv.getData().then((resp)=>{
          updateDepts(resp.data.rows);
      }).catch((error)=>{
            setMessage(error.message);
      });
  },[]); // the dependency parameter will detect that the 'departments' state property is updated so it will stop executing the asyn call



  const save=()=>{
    //   // update the departments by adding new dept in it
    // updateDepts([...departments,dept]);
    serv.postData(dept).then((resp)=>{
        updateDepts(resp.data.rows);
    }).catch((error)=>{
          setMessage(error.message);
    });
     
  };

  return (
    <div className="container">
      <h2>The Department Functional Component using Hooks</h2>
      {/* onChange={(evt)=>setDept({...dept, DeptNo:parseInt(evt.target.value)})}
          updating the DeptNo of dept object when onChange is fired 
          The same 'dept' object will be updated*/}
      <form>
        <div className="form-group">
          <label htmlFor="DeptNo">DeptNo</label>
          <input
            type="text"
            name="DeptNo"
            className="form-control"
            value={dept.DeptNo}
            onChange={(evt) =>
              setDept({ ...dept, DeptNo: parseInt(evt.target.value) })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="DeptName">DeptName</label>
          <input
            type="text"
            name="DeptName"
            className="form-control"
            value={dept.DeptName}
            onChange={(evt) => setDept({ ...dept, DeptName: evt.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Location">Location</label>
          <input
            type="text"
            name="Location"
            className="form-control"
            value={dept.Location}
            onChange={(evt) => setDept({ ...dept, Location: evt.target.value })}
          />
          <div className="form-group">
            <label htmlFor="Capacity">Capacity</label>
            <input
              type="text"
              name="Capacity"
              className="form-control"
              value={dept.Capacity}
              onChange={(evt) =>
                setDept({ ...dept, Capacity: parseInt(evt.target.value) })
              }
            />
          </div>
        </div>
        <hr />
        <div className="btn-group">
          <input type="button" value="Clear" className="btn btn-primary" onClick={clear} />
          <input type="button" value="Save" className="btn btn-success" onClick={save}/>
        </div>
      </form>
      <hr />
      <strong>
          {message}
      </strong>
      {/* <div className="container">
          <strong>
               {JSON.stringify(departments)} 
          </strong>
      </div> */}
      {/* Pass data to the TableComponent using  Context*/}
       <DataContext.Provider value={departments}>
            <TableComponent></TableComponent>
       </DataContext.Provider>

      <hr />
      <h4>Passing data to child component using COntext with the callback</h4>
      {/* the setDept will receive the data from child component and this data will be 
       updated in the dept object*/}
       <DataContext.Provider value={{departments, setDept}}>
           <TableWithEventComponent></TableWithEventComponent>
       </DataContext.Provider>
    </div>

  );
};

export default DepartmentComponent;
