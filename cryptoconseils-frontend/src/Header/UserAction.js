import React, { Component } from 'react';
import SignOut from '../Sign/SignOut';

class UserAction extends Component {

  constructor(props) {
    super();
    // pour afficher le form
    this.state = {
       displayForm: false,
       username: localStorage.getItem('username'),
       isLogged: localStorage.getItem('access_token'),
       previousPath: window.location.pathname
    };
  }

  render() {
    if(this.state.isLogged){
      return(
        <div className="UserAction Component">
            <div className="Login Component">
              <div className="col-md-4 col-lg-4">
                <ul className="unstyled user">
                  <li className="sign-in">
                    <a href="/profil" className="btn btn-primary">
                      <i className="fa fa-user"></i>
                      {this.state.username}
                    </a>
                  </li>
                  <li className="sign-out">
                    <SignOut previousPath={this.state.previousPath}/>
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
                  <a href="/signin" className="btn btn-primary">
                    <i className="fa fa-user"></i>
                    Connexion</a>
                </li>
                <li className="sign-up">
                  <a href="/signup" className="btn btn-primary">
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
