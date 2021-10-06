import React, { useState } from 'react';

const EventTestComponent=(props)=>{
    const [value, setValue] = useState(false);

    return(
        <div className="container">
            <button className="btn btn-primary"
             onClick={()=>{
                 setValue(!value);
                 props.onClick();
             }}
            >
                {value === true? "Update": "Save"}
            </button>
            <hr/>
            <div className="dv">{value.toString()}</div>
        </div>
    );
};


export default EventTestComponent;