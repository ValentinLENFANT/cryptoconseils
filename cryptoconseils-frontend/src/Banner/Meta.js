import React, {Component} from 'react';

class Meta extends Component {
  render() {
    if(this.props.article) {
      return(
        <div className="Meta Component">
          {/* Meta Starts */}
          <span>
            <i className="fa fa-user"></i> <a href="">{this.props.article.author}</a>
          </span>
          <span className="date">
            <i className="fa fa-calendar"></i>{this.props.article.date}
            </span>
          <span>
            <i className="fa fa-commenting"></i> <a href="blog-post.html">{this.props.coms}</a>
          </span>
          <span>
            <i className="fa fa-tags"></i>{this.props.article.categories}
          </span>
          {/* Meta Ends */}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Meta;
