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

  getPremium() {
    var lvl = ["Tout le monde","Inscrit","Debutant","Avancé","Expert","Lambo"]
    if(this.props.article.premium) {
      return ('Premium '+lvl[this.props.article.premium])
    }
  }

  countComment() {
    var nbComments = 0;
    this.props.article.comments.forEach(cmt => {
      if(cmt.published){
        nbComments = nbComments + 1
      }
    });
    return nbComments+" commentaires";
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
              {this.countComment()}
          </span>
          <span>
            <i className="fa fa-tags"></i>{this.getCategories()}
          </span>
          <span>
            <i className="fa fa-user"></i>{this.getPremium()}
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
