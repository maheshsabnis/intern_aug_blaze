import React, { Component } from "react";
// import classes for defining the Routing INfrastructure
import { Route, Redirect, Link, Switch } from "react-router-dom";
import CreateDepartmentComponent from "./createdepartment";
import EditDepartmentComponent from "./editdepartment";
import ListDepartmentsComponent from "./listdepartmentscomponent";

class MainSPAComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container-lg">
        <h1>React SPA using react-router-dom</h1>

        {/* Define Links for Routing */}

        <table className="table table-bordered table-striped">
            <tbody>
                <tr>
                    <td>
                        {/* By Default the  LIstDepartmentsComponent will be loaded*/}
                        <Link to="/">List of Departments</Link>
                    </td>
                    <td>
                    <Link to="/create">Create Department</Link>
                    </td>
                </tr>
            </tbody>
        </table>

        {/* Defining the Route Table */}
        <Switch>
            <Route exact path="/" component={ListDepartmentsComponent}></Route>
            <Route exact path="/create" component={CreateDepartmentComponent}></Route>
            {/* The Route  Expression with parameter*/}
            <Route exact path="/edit/:id" component={EditDepartmentComponent}></Route>
            {/* Define a Default Redirect */}
            <Redirect to="/"></Redirect>
        </Switch>
      </div>
    );
  }
}

export default MainSPAComponent;
