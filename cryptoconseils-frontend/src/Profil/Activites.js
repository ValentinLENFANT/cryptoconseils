import React, {Component} from 'react';
import axios from 'axios'
import Confirm from 'react-confirm-bootstrap';

class Activites extends Component {

  constructor() {
    super();
    this.state = {
      comments: [],
      article: [],
      msg: null
    }
  }
  componentDidMount(){
    // check si access token
    if(sessionStorage.getItem('access_token')){
      var authorization = {
        headers: {'Authorization': "Bearer " + sessionStorage.getItem('access_token')}
      };
    }
    axios.get(process.env.REACT_APP_API_ADDRESS+'/users/comments/id/1', authorization)
    .then(response => {
      console.log(response.data);
      this.setState({
        comments: response.data
      })
    }).catch(error => {
      console.log(error);
    });

  }

  convertDate(date){
    date = new Date(date);
    var month = date.toLocaleString('fr', { month: "long" });
    var day = date.getDate();
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    return 'Le '+day+' '+month+', '+year+' à '+hours+':'+minutes;
  }
  getAllArticlesByid(id) {
    // check si access token
    if(sessionStorage.getItem('access_token')){
      var config = {
        headers: {'Authorization': "Bearer " + sessionStorage.getItem('access_token')}
      };
    }
     axios.get(process.env.REACT_APP_API_ADDRESS+'/articles/'+id, config)
    .then(response => {
      return response.data;
    }).catch(error => {
      console.log(error);
    });
  }

  deleteComment(item){
    // check si access token
    if(sessionStorage.getItem('access_token')){
      var authorization = {
        headers: {'Authorization': "Bearer " + sessionStorage.getItem('access_token')}
      };
      // send coms
      axios.delete(process.env.REACT_APP_API_ADDRESS+'/comments/'+item.id, authorization)
      .then(response => {
        const array = this.state.comments;
        // index de l'item de la todo list que l'on veut supprimer
        const index = array.indexOf(item);
        // Supprimer de l'affichage le commentaire
        array.splice(index, 1)
        //update de l'affichage des commentaires
        this.setState({
          comments: array,
          msg: "Votre commenaitre a été supprimé !",
        });
      }).catch(error => {
        this.setState({msg: "Une erreur s'est produite !"})
        console.log(error.response);
      });
    }
  }
  renderComments(){
    return this.state.comments.map(item => {
      return(
        <li className="list-group-item list-comment" key={item.id}>
          <div className="row">
            <div className="col-xs-2 col-md-1">
              <img src="images/team/member1.jpg" className="img-circle img-responsive" alt="avatar"/>
            </div>
            <div className="col-xs-10 col-md-11">
              <div>
                <a href={"/article/"+item.article_id}>UN TITRE D'ARTICLE</a>
                <div className="mic-info">
                  {this.convertDate(item.date)}
                </div>
              </div>
              <div className="comment-text">
                {item.content}
              </div>
              <div className="action">
                <button type="button" className="btn btn-info btn-xs button-profil" title="Edit">
                  <span className="fa fa-pencil"></span>
                </button>
                <Confirm
                  onConfirm={this.deleteComment.bind(this, item)}
                  confirmText="Oui supprimer"
                  title="Suppresion de commentaire"
                  body={"Voulez-vous vraiment supprimer votre commentaire:"+item.content.split(" ").splice(0,20).join(" ")+" ... ?"}>
                  <button
                    type="button"
                    className="btn btn-danger btn-xs button-profil"
                    title="Delete">
                    <span className="fa fa-trash"></span>
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
    return (
      <div className="container bootstrap snippet">
        <div className="row text-center">
          <h2 className="title-head" id="commentaires">Dernières<span>
              Activités</span>
          </h2>
          <div className="title-head-subtitle">
            <p>Un rapide coup d'oeil de votre activité sur le site</p>
          </div>
        </div>
        <div className="row text-left">
          <div className="panel panel-default widget">
            <div className="panel-heading">
              <span className="fa fa-comment fa-lg icone-commentaire"></span>
              <h3 className="panel-title mes-commentaires">Mes commentaires récents</h3>
            </div>
            <div className="panel-body">
              <ul className="list-group list-group-commentaire">
                {this.renderComments()}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Activites;
