import React, { Component } from 'react';
class Statistics extends Component {
  render() {
    return (
      <div className="Statistics">
        <div className="col-md-6 col-lg-6">
          <ul className="unstyled bitcoin-stats text-center">
            <li><h6>9,450 USD</h6><span>Dernier trade</span></li>
            <li><h6>+5.26%</h6><span>Prix en 24H </span></li>
            <li><h6>14.154 BTC</h6><span>Volume 24H </span></li>
            <li><h6>2,231,775</h6><span>Traders actifs</span></li>
            <li>
              <div className="btcwdgt-price" data-bw-theme="light" data-bw-cur="usd"></div>
              <span>Prix actuel du Bitcoin</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
class Navigation extends Component {
  render() {
    return(
      <div className="Statistics">
        <div className="container">
          <div className="site-nav-inner">
            {/* Logo For ONLY Mobile display Starts */}
            <a className="logo-mobile" href="index.html">
              <img className="img-responsive" src="images/logo.png" alt=""/>
            </a>
            {/* Logo For ONLY Mobile display Ends */}
            {/* Toggle Icon for Mobile Starts */}
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            {/* Toggle Icon for Mobile Ends */}
            <div className="collapse navbar-collapse navbar-responsive-collapse">
              {/* Main Menu Starts */}
              <ul className="nav navbar-nav">
                <li className="active"><a href="index.html">Accueil</a></li>
                <li><a href="analyses-calls.html">Analyses & calls</a></li>
                <li><a href="airdrops.html">Airdrops</a></li>
                <li><a href="premium.html">Accès Prémium</a></li>
                <li><a href="about.html">Team</a></li>
                <li><a href="contact.html">Contact</a></li>
                {/* Search Icon Starts */}
                <li className="search"><button className="fa fa-search"></button></li>
                {/* Search Icon Ends */}
              </ul>
              {/* Main Menu Ends */}
            </div>
          </div>
        </div>
        {/* Search Input Starts */}
        <div className="site-search">
          <div className="container">
            <input type="text" placeholder="type your keyword and hit enter ..."/>
            <span className="close">×</span>
          </div>
        </div>
        {/* Search Input Ends */}
      </div>
    );
  }
}

class UserAction extends Component {
  render() {
    return (
      <div className="UserAction">
        <div className="col-md-4 col-lg-4">
          <ul className="unstyled user">
            <li className="sign-in"><a href="connexion.html" className="btn btn-primary">
              <i className="fa fa-user"></i> Connexion</a></li>
            <li className="sign-up"><a href="inscription.html" className="btn btn-primary">
              <i className="fa fa-user-plus"></i> Inscription</a></li>
          </ul>
        </div>
      </div>
    );
  }
}
class Home extends Component {
  render() {
    return (
      <div className="Home">
      {/* Wrapper Starts */}
      <div className="wrapper">
        {/* Header Starts */}
        <div className="header">
          <div className="container">
            <div className="row">
              {/* Logo Starts */}
              <div className="main-logo col-xs-12 col-md-2 col-md-2 col-lg-2 hidden-xs">
                <a href="index.html">
                  <img className="img-responsive" src="images/logo.png" alt="logo"/>
                </a>
              </div>
              {/* Logo Ends */}
              {/* Statistics Starts */}
                <Statistics />
              {/* Statistics Ends */}
              {/* User Sign In/Sign Up Starts */}
                <UserAction />
              {/* User Sign In/Sign Up Ends */}
            </div>
          </div>
          {/* Navigation Menu Starts */}
          <nav className="site-navigation navigation" id="site-navigation">
            <Navigation />
          </nav>
          {/* Navigation Menu Ends */}
        </div>
      {/* Header Ends */}
                {/* Slider Starts */}
                <div id="main-slide" className="carousel slide carousel-fade" data-ride="carousel">
                  {/* Indicators Starts */}
                  <ol className="carousel-indicators visible-lg visible-md">
                    <li data-target="#main-slide" data-slide-to="0" className="active"></li>
                    <li data-target="#main-slide" data-slide-to="1"></li>
                    <li data-target="#main-slide" data-slide-to="2"></li>
                  </ol>
                  {/* Indicators Ends */}
                  {/* Carousel Inner Starts */}
                  <div className="carousel-inner">
                    {/* Carousel Item Starts */}
                    <div className="item active bg-parallax item-1">
                      <div className="slider-content">
                        <div className="container">
                          <div className="slider-text text-center">
                            <h3 className="slide-title"><span>Analyses</span> et <span>Conseils</span><br/> pour optimiser vos gains</h3>
                            <p>
                              <a href="about.html" className="slider btn btn-primary">En savoir plus</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Carousel Item Ends */}
                    {/* Carousel Item Starts */}
                    <div className="item bg-parallax item-2">
                      <div className="slider-content">
                        <div className="col-md-12">
                          <div className="container">
                            <div className="slider-text text-center">
                              <h3 className="slide-title">Suivez nos <span>Experts</span> Traders <br/> de classNamee <span>Mondiale</span> </h3>
                              <p>
                                <a href="pricing.html" className="slider btn btn-primary">Nos offres</a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Carousel Item Ends */}
                  </div>
                  {/* Carousel Inner Ends */}
                  {/* Carousel Controlers Starts */}
                  <a className="left carousel-control" href="index.html#main-slide" data-slide="prev">
                    <span><i className="fa fa-angle-left"></i></span>
                  </a>
                  <a className="right carousel-control" href="index.html#main-slide" data-slide="next">
                    <span><i className="fa fa-angle-right"></i></span>
                  </a>
                  {/* Carousel Controlers Ends */}
                </div>
                {/* Slider Ends */}

                {/* Blog Section Starts */}
                <section className="blog">
                  <div className="container">
                    {/* Section Title Starts */}
                    <div className="row text-center">
                      <h2 className="title-head">Dernières <span>Actualités</span></h2>
                      <div className="title-head-subtitle">
                        <p>Découvrez les dernières actualités cryptos à la une !</p>
                      </div>
                    </div>
                    {/* Section Title Ends */}
                    {/* Section Content Starts */}
                    <div className="row latest-posts-content">
                      {/* Article Starts */}
                      <div className="col-sm-4 col-md-4 col-xs-12">
                        <div className="latest-post">
                          {/* Featured Image Starts */}
                          <a href="blog-post.html"><img className="img-responsive" src="images/blog/blog-post-small-1.jpg" alt="img"/></a>
                          {/* Featured Image Ends */}
                          {/* Article Content Starts */}
                          <div className="post-body">
                            <h4 className="post-title">
                              <a href="blog-post.html">L'impact des crypto-monnaies sur le systême financier mondiale</a>
                            </h4>
                            <div className="post-text">
                              <p>incididunt ut labore et dolore magna aliqua. Ut enim aminim veniam, quis nostrud... ...</p>
                            </div>
                          </div>
                          <div className="post-date">
                            <span>01</span>
                            <span>JAN</span>
                          </div>
                          <a href="blog-post.html" className="btn btn-primary">Lire plus</a>
                          {/* Article Content Ends */}
                        </div>
                      </div>
                      {/* Article Ends */}
                      {/* Article Starts */}
                      <div className="col-sm-4 col-md-4 col-xs-12">
                        <div className="latest-post">
                          {/* Featured Image Starts */}
                          <a href="blog-post.html"><img className="img-responsive" src="images/blog/blog-post-small-2.jpg" alt="img"/></a>
                          {/* Featured Image Ends */}
                          {/* Article Content Starts */}
                          <div className="post-body">
                            <h4 className="post-title">
                              <a href="blog-post.html">Crypto-monnaies - le profil des utilisateurs se dessine</a>
                            </h4>
                            <div className="post-text">
                              <p>incididunt ut labore et dolore magna aliqua. Ut enim aminim veniam, quis nostrud...</p>
                            </div>
                          </div>
                          <div className="post-date">
                            <span>17</span>
                            <span>MAR</span>
                          </div>
                          <a href="blog-post.html" className="btn btn-primary">Lire plus</a>
                          {/* Article Content Ends */}
                        </div>
                      </div>
                      {/* Article Ends */}
                      {/* Article Start */}
                      <div className="col-sm-4 col-md-4 col-xs-12">
                        <div className="latest-post">
                          {/* Featured Image Starts */}
                          <a href="blog-post.html"><img className="img-responsive" src="images/blog/blog-post-small-3.jpg" alt="img"/></a>
                          {/* Featured Image Ends */}
                          {/* Article Content Starts */}
                          <div className="post-body">
                            <h4 className="post-title">
                              <a href="blog-post.html">Stratégie d'Investissement. Avantages et inconvénients</a>
                            </h4>
                            <div className="post-text">
                              <p>incididunt ut labore et dolore magna aliqua. Ut enim aminim veniam, quis nostrud...</p>
                            </div>
                          </div>
                          <div className="post-date">
                            <span>25</span>
                            <span>FEV</span>
                          </div>
                          <a href="blog-post.html" className="btn btn-primary">Lire plus</a>
                          {/* Article Content Ends */}
                        </div>
                      </div>
                    </div>
                    {/* Section Content Ends */}
                  </div>
                </section>
                {/* Blog Section Ends */}
                {/* About Section Starts */}
                <section className="about-us">
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
                </section>
                {/* About Section Ends */}
                {/* Features and Video Section Starts */}
                <section className="image-block">
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
                            <a className="button-video mfp-youtube" href="https://www.youtube.com/watch?v=YoFCB0P3OZc"></a>
                          </div>
                        </div>
                      </div>
                      {/* Video Ends */}
                    </div>
                  </div>
                </section>
                {/* Features and Video Section Ends */}
                {/* Pricing Starts */}
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
                {/* Pricing Ends */}
                {/* Bitcoin Calculator Section Starts */}
                <section className="bitcoin-calculator-section">
                  <div className="container">
                    <div className="row">
                      {/* Section Heading Starts */}
                      <div className="col-md-12">
                        <h2 className="title-head text-center">Convertisseur de <span>Bitcoin</span></h2>
                        <p className="message text-center">Trouvez facilement la valeur de vos bitcoins dans la monnaie de votre choix</p>
                      </div>
                      {/* Section Heading Ends */}
                      {/* Bitcoin Calculator Form Starts */}
                      <div className="col-md-12 text-center">
                        <form className="bitcoin-calculator" id="bitcoin-calculator">
                          {/* Input #1 Starts */}
                          <input className="form-input" name="btc-calculator-value" value="1"/>
                          {/* Input #1 Ends */}
                          <div className="form-info"><i className="fa fa-bitcoin"></i></div>
                          <div className="form-equal">=</div>
                          {/* Input/Result Starts */}
                          <input className="form-input form-input-result" name="btc-calculator-result"/>
                          {/* Input/Result Ends */}
                          {/* Select Currency Starts */}
                          <div className="form-wrap">
                            <select id="currency-select" className="form-input select-currency select-primary" name="btc-calculator-currency" data-dropdown-className="select-primary-dropdown"></select>
                          </div>
                          {/* Select Currency Ends */}
                        </form>
                        <p className="info"><i>* Le prix du Bitcoin se met à jour toutes les 15 minutes</i></p>
                      </div>
                      {/* Bitcoin Calculator Form Ends */}
                    </div>
                  </div>
                </section>
                {/* Bitcoin Calculator Section Ends */}
                {/* Team Section Starts */}
                <section className="team">
                  <div className="container">
                    {/* Section Title Starts */}
                    <div className="row text-center">
                      <h2 className="title-head">Nos <span>experts</span></h2>
                      <div className="title-head-subtitle">
                        <p> Une équipe d'expert en crypto-monnaies et de la blockchain située à Paris</p>
                      </div>
                    </div>
                    {/* Section Title Ends */}
                    {/* Team Members Starts */}
                    <div className="row team-content team-members">
                      {/* Team Member Starts */}
                      <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                        <div className="team-member">
                          {/* Team Member Picture Starts */}
                          <img src="images/team/member1.jpg" className="img-responsive" alt="team member"/>
                          {/* Team Member Picture Ends */}
                          {/* Team Member Details Starts */}
                          <div className="team-member-caption social-icons">
                            <h4>Guillaume JEAN</h4>
                            <p>Ingénieur Blockchain</p>
                            <ul className="list list-inline social">
                              <li>
                                <a href="#" className="fa fa-facebook"></a>
                              </li>
                              <li>
                                <a href="#" className="fa fa-twitter"></a>
                              </li>
                              <li>
                                <a href="#" className="fa fa-google-plus"></a>
                              </li>
                            </ul>
                          </div>
                          {/* Team Member Details Ends */}
                        </div>
                      </div>
                      {/* Team Member Ends */}
                      {/* Team Member Starts */}
                      <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                        <div className="team-member">
                          {/* Team Member Picture Starts */}
                          <img src="images/team/member2.jpg" className="img-responsive" alt="team member"/>
                          {/* Team Member Picture Ends */}
                          {/* Team Member Details Starts */}
                          <div className="team-member-caption social-icons">
                            <h4>Valentin LENFANT</h4>
                            <p>Consultant expert en crypto-monnaies</p>
                            <ul className="list list-inline social">
                              <li>
                                <a href="#" className="fa fa-facebook"></a>
                              </li>
                              <li>
                                <a href="#" className="fa fa-twitter"></a>
                              </li>
                              <li>
                                <a href="#" className="fa fa-google-plus"></a>
                              </li>
                            </ul>
                          </div>
                          {/* Team Member Details Ends */}
                        </div>
                      </div>
                      {/* Team Member Ends */}
                      {/* Team Member Starts */}
                      <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                        {/* Team Member*/}
                        <div className="team-member">
                          {/* Team Member Picture Starts */}
                          <img src="images/team/member3.jpg" className="img-responsive" alt="team member"/>
                          {/* Team Member Picture Ends */}
                          {/* Team Member Details Starts */}
                          <div className="team-member-caption social-icons">
                            <h4>Aurélien BERANGER</h4>
                            <p>Crypto Analyste</p>
                            <ul className="list list-inline social">
                              <li>
                                <a href="#" className="fa fa-facebook"></a>
                              </li>
                              <li>
                                <a href="#" className="fa fa-twitter"></a>
                              </li>
                              <li>
                                <a href="#" className="fa fa-google-plus"></a>
                              </li>
                            </ul>
                          </div>
                          {/* Team Member Details Ends */}
                        </div>
                      </div>
                      {/* Team Member Ends */}
                      {/* Team Member Starts */}
                      <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                        <div className="team-member">
                          {/* Team Member Picture Starts */}
                          <img src="images/team/member4.jpg" className="img-responsive" alt="team member"/>
                          {/* Team Member Picture Ends */}
                          {/* Team Member Details Starts */}
                          <div className="team-member-caption social-icons">
                            <h4>ALEXANDRE DUBOIS</h4>
                            <p>Expert Trader</p>
                            <ul className="list list-inline social">
                              <li>
                                <a href="#" className="fa fa-facebook"></a>
                              </li>
                              <li>
                                <a href="#" className="fa fa-twitter"></a>
                              </li>
                              <li>
                                <a href="#" className="fa fa-google-plus"></a>
                              </li>
                            </ul>
                          </div>
                          {/* Team Member Details Ends */}
                        </div>
                      </div>
                      {/* Team Member Ends */}
                    </div>
                    {/* Team Members Ends */}
                  </div>
                </section>
                {/* Team Section Ends */}
                {/* Quote and Chart Section Starts */}
                <section className="image-block2">
                  <div className="container-fluid">
                    <div className="row">
                      {/* Quote Starts */}
                      <div className="col-md-4 img-block-quote bg-image-2">
                        <blockquote>
                          <p>Bitcoin est l'une des inventions les plus importantes de toute l'histoire humaine. Pour la toute première fois, n'importe qui peut envoyer ou recevoir n'importe quelle somme d'argent à n'importe qui, n'importe où sur la planète, facilement et sans restriction. C'est l'aube d'un monde meilleur et plus libre.</p>
                          <footer><img src="images/ceo.jpg" alt="ceo" /> <span>Aurélien BERANGER</span> - Crypto Analyste</footer>
                        </blockquote>
                      </div>
                      {/* Quote Ends */}
                      {/* Chart Starts */}
                      <div className="col-md-8 bg-grey-chart">
                        <div className="chart-widget dark-chart chart-1">
                          <div>
                            <div className="btcwdgt-chart" data-bw-theme="dark"></div>
                          </div>
                        </div>
                      </div>
                      {/* Chart Ends */}
                    </div>
                  </div>
                </section>
                {/* Quote and Chart Section Ends */}

                {/* Call To Action Section Starts */}
                <section className="call-action-all">
                  <div className="call-action-all-overlay">
                    <div className="container">
                      <div className="row">
                        <div className="col-xs-12">
                          {/* Call To Action Text Starts */}
                          <div className="action-text">
                            <h2>Commencez dès maintenant à trader</h2>
                            <p className="lead">Créer un compte gratuitement !</p>
                          </div>
                          {/* Call To Action Text Ends */}
                          {/* Call To Action Button Starts */}
                          <p className="action-btn"><a className="btn btn-primary" href="inscription.html">S'enregistrer</a></p>
                          {/* Call To Action Button Ends */}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* Call To Action Section Ends */}
                {/* Footer Starts */}
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
                  {/* Footer Ends */}
                  {/* Back To Top Starts  */}
                  <a href="#" id="back-to-top" className="back-to-top fa fa-arrow-up"></a>
                  {/* Back To Top Ends  */}
                </footer>
                {/* Wrapper Ends */}
              </div>
            </div>
          );
        }
      }

      export default Home;
