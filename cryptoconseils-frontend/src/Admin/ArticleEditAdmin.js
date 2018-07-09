import React, {Component} from 'react';
import axios from 'axios'
class ArticleEditAdmin extends Component {
  constructor() {
    super();
    this.state = {
      listArticles: [],
      listArticlesOrder: [],
      categorie: null,
      searchAuthor: null,
      searchCategorie: null,
      allArticles: [],
      listCategories: []
    }
  }

  componentWillMount() {
    if(localStorage.getItem('access_token')){
      var authorization = {
        headers: {'Authorization': "Bearer " + localStorage.getItem('access_token')}
      };

      // récupère tous les articles
      axios.get(process.env.REACT_APP_API_ADDRESS+'/articles/newest/20', authorization)
      .then(response => {
        console.log(response.data);
        this.setState({
          listArticles: response.data,
          allArticles: response.data
        });
      }).catch(error => {
        console.log(error);
      });

      // on récupère les catégories
      axios.get(process.env.REACT_APP_API_ADDRESS+'/categories/')
      .then(response => {
        console.log(response.data);
        this.setState({
          listCategories: response.data
        });
      }).catch(error => {
        console.log(error);
      });
    }
  }
  onChangeAuthor(event) {
    // Update de la valeur
    this.setState({
      searchAuthor: event.target.value
    }, () => this.orderByAuthor(this.state.allArticles,this.state.searchAuthor));
  }

  onChangeCategorie(event) {
    // Update de la valeur
    this.setState({
      searchCategorie: event.target.value
    }, () => this.orderByCategorie(this.state.allArticles,this.state.searchCategorie));
  }

  orderByAuthor(data,searchAuthor){
    console.log("Recherche par auteur:", searchAuthor);
    // initialisation du tableau
    var res= []

    // recherche de la catégorie dans l'article
    for(var x in data){

      // on met le nom de l'auteur de l'article en maj
      var author = data[x].author.toUpperCase();
      // on met le nom de l'auteur recherché en maj
      searchAuthor = searchAuthor.toUpperCase();

      // si il y a le nom de l'auteur recherché dans l'article
      if(author.includes(searchAuthor)){
        res = [...res, data[x]]
      }
    }

    // enregistrements des articles trié par auteur
    this.setState({listArticles: res});

    // si en plus de l'auteur recherché
    // on cherche une catégorie
    if(this.state.searchCategorie !== null) {
      console.log("catégorie recherché:", this.state.searchCategorie);
      // initialisation du tableau
      var res = [];

      // on récupère la catégorie recherché
      var searchCategorie = this.state.searchCategorie;
      // on récupère la liste des articles déjà trié par auteur
      var data = this.state.listArticles;


      for(var x in data) {
        if(typeof data[x].categories !== "undefined" && data[x].categories.length > 0 ) {

          var categories = data[x].categories[0].id
          if(categories === Number(searchCategorie)){
            res = [...res, data[x]]
          }
        }
      }this.setState({listArticles: res});
    }

  }

  orderByCategorie(data,searchCategorie){
    console.log("Recherche par catégorie", this.state.searchCategorie);
    // initialisation du tableau
    var res= []

    // recherche de la catégorie dans l'article
    for(var x in data){
      if(typeof data[x].categories !== "undefined" && data[x].categories.length > 0 ){
        var categories = data[x].categories[0].id;
        console.log(categories, Number(searchCategorie));
        // si il y a la catégorie recherché dans l'article
        if(categories === Number(searchCategorie)) {
          res = [...res, data[x]]
        }
      }
    }
    // enregistrements des articles trié par catégorie
    this.setState({listArticles: res});

    // si en plus de la catégorie recherché
    // on cherche un auteur
    if(this.state.searchAuthor !== null){
      console.log("Auteur recherché:", this.state.searchAuthor);
      // initialisation du tableau
      var res= []
      // on récupère le nom de l'auteur recherché
      var searchAuthor = this.state.searchAuthor;
      // on récupère la liste des articles déjà trié par catégorie
      var data = this.state.listArticles

      for(var x in data){
        var author = data[x].author.toUpperCase();
        searchAuthor = searchAuthor.toUpperCase();

        // si le nom de l'auteur est dans l'article
        if(author.includes(searchAuthor)){
          res = [...res, data[x]]
        }
      }
      this.setState({listArticles: res});
    }
  }


  deleteArticle(article){
    // check si access token
    if(localStorage.getItem('access_token')){
      var authorization = {
        headers: {'Authorization': "Bearer " + localStorage.getItem('access_token')}
      };
      // delete coms
      axios.delete(process.env.REACT_APP_API_ADDRESS+'/articles/'+article.id, authorization)
      .then(response => {
        const array = this.state.listArticles;
        // index de l'item du com que l'on veut supprimer
        const index = array.indexOf(article);
        // Supprimer de l'affichage du commentaire
        array.splice(index, 1)
        //update de l'affichage des commentaires
        this.setState({
          listArticles: array,
          msg: "Votre article a été supprimé !",
        });
      }).catch(error => {
        this.setState({msg: "Une erreur s'est produite !"})
        console.log(error.response);
      });
    }
  }

  render() {
    return (
    <section>
      <div className="container">
        {/* <!--DEBUT TITRE DE SECTION  --> */}
        <div className="row text-center">
          <h2 className="title-head" id="creer-article">Gérer<span>
              Articles</span>
          </h2>
          <div className="title-head-subtitle">
            <p>Modifier et/ou supprimer les articles</p>
          </div>
        </div>
        {/* <!-- FIN TITRE DE SECTION  --> */}

        {/* <!-- FILTRES CATEGORIE & AUTEUR --> */}
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6">
            <div className="form-group">
              <div>
                <label className="control-label" htmlFor="article_categories">Catégorie</label>
                <select onChange={this.onChangeCategorie.bind(this)}id="article_categories" name="article_categories" className="form-control">
                  <option value="">-</option>
                  {this.state.listCategories.map(categorie => {
                    return (
                      <option key={categorie.id} value={[categorie.id]}>{categorie.name}</option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>

          {/* <!-- Auteur --> */}
          <div className="col-xs-12 col-sm-12 col-md-6">
            <div className="form-group">
              <label className="control-label" htmlFor="article_categories">Auteur</label>
              <div>
                <select onChange={this.onChangeAuthor.bind(this)}id="article_categories" name="article_categories" className="form-control">
                  <option value="0">-</option>
                  <option value="Guillaume">Guillaume</option>
                  <option value="Valentin">Valentin</option>
                  <option value="Alexandre">Alexandre</option>
                  <option value="Aurélien">Aurélien</option>
                </select>
              </div>
            </div>
          </div>

        </div>

        {/* <!--DEBUT REQUETE ARTICLE  --> */}
        {this.state.listArticles.map(article => {
          return(
            <div key={article.id} className="panel panel-default container-article">
              <div className="panel-heading text-left">
                <a href={"/articles/"+article.id} className="auteur">{article.author}</a>
                <div className="btn-group boutton-supp-modif">
                  <ul className="button-edit">
                    <li>
                      <a href="#" className="editer-edit-button">
                        <i className="fa fa-pencil-square"></i>
                        Editer
                      </a>
                    </li>
                    <li>
                      <a href="#" className="delete-edit-button" onClick={this.deleteArticle.bind(this, article)}>
                        <i className="fa fa-minus-square"></i>Supprimer
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="panel-body">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-3">
                    <a href={"/articles/"+article.id} >
                      <img className="image-article-admin" src="images/blog/blog-post-1.jpg" alt="cover"/>
                    </a>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-9 text-justify">
                    <a href={"/articles/"+article.id} >
                      <h4 className="media-heading">{article.title}</h4>
                    </a>
                    {article.content}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {/* <!--FIN REQUETE ARTICLE  --> */}
      </div>
    </section>);
  }
}

export default ArticleEditAdmin;
