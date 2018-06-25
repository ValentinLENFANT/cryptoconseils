import React, { Component } from 'react';
import LoginDisplay from './LoginDisplay';
import NotLoginDisplay from './NotLoginDisplay'

class UserAction extends Component {
  render() {
    if(this.props.isLogged){
      return(
        <div className="UserAction Component">
          <LoginDisplay username={sessionStorage.getItem('username')}/>
        </div>
      );
    }else {
      return(
        <div className="UserActionComponent">
          <NotLoginDisplay/>
        </div>
      );
    }
  }
}
export default UserAction;
