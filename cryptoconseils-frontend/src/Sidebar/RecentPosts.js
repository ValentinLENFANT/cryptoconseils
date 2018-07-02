import React, { Component } from 'react';

class RecentPosts extends Component {

  render() {
    return(
      <div className="RecentPost Component">
        <div className="widget recent-posts">
          <h3 className="widget-title">Posts récents</h3>
          <ul className="unstyled clearfix">
          {/* Recent Post Widget Starts */}
          <li>
            <div className="posts-thumb pull-left">
              <a href="blog-post.html">
                <img alt="img" src="images/blog/blog-post-small-1.jpg"/>
              </a>
            </div>
            <div className="post-info">
              <h4 className="entry-title">
                <a href="blog-post.html">Crypto-monnaies - le profil des utilisateurs se dessine</a>
              </h4>
              <p className="post-meta">
                <span className="post-date"><i className="fa fa-clock-o"></i> Janvier 19, 2018</span>
              </p>
            </div>
            <div className="clearfix"></div>
          </li>
          {/* Recent Post Widget Ends */}
          {/* Recent Post Widget Starts */}
          <li>
            <div className="posts-thumb pull-left">
              <a href="blog-post-light.html">
                <img alt="img" src="images/blog/blog-post-small-2.jpg"/>
              </a>
            </div>
            <div className="post-info">
              <h4 className="entry-title">
                <a href="blog-post-light.html">Stratégie d'Investissement. Avantages et inconvénients</a>
              </h4>
              <p className="post-meta">
                <span className="post-date"> Aout 03, 2018</span>
              </p>
            </div>
            <div className="clearfix"></div>
          </li>
          {/* Recent Post Widget Ends */}
          {/* Recent Post Widget Starts */}
          <li>
            <div className="posts-thumb pull-left">
              <a href="blog-post-light.html">
                <img alt="img" src="images/blog/blog-post-small-3.jpg"/>
              </a>
            </div>
            <div className="post-info">
              <h4 className="entry-title">
                <a href="blog-post-light.html">L'impact des crypto-monnaies dans le monde</a>
              </h4>
              <p className="post-meta">
                <span className="post-date"> Mars 27, 2018</span>
              </p>
            </div>
            <div className="clearfix"></div>
          </li>
          {/* Recent Post Widget Ends */}
          </ul>
        </div>
      </div>
    );
  }
}

export default RecentPosts;
