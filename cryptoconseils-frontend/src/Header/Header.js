import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import Statistics from './Statistics';
import UserAction from './UserAction';
import Navigation from './Navigation';

class Header extends Component {

  render() {
    return(
      <div className="Header Component">
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
        {/* Header Ends */}
      </div>
    );
  }
}

export default Header;
