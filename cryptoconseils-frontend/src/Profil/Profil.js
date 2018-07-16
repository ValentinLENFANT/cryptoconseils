import React, { Component } from 'react';
import Price from '../Price/Price';
import Menus from './Menus';

import Activites from './Activites';
import CallOfDay from '../Call/CallOfDay';
import AirdropOfDay from '../Airdrop/AirdropOfDay';
import InfosPerso from './InfosPerso';
import Header from '../Header/Header';
import Denied from '../Denied/Denied';
import PreLoader from '../PreLoader/PreLoader';

import axios from 'axios'
class Profil extends Component {

  constructor(){
    super();
    this.state = {
      premium: 0,
      user: '',
      noLogged: null
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
        this.setState({
          user: res.data,
          premium: res.data.premiumLevel,
          noLogged: false
        })
      }).catch(error => {
        console.log(error);
      });
    } else {
      this.setState({noLogged: true})
    }
  }

  render() {
    if(this.state.noLogged === false){
      return (
        <div className="App">
        {/* Wrapper Starts */}
          <div className="wrapper">
            {/* Header Starts */}
            <div>
              <Header/>
            </div>
            {/* Header Ends */}

            {/* Menus Starts */}
            <div>
              <Menus premium={this.state.premium} />
            </div>
            {/* Menus Ends */}

            {/* Derniers commentaires Starts */}
            <div>
              <Activites />
            </div>
            {/* Derniers commentaires Ends */}

            {/*Call premium Starts */}
            <div>
              <CallOfDay profile={true} premium={this.state.premium} />
            </div>
            {/*Call premiums Ends */}

            {/*Airdrop premium Starts */}
            <div>
              <AirdropOfDay profile={true} premium={this.state.premium} />
            </div>
            {/*Airdrop premiums Ends */}

            {/*InfosPerso Starts */}
            <div>
              <InfosPerso user={this.state.user}/>
            </div>
            {/*InfosPerso Ends */}

            {/* Pricing Starts */}
            <div>
              <Price/>
            </div>
            {/* Pricing Ends */}
          {/* Wrapper Ends */}
          </div>
        </div>
      );
    } else if(this.state.noLogged === true){
      return (
        <div>
          <Denied noLogged={true}/>
        </div>
      )
    } else {
      return (
        <div>
          <PreLoader/>
        </div>
      )
    }
  }
}

export default Profil;
