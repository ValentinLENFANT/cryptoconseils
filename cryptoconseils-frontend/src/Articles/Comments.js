import React, { Component } from 'react';

class Comments extends Component {

  render() {
    return(
      <div className="Comments Commponent">
        <div className="comments">
          <h3 className="comments-heading uppercase">3 Comments</h3>
          <ul className="comments-list">
            <li>
              {/* Comment Starts */}
              <div className="comment">
                <img className="comment-avatar pull-left" alt="" src="images/blog/user1.jpg"/>
                <div className="comment-body">
                  <div className="meta-data">
                    <span className="comment-author">Lina Marzouki</span>
                    <span className="comment-date pull-right second-font">Janvier 17, 2018</span>
                  </div>
                  <p className="comment-content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen.</p>
                  <div>
                    <a className="comment-reply" href="#">Répondre</a>
                  </div>
                </div>
              </div>
              {/* Comment Ends */}
              <ul className="comments-reply">
                <li>
                  {/* Comment Starts */}
                  <div className="comment">
                    <img className="comment-avatar pull-left" alt="" src="images/blog/user2.jpg"/>
                    <div className="comment-body">
                      <div className="meta-data">
                        <span className="comment-author">Rawia Chniti</span>
                        <span className="comment-date pull-right">Mars 29, 2018</span>
                      </div>
                      <p className="comment-content">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen.</p>
                      <div>
                        <a className="comment-reply" href="#">Répondre</a>
                      </div>
                    </div>
                  </div>
                  {/* Comment Ends */}
                </li>
              </ul>
              {/* Comment Starts */}
              <div className="comment">
                <img className="comment-avatar pull-left" alt="" src="images/blog/user3.jpg"/>
                <div className="comment-body">
                  <div className="meta-data">
                    <span className="comment-author">Slim Hamdi</span>
                    <span className="comment-date pull-right">Janvier 17, 2018</span>
                  </div>
                  <p className="comment-content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen.</p>
                  <div>
                    <a className="comment-reply" href="#">Répondre</a>
                  </div>
                </div>
              </div>
              {/* Comment Ends */}
            </li>
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
    );
  }
}

export default Comments;
