import React, { Component } from 'react';

class WhoAreWe extends Component {
  render() {
    return(
      <div className="About Component">
        <div className="about-us">
          <div className="container">
            {/* Section Title Starts */}
            <div className="row text-center">
              <h2 className="title-head">Qui <span>sommes-nous ?</span></h2>
              <div className="title-head-subtitle">
                <p>Un site de conseils et de coaching personnalisé dans le trading de crypto-monnaies</p>
              </div>
            </div>
            {/* Section Title Ends */}
            {/* Section Content Starts */}
            <div className="row about-content">
              {/* Image Starts */}
              <div className="col-sm-12 col-md-5 col-lg-6 text-center">
                <img className="img-responsive img-about-us" src="images/about-us.png" alt="about us"/>
              </div>
              {/* Image Ends */}
              {/* Content Starts */}
              <div className="col-sm-12 col-md-7 col-lg-6">
                <h3 className="title-about">CryptoConseils</h3>
                <p className="about-text">Le site francophone pour tous ceux qui souhaitent optimiser leurs investissements, approfondir leurs connaissances ou s'initier à l'univers des crypto-monnaies. Rejoignez une communauté grandissante et prenez part à la grande odyssée du XXIème siècle.</p>
                <ul className="nav nav-tabs">
                  <li className="active"><a data-toggle="tab" href="#menu1">Notre objectif</a></li>
                  <li><a data-toggle="tab" href="#menu2">Nos avantages</a></li>
                  <li><a data-toggle="tab" href="#menu3">Notre garantie</a></li>
                </ul>
                <div className="tab-content">
                  <div id="menu1" className="tab-pane fade in active">
                    <p>Nous croyons sincèrement à la révolution crypto-monnaie. C'est pourquoi nous voulons rendre cette dernière accessible au plus grand nombre en la démocratisant à travers des cours clairs et concis.</p>
                  </div>
                  <div id="menu2" className="tab-pane fade">
                    <p>Nous vous offrons une plateforme vous permettant de mieux appréhender l'univers des crypto-monnaies grâce à nos conseils en trading et à nos cours rédigés par des professionnels.</p>
                  </div>
                  <div id="menu3" className="tab-pane fade">
                    <p>Nous vous garantissons les meilleurs conseils possible en fonction de la situation du marché.</p>
                  </div>
                </div>
                <a className="btn btn-primary" href="/faq">En savoir plus</a>
              </div>
              {/* Content Ends */}
            </div>
            {/* Section Content Ends */}
          </div>
        </div>
      </div>
    );
  }
}

export default WhoAreWe;
