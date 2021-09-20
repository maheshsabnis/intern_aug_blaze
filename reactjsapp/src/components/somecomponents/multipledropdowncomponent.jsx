import React, { Component } from 'react';
import DropDownComponent from '../reusablecomponents/dropdowncomponent';
class MultipleReusableComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            states:['MH','MP', 'UP', 'GJ', 'KR', 'TN', 'TS', 'KL', 'RJ'],
            cities:['Pune', 'Vadodhara', 'Indore', 'Jaipur', 'Prayag', 'Kashi', 'Zhansi', 'Nagpur']
        };
    }
    render() { 
        return (
            <div className="container">
                  <DropDownComponent dataSource={this.state.states}></DropDownComponent>  
                  <hr />
                  <DropDownComponent dataSource={this.state.cities}></DropDownComponent>  

            </div>
          );
    }
}
 
export default MultipleReusableComponent;
