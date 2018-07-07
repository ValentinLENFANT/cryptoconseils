import React, { Component } from 'react';

class AirdropAdmin extends Component {
  render() {
    return(
        <section className="calls-premium section-profil" >
           <div className="container">

               <div className="row text-center">
                   <h2 className="title-head" id="airdrop-premium">Airdrop<span> du jour </span></h2>
                   <div className="title-head-subtitle">
                       <p>Création de l'Airdop du jour</p>
                   </div>
               </div>

               {/*<!-- FORMULAIRE AiRDROP DU JOUR PREMIUM --> */}
               <div className="row">
                   <div className="col-md-12">
                       <div className="form-area">  
                           <form role="form">
                               <div className="col-md-6">
                                   <div className="form-group">
                                       <div className="row">
                                           <label className="control-label" for="source_image">Airdrop image (max height:400px) <i className="fa fa-picture-o" aria-hidden="true"></i></label>
                                       </div>
                                       <div className="row">
                                           <input id="source_image" name="source_image" className="input-file" type="file" />
                                       </div>
                                   </div>
                               </div>
                               <div className="col-md-6">
                                   <div className="form-group">
                                       <input type="text" className="form-control" id="ticker" name="ticker" placeholder="Ticker, ex: Bitcoin (BTC)" required/>
                                   </div>
                                   <div className="form-group">
                                       <textarea className="form-control" type="textarea" id="analyse" placeholder="Analyse technique" maxlength="140" rows="7"></textarea>
                                       <span className="help-block">
                                           <p id="characterLeft" className="help-block ">Limite de charactères atteintes</p>
                                       </span>                    
                                   </div>
                                   <div className="form-group">
                                       <input type="text" className="form-control" id="achat" name="achat" placeholder="Prix achat" required/>
                                   </div>
                                   <div className="form-group">
                                       <input type="text" className="form-control" id="vente" name="vente" placeholder="Prix vente" required/>
                                   </div>
                                   <div className="form-group">
                                       <input type="text" className="form-control" id="score" name="score" placeholder="Score" required />
                                   </div>
                                  
                                   <button type="button" id="submit" name="submit" className="btn btn-primary pull-right">Mettre à jour</button>
                               </div>
                           </form>
                       </div>
                   </div>
                </div>
                {/*<!--FIN FORMULAIRE CALL DU JOUR PREMIUM -->*/}

               <div className="row">
                   <div className="col-xs-12 col-sm-12 col-md-12 text-center">
                       <p className="apercu-admin">Aperçu <i className="fa fa-chevron-down" aria-hidden="true"></i></p>
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
                               <p id="airdrop-ticker">APIS</p>
                               <p className="texte-airdrop-premium">Apis est un projet d’hébergement de masternodes. Son token (Apis) permet de bénéficier de plusieurs avantages sur sa plate-forme. 
                               Un airdrop est prévu jusqu’au 04/07/218. Dépêchez-vous ! 100 APIS seront distribués à chaque participants ce qui représente un peu plus de 10€ aujourd'hui mais qui pourrait rapidement prendre de la valeur et atteindre 50€ d'ici la fin du mois.
                               </p>
                           </div>
                       </div>
                       <div className="row">
                           <div className="col-xs-12 col-sm-12 col-md-12">
                               <p className="etape-airdrop">
                                   Etape 1 : Rejoindre le telegram <a href="https://t.me/TheApisplatform">https://t.me/TheApisplatform</a> <br />
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

export default AirdropAdmin;
