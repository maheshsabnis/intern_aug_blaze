import React, { Component } from "react";

import { SecureCallService } from "./../../services/secureservice";

class SecureHttpCallComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserId: 0,
      RegUserName: "",
      RegPAssword: "",
      AuthUserName: "",
      AuthPAssword: "",
      message: "",
      departments: [],
      isRegUserNameValid:true,
      isRegPAsswordValid:true,
      isFormValid:true
    };
    this.serv = new SecureCallService();
  }

  clearReg = () => {
    this.setState({ UserId: 0 });
    this.setState({ RegUserName: "" });
    this.setState({ RegPAssword: "" });
  };
  clearAuth = () => {
    this.setState({ AuthUserName: "" });
    this.setState({ AuthPAssword: "" });
  };
  register() {
    let user = {
      UserId: this.state.UserId,
      UserName: this.state.RegUserName,
      PAssword: this.state.RegPAssword,
    };
    this.serv
      .registerUser(user)
      .then((resp) => {
        this.setState({ message: resp.data.message });
      })
      .catch((error) => {
        this.setState({ message: `Error Occured ${error.message}` });
      });
  }

  auth() {
    let user = {
      UserName: this.state.AuthUserName,
      PAssword: this.state.AuthPAssword,
    };
    this.serv
      .authUser(user)
      .then((resp) => {
        this.setState({ message: resp.data.message });
        // save token in the session storage
        sessionStorage.setItem("token", resp.data.token);
      })
      .catch((error) => {
        this.setState({ message: `Error Occured ${error.message}` });
      });
  }

  getValues() {
    // read the token
    let token = sessionStorage.getItem("token");
    if (token === undefined) {
      this.setState({ message: `Please send the Auth Header` });
    } else {
      this.serv
        .getData(token)
        .then((resp) => {
          this.setState({ departments: resp.data.message });
          this.setState({ message: `Data Received Successfully` });
        })
        .catch((error) => {
          this.setState({ message: `Error Occured ${error.message}` });
        });
    }
  }

  handleInPutChanges = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
    this.validateInputs(evt.target.name,evt.target.value);
  };

  // validation logic
  validateInputs=(name,value)=>{
    if(name === 'RegUserName'){
        if(value.length === 0) {
            this.setState({isRegUserNameValid:false});
            this.setState({isFormValid:false});
        }else {
            this.setState({isRegUserNameValid:true});
            this.setState({isFormValid:true});
        }
    }
    if(name === 'RegPAssword'){
        if(value.length === 0) {
            this.setState({isRegPAsswordValid:false});
            this.setState({isFormValid:false});
        }else {
            this.setState({isRegPAsswordValid:true});
            this.setState({isFormValid:true});
        }
    }

  }

  render() {
    return (
      <div className="container-lg">
        <h3>The HTTP Call to Token-Based Secureity Service </h3>
        <table className="table table-bordred table-striped">
          <tbody>
            <tr>
              <td>
                <table className="table table-bordred table-striped">
                  <tbody>
                    <tr>
                      <td>User Id</td>
                      <td>
                        <input
                          type="text"
                          name="UserId"
                          onChange={this.handleInPutChanges.bind(this)}
                          className="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>User Name</td>
                      <td>
                        <input
                          type="text"
                          name="RegUserName"
                          value={this.state.RegUserName}
                          onChange={this.handleInPutChanges.bind(this)}
                          className="form-control"
                        />
                        <div className="alert alert-danger" hidden={this.state.isRegUserNameValid}>
                            The User Name is Required
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Password</td>
                      <td>
                        <input
                          type="password"
                          className="form-control"
                          name="RegPAssword"
                          value={this.state.RegPAssword}
                          onChange={this.handleInPutChanges.bind(this)}
                        />
                          <div className="alert alert-danger" hidden={this.state.isRegPAsswordValid}>
                            The Password is Required
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          type="button"
                          value="Clear"
                          onClick={this.clearReg.bind(this)}
                          className="btn btn-primary"
                        />
                      </td>
                      <td>
                        <input
                          type="button"
                          value="Register"
                          onClick={this.register.bind(this)}
                          disabled={!this.state.isFormValid}
                          className="btn btn-success"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <table className="table table-bordred table-striped">
                  <tbody>
                    <tr>
                      <td>User Name</td>
                      <td>
                        <input
                          type="text"
                          name="AuthUserName"
                          className="form-control"
                          value={this.state.AuthUserName}
                          onChange={this.handleInPutChanges.bind(this)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Password</td>
                      <td>
                        <input
                          type="password"
                          name="AuthPAssword"
                          className="form-control"
                          value={this.state.AuthPAssword}
                          onChange={this.handleInPutChanges.bind(this)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          type="button"
                          value="Clear"
                          onClick={this.clearAuth.bind(this)}
                          className="btn btn-primary"
                        />
                      </td>
                      <td>
                        <input
                          type="button"
                          value="Login"
                          onClick={this.auth.bind(this)}
                          className="btn btn-success"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="button"
                  value="Get Data"
                  onClick={this.getValues.bind(this)}
                  className="btn btn-danger"
                />
              </td>
              <td>
                <strong>
                    {JSON.stringify(this.state.departments)}
                </strong>
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
        <div className="container">
          <strong>{this.state.message}</strong>
        </div>
      </div>
    );
  }
}

export default SecureHttpCallComponent;
