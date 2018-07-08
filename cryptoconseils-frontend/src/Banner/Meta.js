import React, {Component} from 'react';

class Meta extends Component {

  convertDate(date) {
    date = new Date(date);
    return date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
  }
  getCategories(){
    console.log(this.props.article);
    return this.props.article.categories.map(cate => {
      console.log(cate.name);
    })
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
            <i className="fa fa-commenting"></i>
              {this.props.article.comments? this.props.article.comments.length+ " commentaires" : "0 commentaires"}
          </span>
          <span>
            <i className="fa fa-tags"></i>{this.getCategories()}
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
