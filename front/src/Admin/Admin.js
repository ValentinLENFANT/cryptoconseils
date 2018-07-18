import React, { Component } from 'react';
import ArticleAdmin from './ArticleAdmin';
import Header from '../Header/Header';
import Denied from '../Denied/Denied';
import CallAdmin from './CallAdmin';
import AirdropAdmin from './AirdropAdmin';
import MenusAdmin from './MenusAdmin';
import PreLoader from '../PreLoader/PreLoader';
import axios from 'axios'

class Admin extends Component {

  constructor(){
    super();
    this.state = {
      noAccess: null,
      listCategories: [],
      username: ''
    }
  }
  componentDidMount() {
    // check si access token
    if(localStorage.getItem('access_token')){
      var authorization = {
        headers: {'Authorization': "Bearer " + localStorage.getItem('access_token')}
      };
      axios.get(process.env.REACT_APP_API_ADDRESS+'/users/current/',authorization)
      .then(response => {
        // si le user est bien un admin
        if(response.data.roles[0] === "ROLE_ADMIN") {
          this.setState({noAccess: false});
          // on récupère les catégories
          axios.get(process.env.REACT_APP_API_ADDRESS+'/categories/')
          .then(categories => {
            this.setState({listCategories: categories.data});
          }).catch(error => {
            console.log(error);
          });
          this.setState({username: response.data.username})
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
    if(this.state.noAccess === false) {
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

            {/*Call premium Starts */}
              <CallAdmin author={this.state.username}/>
            {/*Call premiums Ends */}

            {/*Airdrop premium Starts */}
              <AirdropAdmin author={this.state.username} />
            {/*Airdrop premiums Ends */}

            {/* ArticleAdmin Starts */}
              <ArticleAdmin listCategories={this.state.listCategories} author={this.state.username} />
            {/* ArticleAdmin Ends */}
          {/* Wrapper Ends */}
          </div>
        </div>
      );
    } else if(this.state.noAccess === true){
      return (<div><Denied/></div>);
    } else {
      return(<div> <PreLoader/></div>);
    }
  }
}

export default Admin;
