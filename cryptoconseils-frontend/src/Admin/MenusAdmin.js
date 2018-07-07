import React, { Component } from 'react';

class MenusAdmin extends Component {
  render() {
    return (
      <div className="Menus">
          <section className="menu-dashboard section-profil">
            <div className="container">
                <div className="text-center">
                    <img src="images/backoffice/logo-admin.png" className="img-responsive center-block" />
                </div>
                <div className="row text-center">
                    <div className="col-md-3 col-sm-3 col-xs-12">
                        <a href="#moderation">
                            <h3 className="titre-dashboard">Modération</h3>
                        </a>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12">
                        <a href="#call-premium">
                            <h3 className="titre-dashboard">Call premium</h3>
                        </a>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12">
                        <a href="#airdrop-premium" className="">
                            <h3 className="titre-dashboard">Airdrop premium</h3>
                        </a>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12">
                        <a href="#creer-article" className="">
                            <h3 className="titre-dashboard">Créer Article</h3>
                        </a>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  }
}

export default MenusAdmin;
