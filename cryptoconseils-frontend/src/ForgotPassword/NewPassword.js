import React, { Component } from 'react';
import Carousel from '../Sign/Caroussel';
import axios from 'axios';

class NewPassword extends Component {
  constructor(){
    super()
    this.state = {
      statusMsg: null,
      password: '',
      password_confirmation: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  // enregistre la valeur des inputs
  handleChange(event) {
    let target = event.target;
    let value = target.value
    let name = target.id;
    this.setState({[name]: value});
  }

  checkPassword(event){
    event.preventDefault();
    var goUpdate = false;
    if(this.state.password !== '' || this.state.password_confirmation !=='') {
      if(this.state.password === this.state.password_confirmation) {
        this.setState({statusMsg: "Les mots de passes correspondent !"});
        goUpdate = true;
        //console.log("mdp valide");
      } else{
        //console.log("mdp NON valide");
        this.setState({statusMsg: "Les mots de passes ne correspondent pas"});
        goUpdate = false;
      }
    }
    console.log(goUpdate);
    if(goUpdate){
        this.setState({email: this.props.location.search.split("=").pop()});
      this.handleNewPassword(this.state.password, this.props.match.params.token,this.state.email);
    } else {
      this.setState({password: '',password_confirmation:''})
    }
  }

  handleNewPassword(password, token,email){
    console.log("salut");
    axios.post(process.env.REACT_APP_API_ADDRESS+'/users/email/passwordSuccesfullyChanged/',{
      uniqueTokenForForgottenPassword:token ,
      password: password,
      email: email,
    }).then(response => {
      //update de l'affichage des commentaires
      alert("Vos infos ont été modifié !");

    }).catch(error => {
      alert("l'email existe déjà ou le mot de passe est le m");
      console.log(error);
    });

  }

  render(){
      return(
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
                      <div className="ForgotPasswordForm">
                        {/*Section Title Starts */}
                        <div className="row text-center">
                          <h2 className="title-head hidden-xs"><span>Nouveau mot de passe</span></h2>
                          <h3>{this.state.statusMsg}</h3>
                          <p className="info-form">Entrez votre nouveau mot de passe</p>
                        </div>
                        {/*Section Title Ends */}
                        {/*Form Starts */}
                        <form onSubmit={this.checkPassword.bind(this)}>
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
                          {/* Input Field Starts */}
                          <div className="form-group">
                            <input
                              className="form-control"
                              name="password_confirmation"
                              id="password_confirmation"
                              placeholder="CONFIRMER MOT DE PASSE"
                              type="password"
                              onChange={this.handleChange}
                              value={this.state.password_confirmation}
                              required
                            />
                          </div>
                          {/* Input Field Ends */}
                          {/*Submit Form Button Starts */}
                          <div className="form-group">
                            <button className="btn btn-primary" type="submit">CHANGER LE MOT DE PASSE</button>
                            <p className="text-center">Pas de compte ?
                              <a href="/signup"> Inscription</a> ou <a href="/signin">Connexion</a>
                            </p>
                          </div>
                          {/*Submit Form Button Ends */}
                        </form>
                        {/*Form Ends */}
                      </div>
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


export default NewPassword;
