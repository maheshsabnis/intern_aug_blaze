import React, { useContext } from "react";

// import the DataContext

import { DataContext } from "./../dqatacontext";

const TableComponent = () => {
  // Consume the data from DataContext
  // internally, this wull call the Consumer
  const dataSource = useContext(DataContext);

  if (dataSource === undefined || dataSource.length === 0) {
    return <div className="alert alert-danger">No records to display</div>;
  } else {
    let columnHeaders = Object.keys(dataSource[0]);
    return (
      <div className="container">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              {columnHeaders.map((head, idx) => (
                <th key={idx}>{head}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {dataSource.map((dept, idx) => (
              <tr key={idx}>
                {columnHeaders.map((head, i) => (
                  <td key={i}>{dept[head]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

export default TableComponent;
