import React, {Component} from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';

class Faq extends Component {
  render() {
    return (
      <div className="Faq Component">
        <Header/>
        <Banner titlePart1="les questions à propos du" titlePart2="Bitcoin" pageName="F.A.Q"/> {/* Section FAQ Starts */}
        <section className="faq">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-12">
                {/* Panel Group Starts */}
                <div className="panel-group" id="accordion">
                 {/* Panel Starts */}
                 <div className="panel panel-default">
                    {/* Panel Heading Starts */}
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                          Pourquoi Devenir Membre Premium ?</a>
                      </h4>
                    </div>
                    {/* Panel Heading Ends */}
                    {/* Panel Content Starts */}
                    <div id="collapse1" className="panel-collapse collapse in">
                      <div className="panel-body">Il existe 4 catégories de membre premium : DEBUTANT (niveau 1), AVANCÉ (niveau 2), EXPERT (niveau 3), LAMBO (niveau 4). Ces catégories offrent chacune des fonctionnalités liés au site en fonction du niveau premium de l'utilisateur. Plus l'utilisateur a un niveau premium élevé plus il aura accès à de nouvelles fonctionnalités.
                    </div>
                    {/* Panel Content Starts */}
                  </div>
                  {/* Panel Starts */}
                  <div className="panel panel-default">
                    {/* Panel Heading Starts */}
                    <div className="panel-heading">
                      <h4 className="panel-title">
                      <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse11">
                          Le pack PREMIUM Débutant - niveau 1</a>
                      </h4>
                    </div>
                    {/* Panel Heading Ends */}
                    {/* Panel Content Starts */}
                    <div id="collapse11" className="panel-collapse collapse">
                      <div className="panel-body">Le pack DEBUTANT permettra de vous donner accès aux articles de niveaux "Débutant" sur Cryptoconseils.fr + Un acces complet aux Airdrop du jour</div>
                    </div>
                    {/* Panel Content Starts */}
                  </div>
                  {/* Panel Ends */}
                  <div className="panel panel-default">
                    {/* Panel Heading Starts */}
                    <div className="panel-heading">
                      <h4 className="panel-title">
                      <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse12">
                          Le pack PREMIUM AVANCEE - niveau 2</a>
                      </h4>
                    </div>
                    {/* Panel Heading Ends */}
                    {/* Panel Content Starts */}
                    <div id="collapse12" className="panel-collapse collapse">
                      <div className="panel-body">Le pack AVANCEE donnera accès aux articles de niveaux Avancé sur Cryptoconseils.fr + Un accès à la messagerie Telegram + Un accès aux Analyses de Cryptoconseils.fr</div>
                    </div>
                    {/* Panel Content Starts */}
                  </div>
                  {/* Panel Ends */}

                  {/* Panel Ends */}
                  <div className="panel panel-default">
                    {/* Panel Heading Starts */}
                    <div className="panel-heading">
                      <h4 className="panel-title">
                      <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse13">
                          Le pack PREMIUM EXPERT - niveau 3</a>
                      </h4>
                    </div>
                    {/* Panel Heading Ends */}
                    {/* Panel Content Starts */}
                    <div id="collapse13" className="panel-collapse collapse">
                      <div className="panel-body">Le pack EXPERT donnera accès aux articles de niveaux Expert sur Cryptoconseils.fr + Un accès à l'ensemble des réseaux sociaux dont le groupe Facebook + accès aux Calls de Cryptoconseils.fr<br /></div>
                    </div>
                    {/* Panel Content Starts */}
                  </div>
                  {/* Panel Ends */}

                  {/* Panel Ends */}
                  <div className="panel panel-default">
                    {/* Panel Heading Starts */}
                    <div className="panel-heading">
                      <h4 className="panel-title">
                      <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse14">
                          Le pack PREMIUM LAMBO - niveau 4</a>
                      </h4>
                    </div>
                    {/* Panel Heading Ends */}
                    {/* Panel Content Starts */}
                    <div id="collapse14" className="panel-collapse collapse">
                      <div className="panel-body">Le pack LAMBO donnera accès à tous les avantages des packs précédents + suivi personnalisé par nos experts traders qui répondront à toutes vos questions.</div>
                    </div>
                    </div>
                    {/* Panel Content Starts */}
                  </div>
                  {/* Panel Ends */}

                 <div className="panel panel-default">
                    {/* Panel Heading Starts */}
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse15">
                          Qu'est-ce qu'un call</a>
                      </h4>
                    </div>
                    {/* Panel Heading Ends */}
                    {/* Panel Content Starts */}
                    <div id="collapse15" className="panel-collapse collapse">
                      <div className="panel-body">Un call est une indication de notre part concernant l'achat d'une cryptomonnaie. Nous détaillons très simplement pourquoi il est intéressant d'acheter maintenant cette cryptomonnaie, son prix d'achat ainsi que le prix de revente estimé. Nos calls premiums sont uniquement accessibles pour les utilisateurs premiums EXPERTS (niveau 3). Vous aurez quelques heures à l'avance nos calls avant publication sur le site.</div>
                    {/* Panel Content Starts */}
                    </div>
                  </div>

                  <div className="panel panel-default">
                    {/* Panel Heading Starts */}
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse16">
                          Qu'est-ce qu'un airdrop premium ?</a>
                      </h4>
                    </div>
                    {/* Panel Heading Ends */}
                    {/* Panel Content Starts */}
                    <div id="collapse16" className="panel-collapse collapse">
                      <div className="panel-body">Un airdrop premium est un renseignement de notre part pour obtenir des cryptomonnaies gratuitements. Nous sélectionnons et auditons les différentes cryptomonnaies disponible en Airdrop pour uniquement vous offrir celles qui ont le meilleurs potentiel d'évolution au cours du temps.</div>
                    {/* Panel Content Starts */}
                    </div>
                  </div>

                  {/* Panel Starts */}
                  <div className="panel panel-default">
                    {/* Panel Heading Starts */}
                    <div className="panel-heading">
                      <h4 className="panel-title">
                      <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse10">
                          Qu'est ce que le Bitcoin ?</a>
                      </h4>
                    </div>
                    {/* Panel Content Starts */}
                    <div id="collapse10" className="panel-collapse collapse">
                      <div className="panel-body">Bitcoin est une forme de monnaie numérique basée sur un code source ouvert créé et conservé par voie électronique. Bitcoin est une forme de monnaie décentralisée, ce qui signifie qu'elle n'appartient à aucune forme de gouvernement et n'est contrôlée par personne.</div>
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
                          Qui a développé le Bitcoin?</a>
                      </h4>
                    </div>
                    {/* Panel Heading Ends */}
                    {/* Panel Content Starts */}
                    <div id="collapse2" className="panel-collapse collapse">
                      <div className="panel-body">Le code original de Bitcoin a été conçu par Satoshi Nakamoto sous les informations d'identification MIT open source. En 2008, Nakamoto a présenté l'idée derrière Bitcoin dans son livre blanc, qui a scientifiquement décrit comment la cryptomonnaie fonctionnerait. Bitcoin est la première devise numérique réussie conçue avec confiance dans la cryptographie par rapport aux autorités centrales. Satoshi a laissé le code Bitcoin entre les mains des développeurs et de la communauté en 2010. Jusqu'à présent, des centaines de développeurs ont ajouté au code principal au fil des ans.</div>
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
                          Qu'est-ce que le minage de Bitcoin</a>
                      </h4>
                    </div>
                    {/* Panel Heading Ends */}
                    {/* Panel Content Starts */}
                    <div id="collapse3" className="panel-collapse collapse">
                      <div className="panel-body">Le minage du Bitcoin est analogue à l'extraction de l'or, mais sous forme numérique. Le processus implique des ordinateurs spécialisés résolvant des équations algorithmiques ou des fonctions de hachage. Ces problèmes aident les mineurs à confirmer les blocs de transactions détenus dans le réseau. L'extraction de Bitcoin fournit une récompense aux mineurs en les payant en Bitcoin, les mineurs confirmant les transactions sur la blockchain. Les mineurs introduisent de nouveaux Bitcoin dans le réseau et sécurisent également le système avec une confirmation des transactions. Ils sont également récompensés par des frais de réseau quand ils récoltent une nouvelle pièce de monnaie et une fois que le dernier bitcoin sera trouvé, l'exploitation minière continuera.</div>
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
                          Bitcoin peut-il être régulé ?</a>
                      </h4>
                    </div>
                    {/* Panel Heading Ends */}
                    {/* Panel Content Starts */}
                    <div id="collapse5" className="panel-collapse collapse">
                      <div className="panel-body">Là encore, lorsqu'un utilisateur décide d'utiliser un type spécifique de logiciel pour son portefeuille Bitcoin, il décide de la direction vers laquelle le réseau Bitcoin se dirige. En d'autres termes, vous avez besoin de la coopération de presque tous les utilisateurs pour modifier n'importe quel aspect du protocole Bitcoin.</div>
                    </div>
                    {/* Panel Content Starts */}
                  </div>
                  {/* Panel Ends */}
                  {/* Panel Starts */}
                  <div className="panel panel-default">
                    {/* Panel Heading Starts */}
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse6">
                          Bitcoin est-il anonyme ?</a>
                      </h4>
                    </div>
                    {/* Panel Heading Ends */}
                    {/* Panel Content Starts */}
                    <div id="collapse6" className="panel-collapse collapse">
                      <div className="panel-body">Les participants aux transactions Bitcoin sont identifiés par des adresses publiques - ce sont les longues chaînes d'environ 30 caractères que vous voyez dans l'adresse Bitcoin d'une personne, en commençant généralement par les chiffres '1' ou '3'. Pour chaque transaction, les adresses d'envoi et de réception sont visibles publiquement.</div>
                    </div>
                    {/* Panel Content Starts */}
                  </div>
                  {/* Panel Ends */}
                  {/* Panel Starts */}
                  <div className="panel panel-default">
                    {/* Panel Heading Starts */}
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse7">
                          Comment vendre mes bitcoins</a>
                      </h4>
                    </div>
                    {/* Panel Heading Ends */}
                    {/* Panel Content Starts */}
                    <div id="collapse7" className="panel-collapse collapse">
                      <div className="panel-body">Les Bitcoins peuvent être vendus localement en utilisant LocalBitcoins, sur des maisons de courtage / échanges Bitcoin, en utilisant des Distributeurs Bitcoin bidirectionnels (BTM) ou vous pouvez payer pour un bien ou un service avec eux. Bitcoins peuvent être vendus à peu près n'importe qui tant qu'ils ont une adresse Bitcoin, et peuvent être vendus pour n'importe quelle monnaie fiduciaire dans le monde ou négociés pour un bien physique. N'hésitez pas à consulter notre liste d'échanges et de services de courtage pour vendre vos bitcoins en ligne.</div>
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
        </section>
      </div>
    );
  }
}

export default Faq;
