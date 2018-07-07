import React, { Component } from 'react';
import ArticleAdmin from './ArticleAdmin';
import ArticleEditAdmin from './ArticleEditAdmin';
import Header from '../Header/Header';
import Denied from '../Denied/Denied';
import CallAdmin from './CallAdmin';
import AirdropAdmin from './AirdropAdmin';
import MenusAdmin from './MenusAdmin';
import Moderation from './Moderation';

class Admin extends Component {
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
              <MenusAdmin />
            {/* Menus Ends */}

            {/* Derniers commentaires Starts */}
              <Moderation />
            {/* Derniers commentaires Ends */}

            {/*Call premium Starts */}
              <CallAdmin />
            {/*Call premiums Ends */}

            {/*Airdrop premium Starts */}
              <AirdropAdmin />
            {/*Airdrop premiums Ends */}

            {/* ArticleAdmin Starts */}
              <ArticleAdmin />
            {/* ArticleAdmin Ends */}

            {/* ArticleAdmin Starts */}
             <ArticleEditAdmin />
            {/* ArticleAdmin Ends */}

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

export default Admin;
