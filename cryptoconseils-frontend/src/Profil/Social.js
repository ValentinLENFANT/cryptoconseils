import React, { Component } from 'react';

class Social extends Component {

  constructor(props){
    super(props);
    this.state = {
      premium: this.props.premium
    }
  }

  renderTelegram() {
    if(this.state.premium === 2){
      return(
        <div className="col-sm-12 col-md-12 col-xs-12">
          <a href="https://t.me/CryptoConseilsFr">
            <img href="https://t.me/CryptoConseilsFr" className="profil-social" src="/images/backgrounds/telegram-logo.jpg"/>
          </a>
          <h2><a href="https://t.me/CryptoConseilsFr" className="btn btn-primary btn-connex"><i className="fa fa-telegram"></i> Acceder à Téléram</a></h2>
        </div>
      );
    } else if(this.state.premium > 2) {
      return(
        <div className="col-sm-6 col-md-6 col-xs-12">
          <img className="profil-social" src="/images/backgrounds/telegram-logo.jpg"/>
          <h2><a href="/signin" className="btn btn-primary btn-connex"><i className="fa fa-telegram"></i> Acceder à Téléram</a></h2>
        </div>
      );
    } else return null
  }

  renderFacebook() {
    if(this.state.premium >=3 ){
      return (
        <div className="col-sm-6 col-md-6 col-xs-12">
          <a href="https://www.facebook.com/groups/CryptoConseils.fr/">
            <img className="profil-social" src="https://www.facebook.com/images/fb_icon_325x325.png"/>
          </a>
          <h2><a href="https://www.facebook.com/groups/CryptoConseils.fr/" className="btn btn-primary btn-connex"><i className="fa fa-facebook"></i>Acceder à Facebook</a></h2>
        </div>
      );
    } else return null
  }

  renderSocial(){
    if(this.state.premium >=2) {
      return(
        <div className="row">
          <div>
            {this.renderTelegram()}
          </div>
          <div>
            {this.renderFacebook()}
          </div>
        </div>
      );
    } else {
      return (
        <div className="row">
          <h2 className="profil-social-denied">Vous ne pouvez accéder à aucun des réseaux sociaux de <a>CryptoConseils.fr</a> car vous n'êtes pas un membre <a href="/premium">premium</a></h2>
          <div className="col-sm-12 col-md-12 col-xs-12">
            <h2><a href="/premium" className="btn btn-primary btn-connex-accueil"><i className="fa fa-diamond"></i> Acheter un pack premium</a></h2>
          </div>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="Social Component">
        <div className="container bootstrap snippet">
          <div className="row text-center">
            <h2 className="title-head" id="commentaires">Réseaux
              <span> Sociaux</span>
            </h2>
            <div className="title-head-subtitle">
              <p>Accéder aux réseaux sociaux réservé aux membres premium</p>
            </div>
          </div>
          {this.renderSocial()}
        </div>
      </div>
    );
  }
}

export default Social;
