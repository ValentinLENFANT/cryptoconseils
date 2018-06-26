import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import Meta from './Meta';
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
                    <Breadcrumb pageName={this.props.pageName}/>
                    <div className="meta">
                      <Meta article={this.props.article}/>
                    </div>
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
