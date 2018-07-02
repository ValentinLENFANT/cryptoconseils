import React, { Component } from 'react';

class InfosPerso extends Component {
  render() {
    return(
        <section className="information-profil">
            <div className="container">
                <div className="row text-center">
                    <h2 className="title-head" id="infos-perso">Changer mes<span> informations</span></h2>
                    <div className="title-head-subtitle">
                        <p>Changer votre adresse emai, votre mot de passe ou avatar</p>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-xs-12 col-sm-6 col-md-7">
                        <form role="form">
                            <div className="row">
                                <div className="form-group">
                                    <input type="email" name="email" id="email" className="form-control input-lg" placeholder="Nouveau email" tabindex="4" />
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-6 col-md-6">
                                        <div className="form-group">
                                            <input type="password" name="password" id="password" className="form-control input-lg" placeholder="Nouveau mot de passe" tabindex="5" />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-6">
                                        <div className="form-group">
                                            <input type="password" name="password_confirmation" id="password_confirmation" className="form-control input-lg" placeholder="Confirmer mot de passe" tabindex="6" />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-4">
                                        <div className="form-group">
                                            <label className="avatar-change">changer votre avatar</label>
                                            <input type="file" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-md-12">
                                        <input type="submit" value="Mettre à jour" className="btn btn-primary btn-block btn-lg submit-infos" tabindex="7" />
                                    </div>
                                </div>  
                            </div>
                        </form>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3">
                        <div className="team-member">
                            <img src="images/team/member1.jpg" className="img-responsive" alt="team member" />
                            <div className="team-member-caption social-icons">
                                <h4>Satoshi Nakamoto</h4>
                                <p>compte gratuit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default InfosPerso;
