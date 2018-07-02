import React, { Component } from 'react';
import SignOut from '../Sign/SignOut';

class UserAction extends Component {

  constructor(props) {
    super();

    // pour afficher le form
    this.state = {
       displayForm: true,
       username: sessionStorage.getItem('username')
    };
  }

  // afficher le form d'inscription
  onChangeDisplayForm() {
    this.props.displayForm(this.state.displayForm);
  }

  render() {
    if(this.props.isLogged){
      return(
        <div className="UserAction Component">
            <div className="Login Component">
              <div className="col-md-4 col-lg-4">
                <ul className="unstyled user">
                  <li className="sign-in">
                    <a href="/signin" className="btn btn-primary">
                      <i className="fa fa-user"></i>
                      {this.state.username}
                    </a>
                  </li>
                  <li className="sign-up">
                    <SignOut/>
                  </li>
                </ul>
              </div>
            </div>
        </div>
      );
    } else {
      return(
        <div className="UserAction Component">
          <div className="NotLogin Component">
            <div className="col-md-4 col-lg-4">
              <ul className="unstyled user">
                <li className="sign-in">
                  <a onClick={this.onChangeDisplayForm.bind(this)} className="btn btn-primary">
                    <i className="fa fa-user"></i>
                    Connexion</a>
                </li>
                <li className="sign-up">
                  <a onClick={this.onChangeDisplayForm.bind(this)} className="btn btn-primary">
                    <i className="fa fa-user-plus"></i>
                    Inscription</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default UserAction;
