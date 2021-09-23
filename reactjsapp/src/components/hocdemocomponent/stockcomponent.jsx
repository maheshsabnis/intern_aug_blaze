import React, { Component } from 'react';
import DataGridComponent from '../reusablecomponents/datagridcomponent';
class StockComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() { 
        return (  
             <div className="container">
                 <h1>The Stock Component</h1>
                 <div className="container">
                     <strong>
                         The Message Specific to the Stock COmponent {this.props.message}
                     </strong>
                 </div>
                 <DataGridComponent dataSource={this.props.data}></DataGridComponent>
             </div>
        );
    }
}
 
export default StockComponent;
