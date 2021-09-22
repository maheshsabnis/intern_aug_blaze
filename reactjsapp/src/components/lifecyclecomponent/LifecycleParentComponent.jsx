 import React, { Component } from 'react';

 class LIfecycleComponent extends Component {
     constructor(props) {
         super(props);
         this.state = {  
             value:0
         };
         console.log('In the Constructor of the Parent Component');
     }
     componentDidMount=()=>{
        console.log('The Parent Component Component Did Mount');
     }
     componentDidUpdate=()=>{
        console.log('The Parent Component Component Did Update');
     }
     updateValue=(evt)=>{
         this.setState({value:parseInt(evt.target.value)});
     }
     render() { 

        console.log('Executing the Render() of Parent Component');
        if(this.state.value % 2 === 0){
            return (  
                <div className="container">
                    <h2>The Parent Component is now Showing Even Component</h2>
                    <input type="text" value={this.state.value}
                     onChange={this.updateValue.bind(this)}/>
                     <EvenComponent></EvenComponent>
                </div>
            );
        } else {
            return (  
                <div className="container">
                    <h2>The Parent Component is now Showing Odd Component</h2>
                    <input type="text" value={this.state.value}
                     onChange={this.updateValue.bind(this)}/>
                     <OddComponent></OddComponent>
                </div>
            );
        }
        
     }
 }

 class EvenComponent extends Component {
     constructor(props) {
         super(props);
         this.state = {  
             x:0,
             y:0
         };
         console.log('In the Constructor of the Event Component');
     }
     componentDidMount=()=>{
        console.log('The Even Component Component Did Mount');
        // let's subscribe to the MouseMove event
        window.addEventListener('mousemove', this.getMousePositions);
     }
     // updating the state of the Component based on Mouse Move Even
     getMousePositions=(evt)=>{
         this.setState({x: evt.clientX});
         this.setState({y: evt.clientY});
         console.log(`x = ${this.state.x} and y = ${this.state.y}`);
     }
     componentDidUpdate=()=>{
        console.log('The Even Component Component Did Update');
     }
     componentWillUnmount=()=>{
         console.log('The Even Component WIll Unmount');
         // underegister the event when the component is unmounted
        window.removeEventListener('mousemove', this.getMousePositions);

     }
     render() {
         console.log('Rendering Method of EvenComponent'); 
         return (  
              <div className="container">
                <h2>The Even Component</h2>
                x = {this.state.x} &&& y = {this.state.y}
              </div>             
         );
     }
 }
  

 class OddComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        console.log('In the Constructor of the Odd Component');
    }
    componentDidMount=()=>{
        console.log('The Odd Component Component Did Mount');
     }
     componentDidUpdate=()=>{
        console.log('The Odd Component Component Did Update');
     }
     componentWillUnmount=()=>{
         console.log('The Odd Component WIll Unmount');
     }
    render() {
        console.log('Rendering Method of OddComponent'); 
        return (  
           <div className="container">
               <h2>The Odd Component</h2>
                 <strong>
                     Value Received from Parent {this.props.value}   
                 </strong> 
           </div>
        );
    }
}
  
 export default LIfecycleComponent;
 