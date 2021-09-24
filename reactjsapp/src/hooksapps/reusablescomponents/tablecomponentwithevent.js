import React, { useContext } from "react";

// import the DataContext

import { DataContext } from "./../dqatacontext";

const TableWithEventComponent = () => {
  // Consume the data from DataContext
  // internally, this wull call the Consumer
  const subscriber = useContext(DataContext);
  console.log(`Values from DataContext = ${JSON.stringify(subscriber)}`);
  
  // read the data (0th) key from the subscriber
  let dataSource = subscriber[Object.keys(subscriber)[0]]; // array
  let action = subscriber[Object.keys(subscriber)[1]]; // dispatchAction

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
            {dataSource.map((row, idx) => (
              <tr key={idx} onClick={()=>action(row)}>
                {columnHeaders.map((head, i) => (
                  <td key={i}>{row[head]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

export default TableWithEventComponent;
