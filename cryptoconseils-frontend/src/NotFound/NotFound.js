import React, { Component } from 'react';
import Header from "../Header/Header"
class NotFound extends Component {
  render() {
    return(
      <div className="NotFound Component">
        <Header/>
      <div align="center">
        <img src="/images/backgrounds/404-error.jpg" alt="The not found image is not found... lol"/>
          <p>Vous pouvez retourner à l'accueil en cliquant <a href="/"> ici </a></p>
      </div>
    </div>
    );
  }
}

export default NotFound;
