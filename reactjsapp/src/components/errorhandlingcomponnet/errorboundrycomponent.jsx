import React, { Component } from "react";

class ErrorBoundryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: "",
    };
  }

  // this property will be invoked by rendering thread where the component is being rendered
  // if the child component throws any bexception, the rendering thread will listen to it and
  // pass the error details this property
  // This property will implicitely call 'setState()' to update the state property with
  // error message
  static getDerivedStateFromError(error) {
    return {
      errorMessage: error.toString(),
    };
  }
  // catch and log the error message
  componentDidCatch = (error, logInfo) => {
    console.log(error.toString(), logInfo.componentStack);
  };

  render() {
    if (this.state.errorMessage) {
      return (
        <div className="container">
          <strong>Error Occured in rendering the component</strong>
          <hr />
          <strong>{this.state.errorMessage}</strong>
        </div>
      );
    } else {
        // render the child component successfully
        return this.props.children; 
    }
  }
}

class MyCounterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  updateCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    if (this.state.counter > 10)
      throw new Error("You have reached to max clicks");
    else {
      return (
        <div className="container">
          <strong>The Counter Value = {this.state.counter}</strong>
          <br />
          <input
            type="button"
            value="Update Counter"
            className="btn btn-primary"
            onClick={this.updateCounter.bind(this)}
          />
        </div>
      );
    }
  }
}

class MyErrorBoundryContainerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  refresh = () => {
    window.history.go(0);
  };
  render() {
    return (
      <div className="contsiner">
        <h2>THe Container Component USing ErrorBoundryCOmponent for Handling Errors</h2>
        <hr />
        {/* Managing an execution of the MyCounterComponent inside the 
        ErrorBoundryComponent*/}
        <ErrorBoundryComponent>
             <MyCounterComponent></MyCounterComponent>
        </ErrorBoundryComponent>     
        <hr />
        <input
          type="button"
          value="Refresh"
          onClick={this.refresh.bind(this)}
        />
      </div>
    );
  }
}

export default MyErrorBoundryContainerComponent;
