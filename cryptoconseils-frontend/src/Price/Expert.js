import React, { Component } from 'react';

class Expert extends Component {

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
        <a href={"http://90.90.185.202:8000/orders/new/500?accessToken=" + this.state.access_token } className="btn btn-primary">
          COMMANDER
        </a>
      );
    }else {
      return (
        <a className="btn btn-primary" disabled>
          COMMANDER
        </a>
      );
    }
  }

  render() {
    if(this.state.premiumLevel < 4) {
      return(
        <div className="Price Component">
          <li className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
            <ul className="pricing-wrapper">
              {/* Buy Pricing Table #3 Starts */}
              <li data-type="buy" className="is-visible">
                <header className="pricing-header">
                  <h2>PACK EXPERT <span>pour </span></h2>
                  <div className="price">
                    <span className="currency"><i className="fa fa-euro"></i></span>
                    <span className="value">500</span>
                  </div>
                </header>
                <footer className="pricing-footer">
                  {this.renderButton()}
                </footer>
              </li>
              {/* Buy Pricing Table #3 Ends */}
            </ul>
          </li>
        </div>
      );
    } else return null
  }
}

export default Expert;
