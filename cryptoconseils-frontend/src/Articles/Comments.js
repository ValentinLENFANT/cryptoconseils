import React, { Component } from 'react';
import Confirm from 'react-confirm-bootstrap';
import Dialog from 'react-bootstrap-dialog'
import axios from 'axios'
class Comments extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      reply: null,
      comments: this.props.comments,
      isAdmin: false,
      nbComments: 0,
      comment: '',
      msg: null,
      statusMsg: null,
      published: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount(){
    if(localStorage.getItem('access_token')){
      var authorization = {
        headers: {'Authorization': "Bearer " + localStorage.getItem('access_token')}
      };
      axios.get(process.env.REACT_APP_API_ADDRESS+'/users/current/',authorization)
      .then(response => {
        // si le user est bien un admin
        if(response.data.roles[0] === "ROLE_ADMIN") {
          this.setState({isAdmin: true})
        }
      }).catch(error => {
        console.log(error);
      });
    }
  }

  // enregistre la valeur des inputs
  handleChange(event) {
    this.setState({comment: event.target.value});
  }

  renderStatusMsg(){
    if (this.state.published === true) {
      return(
        <div className="col-md-10 text-center output_message_holder d-block">
          <p className="output_message success">{this.state.msg}</p>
        </div>
      );
    }else if(this.state.msg !== null && this.state.published === false ) {
      return(
        <div className="col-md-10 text-center output_message_holder d-block">
          <p className="output_message error">{this.state.msg}</p>
        </div>
      );
    }
  }
  convertDate(date){
    date = new Date(date);
    var month = date.toLocaleString('fr', { month: "long" });
    var day = date.getDate();
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    return month+' '+day+', '+year+' '+hours+':'+minutes;
  }

  countComment() {
    var nbComments = 0;
    this.state.comments.map(cmt => {
      if(cmt.published){
        nbComments = nbComments + 1
      }
    });
    return nbComments+" commentaires";
  }

  sendComment(event){
    // pour éviter le rechargement de la page
    event.preventDefault();
    if(localStorage.getItem('access_token')) {
      // check si access token
      var authorization = {
        headers: {'Authorization': "Bearer " + localStorage.getItem('access_token')}
      };
      // check longeur du commentaire
      if(this.state.comment.length < 20 || this.state.comment.length > 2000){
        this.setState({
          published: false,
          msg: "Votre commentaire doit contenir entre 20 et 2000 caractères"
        })
      } else {
        // send coms
        axios.post(process.env.REACT_APP_API_ADDRESS+'/comments/new/', {
          article_id: this.props.article.id,
          author: localStorage.getItem('username'),
          content: this.state.comment
        }, authorization)
        .then(response => {

          // suppression data inutile pour affichage commentaire
          delete response.data["article"]
          // ajout du commentaire dans la liste des commenaires
          this.state.comments.push(response.data)

          // réponse si succes
          this.setState({
            published: true,
            msg: "Votre commenaitre a été envoyé !",
            comment: ''
          })
        }).catch(error => {
          // si bug
          this.setState({msg: "Une erreur s'est produite !"})
          console.log(error.response);
        });
      }
    } else {
      // Si pas connecté
      this.setState({
        msg: "Vous devez être connecté pour écrire un commentaire"
      })
    }
  }

  deleteComment(item){
    // delete coms
    axios.put(process.env.REACT_APP_API_ADDRESS+'/comments/edit/enabled/'+item,{
      "published": 0
    })
    .then(response => {
      const array = this.state.comments;
      // index de l'item du com que l'on veut supprimer
      const index = array.indexOf(item);
      // Supprimer de l'affichage du commentaire
      array.splice(index, 1)
      //update de l'affichage des commentaires
      this.setState({
        published: true,
        msg: "Le commentaire a été supprimé !",
        comments: array
      });
    }).catch(error => {
      this.setState({msg: "Une erreur s'est produite !"})
      console.log(error.response);
    });

  }

  renderReplyButton(){
    if(localStorage.getItem('access_token')) {
      return(
        <div className="Reply Commponent">
          <h3 className="comments-heading add-comment">Ajouter un commentaire</h3>
          <div className="contact-form">
            {this.renderStatusMsg()}
          </div>
          {/* Comments Form Starts */}
          <div className="comments-form">
            <form onSubmit={this.sendComment.bind(this)}>
              {/* Input Field Starts */}
              <div className="form-group">
                <textarea
                  className="form-control"
                  id="comment"
                  name="comment"
                  placeholder="COMMENT"
                  onChange={this.handleChange}
                  value={this.state.comment}
                  required>
                </textarea>
                <span className="help-block">
                  <p id="characterLeft" className="help-block ">{2000 - this.state.comment.length} caractères restant</p>
                </span>
              </div>
              {/* Input Field Ends */}
              {/* Submit Form Button Starts */}
              <div className="form-group">
                <button className="btn btn-primary" type="submit" >Envoyer commentaire</button>
              </div>
              {/* Submit Form Button Ends */}
            </form>
          </div>
        </div>
      );
    } else {
      return(
        <div className="Reply Commponent">
          <h3 className="comments-heading add-comment">
            <span>Pour ajouter un commentaire Il faut vous</span>
            <a href="/signin"> connecter </a>
            <span>ou vous</span>
            <a href="/signup>"> inscrire </a>
          </h3>
        </div>
      );
    }
  }
  renderDeleteButton(cmt) {
    if(this.state.isAdmin){
      return(
        <Confirm
          onConfirm={this.deleteComment.bind(this,cmt)}
          confirmText="Oui supprimer"
          title="Suppresion de l'article"
          body={"Voulez-vous vraiment supprimer le commentaire ? "}>
          <button
            type="button"
            className="btn btn-danger btn-xs button-profil"
            title="Supprimer">Désactiver
          </button>
      </Confirm>
      );
    } else return null;
  }
  renderComments(){
    if(this.state.comments){
      return this.state.comments.map(cmt => {
        if(cmt.published) {
          return (
            <li key={cmt.id}>
              {/* Comment Starts */}
              <div className="comment" >
                <img className="comment-avatar pull-left" alt="" src={"/images/articles/default-user.jpg"}/>
                <div className="comment-body">
                  <div className="meta-data">
                    <span className="comment-author">{cmt.author}</span>
                    <span className="comment-date pull-right"> {this.convertDate(cmt.date)}</span>
                  </div>
                  <p className="comment-content white-space-pre">{cmt.content}</p>
                </div>
                {this.renderDeleteButton(cmt.id)}
              </div>
              {/* Comment Ends */}
            </li>
          );
        } else return null
     })
   } else {
     return null;
   }
  }

  render() {
    return(
      <div className="Comments Commponent">
        <div className="comments">
          <h3 className="comments-heading uppercase">{this.countComment()}</h3>
          <ul className="comments-list">
            {this.renderComments()}
          </ul>
        </div>
        <div>
          {this.renderReplyButton()}
        </div>
    </div>
    );
  }
}

export default Comments;
