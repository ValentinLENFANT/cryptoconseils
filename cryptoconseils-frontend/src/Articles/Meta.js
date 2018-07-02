import React, { Component } from 'react';

class Meta extends Component {

  render() {
    return(
      <div className="BannerMeta Component">
        <div className="meta second-font">
          <span><i className="fa fa-user"></i> <a href="">{this.props.article.author}</a></span>
          <span className="date"><i className="fa fa-calendar"></i>{this.props.article.date}</span>
          <span><i className="fa fa-commenting"></i> <a href="blog-post.html">{this.props.article.comments.lenght} comments</a></span>
          <span><i className="fa fa-tags"></i>{this.props.article.categories}</span>
        </div>
      </div>
    );
  }
}

export default Meta;
