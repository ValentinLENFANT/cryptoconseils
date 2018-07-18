import React, {Component} from 'react';
import Header from '../Header/Header'
import AidropOfDay from './AirdropOfDay';

class Airdrop extends Component {
  render() {
    return (
      <div>
        <Header/>
        <section className="calls-premium section-profil">
          <div className="container">
            <AidropOfDay/>
          </div>
        </section>
      </div>
    );
  }
}

export default Airdrop;
