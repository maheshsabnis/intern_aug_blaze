import React, { Component } from "react";
import { DepartmentHttpService } from "./../services/service";
class CreateDepartmentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DeptNo: 0,
      DeptName: "",
      Location: "",
      Capacity: 0,
      departments: [],
      columnHeaders: [],
      message: "",
    };
    this.serv = new DepartmentHttpService();
  }

  handleAllChanges = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  clear = () => {
    this.setState({ DeptNo: 0 });
    this.setState({ DeptName: "" });
    this.setState({ Location: "" });
    this.setState({ Capacity: 0 });
  };
  save = () => {
    let dept = {
      DeptNo: this.state.DeptNo,
      DeptName: this.state.DeptName,
      Location: this.state.Location,
      Capacity: this.state.Capacity,
    };

    this.serv
      .postData(dept)
      .then((resp) => {
        this.setState({ message: `Data Save Successfully` });
        // navigate to the LIstDepartmentsComponent
        this.props.history.push("/")
      })
      .catch((error) => {
        this.setState({ message: `Error Occured ${error}` });
      });
  };

  render() {
    return (
      <div className="container">
        <h4>Create New Department</h4>
        <form>
          <div className="form-group">
            <label htmlFor="DeptNo">DeptNo</label>
            <input
              type="text"
              name="DeptNo"
              className="form-control"
              value={this.state.DeptNo}
              onChange={this.handleAllChanges.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="DeptName">DeptName</label>
            <input
              type="text"
              name="DeptName"
              className="form-control"
              value={this.state.DeptName}
              onChange={this.handleAllChanges.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Location">Location</label>
            <input
              type="text"
              name="Location"
              className="form-control"
              value={this.state.Location}
              onChange={this.handleAllChanges.bind(this)}
            />
            <div className="form-group">
              <label htmlFor="Capacity">Capacity</label>
              <input
                type="text"
                name="Capacity"
                className="form-control"
                value={this.state.Capacity}
                onChange={this.handleAllChanges.bind(this)}
              />
            </div>
          </div>
          <hr />
          <div className="btn-group">
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
      </div>
    );
  }
}

export default CreateDepartmentComponent;
