import React, {useState, useEffect} from 'react';

const MouseMoveComponent=()=>{
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);

    const getPostions=(evt)=>{
        setX(evt.clientX);
        setY(evt.clientY);
    }

    useEffect(()=>{
        window.addEventListener('mousemove', getPostions);
        return()=>{
            console.log('Unmounting the Component');
            window.removeEventListener('mousemove', getPostions);
        }
    },[]);

    

    return (
        <div className="container">
            x = {x} and y = {y}
        </div>
    );

}

export default MouseMoveComponent;