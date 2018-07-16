import React, { Component } from 'react';

class Success extends Component {
  render() {
    return (
      <div className="Success Component">

        <div className="container text-center">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-xs-12">
              <p>Votre inscription a été prise en compte !</p>
              <p> Un email vous a été envoyé à l'adresse {this.props.email}</p>
              <a href="/">Retour à la page d'acceuil</a>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Success;
