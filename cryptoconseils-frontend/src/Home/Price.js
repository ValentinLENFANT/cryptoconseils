import React, { Component } from 'react';

class Price extends Component {
  render() {
    return(
      <div className="Price Component">
        <section className="pricing">
          <div className="container">
            {/* Section Title Starts */}
            <div className="row text-center">
              <h2 className="title-head">Abonnement <span>premium</span></h2>
              <div className="title-head-subtitle">
                <p>Souscrivez à un abonnement premium adapté à vos besoins parmis nos différentes offres</p>
              </div>
            </div>
            {/* Section Title Ends */}
            {/* Section Content Starts */}
            <div className="row pricing-tables-content">
              <div className="pricing-container">
                {/* Pricing Tables Starts */}
                <ul className="pricing-list bounce-invert">
                  <li className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                    <ul className="pricing-wrapper">
                      {/* Buy Pricing Table #1 Starts */}
                      <li data-type="buy" className="is-visible">
                        <header className="pricing-header">
                          <h2>PACK DEBUTANT <span>pour </span></h2>
                          <div className="price">
                            <span className="currency"><i className="fa fa-euro"></i></span>
                            <span className="value">100</span>
                          </div>
                        </header>
                        <footer className="pricing-footer">
                          <a href="connexion.html" className="btn btn-primary">COMMANDER</a>
                        </footer>
                      </li>
                      {/* Buy Pricing Table #1 Ends */}
                    </ul>
                  </li>
                  <li className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                    <ul className="pricing-wrapper">
                      {/* Buy Pricing Table #2 Starts */}
                      <li data-type="buy" className="is-visible">
                        <header className="pricing-header">
                          <h2>PACK AVANCE <span>pour </span></h2>
                          <div className="price">
                            <span className="currency"><i className="fa fa-euro"></i></span>
                            <span className="value">300</span>
                          </div>
                        </header>
                        <footer className="pricing-footer">
                          <a href="connexion.html" className="btn btn-primary">COMMANDER</a>
                        </footer>
                      </li>
                      {/* Buy Pricing Table #2 Ends */}
                    </ul>
                  </li>
                  <li className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                    <ul className="pricing-wrapper">
                      {/* Buy Pricing Table #3 Starts */}
                      <li data-type="buy" className="is-visible">
                        <header className="pricing-header">
                          <h2>PACK EXPERT <span>pour </span></h2>
                          <div className="price">
                            <span className="currency"><i className="fa fa-euro"></i></span>
                            <span className="value">500</span>
                          </div>
                        </header>
                        <footer className="pricing-footer">
                          <a href="connexion.html" className="btn btn-primary">COMMANDER</a>
                        </footer>
                      </li>
                      {/* Buy Pricing Table #3 Ends */}
                    </ul>
                  </li>
                  <li className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                    <ul className="pricing-wrapper">
                      {/* Buy Pricing Table #4 Starts */}
                      <li data-type="buy" className="is-visible">
                        <header className="pricing-header">
                          <h2>PACK LAMBO<span>pour </span></h2>
                          <div className="price">
                            <span className="currency"><i className="fa fa-euro"></i></span>
                            <span className="value">1,000</span>
                          </div>
                        </header>
                        <footer className="pricing-footer">
                          <a href="connexion.html" className="btn btn-primary">COMMANDER</a>
                        </footer>
                      </li>
                      {/* Buy Pricing Table #4 Ends */}
                      {/* Sell Pricing Table #4 Starts */}
                      <li data-type="sell" className="is-hidden">
                        <header className="pricing-header">
                          <h2>GET 9000 USD <span>For </span></h2>
                          <div className="price">
                            <span className="currency"><i className="fa fa-bitcoin"></i></span>
                            <span className="value">2</span>
                          </div>
                        </header>
                        <footer className="pricing-footer">
                          <a href="connexion.html" className="btn btn-primary">COMMANDER</a>
                        </footer>
                      </li>
                      {/* Sell Pricing Table #4 Ends */}
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Price;
