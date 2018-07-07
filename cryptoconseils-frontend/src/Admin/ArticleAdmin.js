import React, { Component } from 'react';

class ArticleAdmin extends Component {
  render() {
    return(
        <section>
            <div className="container">
                
                <div className="row text-center">
                    <h2 className="title-head" id="creer-article">Créer<span> Article</span></h2>
                    <div className="title-head-subtitle">
                        <p>Publier un article avec une image de couverture</p>
                    </div>
                </div>

                <form>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6">

                                {/*<!-- Titre -->*/}
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                        <div className="form-group">
                                          <label className="control-label" for="article_title">Titre</label>  
                                          <div>
                                            <input id="article_title" name="article_title" type="text" placeholder="Titre de l'article" className="form-control input-md" />
                                          </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/*<!-- Date -->*/}
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                        <div className="form-group">
                                          <label className="control-label" for="article_date">Date</label>  
                                          <div>
                                            <input id="article_date" name="article_date" type="text" placeholder="Date de publication" className="form-control input-md" />
                                          </div>
                                        </div>
                                    </div>
                                </div>

                                {/*<!-- Auteur -->*/}
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                        <div className="form-group">
                                            <label className="control-label" for="article_categories">Auteur</label>
                                            <div>
                                                <select id="article_categories" name="article_categories" className="form-control">
                                                    <option value="1">Guillaume</option>
                                                    <option value="2">Valentin</option>
                                                    <option value="2">Alexandre</option>
                                                    <option value="2">Aurélien</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                {/*<!-- Categorie de l'article -->*/}
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                        <div className="form-group">
                                          <div>
                                            <label className="control-label" for="article_categories">Catégorie</label>
                                            <select id="article_categories" name="article_categories" className="form-control">
                                                <option value="1">Finances</option>
                                                <option value="2">Airdrop</option>
                                                <option value="3">ICOS</option>
                                                <option value="4">Trading</option>
                                            </select>
                                          </div>
                                        </div>
                                    </div>
                                </div>
                                
                                
                                {/*<!-- Image Couverture -->*/}
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-xs-12 col-sm-12 col-md-12">
                                                    <label className="control-label" for="source_image">Image couverture (720x477)</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xs-12 col-sm-12 col-md-12">
                                                    <input id="source_image" name="source_image" className="input-file" type="file" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-6">

                                {/* <!-- Contenu de l'article -->*/}
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                        <div className="form-group">
                                          <div>        
                                            <label className="control-label" for="article_date">Contenu de l'article</label>               
                                            <textarea className="form-control" id="source_description" name="source_description" placeholder="Contenu de l'article..."></textarea>
                                          </div>
                                        </div>
                                    </div>
                                </div>

                                 <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                        <div className="form-group">
                                          <div>        
                                            <button type="button" id="submit-article" name="submit-article" className="btn btn-primary pull-right">PUBLIER</button>
                                          </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    
                    </div>
                </form>

            </div>
        </section>
    );
  }
}

export default ArticleAdmin;
