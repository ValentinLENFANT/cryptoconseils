import React, {Component} from 'react';
import TradingViewWidget from 'react-tradingview-widget';
import PreLoader from '../PreLoader/PreLoader';
import axios from 'axios'

class CallOfDay extends Component {

  constructor() {
    super();
    this.state = {
      allCalls: [],
      isPremium: null
    }
  }

  componentDidMount() {
    if(localStorage.getItem('access_token')) {
      var authorization = {
        headers: {
          'Authorization': "Bearer " + localStorage.getItem('access_token')
        }
      };
      // get current user
      axios.get(process.env.REACT_APP_API_ADDRESS+'/users/current/', authorization)
      .then(res => {
        if(res.data.premiumLevel < 4){
          this.setState({isPremium: false});
        } else if(res.data.premiumLevel >= 4){
          this.setState({isPremium: true})
        }
      }).catch(error => {
        console.log(error);
        this.setState({isPremium: false})
      });
    } else {
      this.setState({isPremium: false})
    }

    // get calls
    axios.get(process.env.REACT_APP_API_ADDRESS + '/call/all/', authorization)
    .then(response => {
      this.setState({allCalls: response.data})
    }).catch(error => {
      console.log(error);
    });
  }

  sortArray(array) {
    return array.sort(function (a, b) {
      return b.id - a.id;
    });
  }

  renderNoAccess(){
    return(
      <div className="row" key="noAccess">
        <div  className="row text-center">
          <h2 className="title-head" id="call-premium">Calls <span> Premium</span></h2>
          <div className="title-head-subtitle">
            <p>Calls pour membre premium en avant-première !</p>
          </div>
          <p>Un call est un conseils d’investissement composé d’un prix d'achat et d’un prix de vente</p>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12">
          <a href="/premium">
            <img src="/images/backoffice/call-no-premium.jpg" className="premium-image" alt="call premium" />
          </a>
        </div>
      </div>
    );
  }
  renderCalls() {
    var listCalls = this.sortArray(this.state.allCalls);
    if(this.props.profile){
      listCalls = listCalls.slice(0,1)
    }
    return listCalls.map(calls => {
      return(
        <div className="row call" key={calls.id}>
          <div className="col-xs-12 col-sm-12 col-md-6">
            {/* TradingView REACT BEGIN */}
            <div className="tradingview-widget-container">
              <div id="tradingview_5421e"></div>
              <TradingViewWidget symbol={calls.cryptocurrencyPair}/>
            </div>
            {/* TradingView REACT END */}
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6">

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12">
                <p className="desciption-call-premium white-space-pre">
                  {calls.content}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-4 col-sm-4 col-md-4 button-call">
                <div className="btn btn-info btn-lg">ACHAT</div>
              </div>
              <div className="col-xs-8 col-sm-8 col-md-8 prix-call">
                <div>{calls.buyPrice+" BTC"}</div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-4 col-sm-4 col-md-4 button-call">
                <div className="btn btn-warning btn-lg">VENTE</div>
              </div>
              <div className="col-xs-8 col-sm-8 col-md-8 prix-call">
                <div>{calls.sellPrice+" BTC"}</div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-4 col-sm-4 col-md-4  button-call">
                <div className="btn btn-success btn-lg">FIABILITÉ</div>
              </div>
              <div className="col-xs-8 col-sm-8 col-md-8 prix-call">
                <div>{calls.scoring+"%"}</div>
              </div>
            </div>
          </div>
        </div>
      );
    })
  }

  renderAllCalls(){
    if(this.state.isPremium){
      return(
        <div>
          <div  className="row text-center">
            <h2 className="title-head" id="call-premium">Call <span> Premium</span></h2>
            <div className="title-head-subtitle">
              <p>Calls pour membre premium en avant-première !</p>
            </div>
            <p>Un call est un conseils d’investissement composé d’un prix d'achat et d’un prix de vente</p>
          </div>
          <div>
            {this.renderCalls()}
          </div>
        </div>
      )
    } else if(this.state.isPremium === false) {
        return(
          <div className="row text-center">
            <div>
              <h2 className="title-head" id="call-premium">Calls <span> GRATUITS </span></h2>
              <div className="title-head-subtitle">
                  <p>Ces Calls sont GRATUITS pour tous les membres non-premium & premium !</p>
              </div>
              <p>Un call est un conseils d’investissement composé d’un prix d'achat et d’un prix de vente</p>
            </div>
            <div>
              {this.renderCalls()}
            </div>
            <div>
              {this.renderNoAccess()}
            </div>
          </div>
      )
    } else return null
  }

  render() {
    return (
      <div className="calls-premium">
        <section className="calls-premium section-profil">
          <div className="container">
            {this.renderAllCalls()}
          </div>
        </section>
      </div>
    );
  }
}

export default CallOfDay;
