import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    return(
      <div align="center">
        <img src="./404-error.jpg" alt="The not found image is not found... lol"/>
          <p>Vous pouvez retourner à l'accueil en cliquant <a href="/"> ici </a></p>
      </div>
    );
  }
}

export default NotFound;
