import React, { Component } from 'react';
import axios from 'axios';

class UserModeration extends Component {
  constructor(props){
    super(props);
    this.state = {
      adminValue: null
    }
  }

  changeAdmin(item) {
    //check si access token
    var authorization = {
      headers: {'Authorization': "Bearer " + localStorage.getItem('access_token')}
    };

    if(typeof item.roles !== "undefined"){
      // update user
      axios.put(process.env.REACT_APP_API_ADDRESS+'/users/'+item.username,{
        "roles": ['']
      }, authorization).then(response => {
        //update de l'affichage des commentaires
        console.log(response.data);
      }).catch(error => {
        console.log(error.response);
      });
    } else {
      // update user
      axios.put(process.env.REACT_APP_API_ADDRESS+'/users/'+item.username,{
        "roles": [
          "ROLE_ADMIN"
        ]
      }, authorization).then(response => {
        //update de l'affichage des commentaires
        alert(response.data);
      }).catch(error => {
        console.log(error.response);
      });
    }
  }
  renderUserList() {
    return this.props.listUsers.map((user) => {
      return(
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>
            {typeof user.roles !== "undefined" ?
              <input
                type="checkbox"
                name="onoffswitch"
                checked
                value={true}
                onChange={this.changeAdmin.bind(this,user)}/>
              :<input
                type="checkbox"
                name="onoffswitch"
                value={false}
                onChange={this.changeAdmin.bind(this, user)}/>
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
        <th>ID </th> <th> username </th><th> email </th> <th>ADMIN</th>
        </tr>
        {this.renderUserList()}
      </table>
    </section>
    );
  }
}

export default UserModeration;
