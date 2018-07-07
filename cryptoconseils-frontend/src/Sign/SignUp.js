import React, { Component } from 'react';
import SignIn from './SignIn';

class SignUp extends Component {

  render() {
    // on envoie le form login MAIS avec la valeur true pour signup
    // le component SignIn va alors afficher le form SIGN UP
    return (
      <div className="SignUp">
        <SignIn showSignUp="true"/>
      </div>
    );
  }
}
export default SignUp;
