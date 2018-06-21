import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return(
      <div className="Footer">
        <footer className="footer">
          {/* Footer Top Area Starts */}
          <div className="top-footer">
            <div className="container">
              <div className="row">
                {/* Footer Widget Starts */}
                <div className="col-sm-4 col-md-2">
                  <h4>CryptoConseils</h4>
                  <div className="menu">
                    <ul>
                      <li><a href="index.html">Accueil</a></li>
                      <li><a href="about.html">Team</a></li>
                      <li><a href="contact.html">Contact</a></li>
                    </ul>
                  </div>
                </div>
                {/* Footer Widget Ends */}
                {/* Footer Widget Starts */}
                <div className="col-sm-4 col-md-2">
                  <h4>Aide & Support</h4>
                  <div className="menu">
                    <ul>
                      <li><a href="faq.html">FAQ</a></li>
                      <li><a href="terms-of-services.html">Conditions & utilisations</a></li>
                      <li><a href="404.html">404</a></li>
                      <li><a href="inscription.html">Inscription</a></li>
                      <li><a href="connexion.html">Connexion</a></li>
                      <li><a href="coming-soon.html">Coming Soon</a></li>
                    </ul>
                  </div>
                </div>
                {/* Footer Widget Ends */}
                {/* Footer Widget Starts */}
                <div className="col-sm-4 col-md-3">
                  <h4>Contactez-nous</h4>
                  <div className="contacts">
                    <div>
                      <span>cryptoconseils@gmail.com</span>
                    </div>
                    <div>
                      <span>0637751315</span>
                    </div>
                    <div>
                      <span>Paris, France</span>
                    </div>
                    <div>
                      <span>7j/7 & 24h/24</span>
                    </div>
                  </div>
                  {/* Social Media Profiles Starts */}
                  <div className="social-footer">
                    <ul>
                      <li><a href="#" target="_blank"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#" target="_blank"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#" target="_blank"><i className="fa fa-google-plus"></i></a></li>
                      <li><a href="#" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                    </ul>
                  </div>
                  {/* Social Media Profiles Ends */}
                </div>
                {/* Footer Widget Ends */}
                {/* Footer Widget Starts */}
                <div className="col-sm-12 col-md-5">
                  {/* Facts Starts */}
                  <div className="facts-footer">
                    <div>
                      <h5>$198.76B</h5>
                      <span>Market cap</span>
                    </div>
                    <div>
                      <h5>243K</h5>
                      <span>Transactions journalières</span>
                    </div>
                    <div>
                      <h5>369K</h5>
                      <span>Comptes actifs</span>
                    </div>
                    <div>
                      <h5>127</h5>
                      <span>Pays supportés</span>
                    </div>
                  </div>
                  {/* Facts Ends */}
                  <div>
                    {/* Supported Payment Cards Logo Starts */}
                    <div className="payment-logos">
                      <h4 className="payment-title">Méthodes de paiement supportées</h4>
                      <img src="images/icons/payment/american-express.png" alt="american-express"/>
                      <img src="images/icons/payment/mastercard.png" alt="mastercard"/>
                      <img src="images/icons/payment/visa.png" alt="visa"/>
                      <img src="images/icons/payment/paypal.png" alt="paypal"/>
                      <img className="last" src="images/icons/payment/maestro.png" alt="maestro"/>
                    </div>
                    {/* Supported Payment Cards Logo Ends */}
                  </div>
                  {/* Footer Widget Ends */}
                </div>
              </div>
            </div>
            {/* Footer Top Area Ends */}

          </div>

          {/* Back To Top Starts  */}
          <a href="#" id="back-to-top" className="back-to-top fa fa-arrow-up"></a>
          {/* Back To Top Ends  */}
        </footer>
      </div>
    );
  }
}

export default Footer;
