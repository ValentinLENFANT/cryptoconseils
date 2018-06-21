import React, { Component } from 'react';

class About extends Component {
  render() {
    return(
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
              <p className="about-text">Une place pour tous ceux qui souhaitent optimiser leurs investissements ou approfondir leur connaissances. Vous pouvez aussi acheter du Bitcoin directement depuis notre plateforme avec votre carte de crédit. Rejoignez les 13.300 utilisateurs satisfaits d'utiliser nos services au quotidien</p>
              <ul className="nav nav-tabs">
                <li className="active"><a data-toggle="tab" href="#menu1">Notre objectif</a></li>
                <li><a data-toggle="tab" href="#menu2">Nos avantages</a></li>
                <li><a data-toggle="tab" href="#menu3">Notre garantie</a></li>
              </ul>
              <div className="tab-content">
                <div id="menu1" className="tab-pane fade in active">
                  <p>Le Bitcoin et les crypto-monnaies sont des protocols basés sur la Blockchain, ce qui permet entre autre de transférer des données financières de façon ultra-sécurisées sans partie tierce.</p>
                </div>
                <div id="menu2" className="tab-pane fade">
                  <p>Nous proposons une plateforme vous permettant de mieux appréhender le monde des crypto-monnaies en suivant nos conseils de trading et pour un cout bien inférieur à la conccurence.</p>
                </div>
                <div id="menu3" className="tab-pane fade">
                  <p>Nous garantissons à tous nos investisseurs une grande sécurité sur leur investissement</p>
                </div>
              </div>
              <a className="btn btn-primary" href="about.html">En savoir plus</a>
            </div>
            {/* Content Ends */}
          </div>
          {/* Section Content Ends */}
        </div>
      </div>
    );
  }
}

export default About;
