import React, { Component } from 'react';
import axios from "axios";

class Statistics extends Component {
  constructor(){
    super();
    this.state = {
      price: null,
      percent_change_24h: null,
      volume_24h: null
    }
  }

  componentDidMount(){
    axios.get('https://api.coinmarketcap.com/v2/ticker/1/?convert=EUR')
    .then(response => {
      var btc = response.data.data.quotes.EUR;
      this.setState({
        price: btc.price.toLocaleString() + " €",
        percent_change_24h: btc.percent_change_24h +" %",
        volume_24h: (btc.volume_24h / btc.price).toLocaleString() + " BTC"
      });
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="Statistics Component">
        <div className="col-md-6 col-lg-6">
          <ul className="unstyled bitcoin-stats">
            <li><h6>{this.state.percent_change_24h}</h6><span>Prix en 24H </span></li>
            <li><h6>{this.state.volume_24h}</h6><span>Volume 24H </span></li>
            <li><h6 className="btc-price">{this.state.price}</h6><span>Prix actuel du Bitcoin</span></li>
          </ul>
        </div>
      </div>
    );
  }
}
 export default Statistics;
