import React, {Component} from 'react';

class Meta extends Component {

  convertDate(date) {
    date = new Date(date);
    return date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
  }

  getCategories(){
    if(this.props.article.categories) {
      return this.props.article.categories.map(cate => {
        return(<a key={cate.id} href={"/categories/"+cate.id}>{cate.name}</a>);
      })
    }
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
