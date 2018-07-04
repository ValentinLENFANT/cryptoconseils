import React, { Component } from 'react';
import Price from '../Home/Price';
import Menus from './Menus';

import Activites from './Activites';
import Call from './Call';
import Airdrop from './Airdrop';
import InfosPerso from './InfosPerso';
import Header from '../Header/Header';
import Denied from '../Denied/Denied';
import axios from 'axios'
class Profil extends Component {

  constructor(){
    super();
    this.state = {
      premium: 0
    }
  }
  componentDidMount(){
    // check si access token
    if(sessionStorage.getItem('access_token')){
      var authorization = {
        headers: {'Authorization': "Bearer " + sessionStorage.getItem('access_token')}
      };
      axios.get(process.env.REACT_APP_API_ADDRESS+'/users/'+sessionStorage.getItem('username'), authorization)
      .then(response => {
        this.setState({
          premium: response.data.premium_level
        })
      }).catch(error => {
        console.log(error);
      });
    }
  }

  render() {
    if(sessionStorage.getItem('access_token')){
      return (
        <div className="App">
        {/* Wrapper Starts */}
          <div className="wrapper">
            {/* Header Starts */}
              <Header/>
            {/* Header Ends */}

            {/* Menus Starts */}
              <Menus premium={this.state.premium} />
            {/* Menus Ends */}

            {/* Derniers commentaires Starts */}
              <Activites />
            {/* Derniers commentaires Ends */}

            {/*Call premium Starts */}
              <Call premium={this.state.premium} />
            {/*Call premiums Ends */}

            {/*Airdrop premium Starts */}
              <Airdrop premium={this.state.premium} />
            {/*Airdrop premiums Ends */}

            {/*InfosPerso Starts */}
              <InfosPerso />
            {/*InfosPerso Ends */}

            {/* Pricing Starts */}
              <Price />
            {/* Pricing Ends */}

          {/* Wrapper Ends */}
          </div>
        </div>
      );
    } else {
      return(
        <Denied />
      );
    }

  }
}

export default Profil;
