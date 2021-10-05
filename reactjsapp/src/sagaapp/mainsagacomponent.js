import React from "react";
import GetDepartmentsComponent from "./views/getdepartmentscomponent";
import ListDepartmentsReduxComponent from "./views/listdepartments";

const MainSagaComponent = () => (
  <div className="container">
    <h1>The React-Redux-SAGA Application</h1>
    <GetDepartmentsComponent></GetDepartmentsComponent>
    <hr />
    <ListDepartmentsReduxComponent></ListDepartmentsReduxComponent>
  </div>
);

export default MainSagaComponent;
