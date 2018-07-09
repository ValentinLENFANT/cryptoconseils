import React, {Component} from 'react';
import TradingViewWidget from 'react-tradingview-widget';
import axios from 'axios'
import Denied from '../Denied/Denied'
class Call extends Component {

  constructor() {
    super();
    this.state = {
      allCalls: [],
      noAccess: false,
      noLogged: false
    }
  }
  componentWillMount() {
    // check si access token
    if (localStorage.getItem('access_token')) {
      var authorization = {
        headers: {
          'Authorization': "Bearer " + localStorage.getItem('access_token')
        }
      };
      axios.get(process.env.REACT_APP_API_ADDRESS + '/call/all/', authorization)
      .then(response => {

        this.setState({allCalls: response.data})
      }).catch(error => {
        this.setState({noAccess: true})
      });
    } else {
      this.setState({noLogged: true})
    }
  }
  
  sortArray(array) {
    return array.sort(function (a, b) {
      return b.id - a.id;
    });
  }

  renderLatestCall(){
    var listCalls = this.sortArray(this.state.allCalls);

    return listCalls.slice(0,1).map(calls => {
      return(
        <div key={calls.id} className="row">
          <div className="col-xs-12 col-sm-12 col-md-6">
            {/* TradingView REACT BEGIN */}
            <div className="tradingview-widget-container">
              <div id="tradingview_5421e"></div>
              <TradingViewWidget symbol={calls.cryptocurrencyPair.replace('/','')}/>
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
                <div>{calls.buyPrice+"€"}</div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-4 col-sm-4 col-md-4 button-call">
                <div className="btn btn-warning btn-lg">VENTE</div>
              </div>
              <div className="col-xs-8 col-sm-8 col-md-8 prix-call">
                <div>{calls.sellPrice+"€"}</div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-4 col-sm-4 col-md-4  button-call">
                <div className="btn btn-success btn-lg">SCORE</div>
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

  render() {
    if (this.state.noAccess === false && this.state.noLogged === false) {
      return (
        <section className="calls-premium section-profil">
          <div className="container">

            <div className="row text-center">
              <h2 className="title-head" id="call-premium">Call<span>
                  du jour
                </span>
              </h2>
              <div className="title-head-subtitle">
                <p>Création du call premium</p>
              </div>
            </div>
              {this.renderLatestCall()}
            <div className="row text-center">
              <h2 className="title-head" id="call-premium">Calls<span>
                  précédents</span>
              </h2>
              <div className="title-head-subtitle">
                <p>Création du call premium</p>
              </div>
            </div>

          </div>
        </section>
      );
    } else if(this.state.noAccess === true) {
      return <Denied noAccess={true}/>
    } else if (this.state.noLogged === true) {
      return <Denied noLogged={true}/>
    }

  }
}

export default Call;
