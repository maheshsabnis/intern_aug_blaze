import React from 'react';

function HelloTestComponent(props){
    // Test 1 with the props.message
    if(props.message){
        return (<h1>Hello, Mr. {props.message}</h1>);
    }
    // Test 2 without props.message 
    else {
        return (<h1>Hello, Mr. NoName</h1>);
    }
}

export default HelloTestComponent;