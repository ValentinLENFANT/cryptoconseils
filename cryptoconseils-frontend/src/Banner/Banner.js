import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return(
      <div className="Banner Component">
        {/* Banner Area Starts */}
        <div className="banner-area">
          <div className="banner-overlay">
            <div className="banner-text text-center">
              <div className="container">
                {/* Section Title Starts */}
                <div className="row text-center">
                  <div className="col-xs-12">
                    {/* Title Starts */}
                    <h2 className="title-head">
                      {this.props.titlePart1}-<span>{this.props.titlePart2}</span></h2>
                    {/* Title Ends */}
                    {/* Breadcrumb Starts */}
                    <ul className="breadcrumb">
                      <li><a href="/"> Accueil</a></li>
                      <li>{this.props.pageName}</li>
                    </ul>
                    {/* Breadcrumb Ends */}
                  </div>
                </div>
                {/* Section Title Ends */}
              </div>
            </div>
          </div>
        </div>
        {/* Banner Area Ends */}
      </div>
    );
  }
}

export default Banner;
