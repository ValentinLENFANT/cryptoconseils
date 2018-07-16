import React, { Component } from 'react';
import axios from 'axios';
import { action } from '@storybook/addon-actions';
import Confirm from 'react-confirm-bootstrap';
import Dialog from 'react-bootstrap-dialog';

import Denied from '../../Denied/Denied'

class UserModeration extends Component {
  constructor(){
    super();
    this.state = {
      adminValue: null,
      listUsers: [],
      currentUser: '',
      noAccess: null,
      premium_level: ["Non inscrit","Inscrit","Debutant","Avancé","Expert","Lambo"]
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
          this.getAllusers();
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

  getAllusers() {
    var authorization = {
      headers: {'Authorization': "Bearer " + localStorage.getItem('access_token')}
    };
    // récupération user actuel
    axios.get(process.env.REACT_APP_API_ADDRESS+'/users/current/',authorization)
    .then(res => {
      this.setState({currentUser: res.data.username})
    }).catch(err => {
      console.log(err.response);
    })

    // on récupère les users
    axios.get(process.env.REACT_APP_API_ADDRESS+'/users/',authorization)
    .then(user => {
      this.setState({listUsers: user.data});
    }).catch(error => {
      console.log(error);
    });
  }

  changeEnabledUser(item,action) {
    if(item.username === this.state.currentUser){
      alert('Vous ne pouvez pas vous désactiver ou vous activer')
    } else {
      axios.put(process.env.REACT_APP_API_ADDRESS+'/users/edit/enabled/'+item.id,{
        "enabled": action
      }).then(() => {
        this.getAllusers()
      })
    }
  }


  changeAdmin(item) {
    if(item.username === this.state.currentUser){
      alert('Vous ne pouvez pas changer votre propre rôle')
    } else {
      axios.post(process.env.REACT_APP_API_ADDRESS+"/users/changeRoles/"+item.username)
      .then(res => {
        this.getAllusers()
      }).catch(err => {
        console.log(err);
      })
    }
  }

  choosePremium (item) {
    this.dialog.show({
      body: 'Changer le niveau',
      actions: [
        Dialog.CancelAction(),
        Dialog.Action(
          'Inscrit',
          () => this.changePremium(item,1),
          'btn-danger'
        ),
        Dialog.Action(
          'Debutant',
          () => this.changePremium(item,2),
          'btn-warning'
        ),
        Dialog.Action(
          'Avancé',
          () => this.changePremium(item,3),
          'btn-info'
        ),
        Dialog.Action(
          'Expert',
          () => this.changePremium(item,4),
          'btn-primary-true'
        ),
        Dialog.Action(
          'Lambo',
          () => this.changePremium(item,5),
          'btn-success'
        ),
      ]
    })
  }

  changePremium(item,lvl){
    if(item.username === this.state.currentUser){
      alert('Vous ne pouvez pas changer votre propre niveau')
    } else {
      var authorization = {
        headers: {'Authorization': "Bearer " + localStorage.getItem('access_token')}
      };
      axios.put(process.env.REACT_APP_API_ADDRESS+"/users/"+item.username,{
        "premiumLevel": lvl
      }, authorization)
      .then(res => {
        this.getAllusers()
        alert('Le niveau premium de '+item.username+' a été changé en: '+this.state.premium_level[lvl])
      }).catch(err => {
        console.log(err);
      })
    }
  }

  renderUserList() {
    return this.state.listUsers.map((user) => {
      return(
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td className={this.state.premium_level[user.premium_level]+"-color niveau"}>
            {this.state.premium_level[user.premium_level]}
          </td>
          <td>
            {user.enabled ?
            <Confirm

              onConfirm={this.changeEnabledUser.bind(this, user, false)}
              confirmText="Désactiver"
              title="Désactivation de l'utilisateur"
              body={"Voulez-vous vraiment désactiver "+user.username+" ?"}>
              <button
                type="button"
                className="btn btn-success button-profil confirm"
                title="Delete">
                Activé
              </button>
            </Confirm>
            : <Confirm
                onConfirm={this.changeEnabledUser.bind(this, user, true)}
                confirmText="Activer"
                title="Activation de l'utilisateur"
                body={"Voulez-vous vraiment activer "+user.username+" ?"}>
                <button
                  type="button"
                  className="btn btn-danger button-profil confirm"
                  title="Activate">
                  Désactivé
                </button>
              </Confirm>}
          </td>
          <td>
            {user.roles.length > 0 ? <Confirm
              onConfirm={this.changeAdmin.bind(this, user)}
              confirmText="Oui rétrograder en USER"
              title={"Rétrograder "+user.username+" en USER"}
              body={"Voulez-vous rétrograder "+user.username+" au role de USER ?"}>
              <button
                type="button"
                className="btn btn-danger button-profil confirm"
                title="Admin">Rétrograder user
              </button>
            </Confirm>
            :<Confirm
              onConfirm={this.changeAdmin.bind(this, user)}
              confirmText="Oui promouvoir en ADMIN"
              title={"Promouvoir "+user.username+" en ADMIN"}
              body={"Voulez-vous promouvoir "+user.username+" au role d'ADMIN ?"}>
              <button
                type="button"
                className="btn btn-success button-profil confirm"
                title="Admin">Promouvoir admin
              </button>
            </Confirm>
            }
            <Dialog ref={(el) => { this.dialog = el }} />
          </td>
          <td>
            <button
              type="button"
              className="btn btn-info button-profil confirm"
              onClick={this.choosePremium.bind(this, user)}
              title="Admin">Changer premium
            </button>
          </td>
        </tr>

      );
    });
  }

  render() {
    if(this.state.noAccess === false){
      return(
        <div>
          <section className="section-profil">
          <div className="container">
            <div className="row text-center">
              <h2 className="title-head" id="#moderation">Modération<span> Users</span></h2>
              <div className="title-head-subtitle">
                <p>Modération des utilisteurs</p>
              </div>
            </div>
          </div>
          <table className="better-table sortable" id="userTable">
            <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Email</th>
              <th>Niveau</th>
              <th>État</th>
              <th>Rôle</th>
              <th>Premium</th>
            </tr>
          </thead>
           <tbody>
            {this.renderUserList()}
          </tbody>
          </table>
        </section>
      </div>
      );
    } else if(this.state.noAccess === true){
      return <Denied noAccess={true}/>
    } else{
      return null
    }
  }
}

export default UserModeration;
