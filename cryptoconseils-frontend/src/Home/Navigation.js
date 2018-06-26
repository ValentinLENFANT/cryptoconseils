import React, { Component } from 'react';
import Logo from '../Logo/Logo';
class Navigation extends Component {
  render() {
    return(
      <div className="Statistics">
        <nav className="site-navigation navigation" id="site-navigation">
          <div className="container">
            <div className="site-nav-inner">
              {/* Logo For ONLY Mobile display Starts */}
                <Logo mobile={true} />
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
                  <li><a href="/contact">Contact</a></li>
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
        </nav>
        {/* Search Input Ends */}
      </div>
    );
  }
}

export default Navigation;
