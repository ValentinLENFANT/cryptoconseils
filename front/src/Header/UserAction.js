import React, { Component } from 'react';
import axios from 'axios'
import SignOut from '../Sign/SignOut';

class UserAction extends Component {

  constructor() {
    super();
    // pour afficher le form
    this.state = {
       displayForm: false,
       username: localStorage.getItem('username'),
       isLogged: localStorage.getItem('access_token'),
       previousPath: window.location.pathname,
       premium: localStorage.getItem('premium')
    };
  }

  renderPremium(){
    if(this.state.premium) {
      return(
        <li className="sign-in">
          <a href="/premium" className="btn btn-primary">
            <i className="fa fa-diamond"></i> {this.state.premium}
          </a>
        </li>
      );
    } else if(this.state.isLogged) {

      var authorization = {
        headers: {'Authorization': "Bearer " + localStorage.getItem('access_token')}
      };
      axios.get(process.env.REACT_APP_API_ADDRESS+'/users/current/',authorization)
      .then(response => {
        if(response.data.premiumLevel >= 2) {
          var lvl = ["Non inscrit","Inscrit","Débutant","Avancé","Expert","Lambo"];
          var premium = lvl[response.data.premiumLevel];
          this.setState({premium: premium})
          localStorage.setItem('premium',premium)
        }
      })
    } else return null
  }

  render() {
    if(this.state.isLogged){
      return(
        <div className="UserAction Component">
            <div className="Login Component">
              <div className="col-md-6 col-lg-6">
                <ul className="unstyled user">
                  {this.renderPremium()}
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
            <div className="col-md-6 col-lg-6">
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
