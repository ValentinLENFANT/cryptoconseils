import React, { Component } from 'react';

class ArticleEditAdmin extends Component {
  render() {
    return(
<section>
            <div className="container">
                {/*<!--DEBUT TITRE DE SECTION  -->*/}
                <div className="row text-center">
                    <h2 className="title-head" id="creer-article">Gérer<span> Articles</span></h2>
                    <div className="title-head-subtitle">
                        <p>Modifier et/ou supprimer les articles</p>
                    </div>
                </div>
                {/*<!-- FIN TITRE DE SECTION  -->*/}


     {/*<!-- FILTRES CATEGORIE & AUTEUR -->*/}
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

         {/*<!-- Auteur -->*/}
                    <div className="col-xs-12 col-sm-12 col-md-6">
                        <div className="form-group">
                            <label className="control-label" htmlFor="article_categories">Auteur</label>
                            <div>
                                <select id="article_categories" name="article_categories" className="form-control">
                                    <option value="0">-</option>
                                    <option value="1">Guillaume</option>
                                    <option value="2">Valentin</option>
                                    <option value="2">Alexandre</option>
                                    <option value="2">Aurélien</option>
                                </select>
                            </div>
                        </div>
                    </div>

                </div>


                {/*<!--DEBUT REQUETE ARTICLE  -->*/}
                <div className="panel panel-default container-article">
                    <div className="panel-heading text-left">
                        <a href="#" className="auteur">Satoshi Nakamoto</a>
                        <div className="btn-group boutton-supp-modif">
                            <ul className="button-edit">
                                <li>
                                    <a href="#" className="editer-edit-button">
                                        <i className="fa fa-pencil-square"></i> Editer
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="delete-edit-button">
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
                                    <img className="image-article-admin" src="images/blog/blog-post-1.jpg" alt="cover" />
                                </a>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-9 text-justify">
                                <h4 className="media-heading">L'IMPACT DES CRYPTO-MONNAIES SUR LE SYSTÊME FINANCIER MONDIALE</h4>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nulla sapien, semper in sodales ac, rutrum at orci. Maecenas vulputate nec tellus sit amet porttitor. Suspendisse congue porta sagittis. Ut erat diam, consectetur sed tempus id, sodales nec felis. Donec sagittis nunc sapien, non consequat nunc ultrices non. Aliquam accumsan ligula ante, non commodo risus sodales a. Vestibulum facilisis, enim in porta fringilla, tortor sapien congue purus, porta consectetur sem turpis vitae mauris. Donec dapibus justo a elit semper, et scelerisque mauris ullamcorper. Maecenas blandit arcu nec euismod pellentesque. Fusce et imperdiet nisi, at suscipit sem. Aliquam pulvinar risus id cursus elementum. Nulla elementum placerat nibh, in dictum enim mollis non. Morbi vehicula eget est et tristique. Aenean condimentum augue id congue convallis. Phasellus congue non tellus nec pretium. Maecenas eu vulputate lacus, eget feugiat odio...
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!--FIN REQUETE ARTICLE  -->*/}

                {/*<!--DEBUT REQUETE ARTICLE 2  -->*/}
                <div className="panel panel-default container-article">
                    <div className="panel-heading text-left">
                        <a href="#" className="auteur">Satoshi Nakamoto</a>
                        <div className="btn-group boutton-supp-modif">
                            <ul className="button-edit">
                                <li>
                                    <a href="#" className="editer-edit-button">
                                        <i className="fa fa-pencil-square"></i> Editer
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="delete-edit-button">
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
                                    <img className="image-article-admin" src="images/blog/blog-post-1.jpg" alt="cover" />
                                </a>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-9 text-justify">
                                <h4 className="media-heading">L'IMPACT DES CRYPTO-MONNAIES SUR LE SYSTÊME FINANCIER MONDIALE</h4>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nulla sapien, semper in sodales ac, rutrum at orci. Maecenas vulputate nec tellus sit amet porttitor. Suspendisse congue porta sagittis. Ut erat diam, consectetur sed tempus id, sodales nec felis. Donec sagittis nunc sapien, non consequat nunc ultrices non. Aliquam accumsan ligula ante, non commodo risus sodales a. Vestibulum facilisis, enim in porta fringilla, tortor sapien congue purus, porta consectetur sem turpis vitae mauris. Donec dapibus justo a elit semper, et scelerisque mauris ullamcorper. Maecenas blandit arcu nec euismod pellentesque. Fusce et imperdiet nisi, at suscipit sem. Aliquam pulvinar risus id cursus elementum. Nulla elementum placerat nibh, in dictum enim mollis non. Morbi vehicula eget est et tristique. Aenean condimentum augue id congue convallis. Phasellus congue non tellus nec pretium. Maecenas eu vulputate lacus, eget feugiat odio...
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
  }
}

export default ArticleEditAdmin;
