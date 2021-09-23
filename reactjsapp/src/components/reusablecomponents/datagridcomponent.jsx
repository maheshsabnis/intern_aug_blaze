import React, { Component } from "react";

class DataGridComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let columns = [];
    
    if (
      this.props.dataSource === undefined ||
      this.props.dataSource.length === 0
    ) {
      return (
        <div className="container">
          <strong>No Data To Display</strong>
        </div>
      );
    } else {
     columns =  Object.keys(this.props.dataSource[0]);
      return (
        <div className="container">
          <table className="table table-bordered table-striped">
             <thead>
                 <tr>
                     {
                         columns.map((h,i)=>(
                               <th key={i}>{h}</th>
                            ))
                     }
                 </tr>
             </thead>
             <tbody>
                 {
                     this.props.dataSource.map((rec,idx)=>(
                         <tr key={idx}>
                             {
                                  columns.map((h,i)=>(
                                    <td key={i}>{rec[h]}</td>
                                 ))
                             }   
                         </tr>
                     ))
                 }
             </tbody>
          </table>
        </div>
      );
    }
  }
}

export default DataGridComponent;
