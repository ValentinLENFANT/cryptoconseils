import React, {Component} from 'react';
import Header from '../Header/Header';
import Price from '../Price/Price'
import Avantages from './Avantages'

class Premium extends Component {
  render() {
    return (
      <div className="Faq Component">
        <Header/>
        <div className="container">
          <Price showAvantages={true}/>
        </div>
      </div>
    );
  }
}

export default Premium;
