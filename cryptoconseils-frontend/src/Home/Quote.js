import React, { Component } from 'react';

class Quote extends Component {
  render() {
    return (
      <div className="Quote">
        <div className="col-md-4 img-block-quote bg-image-2">
          <blockquote>
            <p>Bitcoin est l'une des inventions les plus importantes de toute l'histoire humaine. Pour la toute première fois, n'importe qui peut envoyer ou recevoir n'importe quelle somme d'argent à n'importe qui, n'importe où sur la planète, facilement et sans restriction. C'est l'aube d'un monde meilleur et plus libre.</p>
            <footer><img src="images/ceo.jpg" alt="ceo" /> <span>Aurélien BERANGER</span> - Crypto Analyste</footer>
          </blockquote>
        </div>
      </div>
    );
  }
}

export default Quote;
