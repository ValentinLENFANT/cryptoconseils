import React, { Component } from 'react';
import TradingViewWidget from 'react-tradingview-widget';



<script src="https://cdnjs.cloudflare.com/ajax/libs/postscribe/2.0.6/postscribe.min.js"></script>


class CallPremium extends Component {
  render() {
    return(
      <section className="calls-premium section-profil">
        <div className="container">
            <div className="row text-center">
                <h2 className="title-head" id="call-premium">Call<span> du jour </span></h2>
                <div className="title-head-subtitle">
                    <p>Call pour membre premium en avant-première !</p>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6">
                    {/*TradingView REACT BEGIN*/}
                    <div className="tradingview-widget-container">
                        <div id="tradingview_5421e"></div>
                        <TradingViewWidget symbol="BTCUSD" />
                    </div>
                    {/*TradingView REACT END*/}
                </div>

                <div className="col-xs-12 col-sm-12 col-md-6">
                <script type="text/jsx" src="https://files.coinmarketcap.com/static/widget/currency.js"></script>
                    <div className="coinmarketcap-currency-widget"
                        data-currencyid="1"
                        data-base="USD"
                        data-secondary=""
                        data-ticker="false"
                        data-rank="false"
                        data-marketcap="false"
                        data-volume="false"
                        data-stats="USD"
                        data-statsticker="false">
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <p className="call-premium-ticker">Bitcoin (BTC)</p>
                            <p className="desciption-call-premium">
                                Constatation troublante tous les 06 du mois. Préparation à une grosse montée.
                                Des signaux évidents d’un retournement du marché sont actuellement présents.
                                Le 06-06 dernier était une journée qui s'est remarquée par une grosse action.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-4 col-sm-4 col-md-4 button-call">
                            <div className="btn btn-info btn-lg">ACHAT</div>
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 prix-call">
                            <div>6101€ à 6500€</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-4 col-sm-4 col-md-4 button-call">
                            <div className="btn btn-warning btn-lg">VENTE</div>
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 prix-call">
                            <div>7101€ à 7200€</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-4 col-sm-4 col-md-4  button-call">
                            <div className="btn btn-success btn-lg">SCORE</div>
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 prix-call">
                            <div>82%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
  }
}

export default CallPremium;
