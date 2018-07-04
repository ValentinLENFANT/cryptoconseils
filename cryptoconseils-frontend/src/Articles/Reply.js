import React, { Component } from 'react';

import axios from 'axios'

class Reply extends Component {

  constructor() {
    super();
    this.state = {
      comment: '',
      msg: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // enregistre la valeur des inputs
  handleChange(event) {
    this.setState({comment: event.target.value});
  }

  sendComment(event){
    // pour éviter le rechargement de la page
    event.preventDefault();
    if(sessionStorage.getItem('access_token')) {
      // check si access token
      var authorization = {
        headers: {'Authorization': "Bearer " + sessionStorage.getItem('access_token')}
      };
      // check longeur du commentaire
      if(this.state.comment.length < 30 || this.state.comment.length > 3000){
        this.setState({
          msg: "Votre commentaire doit contenir entre 30 et 3000 caractères"
        })
      } else {
        // send coms
        axios.post(process.env.REACT_APP_API_ADDRESS+'/comments/new/', {
          article_id: this.props.article.id,
          author: sessionStorage.getItem('username'),
          content: this.state.comment,
          user_id: 14
        }, authorization)
        .then(response => {
          // réponse si succes
          this.setState({
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
  render() {
    if(sessionStorage.getItem('access_token')) {
      return(
        <div className="Reply Commponent">
          <h3 className="comments-heading add-comment">Ajouter un commentaire</h3>
          <p>{this.state.msg}</p>
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
}


export default Reply;
