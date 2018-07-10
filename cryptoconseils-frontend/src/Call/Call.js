import React, {Component} from 'react';
import TradingViewWidget from 'react-tradingview-widget';
import Header from '../Header/Header'
import Denied from '../Denied/Denied'
import PreLoader from '../PreLoader/PreLoader';
import axios from 'axios'
import CallOfDay from './CallOfDay';
import OldCalls from './OldCalls';

class Call extends Component {

  constructor() {
    super();
    this.state = {
      allCalls: [],
      noAccess: null,
      noLogged: null
    }
  }
  componentDidMount() {
    // check si access token
    if (localStorage.getItem('access_token')) {
      var authorization = {
        headers: {
          'Authorization': "Bearer " + localStorage.getItem('access_token')
        }
      };
      axios.get(process.env.REACT_APP_API_ADDRESS + '/call/all/', authorization)
      .then(response => {
        this.setState({
          allCalls: response.data,
          noAccess:false,
          noLogged: false,
        })
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


  render() {
    if (this.state.noAccess === false && this.state.noLogged === false) {
      return (
        <div>
          <Header/>
          <section className="calls-premium section-profil">
            <div className="container">
              <CallOfDay />
              <OldCalls allCalls={this.state.allCalls}/>
            </div>
          </section>
        </div>
      );
    } else if(this.state.noAccess === true) {
      return <Denied noAccess={true}/>
    } else if (this.state.noLogged === true) {
      return <Denied noLogged={true}/>
    } else {
      return <PreLoader/>
    }
  }
}

export default Call;
