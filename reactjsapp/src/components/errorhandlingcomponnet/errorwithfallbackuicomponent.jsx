import React, { Component } from 'react'

class MyCounterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            counter:0
        };
    }

    updateCounter=()=>{
        this.setState({counter:this.state.counter + 1});
    }

    render() { 
        try{
            if(this.state.counter > 10) throw new Error('You have reached to max clicks');
            else {
                return(
                    <div className="container">
                        <strong>
                            The Counter Value = {this.state.counter}
                        </strong>
                        <br />
                        <input type="button" value="Update Counter" className="btn btn-primary"
                         onClick={this.updateCounter.bind(this)}/>
                    </div>
                );
            }

        } catch(e){
            return(
                <div className="container">
                    <strong>
                        Error Occured {e.message}
                    </strong>
                   
                </div>
            );
        }
        
       
    }
}

class MyContainerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    refresh=()=>{
        window.history.go(0);
    }
    render() { 
        return (  
            <div className="contsiner">
                <h2>THe Container COmponent</h2>
                <hr />
                <MyCounterComponent></MyCounterComponent>  
                <hr />
                <input type="button" value="Refresh" 
                 onClick={this.refresh.bind(this)}/>
            </div>
        );
    }
}
 
export default MyContainerComponent;

