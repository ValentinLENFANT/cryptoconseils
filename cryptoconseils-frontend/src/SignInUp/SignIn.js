import React, { Component } from 'react';
import Carousel from './Caroussel';
import SignUp from './SignUp';

class SignIn extends Component {
  render() {
    return (
      <div className="SignIn">
        <div class="auth-page">
          {/*Wrapper Starts */}
          <div class="wrapper">
            <div class="container-fluid user-auth">
              <div class="hidden-xs col-sm-4 col-md-4 col-lg-4">
                <Carousel />
              </div>
              <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                <div class="form-container">
                  <div>
                    {/* IF TRUE = INSCRIPTION, ELSE = CONNEXION*/}


                    
                    {/*Section Title Starts */}
                    <div class="row text-center">
                      <h2 class="title-head hidden-xs"><span>Connexion</span></h2>
                      <p class="info-form">Bénéficier d'informations détaillées et de nos services en vous connectant</p>
                    </div>
                    {/*Section Title Ends */}
                    {/*Form Starts */}
                    <form>
                      {/*Input Field Starts */}
                      <div class="form-group">
                        <input class="form-control" name="email" id="email" placeholder="EMAIL" type="email" required/>
                      </div>
                      {/*Input Field Ends */}
                      {/*Input Field Starts */}
                      <div class="form-group">
                        <input class="form-control" name="password" id="password" placeholder="PASSWORD" type="password" required/>
                      </div>
                      {/*Input Field Ends */}
                      {/*Submit Form Button Starts */}
                      <div class="form-group">
                        <button class="btn btn-primary" type="submit">Connexion</button>
                        <p class="text-center">Pas de compte ? <a href="inscription.html">inscription</a></p>
                      </div>
                      {/*Submit Form Button Ends */}
                    </form>
                    {/*Form Ends */}



                    {/* END IF TRUE = INSCRIPTION, ELSE = CONNEXION*/}
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
