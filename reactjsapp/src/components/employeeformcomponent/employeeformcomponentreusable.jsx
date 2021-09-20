import React, { Component } from "react";
// imporing the constants
import { Designations, Departments } from "../../models/constants";
import { EmployeeLogic } from "../../models/employeelogic";
// importing component
import DropDownComponent from "../reusablecomponents/dropdowncomponent";
class EmployeeFormComponentReusable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EmpNo: 0,
      EmpName: "",
      Salary: 0,
      Designation: "",
      DeptName: "",
      departments: Departments,
      designations: Designations,
      employees: [],
      columnHeaders: [],
    };
    // define an instance of the external class i.e. EmployeeLogic
    // Please do not dclare or initialize anything before the state property for optimization reason
    this.logic = new EmployeeLogic();
    // read default employees (Logically illigal)
    this.state.employees = this.logic.getEmployees();
    this.state.columnHeaders = Object.keys(this.state.employees[0]);
  }

  // writing the chnage event onece-For-All editable elements

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      console.log(
        `Designation = ${this.state.Designation} and DeptName = ${this.state.DeptName}`
      );
    });
  };

  clear = () => {
    // save the data in employees array
    this.setState({ EmpNo: 0 });
    this.setState({ EmpName: "" });
    this.setState({ Designation: "" });
    this.setState({ Salary: 0 });
    this.setState({ DeptName: "" });
  };

  save = () => {
    let emp = {
      EmpNo: this.state.EmpNo,
      EmpName: this.state.EmpName,
      Designation: this.state.Designation,
      Salary: this.state.Salary,
      DeptName: this.state.DeptName,
    };
    // save the data in employees array
    //   this.state.employees = this.logic.saveEmployee(emp);
    // create a temp arre same as employees
    let temp = this.state.employees.slice();
    // add record in temp array
    temp = this.logic.saveEmployee(emp);
    // set state for employees using the temp array
    this.setState({ employees: temp });

    console.log(`Employees in State = ${JSON.stringify(this.state.employees)}`);
  };

  handleDesignChange = (evt) => {
    this.setState({ Designation: evt.target.value }, () => {
      alert(`Selected Designation ${this.state.Designation}`);
    });
  };


  getSelectedDesignation=(desig)=>{
    this.setState({Designation:desig});
  }

  getSelectedDeptName=(dname)=>{
    this.setState({DeptName:dname});
  }

  getSelectedEmployeeFromTable=(emp)=>{
      alert(`Selected Employee ${JSON.stringify(emp)} `);
    this.setState({ EmpNo: emp.EmpNo });
    this.setState({ EmpName: emp.EmpName });
    this.setState({ Designation: emp.Designation });
    this.setState({ Salary: emp.Salary });
    this.setState({ DeptName: emp.DeptName });
  }
  render() {
    return (
      <div className="container">
        <h1>The Employe Form Component taht is Re-Using DropDownComponent</h1>
        <form>
          <div className="form-group">
            <label>EmpNo</label>
            <input
              type="text"
              name="EmpNo"
              className="form-control"
              value={this.state.EmpNo}
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label>EmpName</label>
            <input
              type="text"
              name="EmpName"
              className="form-control"
              value={this.state.EmpName}
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label>Designation</label>
            {/* the DropDownComponent will use
              stateProperty, dataSource and selected value as 'props'*/}
             <DropDownComponent dataSource={this.state.designations}
              stateProperty={this.state.Designation}
              selectdValue={this.getSelectedDesignation.bind(this)}></DropDownComponent>
          </div>
          <div className="form-group">
            <label>Salary</label>
            <input
              type="text"
              className="form-control"
              name="Salary"
              value={this.state.Salary}
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label>Dept Name</label>
            <DropDownComponent dataSource={this.state.departments}
              stateProperty={this.state.DeptName}
              selectdValue={this.getSelectedDeptName.bind(this)}></DropDownComponent>
          </div>
          <div className="form-group btn-group">
            <input
              type="button"
              value="Clear"
              className="btn btn-primary"
              onClick={this.clear.bind(this)}
            />
            <input
              type="button"
              value="Save"
              className="btn btn-success"
              onClick={this.save.bind(this)}
            />
          </div>
        </form>
        <hr />
        <div className="container">
          <h3>List of Employees</h3>
          {/* <strong>
                        {JSON.stringify(this.state.employees)}
                    </strong> */}
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                {this.state.columnHeaders.map((head, idx) => (
                  <th key={idx}>{head}</th>
                ))}
              </tr>
            </thead>

            <tbody>
                {/* Call a method and pass data to it */}
                {
                    this.state.employees.map((emp,idx)=>(
                         
                        <tr key={idx} onClick={()=>this.getSelectedEmployeeFromTable(emp)}>
                            {
                                this.state.columnHeaders.map((head,i)=>(
                                    <td key={i}>
                                        {emp[head]}
                                    </td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default EmployeeFormComponentReusable;
