import React, { Component } from 'react';
import Navigation from '../Home/Navigation';
import Statistics from '../Home/Statistics';
import Price from '../Home/Price';
import Logo from '../Logo/Logo';
import Menus from './Menus';
import Activites from './Activites';
import Call from './Call';
import Airdrop from './Airdrop';
import InfosPerso from './InfosPerso';



class UserAction extends Component {
  render() {
    return (
      <div className="UserAction">
        <div className="col-md-4 col-lg-4">
          <ul className="unstyled user">
            <li className="sign-out" >
              <a href="#" className="btn btn-primary">
                <i className="fa fa-user-plus"></i> Déconnexion
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

class Profil extends Component {
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
                  <Logo />
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

          {/* Menus Starts */}
            <Menus />
          {/* Menus Ends */}
          
          {/* Derniers commentaires Starts */}
            <Activites />
          {/* Derniers commentaires Ends */}

          {/*Call premium Starts */}
            <Call /> 
          {/*Call premiums Ends */}

          {/*Airdrop premium Starts */}
          <Airdrop /> 
          {/*Airdrop premiums Ends */}

          {/*InfosPerso Starts */}
          <InfosPerso /> 
          {/*InfosPerso Ends */}

          {/* Pricing Starts */}
            <Price />
          {/* Pricing Ends */}

        {/* Wrapper Ends */}
        </div>
      </div>
    );
  }
}

export default Profil;
