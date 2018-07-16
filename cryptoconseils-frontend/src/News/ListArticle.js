import React, { Component } from 'react';
import axios from 'axios';

class ListArticle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      newDate: null,
      premiumLvl: ["Tous le monde","Inscrit","Debutant","Avancé","Expert","Lambo"],
      nbArticle: 0
    };
  }

  // éxécuté au début
  componentDidMount() {
    var nbArticle;
    if(this.props.nbArticle){
      nbArticle = this.props.nbArticle;
    } else nbArticle = 9

    this.setState({nbArticle: nbArticle})
    // récupère tous les articles
    axios.get(process.env.REACT_APP_API_ADDRESS+'/articles/all/')
    .then(response => {
      if(this.props.idCategorie) {
        this.setState({
          articles: this.orderByCategorie(response.data,this.props.idCategorie)
        });
      } else {
        this.setState({articles: response.data.slice(0,this.state.nbArticle)});
      }
    }).catch(error => {
      console.log(error);
    });
  }

  renderReadMoreButton(){
    if(this.state.nbArticle === this.state.articles.length){
      return (
        <a className="btn btn-primary" onClick={this.readMore.bind(this)}>Afficher plus d'articles...</a>
      );
    } else if(this.state.nbArticle > this.state.articles.length) {

      return (
      <p className="fix-text-no-article">Il n'y a plus d'articles à lire ! <i className="fa fa-times fa-lg" aria-hidden="true"></i>
      </p>
    )}
  }
  readMore() {
    axios.get(process.env.REACT_APP_API_ADDRESS+'/articles/all/')
    .then(response => {
      this.setState({articles: response.data.slice(0,this.state.nbArticle+6),nbArticle: this.state.nbArticle+6});
    }).catch(error => {
      console.log(error);
    });
  }
  orderByCategorie(data,idCategorie){
    // initialisation du tableau
    var res= []

    // recherche de la catégorie dans l'article
    for(var x in data){
      if(typeof data[x].categories !== "undefined" && data[x].categories.length > 0 ){
        var categories = data[x].categories[0].id;
        console.log(categories, Number(idCategorie));
        // si il y a la catégorie recherché dans l'article
        if(categories === Number(idCategorie)) {
          res = [...res, data[x]]
        }
      }
    }
    return res;
  }

  convertDate(date){
    return new Date(date);
  }

  renderPremiumLogo(lvl){
    if(lvl >=2){
      return (
        <div className="post-premium">
          <span><i className="fa fa-diamond"></i> {this.state.premiumLvl[lvl]}</span>
        </div>
      )
    }
  }

  renderCategoryLogo(article){
    if(article.categories[0]){
      return (
        <div className="post-category">
          <span><i className="fa fa-diamond"></i> {article.categories[0].name}</span>
        </div>
      )
    }
  }

  renderArticles() {
    return this.state.articles.map(article => {
      return(
        <div className="col-sm-4 col-md-4 col-xs-12 news-article" key={article.id}>
          <div className="latest-post">
            {/* Featured Image Starts */}
            <a href={"/articles/" + article.id} className="">
              <img
                className="img-responsive news-article-img "
                src={"../images/articles/"+article.image.file_name}
                alt={article.image.alt}
                />
            </a>
            {/* Featured Image Ends */}
            {/* Article Content Starts */}
            <div className="post-body new-article-content">
              <h4 className="post-title">
                <a href={"/articles/" + article.id}>{article.title}</a>
              </h4>
              <div className="post-text white-space-pre">
                <p>
                  {article.content.split(" ").splice(0,20).join(" ")+" ..."}
                </p>
              </div>
            </div>
            <div className="post-date">
              <span>{this.convertDate(article.date).getDate()}</span>
              <span>
                {this.convertDate(article.date).toLocaleString('fr', { month: "short" })}
              </span>
            </div>

            {this.renderPremiumLogo(article.premium)}
            {this.renderCategoryLogo(article)}
            <a href={"/articles/" + article.id} className="btn btn-primary">Lire plus</a>
            {/* Article Content Ends */}
          </div>
        </div>
      );
    })
  }

  render() {
    return(
      <div className="ListArticle Component">
        <div className="row latest-posts-content">
          {this.renderArticles()}
        </div>
        <div className="row">
          <div className="col-sm-4 col-md-4 col-xs-12">
            {this.renderReadMoreButton()}
          </div>
        </div>
      </div>
    );
  }
}

export default ListArticle;
