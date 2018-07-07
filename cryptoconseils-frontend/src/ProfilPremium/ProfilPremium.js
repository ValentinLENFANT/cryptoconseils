import React, { Component } from 'react';
import Menus from './Menus';
import Activites from './Activites';
import InfosPerso from './InfosPerso';
import Header from '../Header/Header';
import Denied from '../Denied/Denied';
import CallPremium from './CallPremium';
import AirdropPremium from './AirdropPremium';

class ProfilPremium extends Component {
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
              <Menus />
            {/* Menus Ends */}

            {/* Derniers commentaires Starts */}
              <Activites />
            {/* Derniers commentaires Ends */}

            {/*Call premium Starts */}
              <CallPremium />
            {/*Call premiums Ends */}

            {/*Airdrop premium Starts */}
              <AirdropPremium />
            {/*Airdrop premiums Ends */}

            {/*InfosPerso Starts */}
              <InfosPerso />
            {/*InfosPerso Ends */}

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

export default ProfilPremium;
