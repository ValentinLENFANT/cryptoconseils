import React, { Component } from 'react';
import axios from 'axios'
import { action } from '@storybook/addon-actions'
import Confirm from 'react-confirm-bootstrap';
import Dialog from 'react-bootstrap-dialog'
import Header from '../../Header/Header'
import PreLoader from '../../PreLoader/PreLoader'
import Denied from '../../Denied/Denied'
import MenusModeration from './MenusModeration'
import UserModeration from './UserModeration'
import CommentModeration from './CommentModeration'

class Moderation extends Component {

  constructor() {
    super();
    this.state = {
      noAccess: null,
      showComments: null,
      showUsers: null
    }
    this.showUsers = this.showUsers.bind(this)
    this.showComments = this.showComments.bind(this)
  }
  componentWillMount(){
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
  showUsers(event) {
    event.preventDefault();
    this.setState({showUsers: true, showComments:false});
  }
  showComments(event) {
    event.preventDefault();
    this.setState({showUsers: false, showComments:true});
  }

  renderModeration(){
    if(this.state.showUsers) {
      return <UserModeration/>
    }else if (this.state.showComments) {
      return <CommentModeration/>
    }
  }
  render() {
    if(this.state.noAccess ===  false) {
      return(
        <div>
          <Header/>
          <div className="Menus">
            <section className="menu-dashboard section-profil">
              <div className="container">
                <div className="text-center">
                  <img src="../images/backoffice/logo-admin.png" className="img-responsive center-block" />
                </div>
                <div className="row text-center">
                  <div className="col-md-4 col-sm-4 col-xs-12">
                    <a href="" onClick={this.showUsers}>
                      <h3 className="titre-dashboard">Utilisateurs</h3>
                    </a>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-12">
                    <a href="/admin/">
                      <h3 className="titre-dashboard">Admin</h3>
                    </a>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-12">
                    <a href="" className="" onClick={this.showComments}>
                      <h3 className="titre-dashboard">Commentaires</h3>
                    </a>
                  </div>

                </div>
              </div>
            </section>
            <div>
              {this.renderModeration()}
            </div>
          </div>
        </div>
      );
    }else if(this.state.noAccess === true){
      return <Denied noAccess={true}/>
    }else {
      return <PreLoader/>
    }
  }
}

export default Moderation;
