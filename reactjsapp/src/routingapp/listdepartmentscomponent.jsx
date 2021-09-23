import React, { Component } from "react";
import {DepartmentHttpService} from './../services/service'
import {Link} from 'react-router-dom';
class ListDepartmentsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        departments:[],
        message:'',
        columnHeaders: []
    };
    this.serv = new DepartmentHttpService();
  }

  loaedData(){
    this.serv
    .getData()
    .then((resp) => {
      this.setState({ departments: resp.data.rows }, () => {
        this.setState({ message: `Data Received Successfully` });
        this.setState(
          { columnHeaders: Object.keys(this.state.departments[0]) },
          () => {
            console.log(`Columns ${this.state.columnHeaders}`);
          }
        );
      });
    })
    .catch((error) => {
      this.setState({ message: `Error Occured ${error}` });
    });
  }

  // Making AJAX Call in componentDidMount()
  componentDidMount = () => {
    this.loaedData();
  };

  render() {
    return (
      <div className="container">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              {this.state.columnHeaders.map((head, idx) => (
                <th key={idx}>{head}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {this.state.departments.map((dept, idx) => (
              <tr key={idx}>
                {this.state.columnHeaders.map((head, i) => (
                  <td key={i}>{dept[head]}</td>
                ))}
                <td>
                    <button className="btn btn-warning">
                         <Link to={`/edit/${dept.DeptNo}`}>Edit</Link>
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListDepartmentsComponent;
