import React, { Component } from 'react';

class Denied extends Component {

  render() {
    return (
      <div className="Denied">
        <h1>
          Vous n'ètes pas connecté ou
          vous n'avez pas le niveau premium suffisant
        </h1>
        <h2><a href="/">Retour à l'acceuil</a></h2>
      </div>
    );
  }
}

export default Denied;
