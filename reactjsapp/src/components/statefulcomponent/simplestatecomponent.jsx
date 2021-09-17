import React, { Component } from "react";

class SimpleStateComponent extends Component {
  // define a state in the constructor
  // the 'props' represents the data received from the parent
  constructor(props) {
    super(props);
    // defining the lcoal state
    this.state = {
      firstName: "",
      middleName: "",
      lastName: "",
      fullName: "",
    };
  }
  // evt is the event raised on the HTML element where the handleFirstNameChange function is
  // bound
  handleFirstNameChange(evt){
    // the firstName will be updated when the element is changed with the new value
    this.setState({firstName:evt.target.value},()=>{
      console.log(this.state.firstName);
    });
  }
  handleMiddleNameChange(evt){
    // the middleName will be updated when the element is changed with the new value
    this.setState({middleName:evt.target.value});
  }
  handleLastNameChange(evt){
    // the lastName will be updated when the element is changed with the new value
    this.setState({lastName:evt.target.value});
  }
 // one change for all
  handleAllInputChanges(evt){
    this.setState({[evt.target.name]:evt.target.value},()=>{
      console.log(`Element Name ${evt.target.name} and Element Value ${evt.target.value}`);
    });
  } 



  showFullName(){
    // update the fuullName based on updated values of other state properties
    this.setState({fullName: `${this.state.firstName} ${this.state.middleName} ${this.state.lastName}`.toUpperCase()});
  }
  render() {
    return (
      <div>
        <h1>The Stateful Component</h1>
        <div>
          <strong>Value Received from the Parent : {this.props.message}</strong>
        </div>
        <hr />
        <div>
          {/* Binding State Property with the UI Element */}
          First Name: <input type="text" name="firstName"  value={this.state.firstName}
           onChange={this.handleAllInputChanges.bind(this)}/>
        </div>
        <br />
        <div>
          Middle Name: <input type="text" name="middleName"  value={this.state.middleName}
           onChange={this.handleAllInputChanges.bind(this)}/>
        </div>
        <br />
        <div>
          Last Name: <input type="text" name="lastName"  value={this.state.lastName}
           onChange={this.handleAllInputChanges.bind(this)}/>
        </div>
        <br />
        <div>
          <input type="button" value="Get Full Name" 
          onClick={this.showFullName.bind(this)}/>
        </div>
        <br />
        <div>The Full Name is = {this.state.fullName}</div>
        <hr />
        <ChildComponent name={this.state.fullName}></ChildComponent>
      </div>
    );
  }
}

class ChildComponent extends Component {
  render(){
    return (
      <div>
        <h3>
          Full Name in Chidl Component {this.props.name}
        </h3>
      </div>
    );
  }
} 

export default SimpleStateComponent;
