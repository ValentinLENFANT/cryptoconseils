import React, {Component} from 'react';
import Header from '../Header/Header'
import CallOfDay from './CallOfDay';

class Call extends Component {
  render() {
    return (
      <div>
        <Header/>
        <section className="calls-premium section-profil">
          <div className="container">
            <CallOfDay/>
          </div>
        </section>
      </div>
    );
  }
}

export default Call;
