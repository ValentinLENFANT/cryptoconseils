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
                      <div className="panel-body">Il existe pack premium : <a href="/premium">DEBUTANT</a> (niveau 2), <a href="/premium">AVANCÉ</a> (niveau 3), <a href="/premium">EXPERT</a> (niveau 4), <a href="/premium">LAMBO</a> (niveau 5). Ces catégories offrent chacune des fonctionnalités liés au site en fonction du niveau premium de l'utilisateur. Plus l'utilisateur a un niveau premium élevé plus il aura accès à de nouvelles fonctionnalités.
                    </div>
                    {/* Panel Content Starts */}
                  </div>
                  {/* Panel Starts */}
                  <div className="panel panel-default">
                    {/* Panel Heading Starts */}
                    <div className="panel-heading">
                      <h4 className="panel-title">
                      <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse11">
                          Le pack PREMIUM <a>Débutant</a> - niveau 2</a>
                      </h4>
                    </div>
                    {/* Panel Heading Ends */}
                    {/* Panel Content Starts */}
                    <div id="collapse11" className="panel-collapse collapse">
                      <div className="panel-body">Le pack <a href="/premium">DEBUTANT</a> permettra de vous donner accès aux articles de niveaux <a>Débutant</a> sur Cryptoconseils.fr + Un acces complet aux <a>Airdrop</a> du jour</div>
                    </div>
                    {/* Panel Content Starts */}
                  </div>
                  {/* Panel Ends */}
                  <div className="panel panel-default">
                    {/* Panel Heading Starts */}
                    <div className="panel-heading">
                      <h4 className="panel-title">
                      <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse12">
                          Le pack PREMIUM <a>AVANCÉ</a> - niveau 2</a>
                      </h4>
                    </div>
                    {/* Panel Heading Ends */}
                    {/* Panel Content Starts */}
                    <div id="collapse12" className="panel-collapse collapse">
                      <div className="panel-body">Le pack <a href="/premium">AVANCÉ</a> donnera accès aux articles de niveaux <a>Avancé</a> sur Cryptoconseils.fr + Un accès à la messagerie <a>Telegram</a></div>
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
                          Le pack PREMIUM <a>EXPERT</a> - niveau 3</a>
                      </h4>
                    </div>
                    {/* Panel Heading Ends */}
                    {/* Panel Content Starts */}
                    <div id="collapse13" className="panel-collapse collapse">
                      <div className="panel-body">Le pack <a href="/premium">EXPERT</a> donnera accès aux articles de niveaux <a>Expert</a> sur Cryptoconseils.fr + Un accès à l'ensemble des réseaux sociaux dont le groupe <a>Facebook</a> + accès aux <a>Calls</a> de Cryptoconseils.fr<br /></div>
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
                          Le pack PREMIUM <a>LAMBO</a> - niveau 4</a>
                      </h4>
                    </div>
                    {/* Panel Heading Ends */}
                    {/* Panel Content Starts */}
                    <div id="collapse14" className="panel-collapse collapse">
                      <div className="panel-body">Le pack <a href="/premium">LAMBO</a> donnera accès à tous les avantages des packs précédents + <a>suivi personnalisé</a> par nos experts traders qui répondront à toutes vos questions.</div>
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
                          Qu'est-ce qu'un <a>Call</a> ?</a>
                      </h4>
                    </div>
                    {/* Panel Heading Ends */}
                    {/* Panel Content Starts */}
                    <div id="collapse15" className="panel-collapse collapse">
                      <div className="panel-body">Un <a href="/call">Call</a> est une indication de notre part concernant l'achat d'une cryptomonnaie. Nous détaillons très simplement pourquoi il est intéressant d'acheter maintenant cette cryptomonnaie, son prix d'achat ainsi que le prix de revente estimé. Nos calls premiums sont uniquement accessibles pour les utilisateurs premiums EXPERTS (niveau 4).</div>
                    {/* Panel Content Starts */}
                    </div>
                  </div>

                  <div className="panel panel-default">
                    {/* Panel Heading Starts */}
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse16">
                          Qu'est-ce qu'un <a>Airdrop</a> ?</a>
                      </h4>
                    </div>
                    {/* Panel Heading Ends */}
                    {/* Panel Content Starts */}
                    <div id="collapse16" className="panel-collapse collapse">
                      <div className="panel-body">Un <a href="/airdrop">Airdrop</a> premium est un renseignement de notre part pour obtenir des cryptomonnaies gratuitements. Nous sélectionnons et auditons les différentes cryptomonnaies disponible en Airdrop pour uniquement vous offrir celles qui ont le meilleurs potentiel d'évolution au cours du temps.</div>
                    {/* Panel Content Starts */}
                    </div>
                  </div>

                  {/* Panel Starts */}
                  <div className="panel panel-default">
                    {/* Panel Heading Starts */}
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse17">
                          Pourquoi je ne vois plus mon/mes <a>commentaire(s)</a> ?</a>
                      </h4>
                    </div>
                    {/* Panel Heading Ends */}
                    {/* Panel Content Starts */}
                    <div id="collapse17" className="panel-collapse collapse">
                      <div className="panel-body">
                        Si vous remarquez que votre commentaire sur un article a disparu, c'est parce que l'quipe de <a>CryptoConseils.fr</a> a décidé de le modérer.
                        Si vous n'êtes pas d'accord avec ce changement, vous pouvez <a href="/contact"> nous contacter</a>.
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
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse18">
                          Pourquoi je ne peux pas acheter un <a>pack premium</a> avec ma <a>carte bleue</a> ?</a>
                      </h4>
                    </div>
                    {/* Panel Heading Ends */}
                    {/* Panel Content Starts */}
                    <div id="collapse18" className="panel-collapse collapse">
                      <div className="panel-body">
                        <a>Cryptoconseils.fr</a> utilise uniquement (pour l'instant) <a>Paypal</a> comme moyen de paiement.
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
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse19">
                          Comment dois-je faire pour accéder à des <a>articles</a> d'un niveau <a>premium</a> supérieur ?</a>
                      </h4>
                    </div>
                    {/* Panel Heading Ends */}
                    {/* Panel Content Starts */}
                    <div id="collapse19" className="panel-collapse collapse">
                      <div className="panel-body">
                        Il vous suffit de vous rendre sur la page <a href="/premium">premium</a> et de commander un de nos pack.
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
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse20">
                          Comment puis-je <a>rechercher</a> un article ? </a>
                      </h4>
                    </div>
                    {/* Panel Heading Ends */}
                    {/* Panel Content Starts */}
                    <div id="collapse20" className="panel-collapse collapse">
                      <div className="panel-body">
                        En cliquant sur la <a>loupe</a> dans la barre de navigation.
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
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse21">
                          Je suis niveau <a>Lambo</a>, comment puis-je avoir un <a>suivi personnalisé</a> par vos experts traders ? </a>
                      </h4>
                    </div>
                    {/* Panel Heading Ends */}
                    {/* Panel Content Starts */}
                    <div id="collapse21" className="panel-collapse collapse">
                      <div className="panel-body">
                        <a href="/contact/">Contactez-nous</a> tout simplement et nous vérifierons dans un premier temps si vous êtes titulaire d'un pack <a>Lambo</a>,
                        puis dans un deuxième temps nous répondrons à vos moindres questions.
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
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse22">
                          Comment puis-je rejoindre le groupe <a>Télégram</a> ?</a>
                      </h4>
                    </div>
                    {/* Panel Heading Ends */}
                    {/* Panel Content Starts */}
                    <div id="collapse22" className="panel-collapse collapse">
                      <div className="panel-body">
                        Tout d'abord vous devez être titutaire du pack <a href="/premium">Avancé</a>, puis une fois sur votre profil, le lien du groupe <a>Télégram</a> apparaitra.
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
                      <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse10">
                          Qu'est ce que le <a>Bitcoin</a> ?</a>
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
                          Qui a <a>développé</a> le Bitcoin ?</a>
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
                          Qu'est-ce que le <a>minage</a> de Bitcoin ?</a>
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
                          Bitcoin peut-il être <a>régulé</a> ?</a>
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
                          Bitcoin est-il <a>anonyme</a> ?</a>
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
                          Comment <a>vendre</a> mes bitcoins</a>
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
