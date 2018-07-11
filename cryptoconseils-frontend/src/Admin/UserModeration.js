import React, { Component } from 'react';
import axios from 'axios';
import { action } from '@storybook/addon-actions'
import Confirm from 'react-confirm-bootstrap';
import Dialog from 'react-bootstrap-dialog'

class UserModeration extends Component {
  constructor(props){
    super(props);
    this.state = {
      adminValue: null,
      listUsers: [],
      currentUser: ''
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
  componentWillMount() {
    this.getAllusers();
  }

  deleteUser(item) {
    if(item.username === this.state.currentUser){
      alert('Vous ne pouvez pas vous supprimer')
    } else {
      axios.put(process.env.REACT_APP_API_ADDRESS+'/users/edit/enabled/'+item.id,{
        "enabled": 0
      }).then(() => {
        const array = this.state.listUsers;
        // index de l'item du com que l'on veut supprimer
        const index = array.indexOf(item);
        // Supprimer de l'affichage du commentaire
        array.splice(index, 1)
        //update de l'affichage des commentaires
        this.setState({listUsers: array});
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
  renderUserList() {
    return this.state.listUsers.map((user) => {
      return(
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>
            <Confirm
              onConfirm={this.deleteUser.bind(this, user)}
              confirmText="Oui supprimer"
              title="Suppresion de l'utilisateur"
              body={"Voulez-vous vraiment supprimer"}>
              <button
                type="button"
                className="btn btn-danger btn-xs button-profil"
                title="Delete">
                <span className="fa fa-trash"></span>
              </button>
            </Confirm>
          </td>
          <td>
            {user.roles.length > 0 ?
              <Confirm
                onConfirm={this.changeAdmin.bind(this, user)}
                confirmText="Oui rétrograder en USER"
                title={"Rétrograder "+user.username+" en USER"}
                body={"Voulez-vous rétrograder "+user.username+" au role de USER ?"}>
                <button
                  type="button"
                  className="btn btn-danger btn-xs button-profil"
                  title="Admin">
                  <span className="fa fa-trash"></span>
                </button>
              </Confirm>
              : <Confirm
                  onConfirm={this.changeAdmin.bind(this, user)}
                  confirmText="Oui promouvoir en ADMIN"
                  title={"Promouvoir "+user.username+" en ADMIN"}
                  body={"Voulez-vous promouvoir "+user.username+" au role d'ADMIN ?"}>
                  <button
                    type="button"
                    className="btn btn-success btn-xs button-profil"
                    title="Admin">
                    <span className="fa fa-check"></span>
                  </button>
                </Confirm>
            }

          </td>
        </tr>

      );
    });
  }
  render() {
    return(
      <section className="section-profil">
      <div className="container">
        <div className="row text-center">
          <h2 className="title-head" id="#moderation">Modération<span> Users</span></h2>
          <div className="title-head-subtitle">
            <p>Modération des utilisteurs</p>
          </div>
        </div>
      </div>
      <table>
        <tr>
          <th>ID </th> <th> username </th><th> email </th> <th>Supprimer</th> <th>admin</th>
        </tr>
        {this.renderUserList()}
      </table>
    </section>
    );
  }
}

export default UserModeration;
