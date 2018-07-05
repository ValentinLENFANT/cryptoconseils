import React, { Component } from 'react';
import Carousel from '../Sign/Caroussel';

class ForgotPassword extends Component {
  constructor(){
    super()
    this.state = {
      statusMsg: null
    }
  }
  render(){
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
                <a href="/signup"> Inscription</a> ou <a href="/signin">Connexion</a>
              </p>
            </div>
            {/*Submit Form Button Ends */}
          </form>
          {/*Form Ends */}
        </div>
      );
    }
  }


export default ForgotPassword;
