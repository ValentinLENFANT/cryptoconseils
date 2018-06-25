import React, { Component } from 'react';

class Features extends Component {
  render() {
    return(
      <div className="Features Component">
        <div className="image-block">
          <div className="container-fluid">
            <div className="row">
              {/* Features Starts */}
              <div className="col-md-8 ts-padding img-block-left">
                <div className="gap-20"></div>
                <div className="row">
                  {/* Feature Starts */}
                  <div className="col-sm-6 col-md-6 col-xs-12">
                    <div className="feature text-center">
                      <span className="feature-icon">
                        <img src="images/icons/orange/strong-security.png" alt="strong security"/>
                      </span>
                      <h3 className="feature-title">Forte sécurité</h3>
                      <p>Protection contre les attaques Ddos, <br/>Données encryptées</p>
                    </div>
                  </div>
                  {/* Feature Ends */}
                  <div className="gap-20-mobile"></div>
                  {/* Feature Starts */}
                  <div className="col-sm-6 col-md-6 col-xs-12">
                    <div className="feature text-center">
                      <span className="feature-icon">
                        <img src="images/icons/orange/world-coverage.png" alt="world coverage"/>
                      </span>
                      <h3 className="feature-title">Couverture Mondiale</h3>
                      <p>Nos services sont utilisables dans 99%<br/>des pays du monde</p>
                    </div>
                  </div>
                  {/* Feature Ends */}
                </div>
                <div className="gap-20"></div>
                <div className="row">
                  {/* Feature Starts */}
                  <div className="col-sm-6 col-md-6 col-xs-12">
                    <div className="feature text-center">
                      <span className="feature-icon">
                        <img src="images/icons/orange/payment-options.png" alt="payment options"/>
                      </span>
                      <h3 className="feature-title">Options de paiements</h3>
                      <p>Visa, MasterCard, <br/>transfer bancaire, crypto-monnaies</p>
                    </div>
                  </div>
                  {/* Feature Ends */}
                  <div className="gap-20-mobile"></div>
                  {/* Feature Starts */}
                  <div className="col-sm-6 col-md-6 col-xs-12">
                    <div className="feature text-center">
                      <span className="feature-icon">
                        <img src="images/icons/orange/mobile-app.png" alt="mobile app"/>
                      </span>
                      <h3 className="feature-title">App Mobile</h3>
                      <p>Gérez vos trades avec notre application mobile<br/>Disponible sur Play Store & App Store</p>
                    </div>
                  </div>
                  {/* Feature Ends */}
                </div>
                <div className="gap-20"></div>
                <div className="row">
                  {/* Feature Starts */}
                  <div className="col-sm-6 col-md-6 col-xs-12">
                    <div className="feature text-center">
                      <span className="feature-icon">
                        <img src="images/icons/orange/cost-efficiency.png" alt="cost efficiency"/>
                      </span>
                      <h3 className="feature-title">Abonnement Premium</h3>
                      <p>Payez par mois ou par an<br/>un rapport qualité prix imbattable</p>
                    </div>
                  </div>
                  {/* Feature Ends */}
                  <div className="gap-20-mobile"></div>
                  {/* Feature Starts */}
                  <div className="col-sm-6 col-md-6 col-xs-12">
                    <div className="feature text-center">
                      <span className="feature-icon">
                        <img src="images/icons/orange/high-liquidity.png" alt="high liquidity"/>
                      </span>
                      <h3 className="feature-title">Disponiblité</h3>
                      <p>Traders disponibles h24 7j/7<br/>pour répondre à toutes vos questions</p>
                    </div>
                  </div>
                  {/* Feature Ends */}
                </div>
              </div>
              {/* Features Ends */}
              {/* Video Starts */}
              <div className="col-md-4 ts-padding bg-image-1">
                <div>
                  <div className="text-center">
                    <a className="button-video mfp-youtube" href="https://www.youtube.com/watch?v=YoFCB0P3OZc"> </a>
                  </div>
                </div>
              </div>
              {/* Video Ends */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
