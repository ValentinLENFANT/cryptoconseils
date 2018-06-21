import React, { Component } from 'react';
class Statistics extends Component {
  render() {
    return (
      <div className="Statistics">
        <div className="col-md-6 col-lg-6">
          <ul className="unstyled bitcoin-stats text-center">
            <li><h6>9,450 USD</h6><span>Dernier trade</span></li>
            <li><h6>+5.26%</h6><span>Prix en 24H </span></li>
            <li><h6>14.154 BTC</h6><span>Volume 24H </span></li>
            <li><h6>2,231,775</h6><span>Traders actifs</span></li>
            <li>
              <div className="btcwdgt-price" data-bw-theme="light" data-bw-cur="usd"></div>
              <span>Prix actuel du Bitcoin</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
 export default Statistics;
