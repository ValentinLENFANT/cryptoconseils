import React, { Component } from 'react';

class Archives extends Component {

  render() {
    return(
      <div className="Archives Component">
        <div className="widget">
          <h3 className="widget-title">Archives</h3>
          <ul className="arrow nav nav-tabs second-font uppercase">
            <li><a href="#">Janvier 2018</a></li>
            <li><a href="#">Decembre 2018</a></li>
            <li><a href="#">Novembre 2018</a></li>
            <li><a href="#">Octobre 2018</a></li>
            <li><a href="#">Septembre 2018</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Archives;
