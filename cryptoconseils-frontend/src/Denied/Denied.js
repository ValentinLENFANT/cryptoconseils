import React, { Component } from 'react';
import Header from '../Header/Header'
class Denied extends Component {

  render() {
    if(this.props.noLogged) {
      return (
        <div className="Denied">
          <Header/>
          <h1>Vous n'ètes pas connecté</h1>
          <h2><a href="/signin">Se connecter</a></h2>
          <h2><a href="/signup">S'inscrire</a></h2>
          <h2><a href="/">Retour à l'acceuil</a></h2>
        </div>
      );
    } else if(this.props.noAccess){
      return (
        <div className="Denied">
          <Header/>

          <h1>
            Vous n'avez pas le niveau <a href="/premium">premium </a>suffisant
          </h1>
          <h2><a href="/signin">Se connecter</a></h2>
          <h2><a href="/signup">S'inscrire</a></h2>
          <h2><a href="/">Retour à l'acceuil</a></h2>
        </div>
      );
    } else {
      return (
        <div className="Denied">
          <Header/>

          <h1>Vous n'avez pas accès à cette page</h1>
          <h2><a href="/signin">Se connecter</a></h2>
          <h2><a href="/signup">S'inscrire</a></h2>
          <h2><a href="/">Retour à l'acceuil</a></h2>
        </div>
      );
    }
  }
}

export default Denied;
