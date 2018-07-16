import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import Statistics from './Statistics';
import UserAction from './UserAction';
import Navigation from './Navigation';
import axios from 'axios'
class Header extends Component {
  constructor() {
    super();
    this.state = {
      isAdmin: false
    }
  }
  componentDidMount(){
    if(localStorage.getItem('access_token')){
      var authorization = {
        headers: {'Authorization': "Bearer " + localStorage.getItem('access_token')}
      };
      axios.get(process.env.REACT_APP_API_ADDRESS+'/users/current/',authorization)
      .then(response => {
        if(response.data.roles[0] === "ROLE_ADMIN") {
          this.setState({
            isAdmin: true
          })
        }
      })
    }
  }
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
            <Navigation isAdmin={this.state.isAdmin}/>
          {/* Navigation Menu Ends */}
        </div>
        {/* Header Ends */}
      </div>
    );
  }
}

export default Header;
