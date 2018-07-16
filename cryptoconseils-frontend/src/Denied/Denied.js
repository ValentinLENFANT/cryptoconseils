import React, { Component } from 'react';
import Header from '../Header/Header'
class Denied extends Component {

  render() {
    if(this.props.noLogged) {
      return (
        <div className="Denied">
          <Header/>
          <h1>Vous n'êtes pas connecté</h1>
          <h2><a href="/signin">Se connecter</a></h2>
          <h2><a href="/signup">S'inscrire</a></h2>
          <h2><a href="/">Retour à l'acceuil</a></h2>
        </div>
      );
    } else if(this.props.noAccess){
      if(this.props.userPremium && this.props.articlePremium) {
        var lvl = ["Non inscrit","Inscrit","Débutant","Avancé","Expert","Lambo"]
        return(
          <div className="Denied">
            <Header/>
            <h1>
              L’article est de niveau <a>{lvl[this.props.articlePremium]}</a> et vous avez le niveau <a>{lvl[this.props.userPremium]}</a>
              <br/>
              Vous n'avez pas le niveau <a href="/premium">premium </a>suffisant
            </h1>
            <h2><a href="/signin" className="btn btn-primary">Se connecter</a></h2>
            <h2><a href="/signup" className="btn btn-primary">S'inscrire</a></h2>
            <h2><a href="/" className="btn btn-primary">Retour à l'acceuil</a></h2>
          </div>
        )
      } else {
        return (
          <div className="Denied">
            <Header/>
            <h1>
              <h1>Vous n'êtes pas connecté</h1>
            </h1>
            <h2><a href="/signin" className="btn btn-primary">Se connecter</a></h2>
            <h2><a href="/signup" className="btn btn-primary">S'inscrire</a></h2>
            <h2><a href="/" className="btn btn-primary">Retour à l'acceuil</a></h2>
          </div>
        );
      }
    } else {
      return (
        <div className="Denied">
          <Header/>
          <h1>Vous n'avez pas accès à cette page</h1>
          <h2><a href="/signin" className="btn btn-primary">Se connecter</a></h2>
          <h2><a href="/signup" className="btn btn-primary">S'inscrire</a></h2>
          <h2><a href="/"className="btn btn-primary" >Retour à l'acceuil</a></h2>
        </div>
      );
    }
  }
}

export default Denied;
