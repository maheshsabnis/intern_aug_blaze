import React from 'react';
import ListOptionsComponent from './listoptionscomponent';

function ListNameComponent(props){
   // const names = ['Tejas', 'Mahesh', 'Ramesh', 'Ram', 'Sabnis'];
    if(!props.names.length) {
        return (
            <div className="container">
                <span className="empty">
                No Names to Display
                </span>
            </div>
        );
    }
    return (
        <div className="container">
            <ol className="names">
                {
                    props.names.map((n,idx)=>(
                        <ListOptionsComponent key={idx} value={n}></ListOptionsComponent>
                    ))
                }
            </ol>
        </div>
    )
}

export default ListNameComponent;