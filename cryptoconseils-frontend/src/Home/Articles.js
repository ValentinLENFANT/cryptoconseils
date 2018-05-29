import React, { Component } from 'react';

class Articles extends Component {
  render() {
    return(
      <div className="Articles">
        <section className="blog">
          <div className="container">
            {/* Section Title Starts */}
            <div className="row text-center">
              <h2 className="title-head">Dernières <span>Actualités</span></h2>
              <div className="title-head-subtitle">
                <p>Découvrez les dernières actualités cryptos à la une !</p>
              </div>
            </div>
            {/* Section Title Ends */}
            {/* Section Content Starts */}
            <div className="row latest-posts-content">
              {/* Article Starts */}
              <div className="col-sm-4 col-md-4 col-xs-12">
                <div className="latest-post">
                  {/* Featured Image Starts */}
                  <a href="blog-post.html"><img className="img-responsive" src="images/blog/blog-post-small-1.jpg" alt="img"/></a>
                  {/* Featured Image Ends */}
                  {/* Article Content Starts */}
                  <div className="post-body">
                    <h4 className="post-title">
                      <a href="blog-post.html">L'impact des crypto-monnaies sur le systême financier mondiale</a>
                    </h4>
                    <div className="post-text">
                      <p>incididunt ut labore et dolore magna aliqua. Ut enim aminim veniam, quis nostrud... ...</p>
                    </div>
                  </div>
                  <div className="post-date">
                    <span>01</span>
                    <span>JAN</span>
                  </div>
                  <a href="blog-post.html" className="btn btn-primary">Lire plus</a>
                  {/* Article Content Ends */}
                </div>
              </div>
              {/* Article Ends */}
            </div>
            {/* Section Content Ends */}
          </div>
        </section>
      </div>
    );
  }
}

export default Articles;
