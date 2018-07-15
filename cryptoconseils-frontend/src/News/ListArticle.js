import React, { Component } from 'react';
import axios from 'axios';

class ListArticle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      newDate: null,
      premiumLvl: ["Tous le monde","Inscrit","Debutant","Avancé","Expert","Lambo"]
    };
  }

  // éxécuté à la fin
  componentWillMount() {
    // check si access token
    if(localStorage.getItem('access_token')){
      var authorization = {
        headers: {'Authorization': "Bearer " + localStorage.getItem('access_token')}
      };
    }
    var nbArticle;
    if(this.props.nbArticle){
      nbArticle = this.props.nbArticle;
    } else nbArticle = 9
    // récupère tous les articles
    axios.get(process.env.REACT_APP_API_ADDRESS+'/articles/newest/'+nbArticle, authorization)
    .then(response => {
      if(this.props.idCategorie) {
        this.setState({
          articles: this.orderByCategorie(response.data,this.props.idCategorie)
        });
      } else {
        this.setState({articles: response.data});
      }
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
  renderArticles() {
    return this.state.articles.map(article => {
      console.log(article.premium);
      return(
        <div className="col-sm-4 col-md-4 col-xs-12 news-article" key={article.id}>
          <div className="latest-post">
            {/* Featured Image Starts */}
            <a href={"/articles/" + article.id}>
              <img
                className="img-responsive news-article-img"
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
      </div>
    );
  }
}

export default ListArticle;
