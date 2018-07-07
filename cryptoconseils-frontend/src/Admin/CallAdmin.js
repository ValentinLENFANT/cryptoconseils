import React, { Component } from 'react';
import TradingViewWidget from 'react-tradingview-widget';


class CallAdmin extends Component {
  render() {
    return(        
        <section className="calls-premium section-profil">
            <div className="container">
         
                <div className="row text-center">
                    <h2 className="title-head" id="call-premium">Call<span> du jour </span></h2>
                    <div className="title-head-subtitle">
                        <p>Création du call premium</p>
                    </div>
                </div>

                {/*<!-- FORMULAIRE CALL DU JOUR PREMIUM -->*/}
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-area">  
                            <form role="form">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="graphique-ticker" name="achat" placeholder="TradingView Ticker (exemple : BTCUSD )" required/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="ticker" name="ticker" placeholder="Nom de la crypto, exemple : Bitcoin (BTC)" required />
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" type="textarea" id="analyse" placeholder="Analyse technique" maxlength="300" rows="7"></textarea>
                                        <span className="help-block">
                                            <p id="characterLeft" className="help-block ">Limite de 300 charactères</p>
                                        </span>                    
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="achat" name="achat" placeholder="Prix achat, ex : 6101€ à 6500€" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="vente" name="vente" placeholder="Prix vente, ex : 7101€ à 7500€" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="score" name="score" placeholder="Score, ex : 80%" required />
                                    </div>
                                   
                                    <button type="button" id="submit" name="submit" className="btn btn-primary pull-right">Mettre à jour</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                 {/*<!--FIN FORMULAIRE CALL DU JOUR PREMIUM -->*/}


                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 text-center">
                        <p className="apercu-admin">Aperçu <i className="fa fa-chevron-down" aria-hidden="true"></i></p>
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
                        <script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script>
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
                                <p className="desciption-call-premium">Constatation troublante tous les 06 du mois. Préparation à une grosse montée.
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

export default CallAdmin;
