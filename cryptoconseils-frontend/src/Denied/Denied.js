import React, { Component } from 'react';
import Header from '../Header/Header'
class Denied extends Component {

  render() {
    if(this.props.noLogged) {
      return (
        <div className="Denied">
          <Header/>

          <div className="container text-center">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-xs-12">
                <h1>Vous n'êtes pas connecté <i class="fa fa-exclamation-circle"></i></h1>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-6 col-xs-12">
                <h2><a href="/signin" className="btn btn-primary btn-connex"><i className="fa fa-user"></i> Se connecter</a></h2>
              </div>
              <div className="col-sm-6 col-md-6 col-xs-12">
                <h2><a href="/signup" className="btn btn-primary btn-connex"><i className="fa fa-user-plus"></i> S'inscrire</a></h2>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-12 col-xs-12">
                <h2><a href="/" className="btn btn-primary btn-connex-accueil"><i className="fa fa-home fa-lg"></i> Retour à l'accueil</a></h2>
              </div>
            </div>
          </div>
        </div>
      );
    } else if(this.props.noAccess){
      if(this.props.userPremium && this.props.articlePremium) {
        var lvl = ["Non inscrit","Inscrit","Débutant","Avancé","Expert","Lambo"]
        return(
          <div className="Denied">
            <Header/>

            <div className="container text-center">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-xs-12">
                  <h1>L’article est de niveau <a>{lvl[this.props.articlePremium]}</a> et vous avez le niveau <a>{lvl[this.props.userPremium]}</a><br/>
                      Vous n'avez pas le niveau <a href="/premium">premium </a>suffisant <i class="fa fa-exclamation-circle"></i></h1>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 col-md-6 col-xs-12">
                  <h2><a href="/signin" className="btn btn-primary btn-connex"><i className="fa fa-user"></i> Se connecter</a></h2>
                </div>
                <div className="col-sm-6 col-md-6 col-xs-12">
                  <h2><a href="/signup" className="btn btn-primary btn-connex"><i className="fa fa-user-plus"></i> S'inscrire</a></h2>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-12 col-xs-12">
                  <h2><a href="/" className="btn btn-primary btn-connex-accueil"><i className="fa fa-home fa-lg"></i> Retour à l'accueil</a></h2>
                </div>
              </div>
            </div>
          </div>
        )
      } else {
        return (
          <div className="Denied">
            <Header/>

            <div className="container text-center">

              <div className="row">
                <div className="col-sm-12 col-md-12 col-xs-12">
                  <h1>Vous n'êtes pas connecté <i class="fa fa-exclamation-circle"></i></h1>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 col-md-6 col-xs-12">
                  <h2><a href="/signin" className="btn btn-primary btn-connex"><i className="fa fa-user"></i> Se connecter</a></h2>
                </div>
                <div className="col-sm-6 col-md-6 col-xs-12">
                  <h2><a href="/signup" className="btn btn-primary btn-connex"><i className="fa fa-user-plus"></i> S'inscrire</a></h2>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-12 col-xs-12">
                  <h2><a href="/" className="btn btn-primary btn-connex-accueil"><i className="fa fa-home fa-lg"></i> Retour à l'accueil</a></h2>
                </div>
              </div>
        
            </div>

          </div>
        );
      }
    } else {
      return (
        <div className="Denied">
          <Header/>
          <div className="container text-center">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-xs-12">
                <h1>Vous n'avez pas accès à cette page <i class="fa fa-exclamation-circle"></i></h1>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-6 col-xs-12">
                <h2><a href="/signin" className="btn btn-primary btn-connex"><i className="fa fa-user"></i> Se connecter</a></h2>
              </div>
              <div className="col-sm-6 col-md-6 col-xs-12">
                <h2><a href="/signup" className="btn btn-primary btn-connex"><i className="fa fa-user-plus"></i> S'inscrire</a></h2>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-12 col-xs-12">
                <h2><a href="/" className="btn btn-primary btn-connex-accueil"><i className="fa fa-home fa-lg"></i> Retour à l'accueil</a></h2>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Denied;
