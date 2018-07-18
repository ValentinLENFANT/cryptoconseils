import React, { Component } from 'react';

class BitcoinChart extends Component {
  render () {
    return (
      <div className="BitcoinChart Component">

        <section className="col-md-8 bg-grey-chart">
          <div className="chart-widget dark-chart chart-1">
            <div>
              <div className="btcwdgt-chart" data-bw-theme="dark"></div>
            </div>
          </div>
        </section>

      </div>
    );
  }
}
export default BitcoinChart;
