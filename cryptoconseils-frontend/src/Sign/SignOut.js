import React, { Component } from 'react';
import Confirm from 'react-confirm-bootstrap';

class SignOut extends Component {
  onConfirm() {
    sessionStorage.clear();
    window.location.href = this.props.previousPath
  }
  render() {
    return (
      <Confirm
        onConfirm={this.onConfirm.bind(this)}
        confirmText="Se déconnecter"
        title="Déconnexion"
        body="Voulez-vous vraiment vous déconnecter ?">
        <a className="btn btn-primary">
          <i className="fa fa-user-plus"></i> Déconnexion
        </a>
    </Confirm>
    );
  }
}
export default SignOut;
