import React, { Component } from 'react';
import Header from "../Header/Header"
class NotFound extends Component {
  render() {
    return(
      <div className="NotFound Component">
        <Header/>
      <div align="center">
        <img src="/images/backgrounds/404-error.jpg" alt="404"/>
      </div>
    </div>
    );
  }
}

export default NotFound;
