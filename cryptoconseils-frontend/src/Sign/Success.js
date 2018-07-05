import React, { Component } from 'react';

class Success extends Component {
  render() {
    if(this.props.email){
      return (
        <div className="Success Component">
          <p>Votre inscription a été prise en compte !</p>
          <p> Un email vous a été envoyé à l'adresse {this.props.email}</p>
          <a href="/">Retour à la page d'acceuil</a>
        </div>
      );
    } else if (this.props.activated) {

      return (
        <div className="Success Component">
          <meta http-equiv="refresh" content="3; url=/" />
          <p>Votre compte a été activé !</p>
          <p> Vous allez être redirigé sur la page d'acceuil</p>
          <a href="/">Retour à la page d'acceuil</a>
        </div>
      );
    }

  }
}

export default Success;
