import React, { Component } from 'react';

class Debutant extends Component {

  constructor(props) {
    super(props)
    this.state = {
      premiumLevel: this.props.premiumLevel,
      access_token: localStorage.getItem('access_token')
    }
  }
  render() {
    console.log(this.state.premiumLevel);
    if(this.state.premiumLevel < 3) {
      return(
        <div className="Price Component">
          <li className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
            <ul className="pricing-wrapper">
              {/* Buy Pricing Table #1 Starts */}
              <li data-type="buy" className="is-visible">
                <header className="pricing-header">
                  <h2>PACK DEBUTANT <span>pour </span></h2>
                  <div className="price">
                    <span className="currency"><i className="fa fa-euro"></i></span>
                    <span className="value">100</span>
                  </div>
                </header>
                <footer className="pricing-footer">
                  <a href={ 'http://localhost/cryptoconseils/web/app_dev.php/orders/new/100?accessToken=' + this.state.access_token } className="btn btn-primary">COMMANDER</a>
                </footer>
              </li>
              {/* Buy Pricing Table #1 Ends */}
            </ul>
          </li>
        </div>
      );
    } else return null
  }
}

export default Debutant;