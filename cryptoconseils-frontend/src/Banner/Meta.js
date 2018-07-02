import React, {Component} from 'react';

class Meta extends Component {

  convertDate(date) {
    date = new Date(date);
    return date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
  }
  render() {
    if(this.props.article) {
      return(
        <div className="Meta Component">
          {/* Meta Starts */}
          <span>
            <i className="fa fa-user"></i> <a href=""> {this.props.article.author} </a>
          </span>
          <span className="date">
            <i className="fa fa-calendar"></i> {this.convertDate(this.props.article.date)}
          </span>
          <span>
            <i className="fa fa-commenting"></i> {this.props.article.comments.length+ " commentaires"}
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
