import React, { Component } from 'react';
import ArticleAdmin from './ArticleAdmin';
import ArticleEditAdmin from './ArticleEditAdmin';
import Header from '../Header/Header';
import Denied from '../Denied/Denied';
import CallAdmin from './CallAdmin';
import AirdropAdmin from './AirdropAdmin';
import MenusAdmin from './MenusAdmin';
import Moderation from './Moderation';
import axios from 'axios'

class Admin extends Component {

  constructor(){
    super();
    this.state = {
      noAccess: true
    }
  }
  componentWillMount() {
    // check si access token
    if(localStorage.getItem('access_token')){
      var authorization = {
        headers: {'Authorization': "Bearer " + localStorage.getItem('access_token')}
      };
      axios.get(process.env.REACT_APP_API_ADDRESS+'/users/current/',authorization)
      .then(response => {
        if(response.data.roles[0] === "ROLE_ADMIN") {
          this.setState({noAccess: false})
        } else {
          this.setState({noAccess: true});
        }
      }).catch(error => {
        this.setState({noAccess: true})
      });
    } else {
      this.setState({noAccess: true})
    }
  }
  render() {
    if(this.state.noAccess){
      return <Denied/>
    } else {
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
    }
  }
}

export default Admin;
