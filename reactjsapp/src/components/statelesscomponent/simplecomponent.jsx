import React, { Component } from "react";
// importing the component from the other file
import SomeOtherComponent from "./someothercomponent";

// the class component
class SimpleComponent extends Component {
  render() {
    return (
      <div>
        <h1>The Simple Stateless Component</h1>
        {/* Using the component as a custom element */}
        <OtheComponent></OtheComponent>
        <br />
        <SomeOtherComponent></SomeOtherComponent>
      </div>
    );
  }
}

class OtheComponent extends Component {
    render(){
        return(
            <div>
                <h2>The Other Component</h2>
            </div>
        );
    }
}


// export the component
export default SimpleComponent;
