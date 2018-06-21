import React, { Component } from 'react';
import SignIn from './SignIn';

class SignUp extends Component {

  render() {
    return (
      <div className="SignUp">
        <SignIn showSignUp="true"/>
      </div>
    );
  }
}
export default SignUp;
