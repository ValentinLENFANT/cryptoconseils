import React, {Component} from 'react';

class Breadcrumb extends Component {
  render() {
    return(
      <div className="Breadcrumb Component">
        {/* Breadcrumb Starts */}
        <ul className="breadcrumb">
          <li><a href="/"> Accueil</a></li>
          <li>{this.props.pageName}</li>
        </ul>
        {/* Breadcrumb Ends */}
      </div>
    );
  }
}

export default Breadcrumb;
