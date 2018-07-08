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
            <a href="blog-post.html"> {this.props.article.comments?this.props.article.comments.length+ " commentaires" : "0 commentaires"} </a>
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
