import React from 'react';
import {usePromise} from './usepromisehook';
const UsePromiseHookComponent=()=>{
    const data = usePromise("http://localhost:9081/api/departments");
    const products = usePromise("https://apiapptrainingnewapp.azurewebsites.net/api/Products");
    if(data === undefined || products === undefined) {
        return (
            <div className="container">
                <strong>New Data to display</strong>
            </div>
        );
    }
    
    return (
        <div className="container">
            {
                JSON.stringify(data.rows)
            }
            <hr />
            {
                JSON.stringify(products)
            }
        </div>
    );
};

export default UsePromiseHookComponent;