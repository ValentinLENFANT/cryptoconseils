import React, {Component} from 'react';
import Header from '../Header/Header';
import Price from '../Price/Price'
import Avantages from './Avantages'
class Premium extends Component {
  render() {
    return (<div className="Faq Component">
      <Header/>
      <section className="faq">
        <div className="container">
          {/* Section Title Starts */}
          <div className="row text-center">
            <h2 className="title-head">Avantages <span>Premium</span></h2>
            <div className="title-head-subtitle">
              <p>Les avantages des différentes offres premium</p>
            </div>
          </div>
          {/* Section Title Ends */}
          <Avantages/>
        </div>
        <Price/>
      </section>

    </div>);
  }
}

export default Premium;
