import React, {Component} from 'react';

class Avantages extends Component {
  render() {
    return (
      <div className="Avantage Component">
        <div className="row">
          <div className="col-xs-12 col-md-8">
            {/* Panel Group Starts */}
            <div className="panel-group" id="accordion">
              {/* Panel Starts */}
              <div className="panel panel-default">
                {/* Panel Heading Starts */}
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                      DEBUTANT</a>
                  </h4>
                </div>
                {/* Panel Heading Ends */}
                {/* Panel Content Starts */}
                <div id="collapse1" className="panel-collapse collapse in">
                  <div className="panel-body">
                    <ul>
                      <li>Vous aurez acces aux articles de niveaux <a>Débutant</a> sur Cryptoconseils.fr</li>
                      <li>Un acces complet aux <a>Airdrop</a> du jour sélectionné par Cryptoconseils.fr</li>
                    </ul>
                  </div>
                </div>
                {/* Panel Content Starts */}
              </div>
              {/* Panel Ends */}
              {/* Panel Starts */}
              <div className="panel panel-default">
                {/* Panel Heading Starts */}
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse2">
                    Avancé</a>
                  </h4>
                </div>
                {/* Panel Heading Ends */}
                {/* Panel Content Starts */}
                <div id="collapse2" className="panel-collapse collapse">
                  <div className="panel-body">
                    <ul>
                      <li>Les avantages du pack <a>Debutant</a></li>
                      <li>Vous aurez acces aux articles de niveaux <a>Avancé</a> sur Cryptoconseils.fr</li>
                      <li>Un acces à la messagerie <a>Telegram</a></li>
                      <li>Un acces aux <a>Analyses</a> de Cryptoconseils.fr</li>
                    </ul>
                  </div>
                </div>
                {/* Panel Content Starts */}
              </div>
              {/* Panel Ends */}
              {/* Panel Starts */}
              <div className="panel panel-default">
                {/* Panel Heading Starts */}
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse3">
                      Expert
                    </a>
                  </h4>
                </div>
                {/* Panel Heading Ends */}
                {/* Panel Content Starts */}
                <div id="collapse3" className="panel-collapse collapse">
                  <div className="panel-body">
                    <ul>
                      <li>Les avantages du pack <a>Avancé</a></li>
                      <li>Vous aurez acces aux articles de niveaux <a>Expert</a> sur Cryptoconseils.fr</li>
                      <li>Un acces à l'emsemble des réseaux sociaux dont le groupe <a>Facebook</a></li>
                      <li>Un acces aux <a>Calls</a> de Cryptoconseils.fr</li>
                    </ul>
                  </div>
                </div>
                {/* Panel Content Starts */}
              </div>
              {/* Panel Ends */}

              {/* Panel Starts */}
              <div className="panel panel-default">
                {/* Panel Heading Starts */}
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse5">
                    Lambo</a>
                  </h4>
                </div>
                {/* Panel Heading Ends */}
                {/* Panel Content Starts */}
                <div id="collapse5" className="panel-collapse collapse">
                  <div className="panel-body">
                    <ul>
                      <li>Les avantages du pack expert</li>
                      <li>Une <a>Lambo</a></li>
                    </ul>
                  </div>
                </div>
                {/* Panel Content Starts */}
              </div>
              {/* Panel Ends */}
            </div>
            {/* Panel Group Ends */}
          </div>
          {/* Sidebar Starts */}
        </div>
      </div>
    );
  }
}

export default Avantages;
