import React, {Component} from 'react';
import Header from '../Header/Header'
import PreLoader from '../PreLoader/PreLoader';
import AidropOfDay from './AirdropOfDay';
import axios from 'axios'

class Airdrop extends Component {
  constructor(){
    super();
    this.state = {
      premium: null
    }
  }
  componentWillMount(){
    // check si access token
    if(localStorage.getItem('access_token')){
      var authorization = {
        headers: {'Authorization': "Bearer " + localStorage.getItem('access_token')}
      };
      axios.get(process.env.REACT_APP_API_ADDRESS+'/users/current/', authorization)
      .then(res => {
        console.log(res.data);
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
    if(this.state.premium !== null){
      return (
        <div>
          <Header/>
          <section className="calls-premium section-profil">
            <div className="container">
              <AidropOfDay premium={this.state.premium}/>
            </div>
          </section>
        </div>
      );
    } else return <PreLoader/>
  }
}

export default Airdrop;
