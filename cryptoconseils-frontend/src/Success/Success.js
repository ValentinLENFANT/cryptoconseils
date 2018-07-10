import React, { Component } from 'react';

class Success extends Component {
  render() {
    if(this.props.email){
      return (
        <div className="Success Component contact-form">
          <div className="col-xs-12 text-center output_message_holder d-block">
            <p className="output_message success">Votre inscription a été prise en compte !</p>
          </div>
          <p> Un email vous a été envoyé à l'adresse <b>{this.props.email}</b></p>
          <a className="btn btn-primary" href="/">Retour à la page d'acceuil</a>
        </div>
      );
    } else if (this.props.activated) {
      return (
        <div className="Success Component contact-form">
          <meta http-equiv="refresh" content="3; url=/" />
            <div className="col-xs-12 text-center output_message_holder d-block">
              <p className="output_message success">Votre compte a été activé !</p>
            </div>
          <p> Vous allez être redirigé sur la page d'acceuil</p>
          <a className="btn btn-primary" href="/">Retour à la page d'acceuil</a>
        </div>
      );
    } else if (this.props.forgotPassword) {
      return (
        <div className="Success Component contact-form">
          <div className="col-xs-12 text-center output_message_holder d-block">
            <p className="output_message success">L'email de réinitialisation du mot de passe a bien été envoyé</p>
          </div>
          <p> Veuillez cliquer sur le lien envoyé par mail pour procéder à la rénitialisaiton de votre mot de passe</p>
          <a className="btn btn-primary" href="/">Retour à la page d'acceuil</a>
        </div>
      );
    } else if (this.props.newPassword) {
      return (
        <div className="Success Component contact-form">
          <div className="col-xs-12 text-center output_message_holder d-block">
            <p className="output_message success">Votre mot de passe a été changé !</p>
          </div>
          <a href="/">Retour à la page d'acceuil</a>
        </div>
      );
    }
  }
}

export default Success;
