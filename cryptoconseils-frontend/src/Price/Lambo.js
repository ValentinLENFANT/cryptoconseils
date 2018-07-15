import React, { Component } from 'react';

class Lambo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      premiumLevel: this.props.premiumLevel,
      access_token: localStorage.getItem('access_token')
    }
  }

  renderButton(){
    if(this.props.isAdmin){
      return (
        <a href={"http://90.90.185.202:8000/orders/new/1000?accessToken=" + this.state.access_token } className="btn btn-primary">
          COMMANDER
        </a>
      );
    }else {
      return (
        <a href="#"className="btn btn-primary" disabled>
          COMMANDER
        </a>
      );
    }
  }

  render() {
    if(this.state.premiumLevel < 5) {
      return(
        <div className="Price Component">
          <li className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
            <ul className="pricing-wrapper">
              {/* Buy Pricing Table #4 Starts */}
              <li data-type="buy" className="is-visible">
                <header className="pricing-header">
                  <h2>PACK LAMBO<span>pour </span></h2>
                  <div className="price">
                    <span className="currency"><i className="fa fa-euro"></i></span>
                    <span className="value">1,000</span>
                  </div>
                </header>
                <footer className="pricing-footer">
                  {this.renderButton()}
                </footer>
              </li>
              {/* Buy Pricing Table #4 Ends */}
              {/* Sell Pricing Table #4 Starts */}
              <li data-type="sell" className="is-hidden">
                <header className="pricing-header">
                  <h2>GET 9000 USD <span>For </span></h2>
                  <div className="price">
                    <span className="currency"><i className="fa fa-bitcoin"></i></span>
                    <span className="value">2</span>
                  </div>
                </header>
                <footer className="pricing-footer">
                  <a href="connexion.html" className="btn btn-primary">COMMANDER</a>
                </footer>
              </li>
              {/* Sell Pricing Table #4 Ends */}
            </ul>
          </li>
        </div>
      );
    } else return null
  }
}

export default Lambo;
