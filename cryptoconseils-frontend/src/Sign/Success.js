import React, { Component } from 'react';

class Success extends Component {
  render() {
    return (
      <div className="Success Component">
        <p>Votre inscription a été prise en compte !</p>
        <p> Un email vous a été envoyé à l'adresse {this.props.email}</p>
        <a href="/">Retour à la page d'acceuil</a>
      </div>
    );
  }
}

export default Success;
