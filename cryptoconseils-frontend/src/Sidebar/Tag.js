import React, { Component } from 'react';

class Tag extends Component {

  render() {
    return(
      <div className="Tag Component">
        <div className="widget widget-tags">
          <h3 className="widget-title">Tags populaires </h3>
          <ul className="unstyled clearfix">
            <li><a href="#">crypto-monnaies</a></li>
            <li><a href="#">crypto</a></li>
            <li><a href="#">trading</a></li>
            <li><a href="#">wallet</a></li>
            <li><a href="#">mining</a></li>
            <li><a href="#">transaction</a></li>
            <li><a href="#">finances</a></li>
            <li><a href="#">sécurité</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Tag;
