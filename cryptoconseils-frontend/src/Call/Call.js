import React, {Component} from 'react';
import Header from '../Header/Header'
import PreLoader from '../PreLoader/PreLoader';
import CallOfDay from './CallOfDay';
import axios from 'axios'

class Call extends Component {
  constructor(){
    super();
    this.state = {
      premium: null
    }
  }
  componentDidMount(){
    // check si access token
    if(localStorage.getItem('access_token')){
      var authorization = {
        headers: {'Authorization': "Bearer " + localStorage.getItem('access_token')}
      };
      axios.get(process.env.REACT_APP_API_ADDRESS+'/users/current/', authorization)
      .then(res => {
        this.setState({premium: res.data.premiumLevel})
      }).catch(error => {
        console.log(error);
          this.setState({premium: 0})
      });
    } else {
      this.setState({premium: 0})
    }
  }
  render() {
    return (
      <div>
        <Header/>
        <section className="calls-premium section-profil">
          <div className="container">
            <CallOfDay premium={this.state.premium}/>
          </div>
        </section>
      </div>
    );
  }
}

export default Call;
