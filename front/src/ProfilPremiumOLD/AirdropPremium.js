import React, { Component } from 'react';

class AirdropPremium extends Component {
  render() {
    return(
        <section className="calls-premium section-profil" >
           <div className="container">
               <div className="row text-center">
                   <h2 className="title-head" id="airdrop-premium">Airdrop<span> du jour </span></h2>
                   <div className="title-head-subtitle">
                       <p>Obtenez dès à présent de l'argent gratuitement</p>
                   </div>
               </div>
               <div className="row">
                   <div className="col-xs-12 col-sm-12 col-md-6">
                       <a href="#premium">
                           <img src="images/backoffice/airdrop-premium.jpg" alt="call premium" className="image-airdrop-premium" />
                       </a>
                   </div>
                   <div className="col-xs-12 col-sm-12 col-md-6">
                       <div className="row">
                           <div className="col-xs-12 col-sm-12 col-md-12">
                               <p id="airdrop-ticker">APIS (Apis)</p>
                               <p className="texte-airdrop-premium">Apis est un projet d’hébergement de masternodes. Son token (Apis) permet de bénéficier de plusieurs avantages sur sa plate-forme. 
                               Un airdrop est prévu jusqu’au 04/07/218. Dépêchez-vous ! 100 APIS seront distribués à chaque participants ce qui représente un peu plus de 10€ aujourd'hui mais qui pourrait rapidement prendre de la valeur et atteindre 50€ d'ici la fin du mois.
                               </p>
                           </div>
                       </div>
                       <div className="row">
                           <div className="col-xs-12 col-sm-12 col-md-12">
                               <p className="etape-airdrop">
                                   Etape 1 : Rejoindre le telegram <a href="https://t.me/TheApisplatform">https://t.me/TheApisplatform</a> <br/>
                                   Etape 2 : Répondre au formulaire <a href="https://goo.gl/forms/wX7X3ATFcpUllVQy1">https://goo.gl/forms/wX7X3ATFcpUllVQy1</a>
                              </p>
                           </div>
                       </div>
                       <div className="row">
                           <div className="col-xs-6 col-sm-6 col-md-4  button-call">
                               <div className="btn btn-success btn-lg">RECOMPENSE</div>
                           </div>
                           <div className="col-xs-6 col-sm-6 col-md-8 prix-call">
                               <div className="recompense-airdrop">100 APIS</div>
                           </div>
                       </div>
                    </div>
               </div>
           </div>
       </section>
    );
  }
}

export default AirdropPremium;
