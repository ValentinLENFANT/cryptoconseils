import React, {Component} from 'react';
import axios from 'axios'
import Confirm from 'react-confirm-bootstrap';

class ArticleModeration extends Component {
  constructor() {
    super();
    this.state = {
      listArticles: [],
      listArticlesOrder: [],
      listCategories: [],
      categorie: null,
      searchAuthor: '',
      searchCategorie: '',
      allArticles: [],
    }
  }

  componentDidMount() {
    if(localStorage.getItem('access_token')){
      var authorization = {
        headers: {'Authorization': "Bearer " + localStorage.getItem('access_token')}
      };

      // on récupère les catégories
      axios.get(process.env.REACT_APP_API_ADDRESS+'/categories/')
      .then(categories => {
        this.setState({listCategories: categories.data});
      }).catch(error => {
        console.log(error);
      });

      // récupère tous les articles
      axios.get(process.env.REACT_APP_API_ADDRESS+'/articles/', authorization)
      .then(response => {
        this.setState({
          listArticles: response.data,
          allArticles: response.data
        });
      }).catch(error => {
        console.log(error);
      });
    }
  }
  onChangeAuthor(event) {
    var aute = event.target.value
    // Update de la valeur
    this.setState({
      searchAuthor: event.target.value
    }, () => this.orderByAuthor(this.state.listArticles,aute,this.state.searchCategorie));
  }

  onChangeCategorie(event) {
    var cate = event.target.value;
    // Update de la valeur
    this.setState({
      searchCategorie: event.target.value
    }, () => this.orderByCategorie(this.state.listArticles,cate,this.state.searchAuthor));
  }

  orderByAuthor(data,searchAuthor,searchCategorie){
    if (searchAuthor === '' && searchCategorie !== '') {
      this.orderByCategorie(this.state.allArticles,searchCategorie,searchAuthor)
    } else if(searchAuthor !== '' && searchCategorie !== '') {
      // récupération de tous les article pour ensuite recommencer le tri
      data = this.state.allArticles;

      // initialisation du tableau
      var res = []

      // recherche de la catégorie dans l'article
      for(var x in data){
        if(typeof data[x].categories !== "undefined" && data[x].categories.length > 0 ){
          var categories = data[x].categories[0].id;

          // si il y a la catégorie recherché dans l'article
          if(categories === Number(searchCategorie)) {
            res = [...res, data[x]]
          }
        }
      }
      // sauvegarde du tableau trié
      data = res

      // initialisation du tableau
      res= []

      // recherche de l'autheur dans data
      for( x in data){
        // on met le nom de l'auteur de l'article en maj
        var author = data[x].author.toUpperCase();

        // on met le nom de l'auteur recherché en maj
        searchAuthor = searchAuthor.toUpperCase();

        // si il y a le nom de l'auteur recherché dans l'article
        if(author === searchAuthor){
          res = [...res, data[x]]
        }
      }
      // enregistrements des articles trié par autheur ET cathégorie
      this.setState({listArticles: res});
    } else if(searchAuthor !== '' && searchCategorie === '') {
      data =this.state.allArticles

      // initialisation du tableau
      res= []

      // recherche de l'autheur dans data
      for(x in data){
        // on met le nom de l'auteur de l'article en maj
        author = data[x].author.toUpperCase();
        // on met le nom de l'auteur recherché en maj
        searchAuthor = searchAuthor.toUpperCase();

        // si il y a le nom de l'auteur recherché dans l'article
        if(author === searchAuthor){
          res = [...res, data[x]]
        }
      }
      // enregistrements des articles trié par autheur
      this.setState({listArticles: res});
    }
    if(searchCategorie === '' && searchAuthor === ''){
      this.setState({listArticles: this.state.allArticles});
    }
  }

  orderByCategorie(data,searchCategorie,searchAuthor) {
    var categories;
    if(searchAuthor !== '' && searchCategorie === ''){
      this.orderByAuthor(this.state.allArticles, searchAuthor, searchCategorie)
    } else if(searchAuthor && searchCategorie !== ''){
      data = this.state.allArticles

      // initialisation du tableau
      var res= []

      // recherche de l'autheur dans data
      for(var x in data){
        // on met le nom de l'auteur de l'article en maj
        var author = data[x].author.toUpperCase();

        // on met le nom de l'auteur recherché en maj
        searchAuthor = searchAuthor.toUpperCase();

        // si il y a le nom de l'auteur recherché dans l'article
        if(author === searchAuthor){
          res = [...res, data[x]]
        }
      }
      data = res
      // initialisation du tableau
      res= []
      // recherche de la catégorie dans l'article
      for(x in data){
        if(typeof data[x].categories !== "undefined" && data[x].categories.length > 0 ){
          categories = data[x].categories[0].id;

          // si il y a la catégorie recherché dans l'article
          if(categories === Number(searchCategorie)) {
            res = [...res, data[x]]
          }
        }
      }
      // enregistrements des articles trié par catégorie
      this.setState({listArticles: res});
    }

    if(searchCategorie !== '' && searchAuthor === '') {
      data =  this.state.allArticles
      // initialisation du tableau
      res= []
      // recherche de la catégorie dans l'article
      for(x in data){
        if(typeof data[x].categories !== "undefined" && data[x].categories.length > 0 ){
          categories = data[x].categories[0].id;

          // si il y a la catégorie recherché dans l'article
          if(categories === Number(searchCategorie)) {
            res = [...res, data[x]]
          }
        }
      }
      // enregistrements des articles trié par catégorie
      this.setState({listArticles: res});
    }

    if(searchCategorie === '' && searchAuthor === ''){
      this.setState({listArticles: this.state.allArticles});
    }
  }

  deleteArticle(article){
    // check si access token
    if(localStorage.getItem('access_token')){
      var authorization = {
        headers: {'Authorization': "Bearer " + localStorage.getItem('access_token')}
      };
      // delete coms
      axios.put(process.env.REACT_APP_API_ADDRESS+'/articles/'+article.id,{
        "published": false
      }, authorization)
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
      <div>
          <section className="section-profil">
          <div className="container">
            {/* <!--DEBUT TITRE DE SECTION  --> */}
            <div className="row text-center">
              <h2 className="title-head" id="creer-article">Moderation <span>
                  Articles</span>
              </h2>
              <div className="title-head-subtitle">
                <p>Chercher et/ou désactiver des articles</p>
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
                      <option value=""></option>
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
                      <option value=""></option>
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
                  <h4 className="media-heading">{article.author}</h4>
                    <div className="btn-group boutton-supp-modif">
                      <Confirm
                        onConfirm={this.deleteArticle.bind(this, article)}
                        confirmText="Oui désactiver"
                        title="Désactivation de l'article"
                        body={"Voulez-vous vraiment désactiver l'article ?"+article.title}>
                        <button
                          type="button"
                          className="btn btn-danger button-profil"
                          title="Supprimer">Désactiver
                        </button>
                      </Confirm>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="panel-body">
                    <div className="row">
                      <div className="col-xs-12 col-sm-12 col-md-3">
                        <a href={"/articles/"+article.id}>
                          <img className="image-article-admin" src={"/images/articles/"+article.image.file_name} alt="cover"/>
                        </a>
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-9 text-justify white-space-pre">
                        <h4 className="media-heading">
                          <a href={"/articles/"+article.id}>{article.title}</a>
                        </h4>
                        {article.content}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* <!--FIN REQUETE ARTICLE  --> */}
          </div>
        </section>
      </div>
    );
  }
}

export default ArticleModeration;
