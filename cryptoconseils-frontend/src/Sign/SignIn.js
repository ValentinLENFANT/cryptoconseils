import React, { Component } from 'react';
import Carousel from './Caroussel';
import AlreadyLogin from './AlreadyLogin'
import Success from '../Success/Success'
import axios from 'axios'
import Recaptcha from 'react-recaptcha'

class SignIn extends Component {
  constructor(props) {

    super(props);
    this.state = {
      showSignUp: props.showSignUp,
      username: '',
      password: '',
      statusMsg: null,
      email: '',
      success: null,
      activated: null,
      forgotPassword: false,
      previousPath: document.referrer,
      showForgotPassword: false,
      isVerified: false
    };
    this.changeForm = this.changeForm.bind(this);
    this.forgotPasswordForm = this.forgotPasswordForm.bind(this);
    this.handleForgotPassword = this.handleForgotPassword.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this)
    this.loadCaptcha = this.loadCaptcha.bind(this)
  }

  // switch entre les deux form
  changeForm(event) {
    this.setState({showSignUp: !this.state.showSignUp,showForgotPassword:false});
  }
  forgotPasswordForm(event){
    this.setState({showForgotPassword: true});
  }

  // enregistre la valeur des inputs
  handleChange(event) {
    let target = event.target;
    let value = target.value
    let name = target.id;
    this.setState({[name]: value});
  }

  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  hasNumber(myString) {
    return /\d/.test(myString);
  }
  hasUpperCase(str) {
    if(str.toLowerCase() != str) {
      return true;
    } return false;
  }

  verifyCallback(response) {
    if (response) {
      this.setState({isVerified: true})
    }
  }
  loadCaptcha() {
    console.log("reCaptcha loaded");
  }
  // affichage des messages d'erreurs
  renderStatusMsg() {
    if(this.state.statusMsg !== null) {
      return(
        <div className="col-xs-12 text-center output_message_holder d-block">
          <p className="output_message error">{this.state.statusMsg}</p>
        </div>
      );
    }
  }

  // connexion
  handleSignIn(event) {
    event.preventDefault();
    // si première connexion
    if(this.props.match.params.token) {
      axios.post(process.env.REACT_APP_API_ADDRESS+'/users/email/activate/',{
        "uniqueTokenForEmail": this.props.match.params.token
      }).then(response => {
        if(this.state.isVerified) {
          // auto connexion
          axios.post(process.env.REACT_APP_API_ADDRESS+'/oauth/v2/token', {
            grant_type: 'password',
            username: this.state.username,
            password: this.state.password,
            client_id: process.env.REACT_APP_CLIENT_ID,
            client_secret: process.env.REACT_APP_CLIENT_SECRET,
          }).then(response => {
            localStorage.setItem('access_token', response.data.access_token);
            localStorage.setItem('username', this.state.username);
            this.setState({
              activated: true
            });
          }).catch(error => {
            this.setState({statusMsg: 'Username et/ou Mdp invalides'})
            console.log(error.response);
          });
        } else {
          this.setState({statusMsg: 'Captcha invalide'})
        }
      }).catch(error => {
        console.log(error.reponse);
      });
    }

    // connexion normal
    else {
      if(this.state.isVerified) {
        axios.post(process.env.REACT_APP_API_ADDRESS+'/oauth/v2/token', {
          grant_type: 'password',
          username: this.state.username,
          password: this.state.password,
          client_id: process.env.REACT_APP_CLIENT_ID,
          client_secret: process.env.REACT_APP_CLIENT_SECRET,
        }).then(response => {
          // if emailActivated
          // renvoyer bouler afficher message qu'l ne peux pas
          // netoyer la session
          axios.get(process.env.REACT_APP_API_ADDRESS+'/users/isEnabled/'+this.state.username)
          .then((res) => {
            localStorage.setItem('access_token', response.data.access_token);
            localStorage.setItem('username', this.state.username);
            if(this.state.previousPath ==="/signin"){
              this.setState({previousPath: "/"})
            }
            window.location.href = this.state.previousPath
          }).catch(error => {
            console.log(error.response);
            this.setState({statusMsg: "Votre compte n'est pas activé ou a été désactivé."})
            var isEnabled = false;
          })
        }).catch(error => {
          this.setState({statusMsg: 'Username et/ou Mdp invalides'})
          console.log(error.response);
        });
      } else {
        this.setState({statusMsg: 'Captcha invalide'})
      }
    }
  }

  // inscription
  handleSignUp(event){
    event.preventDefault();
    if(this.state.username.length < 6) {
      this.setState({statusMsg: "Le nom d'utilisateur doit contenir 6 caractères minimum"})
    } else if(!this.validateEmail(this.state.email)){
      this.setState({statusMsg: "L'email n'est pas valide"})
    } else if (this.state.password.length < 8 || !this.hasNumber(this.state.password) || !this.hasUpperCase(this.state.password)) {
      this.setState({password:"",statusMsg: "Le mot de passe doit contenir 8 caractères, 1 chiffre et 1 majuscule"})
    } else if(this.state.isVerified !== true) {
      this.setState({statusMsg: 'Captcha invalide'})
    } else {
      axios.post(process.env.REACT_APP_API_ADDRESS+'/users/new/', {
        username: this.state.username,
        email: this.state.email.toLowerCase(),
        password: this.state.password
      }).then(response => {
        this.setState({success: true});
        localStorage.setItem('username', this.state.username);
      }).catch(error => {
        this.setState({
          statusMsg: error.response.data.error
        })
      });
    }
  }

  // mot de passe oublié
  handleForgotPassword(event){
    event.preventDefault();
    axios.post(process.env.REACT_APP_API_ADDRESS+'/users/email/forgottenPassword/',{
      email: this.state.email,
    }).then(response => {
      this.setState({forgotPassword: true})
    }).catch(error => {
      console.log(error);
    });
  }

  // choix du form
  formRender(){
    // si le user vient d'activer son compte
    if(this.state.activated === true){
      return <Success activated={this.state.activated}/>
    }
    // si le user vient juste de s'inscrire
    else if(this.state.success === true){
      return <Success email={this.state.email}/>
    }
    // // si mot de passe oublié
    else if(this.state.forgotPassword === true){
      return <Success forgotPassword={this.state.forgotPassword}/>
    }
    // Si déjà connecté on envoie le component AlreadyLogin
    else if(localStorage.getItem('access_token')){
      return <AlreadyLogin/>
    } else {
      // si clic sur mot de passe oublié
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
            <form className="contact-form" onSubmit={this.handleForgotPassword}>
              {this.renderStatusMsg()}
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
                  <a href="#" onClick={() => this.setState({showSignUp: true,showForgotPassword:false})}> Inscription</a>
                    ou
                  <a href="#" onClick={() => this.setState({showSignUp: false,showForgotPassword:false})}>Connexion</a>
                </p>
              </div>
              {/*Submit Form Button Ends */}
            </form>
            {/*Form Ends */}
          </div>
        );
      } else if(this.state.showSignUp){
        // formualaire inscription
        return (
          <div className="SignUpForm">
            {/* Section Title Starts */}
            <div className="row text-center">
              <h2 className="title-head hidden-xs">C'est <span>parti</span></h2>
               <p className="info-form">Créez un compte rapidement et commencez le trading !</p>
            </div>
            {/* Section Title Ends */}
            {/* Form Starts */}
            <form className="contact-form" onSubmit={this.handleSignUp.bind(this)}>
              {this.renderStatusMsg()}
              {/* Input Field Starts */}
              <div className="form-group">
                <input
                  className="form-control"
                  name="username"
                  id="username"
                  placeholder="PSEUDONYME"
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
              <div className="form-group">
                <Recaptcha
                  sitekey="6LfDUGQUAAAAAAB-hyv9XUf520-2hbHQEw3stwWP"
                  render="explicit"
                  verifyCallback={this.verifyCallback}
                  onloadCallback={this.loadCaptcha}
                  theme="dark"
                />
              </div>
              {/* Input Field Ends */}
              {/* Submit Form Button Starts */}
              <div className="form-group">
                <button className="btn btn-primary" type="submit">créer un compte</button>
                <p className="text-center">déjà un compte ?
                  <a href="#" onClick={this.changeForm}> Connexion</a>
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
              <p className="info-form">Bénéficier d'informations détaillées et de nos services en vous connectant</p>
            </div>
            {/*Section Title Ends */}
            {/*Form Starts */}
            <form className="contact-form" onSubmit={this.handleSignIn.bind(this)}>
              {this.renderStatusMsg()}
              {/*Input Field Starts */}
              <div className="form-group">
                <input
                  className="form-control"
                  name="username"
                  id="username"
                  placeholder="PSEUDONYME"
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
                  placeholder="MOT DE PASSE"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <Recaptcha
                  sitekey="6LfDUGQUAAAAAAB-hyv9XUf520-2hbHQEw3stwWP"
                  render="explicit"
                  verifyCallback={this.verifyCallback}
                  onloadCallback={this.loadCaptcha}
                  theme="dark"
                />
              </div>

              {/*Input Field Ends */}
              {/*Submit Form Button Starts */}
              <div className="form-group">
                <button className="btn btn-primary" type="submit">Connexion</button>
                <p className="text-center">Pas de compte ?
                  <a href="#" onClick={this.changeForm}> Inscription</a>
                </p>
                <p className="text-center">Mot de passe oublié ?
                  <a href="#" onClick={this.forgotPasswordForm}> Renitialiser mot de passe</a>
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
