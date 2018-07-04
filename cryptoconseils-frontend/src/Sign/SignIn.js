import React, { Component } from 'react';
import Carousel from './Caroussel';
import axios from 'axios'
import AlreadyLogin from './AlreadyLogin'
import Success from './Success'

class SignIn extends Component {
  constructor(props) {

    super(props);
    this.state = {
      showSignUp: props.showSignUp,
      username: '',
      password: '',
      statusMsg: '',
      email: '',
      success: false,
      previousPath: document.referrer,
      showForgotPassword: false
    };
    this.changeForm = this.changeForm.bind(this);
    this.forgotPasswodForm = this.forgotPasswodForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleForgotPassword = this.handleForgotPassword.bind(this);
  }

  // switch entre les deux form
  changeForm(event) {
    this.setState({showSignUp: !this.state.showSignUp,showForgotPassword:false});
  }
  forgotPasswodForm(event){
    this.setState({showForgotPassword: true});
  }

  // enregistre la valeur des inputs
  handleChange(event) {
    let target = event.target;
    let value = target.value
    let name = target.id;
    this.setState({[name]: value});
  }

  // connexion
  handleSignIn(event) {
    event.preventDefault();
    axios.post(process.env.REACT_APP_API_ADDRESS+'/oauth/v2/token', {
      grant_type: 'password',
      username: this.state.username,
      password: this.state.password,
      client_id: process.env.REACT_APP_CLIENT_ID,
      client_secret: process.env.REACT_APP_CLIENT_SECRET,
    }).then(response => {
      sessionStorage.clear();
      sessionStorage.setItem('access_token', response.data.access_token);
      sessionStorage.setItem('username', this.state.username);
      window.location.href = this.state.previousPath
    }).catch(error => {
      this.setState({statusMsg: 'Username et/ou Mdp invalides'})
      console.log(error.response);
    });
  }

  // inscription
  handleSignUp(event){
    event.preventDefault();
    axios.post(process.env.REACT_APP_API_ADDRESS+'/users/new/', {
      username: this.state.username,
      email: this.state.email.toLowerCase(),
      password: this.state.password
    }).then(response => {
      sessionStorage.clear();
      sessionStorage.setItem('username', this.state.username);
      this.setState({
        success: true
      });
    }).catch(error => {
      this.setState({
        statusMsg: error.response.data.error
      })
    });
  }

  handleForgotPassword(event){

  }
  // choix du form
  formRender(){
    // Si déjà connecté on envoie le component AlreadyLogin
    if(sessionStorage.getItem('access_token')){
      return <AlreadyLogin/>
    } else {

      // si le user vient juste de s'inscrire
      if(this.state.success){
        return <Success email={this.state.email}/>
      }

      // si mot de passe oublié
      if(this.state.showForgotPassword){
        return(
          <div className="ForgotPasswordForm">
            {/*Section Title Starts */}
            <div className="row text-center">
              <h2 className="title-head hidden-xs"><span>Mot de passe oublié ?</span></h2>
              <h3>{this.state.statusMsg}</h3>
              <p className="info-form">Un email contenant un lien de renitialisaiton de mot de passe vous seras envoyé à l'adresse ci dessous</p>
            </div>
            {/*Section Title Ends */}
            {/*Form Starts */}
            <form>
              {/*Input Field Starts */}
              <div className="form-group">
                <input
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="EMAIL"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
              </div>
              {/*Input Field Ends */}
              {/*Submit Form Button Starts */}
              <div className="form-group">
                <button className="btn btn-primary" type="submit">Envoyer</button>
                <p className="text-center">Pas de compte ?
                  <a onClick={() => this.setState({showSignUp: true,showForgotPassword:false})}> Inscription</a>
                    ou
                  <a onClick={() => this.setState({showSignUp: false,showForgotPassword:false})}>Connexion</a>
                </p>
              </div>
              {/*Submit Form Button Ends */}
            </form>
            {/*Form Ends */}
          </div>
        );
      }
      // formualaire inscription
      else if(this.state.showSignUp){
        return (
          <div className="SignUpForm">
            {/* Section Title Starts */}
            <div className="row text-center">
              <h2 className="title-head hidden-xs">C'est <span>parti</span></h2>
              <h3>{this.state.statusMsg}</h3>
               <p className="info-form">Créez un compte rapidement et commencez le trading !</p>
            </div>
            {/* Section Title Ends */}
            {/* Form Starts */}
            <form onSubmit={this.handleSignUp.bind(this)}>
              {/* Input Field Starts */}
              <div className="form-group">
                <input
                  className="form-control"
                  name="username"
                  id="username"
                  placeholder="NOM"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.username}
                  required
                />
              </div>
              {/* Input Field Ends */}
              {/* Input Field Starts */}
              <div className="form-group">
                <input
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="EMAIL"
                  type="email"
                  onChange={this.handleChange}
                  value={this.state.email}
                  required
                />
              </div>
              {/* Input Field Ends */}
              {/* Input Field Starts */}
              <div className="form-group">
                <input
                  className="form-control"
                  name="password"
                  id="password"
                  placeholder="MOT DE PASSE"
                  type="password"
                  onChange={this.handleChange}
                  value={this.state.password}
                  required
                />
              </div>
              {/* Input Field Ends */}
              {/* Submit Form Button Starts */}
              <div className="form-group">
                <button className="btn btn-primary" type="submit">créer un compte</button>
                <p className="text-center">déjà un compte ?
                  <a onClick={this.changeForm}> Connexion</a>
                </p>
              </div>
              {/* Submit Form Button Ends */}
            </form>
            {/* Form Ends */}
          </div>
        );
      }else {
        // formualaire connexion
        return (
          <div className="SignInForm">
            {/*Section Title Starts */}
            <div className="row text-center">
              <h2 className="title-head hidden-xs"><span>Connexion</span></h2>
              <h3>{this.state.statusMsg}</h3>
              <p className="info-form">Bénéficier d'informations détaillées et de nos services en vous connectant</p>
            </div>
            {/*Section Title Ends */}
            {/*Form Starts */}
            <form onSubmit={this.handleSignIn.bind(this)}>
              {/*Input Field Starts */}
              <div className="form-group">
                <input
                  className="form-control"
                  name="username"
                  id="username"
                  placeholder="USERNAME"
                  type="text"
                  value={this.state.username}
                  onChange={this.handleChange}
                  required
                />
              </div>
              {/*Input Field Ends */}
              {/*Input Field Starts */}
              <div className="form-group">
                <input
                  className="form-control"
                  name="password"
                  id="password"
                  placeholder="PASSWORD"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
                />
              </div>
              {/*Input Field Ends */}
              {/*Submit Form Button Starts */}
              <div className="form-group">
                <button className="btn btn-primary" type="submit">Connexion</button>
                <p className="text-center">Pas de compte ?
                  <a onClick={this.changeForm}> Inscription</a>
                </p>
                <p className="text-center">Mot de passe oublié ?
                  <a onClick={this.forgotPasswodForm}> Renitialiser mot de passe</a>
                </p>
              </div>
              {/*Submit Form Button Ends */}
            </form>
            {/*Form Ends */}
          </div>
        );
      }
    }
  }
  render() {
    // Rendu final
    return (
      <div className="SignIn">
        <div className="auth-page">
          {/*Wrapper Starts */}
          <div className="wrapper">
            <div className="container-fluid user-auth">
              <div className="hidden-xs col-sm-4 col-md-4 col-lg-4">
                <Carousel />
              </div>
              <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                <div className="form-container">
                  <div>
                    {this.formRender()}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Wrapper Ends */}
        </div>
      </div>
    );
  }
}

export default SignIn;
