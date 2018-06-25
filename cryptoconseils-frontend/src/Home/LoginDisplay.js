import React, {Component} from 'react';
import SignOut from '../Sign/SignOut';

class LoginDisplay extends Component {

  render() {
    return (
      <div className="Login Component">
        <div className="col-md-4 col-lg-4">
          <ul className="unstyled user">
            <li className="sign-in">
              <a href="/signin" className="btn btn-primary">
                <i className="fa fa-user"></i>
                {this.props.username}
              </a>
            </li>
            <li className="sign-up">
              <SignOut/>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default LoginDisplay;
