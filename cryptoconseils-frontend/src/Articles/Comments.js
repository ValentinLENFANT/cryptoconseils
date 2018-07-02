import React, { Component } from 'react';

class Comments extends Component {

  constructor() {
    super();
    this.state = {showForm: false, reply: null};
  }

  renderReply() {
    return (
      // if tableau de réponse => render réponses
      <div>
        <ul className="comments-reply">
          <li>
          </li>
        </ul>
      </div>
    )
  }
  handleForm() {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  sendForm() {
    return this.state.reply
  }
  renderForm() {
    return(
      <div className="comments-form">
        <form onSubmit={this.sendForm.bind(this)}>
          {/* Input Field Starts */}
          <div className="form-group">
            <textarea className="form-control" id="comment" name="comment" placeholder="COMMENT"  required></textarea>
          </div>
          {/* Input Field Ends */}
          {/* Submit Form Button Starts */}
          <div className="form-group">
            <button className="btn btn-primary" type="submit">Envoyer commentaire</button>
          </div>
          {/* Submit Form Button Ends */}
        </form>
      </div>
    );
  }
  renderComments(){
     return this.props.comments.map(cmt => {
      return (
        <li key={cmt.id}>
          {/* Comment Starts */}
          <div className="comment" >
            <img className="comment-avatar pull-left" alt="" src="images/blog/user3.jpg"/>
            <div className="comment-body">
              <div className="meta-data">
                <span className="comment-author">{cmt.author}</span>
                <span className="comment-date pull-right">{cmt.date}</span>
              </div>
              <p className="comment-content">{cmt.content}</p>
              <div>
                <button className="comment-reply" onClick={this.handleForm.bind(this)}>Répondre</button>
                { this.state.showForm ? this.renderForm() : null }
              </div>
            </div>
          </div>
          {/* Comment Ends */}
        </li>
      );
    })
  }
  render() {
    return(
      <div className="Comments Commponent">
        <div className="comments">
          <h3 className="comments-heading uppercase">{this.props.comments.length} Comments</h3>
          <ul className="comments-list">
            {this.renderComments()}
          </ul>
          <h3 className="comments-heading add-comment">Ajouter un commentaire</h3>
          {/* Comments Form Starts */}
          <div className="comments-form">
            <form>
              {/* Input Field Starts */}
              <div className="form-group">
                <input className="form-control" name="name" id="name" placeholder="NAME" type="text" required/>
              </div>
              {/* Input Field Ends */}
              {/* Input Field Starts */}
              <div className="form-group">
                <input className="form-control" name="email" id="email" placeholder="EMAIL" type="email" required/>
              </div>
              {/* Input Field Ends */}
              {/* Input Field Starts */}
              <div className="form-group">
                <textarea className="form-control" id="comment" name="comment" placeholder="COMMENT"  required></textarea>
              </div>
              {/* Input Field Ends */}
              {/* Submit Form Button Starts */}
              <div className="form-group">
                <button className="btn btn-primary" type="submit">Envoyer commentaire</button>
              </div>
              {/* Submit Form Button Ends */}
            </form>
          </div>
      </div>
    </div>
    );
  }
}

export default Comments;
