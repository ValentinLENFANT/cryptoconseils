import React, { Component } from 'react';

class MenusPremium extends Component {
  render() {
    return (
      <div className="Menus">
         <div className="menu-dashboard">
            <div className="container">
                <div className="text-center">
                    <img src="images/backoffice/logo-premium.png" className="img-responsive center-block premium-logo"/>
                </div>
                <div className="row text-center">
                    <div className="col-md-3 col-sm-3 col-xs-12">
                        <a href="#commentaires">
                            <h3 className="titre-dashboard">Commentaires</h3>
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
                        <a href="#infos-perso" className="">
                            <h3 className="titre-dashboard">Infos persos</h3>
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default MenusPremium;
