import React, {Component} from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Widget from './Widget';
import BeginTrade from '../BeginTrade/BeginTrade';

class Contact extends Component {

  constructor() {
    super()
    this.state = {
      firstname: null,
      lastname: null,
      email: null,
      subject: null,
      message: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // for multiple input
  handleChange(event) {
    const target = event.target;
    const value = target.value
    const name = target.id;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    for(var item in this.state){
      console.log(this.state[item]);
    }
  }

  render() {
    return (
      <div className="Contact Component">
        <Header/>
        <Banner titlePart1="Contactez" titlePart2="nous" pageName="contact"/>
        <section className="contact">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-8 contact-form">
                <h3 className="col-xs-12">
                  Envoyez-nous un message nous vous répondrons
                </h3>
                <p className="col-xs-12">
                  Besoin de nous parler ? Une demande ou une suggestion ? Remplissez le formulaire ci-dessous.
                </p>
                {/* Contact Form Starts */}
                <form className="form-contact" onSubmit={this.handleSubmit.bind(this)}>
                  {/* Input Field Starts */}
                  <div className="form-group col-md-6">
                    <input
                      className="form-control"
                      name="firstname"
                      id="firstname"
                      placeholder="Prénom"
                      type="text"
                      required="required"
                      value={this.state.value}
                      onChange={this.handleChange}
                    />
                  </div>
                  {/* Input Field Ends */}
                  {/* Input Field Starts */}
                  <div className="form-group col-md-6">
                    <input
                      className="form-control"
                      name="lastname"
                      id="lastname"
                      placeholder="Nom"
                      type="text"
                      required="required"
                      value={this.state.value}
                      onChange={this.handleChange}
                    />
                  </div>
                  {/* Input Field Ends */}
                  {/* Input Field Starts */}
                  <div className="form-group col-md-6">
                    <input
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="E-mail"
                      type="email"
                      required="required"
                      value={this.state.value}
                      onChange={this.handleChange}
                    />
                  </div>
                  {/* Input Field Ends */}
                  {/* Input Field Starts */}
                  <div className="form-group col-md-6">
                    <input
                      className="form-control"
                      name="text"
                      id="subject"
                      placeholder="Sujet"
                      type="text"
                      required="required"
                      value={this.state.value}
                      onChange={this.handleChange}
                    />
                  </div>
                  {/* Input Field Ends */}
                  {/* Input Field Starts */}
                  <div className="form-group col-xs-12">
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      placeholder="Message"
                      required="required"
                      value={this.state.value}
                      onChange={this.handleChange}>
                    </textarea>
                  </div>
                  {/* Input Field Ends */}
                  {/* Submit Form Button Starts */}
                  <div className="form-group col-xs-12 col-sm-4">
                    <button
                      className="btn btn-primary btn-contact"
                      type="submit">
                      Envoyer message
                    </button>
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
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
