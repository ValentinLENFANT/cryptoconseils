import React, { Component } from 'react';
import axios from 'axios'

class Reply extends Component {

  constructor() {
    super();
    this.state = {
      comment: null,
      msg: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.sendComment = this.sendComment.bind(this);
  }

  // enregistre la valeur des inputs
  handleChange(event) {
    let target = event.target;
    let value = target.value
    let name = target.id;
    this.setState({[name]: value});
  }

  sendComment(event){
    // pour éviter le rechargement de la page
    event.preventDefault();

    // check longeur du commentaire
    if(this.state.comment.length < 30 || this.state.comment.length > 3000){
      this.setState({
        msg: "Votre commentaire doit contenir entre 30 et 3000 caractères"
      })
    } else {
      // check si access token
      if(sessionStorage.getItem('access_token')){
        var authorization = {
          headers: {'Authorization': "Bearer " + sessionStorage.getItem('access_token')}
        };
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
      } else {
        // Si pas connecté
        this.setState({
          msg: "Vous devez être connecté pour écrire un commentaire"
        })
      }
    }
  }
  render() {
    return(
      <div className="Reply Commponent">
        <h3 className="comments-heading add-comment">Ajouter un commentaire</h3>
        <p>{this.state.msg}</p>
        {/* Comments Form Starts */}
        <div className="comments-form">
          <form onSubmit={this.sendComment}>
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
  }
}


export default Reply;
