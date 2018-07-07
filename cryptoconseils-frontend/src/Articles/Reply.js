import React, { Component } from 'react';
import axios from 'axios'

class Reply extends Component {

  constructor() {
    super();
    this.state = {
      comment: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // enregistre la valeur des inputs
  handleChange(event) {
    let target = event.target;
    let value = target.value
    let name = target.id;
    this.setState({[name]: value});
  }

  sendComs(event){
    event.preventDefault();
    // check si access token
    if(sessionStorage.getItem('access_token')){
      var authorization = {
        headers: {'Authorization': "Bearer " + sessionStorage.getItem('access_token')}
      };
    } else {
      var authorization = null;
    }
    // send coms
    axios.post(process.env.REACT_APP_API_ADDRESS+'/comments/new/', {
      article_id: this.props.article.id,
      author: sessionStorage.getItem('username'),
      content: this.state.comment,
    }, authorization)
    .then(response => {
      this.setState({
        comment: ''
      });
      console.log(response);
    }).catch(error => {
      return "une erreur s'est produite";
    });
  }
  render() {
    if(this.props.isLogged){
      return(
        <div className="Reply Commponent">
            <h3 className="comments-heading add-comment">Ajouter un commentaire</h3>
            {/* Comments Form Starts */}
            <div className="comments-form">
              <form onSubmit={this.sendComs.bind(this)}>
                {/* Input Field Starts */}
                <div className="form-group">
                  <textarea
                    className="form-control"
                    id="comment"
                    name="comment"
                    placeholder="COMMENT"
                    onChange={this.handleChange}
                    value={this.state.coms}
                    required
                    ></textarea>
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
    }else {
      return(
        <div className="Reply Commponent">
            <h3 className="comments-heading add-comment">Ajouter un commentaire</h3>
            {/* Comments Form Starts */}
            <div className="comments-form">
              <button className="btn btn-primary" type="submit">Se connecter</button>
            </div>
        </div>
      );
    }

  }
}

export default Reply;
