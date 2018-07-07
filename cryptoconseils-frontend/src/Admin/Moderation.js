import React, { Component } from 'react';

class Moderation extends Component {
  render() {
    return(
        <section className="section-profil">
        <div className="container">
             {/*<!-- Section Title Starts -->*/}
            <div className="row text-center">
                <h2 className="title-head" id="#moderation">Modération<span> Commentaires</span></h2>
                <div className="title-head-subtitle">
                    <p>Accepter ou supprimer les commentaires</p>
                </div>
            </div>
            <div className="container bootstrap snippet">
                <div className="row text-left">
                    <div className="panel panel-default widget">
                        <div className="panel-heading">
                            <span className="fa fa-comment fa-lg"></span>
                            <h3 className="panel-title">Commentaires récents</h3>
                        </div>
                        <div className="panel-body">

                            <ul className="list-group">
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col-xs-2 col-md-1">
                                            <img src="images/team/member1.jpg" className="img-circle img-responsive" alt="avatar" />
                                        </div>
                                        <div className="col-xs-10 col-md-11">
                                            <div>
                                                <a href="">
                                                    L'impact des crypto-monnaies sur le systême financier mondiale</a>
                                                <div className="mic-info">
                                                    Par: <a href="#">Satoshi Nakamoto</a> le 2 Juillet 2018
                                                </div>
                                            </div>
                                            <div className="comment-text">
                                            J'ai crée moi-même le Bitcoin pour acheter des choses sur internet sans devoir faire un emprunt bancaire 
                                            </div>
                                            <div className="action">
                                                <button type="button" className="btn btn-success btn-xs" title="Valider">
                                                    <span className="fa fa-check"></span>
                                                </button>
                                                <button type="button" className="btn btn-danger btn-xs" title="Delete">
                                                    <span className="fa fa-trash"></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col-xs-2 col-md-1">
                                            <img src="images/team/member1.jpg" className="img-circle img-responsive" alt="avatar" />
                                        </div>
                                        <div className="col-xs-10 col-md-11">
                                            <div>
                                                <a href="http://www.jquery2dotnet.com/2013/10/google-style-login-page-desing-usign.html">
                                                    L'impact des crypto-monnaies sur le systême financier mondiale</a>
                                                <div className="mic-info">
                                                    Par: <a href="#">Satoshi Nakamoto</a> le 2 Juillet 2018
                                                </div>
                                            </div>
                                            <div className="comment-text">
                                            J'ai crée moi-même le Bitcoin pour acheter des choses sur internet sans devoir faire un emprunt bancaire 
                                            </div>
                                            <div className="action">
                                                <button type="button" className="btn btn-success btn-xs" title="Valider">
                                                    <span className="fa fa-check"></span>
                                                </button>
                                                <button type="button" className="btn btn-danger btn-xs" title="Delete">
                                                    <span className="fa fa-trash"></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col-xs-2 col-md-1">
                                            <img src="images/team/member1.jpg" className="img-circle img-responsive" alt="avatar" />
                                        </div>
                                        <div className="col-xs-10 col-md-11">
                                            <div>
                                                <a href="http://www.jquery2dotnet.com/2013/10/google-style-login-page-desing-usign.html">
                                                    L'impact des crypto-monnaies sur le systême financier mondiale</a>
                                                <div className="mic-info">
                                                    Par: <a href="#">Satoshi Nakamoto</a> le 2 Juillet 2018
                                                </div>
                                            </div>
                                            <div className="comment-text">
                                            J'ai crée moi-même le Bitcoin pour acheter des choses sur internet sans devoir faire un emprunt bancaire 
                                            </div>
                                            <div className="action">
                                                <button type="button" className="btn btn-success btn-xs" title="Valider">
                                                    <span className="fa fa-check"></span>
                                                </button>
                                                <button type="button" className="btn btn-danger btn-xs" title="Delete">
                                                    <span className="fa fa-trash"></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col-xs-2 col-md-1">
                                            <img src="images/team/member1.jpg" className="img-circle img-responsive" alt="avatar" />
                                        </div>
                                        <div className="col-xs-10 col-md-11">
                                            <div>
                                                <a href="http://www.jquery2dotnet.com/2013/10/google-style-login-page-desing-usign.html">
                                                    L'impact des crypto-monnaies sur le systême financier mondiale</a>
                                                <div className="mic-info">
                                                    Par: <a href="#">Satoshi Nakamoto</a> le 2 Juillet 2018
                                                </div>
                                            </div>
                                            <div className="comment-text">
                                            J'ai crée moi-même le Bitcoin pour acheter des choses sur internet sans devoir faire un emprunt bancaire 
                                            </div>
                                            <div className="action">
                                                <button type="button" className="btn btn-success btn-xs" title="Valider">
                                                    <span className="fa fa-check"></span>
                                                </button>
                                                <button type="button" className="btn btn-danger btn-xs" title="Delete">
                                                    <span className="fa fa-trash"></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
  }
}

export default Moderation;
