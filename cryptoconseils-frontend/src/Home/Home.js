import React, { Component } from 'react';
import Navigation from './Navigation';
import Statistics from './Statistics';
import Carousel from './Caroussel';
import About from './About';
import Articles from './Articles';
import Features from './Features';
import Price from './Price';
import BitcoinCalculator from '../BitcoinCalculator/BitcoinCalculator';
import Team from './Team';
import Quote from './Quote';
import BitcoinChart from './BitcoinChart';
import Logo from '../Logo/Logo'
import LoginDisplay from './LoginDisplay';
import NotLoginDisplay from './NotLoginDisplay'

class UserAction extends Component {
  render() {
    let loginControl = null;
    if(this.props.isLogged){
      return <LoginDisplay username={sessionStorage.getItem('username')}/>
    }else {
      return <NotLoginDisplay/>
    }
  }
}

class BeginTrade extends Component {
  render() {
    if(this.props.isLogged === false){
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
                      <a className="btn btn-primary" href="/signup">
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
    }else {
      return null;
    }
  }
}

class Home extends Component {
  render() {
    let isLogged = false;
    if(sessionStorage.getItem('access_token')){
      isLogged = true;
    }
    return (
      <div className="App">
      {/* Wrapper Starts */}
        <div className="wrapper">
          {/* Header Starts */}
          <div className="header">
            <div className="container">
              <div className="row">
                {/* Logo Starts */}
                  <Logo />
                {/* Logo Ends */}
                {/* Statistics Starts */}
                  <Statistics />
                {/* Statistics Ends */}
                {/* User Sign In/Sign Up Starts */}
                  <UserAction isLogged={isLogged}/>
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
            <BeginTrade isLogged={isLogged}/>
          {/* Call To Action Section Ends */}
        {/* Wrapper Ends */}
        </div>
      </div>
    );
  }
}

export default Home;
