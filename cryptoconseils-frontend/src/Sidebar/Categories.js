import React, { Component } from 'react';

class Categories extends Component {

  render() {
    return(
      <div className="Categories Component">
        <div className="widget">
          <h3 className="widget-title">Catégories</h3>
          <ul className="arrow nav nav-tabs second-font uppercase">
            <li><a href="">Régulations</a></li>
            <li><a href="">Annonces</a></li>
            <li><a href="">Banques</a></li>
            <li><a href="">Sécurité</a></li>
            <li><a href="">Airdrops</a></li>
            <li><a href="">Marchés</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Categories;
