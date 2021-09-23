import React, { Component } from 'react';

export default function HoC(AppComponent,data){
     // function return the component
     return class extends Component {
         constructor(props){
             super(props);
             // data is local state property
             this.state={
                data: data
             };
             console.log(JSON.stringify(this.props));
         }

         render(){
             // ... this.props means any other local data
             return (
                 <div className="container">
                      {this.props.message}
                     <AppComponent data={this.state.data} {...this.props}></AppComponent>
                 </div>
             );
         }
     }
}