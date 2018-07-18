import React, { Component } from 'react';

class Meta extends Component {
  convertDate(date){
    date = new Date(date);
    var day = date.getDay();
    var month = date.toLocaleString('fr', { month: "long" });
    var year = date.getFullYear();
    return day+' '+month+' '+year;
  }
  getCategories(){
    if(this.props.article.categories) {
      return this.props.article.categories.map(cate => {
        return(<a key={cate.id} href={"/categories/"+cate.id}>{cate.name}</a>)
      })
    }
  }

  countComment() {
    var nbComments = 0;
    this.props.article.comments.forEach((cmt) => {
      if(cmt.published){
        nbComments = nbComments + 1
      }
    });
    return nbComments+" commentaires";
  }

  render() {
    return(
      <div className="Meta Component">
        <div className="meta second-font">
          <span><i className="fa fa-user"> </i> <a href=""> {this.props.article.author} </a></span>
          <span className="date">
            <i className="fa fa-calendar"> </i>
              {this.convertDate(this.props.article.date)}
            </span>
          <span><i className="fa fa-commenting"> </i>
            <a href="blog-post.html"> {this.countComment()} </a>
          </span>
          <span>
            <i className="fa fa-tags"></i>
            {this.getCategories()}
          </span>
        </div>
      </div>
    );
  }
}

export default Meta;
