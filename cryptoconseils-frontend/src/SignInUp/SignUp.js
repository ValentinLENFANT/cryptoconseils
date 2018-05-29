import React, { Component } from 'react';

class SignUp extends Component {

  render() {
    return (
      <div className="SignUp">
        {/* Section Title Starts */}
        <div class="row text-center">
          <h2 class="title-head hidden-xs">C'est <span>parti</span></h2>
           <p class="info-form">Créez un compte rapidement et commencez le trading !</p>
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
            <p className="text-center">déjà un compte ? <a href="connexion.html">Connexion</a></p>
          </div>
          {/* Submit Form Button Ends */}
        </form>
        {/* Form Ends */}
      </div>
    );
  }
}
export default SignUp;
