import React, { Component } from 'react';
import axios from 'axios';

class Banner extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.oui);
    return(
      <div>
        {/* Banner Area Starts */}
        <div className="banner-area">
          <div className="banner-overlay">
            <div className="banner-text text-center">
              <div className="container">
                {/* Section Title Starts */}
                <div className="row text-center">
                  <div className="col-xs-12">
                    {/* Title Starts */}
                    <h2 className="title-head banner-post-title">
                    </h2>
                    {/* Title Ends */}
                    {/* Meta Starts */}
                    <div className="meta">
                      <span><i className="fa fa-user"></i> <a href="#"> </a></span>
                      <span className="date"><i className="fa fa-calendar"></i></span>
                      <span><i className="fa fa-commenting"></i> <a href="blog-post.html">29 commentaire</a></span>
                      <span><i className="fa fa-tags"></i></span>
                    </div>
                    {/* Meta Ends */}
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
