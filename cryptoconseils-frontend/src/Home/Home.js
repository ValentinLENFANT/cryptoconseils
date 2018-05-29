import React, { Component } from 'react';
import Navigation from './Navigation';
import Statistics from './Statistics';
import Carousel from './Caroussel';
import About from './About';
import Articles from './Articles';
import Features from './Features';
import Price from './Price';
import BitcoinCalculator from './BitcoinCalculator';
import Team from './Team';
import Quote from './Quote';
import BitcoinChart from './BitcoinChart';
import Footer from './Footer';

class UserAction extends Component {
  render() {
    return (
      <div className="UserAction">
        <div className="col-md-4 col-lg-4">
          <ul className="unstyled user">
            <li className="sign-in">
              <a href="connexion.html" className="btn btn-primary">
                <i className="fa fa-user"></i> Connexion</a></li>
            <li className="sign-up">
              <a href="inscription.html" className="btn btn-primary">
              <i className="fa fa-user-plus"></i> Inscription</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

class BeginTrade extends Component {
  render() {
    return (
      <div className="BeginTrade">
        <div className="call-action-all">
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
                  <p className="action-btn">
                    <a className="btn btn-primary" href="inscription.html">
                    S'enregistrer
                    </a>
                  </p>
                  {/* Call To Action Button Ends */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <div className="App">
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
              <Navigation />
            {/* Navigation Menu Ends */}
            </div>
          {/* Header Ends */}

          {/* Slider Starts */}
            <Carousel />
          {/* Slider Ends */}

          {/* Blog Section Starts */}
            <Articles />
          {/* Blog Section Ends */}

          {/* About Section Starts */}
            <About />
          {/* About Section Ends */}

          {/* Features and Video Section Starts */}
            <Features />
          {/* Features and Video Section Ends */}

          {/* Pricing Starts */}
            <Price />
          {/* Pricing Ends */}

          {/* Bitcoin Calculator Section Starts */}
            <BitcoinCalculator />
          {/* Bitcoin Calculator Section Ends */}

          {/* Team Section Starts */}
            <Team />
          {/* Team Section Ends */}

          {/* Quote and Chart Section Starts */}
          <div className="image-block2">
            <div className="container-fluid">
              <div className="row">
                {/* Quote Starts */}
                  <Quote />
                {/* Quote Ends */}

                {/* Chart Starts */}
                  <BitcoinChart />
                {/* Chart Ends */}
              </div>
            </div>
          </div>
          {/* Quote and Chart Section Ends */}

          {/* Call To Action Section Starts */}
            <BeginTrade />
          {/* Call To Action Section Ends */}

          {/* Footer Starts */}
            <Footer />
          {/* Footer Ends */}
        {/* Wrapper Ends */}
        </div>
      </div>
    );
  }
}

export default Home;
