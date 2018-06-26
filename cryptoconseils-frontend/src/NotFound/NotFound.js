import React, { Component } from 'react';
import is404 from './404-error.jpg';

class NotFound extends Component {
  render() {
    return(
      <div align="center">
        <img src={is404} alt="The not found image is not found... lol"/>
          <p>Vous pouvez retourner à l'accueil en cliquant <a href="/"> ici </a></p>
      </div>
    );
  }
}

export default NotFound;
