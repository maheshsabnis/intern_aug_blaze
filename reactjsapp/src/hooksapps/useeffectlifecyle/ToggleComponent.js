import React, {useState} from 'react';
import MouseMoveComponent from './mousemovecomponent';
const ToggleComponent=()=>{
    const [show, canShow] = useState(true);

    return (
        <div className="container">
            <h2>The UseEffect Demo</h2>
            <button onClick={()=>canShow(!show)}>Toggle</button>
            {
                show && <MouseMoveComponent></MouseMoveComponent>
            }
            <hr/>  
            <div className="container">
              <strong>
                The Toggle Compoonent    
              </strong>    
            </div>    
        </div>
    );
};


export default ToggleComponent;
