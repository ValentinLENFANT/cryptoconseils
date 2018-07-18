import React, { Component } from 'react';
import Debutant from './Debutant'
import Avance from './Avance'
import Expert from './Expert'
import Lambo from './Lambo'
import Avantages from '../Premium/Avantages'
import axios from 'axios'

class Price extends Component {

  constructor(props) {
    super(props)
    this.state = {
      premiumLevel: null,
      access_token: localStorage.getItem('access_token'),
      isAdmin: false,
      showAvantages: false
    }
  }
  componentWillMount(){
    if(this.props.showAvantages) {
      this.setState({showAvantages: this.props.showAvantages })
    }

    if(localStorage.getItem('access_token')){
      var authorization = {
        headers: {'Authorization': "Bearer " + localStorage.getItem('access_token')}
      };
      axios.get(process.env.REACT_APP_API_ADDRESS+'/users/current/',authorization)
      .then(response => {
        if(response.data.roles[0] === "ROLE_ADMIN"){
          this.setState({isAdmin: true})
        }
        this.setState({premiumLevel: response.data.premiumLevel})
      }).catch(error => {
        console.log(error);
      });
    } else {
        this.setState({premiumLevel: 0})
    }

  }

  toggleAvantage() {
    this.setState({showAvantages: !this.state.showAvantages})
  }
  renderPack(){
    if(this.state.premiumLevel !== null) {
      return(
        <div className="Pack Component">
          <Debutant isAdmin={this.state.isAdmin} premiumLevel={this.state.premiumLevel}/>
          <Avance isAdmin={this.state.isAdmin} premiumLevel={this.state.premiumLevel}/>
          <Expert isAdmin={this.state.isAdmin} premiumLevel={this.state.premiumLevel}/>
          <Lambo isAdmin={this.state.isAdmin} premiumLevel={this.state.premiumLevel}/>
        </div>
      );
    }
  }

  renderTitle() {
    if(this.props.titlePart1 && this.props.titlePart2) {
      return (<h2 className="title-head">{this.props.titlePart1} <span>{this.props.titlePart2}</span></h2>)
    }else return(<h2 className="title-head">Abonnement <span>premium</span></h2>)
  }

  renderAvantages(){
    if(this.state.showAvantages){
      return <Avantages/>
    } else return null
  }
  render() {
    if(this.state.premiumLevel === 5) {
      return (
        <div>
          <Avantages/>
        </div>
      )
    } else {
      return(
        <div className="Price Component">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-xs-12">
              <section className="pricing" id="pricing">
                <div className="container">
                  {/* Section Title Starts */}
                  <div className="row text-center">
                    {this.renderTitle()}
                    <div className="title-head-subtitle">
                      <p>Souscrivez à un abonnement premium adapté à vos besoins parmis nos différentes offres</p>
                    </div>
                  </div>
                  {/* Section Title Ends */}
                  {/* Section Content Starts */}
                  <div className="row pricing-tables-content">
                    <div className="pricing-container">
                      <div className="text-center">
                        <button className="btn-primary" onClick={this.toggleAvantage.bind(this)}>Découvrez ci-dessous les avantages de nos pack premium</button>
                      </div>
                      {this.renderAvantages()}
                      {/* Pricing Tables Starts */}
                      <ul className="pricing-list bounce-invert">
                        {this.renderPack()}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      );
    }

  }
}

export default Price;
