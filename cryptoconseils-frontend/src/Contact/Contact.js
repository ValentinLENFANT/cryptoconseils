import React, {Component} from 'react';
import Banner from '../Banner/Banner';
import Widget from './Widget';
import BeginTrade from '../BeginTrade/BeginTrade';

class Contact extends Component {
  render() {
    let isLogged = false;
    if(sessionStorage.getItem('access_token')){
      isLogged = true;
    }
    return (
      <div className="Contact Component">
      <Banner titlePart1="Contactez" titlePart2="nous" pageName="contact"/> 
        <div className ="contact">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-8 contact-form">
                <h3 className="col-xs-12">Envoyez-nous un message nous vous répondrons</h3>
                <p className="col-xs-12">Besoin de nous parler ? Une demande ou une suggestion ? Remplissez le formulaire ci-dessous.</p>
                {/* Contact Form Starts */}
                <form className="form-contact" method="post" action="php/process-form.php">
                  {/* Input Field Starts */}
                  <div className="form-group col-md-6">
                    <input className="form-control" name="firstname" id="firstname" placeholder="Prénom" type="text" required="required"/>
                  </div>
                  {/* Input Field Ends */}
                  {/* Input Field Starts */}
                  <div className="form-group col-md-6">
                    <input className="form-control" name="lastname" id="lastname" placeholder="Nom" type="text" required="required"/>
                  </div>
                  {/* Input Field Ends */}
                  {/* Input Field Starts */}
                  <div className="form-group col-md-6">
                    <input className="form-control" name="email" id="email" placeholder="E-mail" type="email" required="required"/>
                  </div>
                  {/* Input Field Ends */}
                  {/* Input Field Starts */}
                  <div className="form-group col-md-6">
                    <input className="form-control" name="text" id="subject" placeholder="Sujet" type="text" required="required"/>
                  </div>
                  {/* Input Field Ends */}
                  {/* Input Field Starts */}
                  <div className="form-group col-xs-12">
                    <textarea className="form-control" id="message" name="message" placeholder="Message" required="required"></textarea>
                  </div>
                  {/* Input Field Ends */}
                  {/* Submit Form Button Starts */}
                  <div className="form-group col-xs-12 col-sm-4">
                    <button className="btn btn-primary btn-contact" type="submit">Envoyer message</button>
                  </div>
                  {/* Submit Form Button Ends */}
                  {/* Form Submit Message Starts */}
                  <div className="col-xs-12 text-center output_message_holder d-none">
                    <p className="output_message"></p>
                  </div>
                  {/* Form Submit Message Ends */}
                </form>
                {/* Contact Form Ends */}
              </div>
              <Widget/>
            </div>
            <BeginTrade isLogged={isLogged}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
