import React, { Component } from 'react';
import Expert from './Expert'
import WhoAreWe from './WhoAreWe'
import Header from '../Header/Header'


class Team extends Component {
  render() {
    return(
      <div>
        <Header/>
        <div className="Team Component">
          <WhoAreWe/>
          <Expert/>
        </div>
      </div>
    );
  }
}

export default Team;
