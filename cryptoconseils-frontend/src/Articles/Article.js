import React, { Component } from 'react';
import axios from 'axios';
import Banner from './Banner';

class Article extends Component {

  constructor() {
    super();
    this.state = {article: []};
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/blog/articles/'+this.props.match.params.id)
    .then(response => {
      this.setState({
        article: response.data
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
      // TODO: REDECOUPER EN PLUSIEURS COMPOTENT (BANNER, ARTICLE, META)
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
                      {this.state.article.title}
                    </h2>
                    {/* Title Ends */}
                    {/* Meta Starts */}
                    <div className="meta">
                      <span>
                        <i className="fa fa-user"></i>
                        <a href="#">{this.state.article.author}</a>
                      </span>
                      <span className="date">
                        <i className="fa fa-calendar"></i>
                        {this.state.article.date}
                        </span>
                      <span>
                        <i className="fa fa-commenting"></i>
                        <a href="blog-post.html">29 commentaire</a>
                      </span>
                      <span>
                        <i className="fa fa-tags"></i>
                        {this.state.article.categories}
                      </span>
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


        {/* div Content Starts */}
        <div className="container blog-page">
          <div className="row">
            <div className="content col-xs-12 col-md-8">
              {/* Article Starts */}
              <div>
                {/* Figure Starts */}
                <div className="blog-figure">
                  <img className="img-responsive" src="images/blog/blog-post-1.jpg" alt=""/>
                </div>
                {/* Figure Ends */}
                {/* Content Starts */}
                <p className="content-article">
                    {this.state.article.content}
                </p>
                {/* Content Ends */}


                {/* Meta Starts */}
                <div className="meta second-font">
                  <span><i className="fa fa-user"></i> <a href="#">{this.state.article.author}</a></span>
                  <span className="date"><i className="fa fa-calendar"></i> {this.state.article.date}</span>
                  <span><i className="fa fa-commenting"></i> <a href="blog-post.html">18 comments</a></span>
                  <span><i className="fa fa-tags"></i>{this.state.article.categories}</span>
                </div>
                {/* Meta Ends */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
