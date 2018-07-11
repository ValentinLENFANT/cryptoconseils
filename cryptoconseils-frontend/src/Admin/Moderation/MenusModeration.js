import React, { Component } from 'react';

class MenusModeration extends Component {
  render() {
    return (
      <div className="Menus">
          <section className="menu-dashboard section-profil">
            <div className="container">
                <div className="text-center">
                    <img src="images/backoffice/logo-admin.png" className="img-responsive center-block" />
                </div>
                <div className="row text-center">
                    <div className="col-md-3 col-sm-3 col-xs-12">
                        <a href="/admin/moderation/users">
                            <h3 className="titre-dashboard">Modération Utilisateur</h3>
                        </a>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12">
                        <a href="/admin/moderation/comments" className="">
                            <h3 className="titre-dashboard">Modération Commentaires</h3>
                        </a>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12">
                        <a href="/admin/">
                            <h3 className="titre-dashboard">Admin</h3>
                        </a>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  }
}

export default MenusModeration;
