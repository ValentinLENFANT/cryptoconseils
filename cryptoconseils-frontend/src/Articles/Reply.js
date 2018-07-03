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

  sendComment(event){
    event.preventDefault();
    // check si access token
    if(sessionStorage.getItem('access_token')){
      var authorization = {
        headers: {'Authorization': "Bearer " + sessionStorage.getItem('access_token')}
      };
    }
    // send coms
    axios.post(process.env.REACT_APP_API_ADDRESS+'/comments/new/', {
      article_id: this.props.article.id,
      author: sessionStorage.getItem('username'),
      content: this.state.comment,
      user_id: 14
    }, authorization)
    .then(response => {
      this.setState({
        comment: ''
      });
    }).catch(error => {
      console.log(error.response);
    });
  }
  render() {
    return(
      <div className="Reply Commponent">
        <h3 className="comments-heading add-comment">Ajouter un commentaire</h3>
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
  }
}


export default Reply;
