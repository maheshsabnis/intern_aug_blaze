import React,{useState} from 'react';

const SimpleCalculatorComponent=()=>{
    // declare the state with initial value
    const [x,setX]=useState(0);
    const [y,setY]=useState(0);
    const [res,setRes] =useState(0);
    
    // the logic
    const add=()=>{
        setRes(x+y);
    }
    const clear=()=>{
        setX(0);
        setY(0);
        setRes(0);
    }
    
    return (
        <div className="container">
            {/* onChange={(evt)=>setX(parseInt(evt.target.value))} when onCHange is fired the Dispatch will be invoked by useState() and the state will be updated */}
            <h4>The React.js Hooks for State Management</h4>
            x = <input type="text" className="form-control" value={x}
             onChange={(evt)=>setX(parseInt(evt.target.value))}/>
            <br />
            y = <input type="text" className="form-control" value={y}
             onChange={(evt)=>setY(parseInt(evt.target.value))}/>
            <br />
            Result = <input type="text" className="form-control" value={res} readOnly/>
            <br />
            <div className="btn-group">
                <input type="button" value="Clear" className="btn btn-warning"
                onClick={clear}/>
                <input type="button" value="Add" className="btn btn-success"
                  onClick={add}/>
            </div>
        </div>
    );


};


export default SimpleCalculatorComponent;