import React, { Component } from 'react';

class BitcoinCalculator extends Component {
  render() {
    return (
      <div className="BitcoinCalculator Component">
        <section className="bitcoin-calculator-section">
          <div className="container">
            <div className="row">
              {/* Section Heading Starts */}
              <div className="col-md-12">
                <h2 className="title-head text-center">Convertisseur de <span>Bitcoin</span></h2>
                <p className="message text-center">Trouvez facilement la valeur de vos bitcoins dans la monnaie de votre choix</p>
              </div>
              {/* Section Heading Ends */}
              {/* Bitcoin Calculator Form Starts */}
              <div className="col-md-12 text-center">
                <form className="bitcoin-calculator" id="bitcoin-calculator">
                  {/* Input #1 Starts */}
                  <input className="form-input" name="btc-calculator-value" defaultValue="1"/>
                  {/* Input #1 Ends */}
                  <div className="form-info"><i className="fa fa-bitcoin"></i></div>
                  <div className="form-equal">=</div>
                  {/* Input/Result Starts */}
                  <input className="form-input form-input-result" name="btc-calculator-result"/>
                  {/* Input/Result Ends */}
                  {/* Select Currency Starts */}
                  <div className="form-wrap">
                    <select id="currency-select" className="form-input select-currency select-primary" name="btc-calculator-currency" data-dropdown-class="select-primary-dropdown"></select>
                  </div>
                  {/* Select Currency Ends */}
                </form>
                <p className="info"><i>* Le prix du Bitcoin se met à jour toutes les 15 minutes</i></p>
              </div>
              {/* Bitcoin Calculator Form Ends */}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default BitcoinCalculator;
