import React, { Component } from "react";

// the props an object used to communicate across components
function MyFunctionalComponent(props) {
  // the local constant property declaration
  const value = "The Functional Component Local Declaration";
  let msg = "Mahesh ";
  // the dipslay has the default scope with the funcational component so its is
  // not necessary to use the 'bind(this)'
  function display() {
    alert("HAHA HIHI HOOHOOO");
    msg = 'Mahesh Sabnis';
    console.log(`MSG == ${msg}`);
  }
  return (
    <div className="container">
      <h1>The Simple Class Component</h1>
      <strong>Value REceived from The Parent {props.message}</strong>
      <br />
      <strong>{value}</strong>
      <br />
      <input
        type="button"
        value="Click Me"
        className="btn btn-primary"
        onClick={display}
      />
      <br />
      <strong>
          {msg}
      </strong>
      <hr />
      <ExpressionComponent info={value}></ExpressionComponent>
      <hr />
      <ExpressionNoReturnComponent data={value}></ExpressionNoReturnComponent>
      <hr />
     
    </div>
  );
}

// Function Expression Component that returns HTML
const ExpressionComponent=(props)=>{
    // inner function block as constant expression
    const showMessage=()=>{
        alert('I am From Constant Function Expression that returns HTML');
    }
    return(
        <div className="container">
            <h2>The Function Expression Component THat Returns HTML</h2>
            <strong>
                {props.info}
            </strong>
            <hr />
            <input type="button" value="Click Me" className="btn btn-warning" 
             onClick={showMessage}/>
        </div>
    );
}


// Funcation Expression Component that  does not returns HTML but contains HTML in it
// this HTML will be rendered wher the component is used
const ExpressionNoReturnComponent=(props)=>(

    <div className="component">
        <h4>Expression COmponent But No Return</h4>
        <strong>
            {props.data}
        </strong>
    </div>
); 


// class RefComponent extends Component {
//     add(){
//         let res = parseInt(this.refs.n1) + parseInt(this.refs.n2);
//         alert(res);
//     }
//     render(){
//         return (
//             <div>
//                 <input type="text" ref="n1"/>
//                 <br />
//                 <input type="text" ref="n2"/>
//                 <br/>
//                 <input type="button" value="CLick Me" />
//             </div>
//         );
//     }
// }


export default MyFunctionalComponent;
