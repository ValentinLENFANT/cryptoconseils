import React, { Component } from 'react';
import Debutant from './Debutant'
import Avance from './Avance'
import Expert from './Expert'
import Lambo from './Lambo'

import axios from 'axios'

class Price extends Component {

  constructor() {
    super()
    this.state = {
      premiumLevel: null,
      access_token: localStorage.getItem('access_token')
    }
  }
  componentDidMount(){
    if(localStorage.getItem('access_token')){
      var authorization = {
        headers: {'Authorization': "Bearer " + localStorage.getItem('access_token')}
      };
      axios.get(process.env.REACT_APP_API_ADDRESS+'/users/current/',authorization)
      .then(response => {
        this.setState({premiumLevel: response.data.premiumLevel})
      }).catch(error => {
        console.log(error);
      });
    } else {
      this.setState({premiumLevel: 0})
    }
  }

  renderPack(){
    if(this.state.premiumLevel !== null) {
      return(
        <div className="Pack Component">
          <Debutant premiumLevel={this.state.premiumLevel}/>
          <Avance premiumLevel={this.state.premiumLevel}/>
          <Expert premiumLevel={this.state.premiumLevel}/>
          <Lambo premiumLevel={this.state.premiumLevel}/>
        </div>
      );
    }
  }
  render() {
    if(this.state.premiumLevel === 5) {
      return null
    } else {
      return(
        <div className="Price Component">
          <section className="pricing" id="pricing">
            <div className="container">
              {/* Section Title Starts */}
              <div className="row text-center">
                <h2 className="title-head">Abonnement <span>premium</span></h2>
                <div className="title-head-subtitle">
                  <p>Souscrivez à un abonnement premium adapté à vos besoins parmis nos différentes offres</p>
                </div>
              </div>
              {/* Section Title Ends */}
              {/* Section Content Starts */}
              <div className="row pricing-tables-content">
                <div className="pricing-container">
                  {/* Pricing Tables Starts */}
                  <ul className="pricing-list bounce-invert">
                    {this.renderPack()}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }

  }
}

export default Price;
