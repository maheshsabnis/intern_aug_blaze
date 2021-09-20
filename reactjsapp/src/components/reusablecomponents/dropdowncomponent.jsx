import React, { Component } from "react";
class DropDownComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleChanged=(evt)=>{
      // this function will be subscribed by the parent Component
      this.props.selectdValue(evt.target.value);
  }
  render() {
    // Parameters Needed by the current UI for ganareting select
    // 1. Collection (e.g. an Array to generate option)
    // 2. A primitive property e.g. string to emit a selected value of option from this component
    // to its parent component
    // 3. A function that will be used to emit the selected value based on 'onChange' event
    if (this.props.dataSource === undefined) {
      return (
        <div className="container">
          <strong>
            The data passed to the component is not present or undfined
          </strong>
        </div>
      );
    } else {
      return <select className="form-control"
         value={this.props.stateProperty}
         onChange={this.handleChanged.bind(this)}
       >
            {
                this.props.dataSource.map((rec,idx)=>(
                    <option key={idx} value={rec}>{rec}</option>
                ))
            }
      </select>;
    }
  }
}

export default DropDownComponent;
