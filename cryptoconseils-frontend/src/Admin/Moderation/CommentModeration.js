import React, { Component } from 'react';
import axios from 'axios'
import { action } from '@storybook/addon-actions'
import Confirm from 'react-confirm-bootstrap';
import Dialog from 'react-bootstrap-dialog'
import Denied from '../../Denied/Denied'

class CommentModeration extends Component {

  constructor() {
    super();
    this.state = {
      listComment: [],
      noAccess: null
    }
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
          axios.get(process.env.REACT_APP_API_ADDRESS+"/comments")
          .then(listComment => {
            this.setState({listComment: listComment.data});
          }).catch(error => {
            console.log(error);
          });
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

  convertDate(date){
    date = new Date(date);
    var month = date.toLocaleString('fr', { month: "long" });
    var day = date.getDate();
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    return 'le '+day+' '+month+', '+year+' à '+hours+':'+minutes;
  }
  deleteComment(item){
    // delete coms
    axios.put(process.env.REACT_APP_API_ADDRESS+'/comments/edit/enabled/'+item.id,{
      "published": 0
    })
    .then(response => {
      const array = this.state.listComment;
      // index de l'item du com que l'on veut supprimer
      const index = array.indexOf(item);
      // Supprimer de l'affichage du commentaire
      array.splice(index, 1)
      //update de l'affichage des commentaires
      this.setState({
        listComment: array,
        msg: "Votre commenaitre a été supprimé !",
      });
    }).catch(error => {
      this.setState({msg: "Une erreur s'est produite !"})
      console.log(error.response);
    });

  }


  renderListComment(){
    return this.state.listComment.map(item => {
      return (
        <li key={item.id} className="list-group-item">
          <div className="row">
            <div className="col-xs-2 col-md-1">
              <img src="./images/team/member1.jpg" className="img-circle img-responsive" alt="avatar" />
            </div>
            <div className="col-xs-10 col-md-11">
              <div>
                <a href={"/articles/"+item.article.id}>{item.article.title}</a>
                <div className="mic-info">
                  Par: <a href="#">{item.author}</a> {this.convertDate(item.date)}
                </div>
              </div>
              <div className="comment-text">
                <h4>{item.content}</h4>
              </div>
              <div className="action">
                <Confirm
                  onConfirm={this.deleteComment.bind(this, item)}
                  confirmText="Oui supprimer"
                  title="Suppresion de commentaire"
                  body={"Voulez-vous vraiment supprimer le commentaire:"+item.content.split(" ").splice(0,20).join(" ")+" ... ?"}>
                  <button
                    type="button"
                    className="btn btn-danger btn-xs button-profil"
                    title="Delete">
                    Désactiver
                  </button>
              </Confirm>
              </div>
            </div>
          </div>
        </li>
      );
    })
  }

  render() {
    if(this.state.noAccess ===  false) {
      return(
        <div>
          <section className="section-profil">
            <div className="container">
            {/*<!-- Section Title Starts -->*/}
            <div className="row text-center">
              <h2 className="title-head" id="#moderation">Modération<span> Commentaires</span></h2>
              <div className="title-head-subtitle">
                  <p>Supprimer les commentaires</p>
              </div>
            </div>
            <div className="container bootstrap snippet">
              <div className="row text-left">
                <div className="panel panel-default widget">
                  <div className="panel-heading">
                    <span className="fa fa-comment fa-lg"></span>
                    <h3 className="panel-title">Commentaires récents</h3>
                  </div>
                  <div className="panel-body">
                    <ul className="list-group list-group-moderation">
                      {this.renderListComment()}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      );
    }else if(this.state.noAccess === true){
      return <Denied noAccess={true}/>
    } else {
      return null;
    }
  }
}

export default CommentModeration;
