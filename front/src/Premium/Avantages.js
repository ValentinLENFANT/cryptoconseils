import React, {Component} from 'react';

class Avantages extends Component {
  render() {
    return (
      <div className="Avantage Component">
        <div className="row">
          <div className="col-xs-12 col-md-8" id="decouvrirPackPremium">
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
                      <li>Un acces complet à tous les <a>Airdrop</a> sélectionnés par Cryptoconseils.fr</li>
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
                      <li>Les avantages du pack <a>Expert</a></li>
                      <li>Vous obtiendrez en plus un <a>suivi personnalisé</a> par nos experts traders qui répondront à toutes vos questions.</li>
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
