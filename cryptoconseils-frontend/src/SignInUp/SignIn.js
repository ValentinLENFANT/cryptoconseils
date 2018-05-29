import React, { Component } from 'react';
import Carousel from './Caroussel';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignUp: false
    };
    this.changeForm = this.changeForm.bind(this);
  }

  changeForm(event) {
    if(this.state.showSignUp){
      this.setState({showSignUp: false});
    } else {
      this.setState({showSignUp: true});
    }
  }

  formRender(){
    if(this.state.showSignUp || this.props.showSignUp){
      return this.SignUpForm();
    } else {
      return this.SignInForm();
    }
  }

  SignInForm() {
    return(
      <div className="SignInForm">
        {/*Section Title Starts */}
        <div className="row text-center">
          <h2 className="title-head hidden-xs"><span>Connexion</span></h2>
          <p className="info-form">Bénéficier d'informations détaillées et de nos services en vous connectant</p>
        </div>
        {/*Section Title Ends */}
        {/*Form Starts */}
        <form>
          {/*Input Field Starts */}
          <div className="form-group">
            <input className="form-control" name="email" id="email" placeholder="EMAIL" type="email" required/>
          </div>
          {/*Input Field Ends */}
          {/*Input Field Starts */}
          <div className="form-group">
            <input className="form-control" name="password" id="password" placeholder="PASSWORD" type="password" required/>
          </div>
          {/*Input Field Ends */}
          {/*Submit Form Button Starts */}
          <div className="form-group">
            <button className="btn btn-primary" type="submit">Connexion</button>
            <p className="text-center">Pas de compte ?
              <a href="#" onClick={this.changeForm}> Inscription</a>
            </p>
          </div>
          {/*Submit Form Button Ends */}
        </form>
        {/*Form Ends */}
      </div>
    );
  }

  SignUpForm() {
    return(
      <div className="SignUpForm">
        {/* Section Title Starts */}
        <div className="row text-center">
          <h2 className="title-head hidden-xs">C'est <span>parti</span></h2>
           <p className="info-form">Créez un compte rapidement et commencez le trading !</p>
        </div>
        {/* Section Title Ends */}
        {/* Form Starts */}
        <form>
          {/* Input Field Starts */}
          <div className="form-group">
            <input className="form-control" name="name" id="name" placeholder="NOM" type="text" required/>
          </div>
          {/* Input Field Ends */}
          {/* Input Field Starts */}
          <div className="form-group">
            <input className="form-control" name="email" id="email" placeholder="EMAIL" type="email" required/>
          </div>
          {/* Input Field Ends */}
          {/* Input Field Starts */}
          <div className="form-group">
            <input className="form-control" name="password" id="password" placeholder="MOT DE PASSE" type="password" required/>
          </div>
          {/* Input Field Ends */}
          {/* Submit Form Button Starts */}
          <div className="form-group">
            <button className="btn btn-primary" type="submit">créer un compte</button>
            <p className="text-center">déjà un compte ?
              <a href="#" onClick={this.changeForm}> Connexion</a>
            </p>
          </div>
          {/* Submit Form Button Ends */}
        </form>
        {/* Form Ends */}
      </div>
    );
  }
  render() {
    return (
      <div className="SignIn">
        <div className="auth-page">
          {/*Wrapper Starts */}
          <div className="wrapper">
            <div className="container-fluid user-auth">
              <div className="hidden-xs col-sm-4 col-md-4 col-lg-4">
                <Carousel />
              </div>
              <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                <div className="form-container">
                  <div>
                    {this.formRender()}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Wrapper Ends */}
        </div>
      </div>
    );
  }
}



export default SignIn;
