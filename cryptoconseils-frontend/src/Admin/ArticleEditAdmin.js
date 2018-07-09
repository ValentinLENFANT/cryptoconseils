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
      allArticles: []
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
    // Update de la valeur
    this.setState({
      searchAuthor: event.target.value
    }, () => this.orderByAuthor(this.state.allArticles,this.state.searchAuthor));
  }

  orderByAuthor(data,searchAuthor){
    var res= []
    for(var x in data){
      var author = data[x].author.toUpperCase();
      searchAuthor = searchAuthor.toUpperCase();

      if(author.includes(searchAuthor)){
        res = [...res, data[x]]
      }
    }this.setState({
      listArticles: res
    })

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
                <select id="article_categories" name="article_categories" className="form-control">
                  <option value="0">-</option>
                  <option value="1">Finances</option>
                  <option value="2">Airdrop</option>
                  <option value="3">ICOS</option>
                  <option value="4">Trading</option>
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
                <a href="#" className="auteur">{article.author}</a>
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
                    <a href="#">
                      <img className="image-article-admin" src="images/blog/blog-post-1.jpg" alt="cover"/>
                    </a>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-9 text-justify">
                    <h4 className="media-heading">{article.title}</h4>
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
