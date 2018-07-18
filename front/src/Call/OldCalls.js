import React, {Component} from 'react';
import TradingViewWidget from 'react-tradingview-widget';

class OldCalls extends Component {

  constructor(props) {
    super(props);
  }
  
  sortArray(array) {
    return array.sort(function(a, b) {
      return b.id - a.id;
    });
  }

  renderOldCalls() {
    var listCalls = this.sortArray(this.props.allCalls);

    return listCalls.slice(1, 3).map(calls => {
      return (
        <div key={calls.id} className="row">
          <div className="col-xs-12 col-sm-12 col-md-6">
            {/* TradingView REACT BEGIN */}
            <div className="tradingview-widget-container">
              <div id="tradingview_5421e"></div>
              <TradingViewWidget symbol={calls.cryptocurrencyPair.replace('/', '')}/>
            </div>
            {/* TradingView REACT END */}
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6">

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12">
                <p className="desciption-call-premium">
                  {calls.content}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-4 col-sm-4 col-md-4 button-call">
                <div className="btn btn-info btn-lg">ACHAT</div>
              </div>
              <div className="col-xs-8 col-sm-8 col-md-8 prix-call">
                <div>{calls.buyPrice + "€"}</div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-4 col-sm-4 col-md-4 button-call">
                <div className="btn btn-warning btn-lg">VENTE</div>
              </div>
              <div className="col-xs-8 col-sm-8 col-md-8 prix-call">
                <div>{calls.sellPrice + "€"}</div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-4 col-sm-4 col-md-4  button-call">
                <div className="btn btn-success btn-lg">SCORE</div>
              </div>
              <div className="col-xs-8 col-sm-8 col-md-8 prix-call">
                <div>{calls.scoring + "%"}</div>
              </div>
            </div>
          </div>
        </div>
      );
    })
  }
  render() {
    return (
      <div>
        <div className="row text-center">
          <h2 className="title-head" id="call-premium">Calls
            <span>
              précédents</span>
          </h2>
          <div className="title-head-subtitle">
            <p>La liste des derniers calls</p>
          </div>
        </div>
        <div>
          {this.renderOldCalls()}
        </div>
      </div>
    );
  }
}

export default OldCalls;
