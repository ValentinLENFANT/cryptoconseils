import React, {Component} from 'react';
import axios from 'axios'

class Activites extends Component {

  constructor() {
    super();
    this.state = {
      comments: [],
      article: []
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
    const array = this.state.comments;

    // index de l'item de la todo list que l'on veut supprimer
    const index = array.indexOf(item);
    //console.log(array);
    // Supprimer du tableau la todo
    array.splice(index, 1)

    //update du tableau
    this.setState({
      comments: array
    });
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
                <a href={"/article/"+item.article_id}>
                </a>
                <div className="mic-info">
                  Par:
                  <a href="">{item.author}</a>
                  le {item.date}
                </div>
              </div>
              <div className="comment-text">
                {item.content}
              </div>
              <div className="action">
                <button type="button" className="btn btn-info btn-xs button-profil" title="Edit">
                  <span className="fa fa-pencil"></span>
                </button>
                <button
                  type="button"
                  className="btn btn-danger btn-xs button-profil"
                  title="Delete"
                  onClick={this.deleteComment.bind(this, item)}>
                  <span className="fa fa-trash"></span>
                </button>
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
