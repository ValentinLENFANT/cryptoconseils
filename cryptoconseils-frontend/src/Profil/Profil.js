import React, { Component } from 'react';
import Price from '../Home/Price';
import Menus from './Menus';
import Activites from './Activites';
import Call from './Call';
import Airdrop from './Airdrop';
import InfosPerso from './InfosPerso';
import Header from '../Header/Header';
import Denied from '../Denied/Denied';

class Profil extends Component {
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
              <Call />
            {/*Call premiums Ends */}

            {/*Airdrop premium Starts */}
              <Airdrop />
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
