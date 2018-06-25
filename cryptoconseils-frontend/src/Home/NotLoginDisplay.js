import React, {Component} from 'react';

class NotLoginDisplay extends Component {

  render() {
    return (
      <div className="NotLogin Component">
        <div className="col-md-4 col-lg-4">
          <ul className="unstyled user">
            <li className="sign-in">
              <a href="/signin" className="btn btn-primary">
                <i className="fa fa-user"></i>
                Connexion</a>
            </li>
            <li className="sign-up">
              <a href="/signup" className="btn btn-primary">
                <i className="fa fa-user-plus"></i>
                Inscription</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NotLoginDisplay;
