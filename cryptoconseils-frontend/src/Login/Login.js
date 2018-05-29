import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div class="auth-page">
          {/*Wrapper Starts */}
          <div class="wrapper">
            <div class="container-fluid user-auth">
              <div class="hidden-xs col-sm-4 col-md-4 col-lg-4">
                {/*Logo Starts */}
                <a class="logo" href="index.html">
                  <img class="img-responsive" src="images/logo.png" alt="logo"/>
                </a>
                {/*Logo Ends */}
                {/*Slider Starts */}
                <div id="carousel-testimonials" class="carousel slide carousel-fade" data-ride="carousel">
                  {/*Indicators Starts */}
                  <ol class="carousel-indicators">
                    <li data-target="#carousel-testimonials" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel-testimonials" data-slide-to="1"></li>
                    <li data-target="#carousel-testimonials" data-slide-to="2"></li>
                  </ol>
                  {/*Indicators Ends */}
                  {/*Carousel Inner Starts */}
                  <div class="carousel-inner">
                    {/*Carousel Item Starts */}
                    <div class="item active item-1">
                      <div>
                        <blockquote>
                          <p>Enfin un site francophone qui m'a appris à gérer mes investissements et diversifier mon patrimoine</p>
                          <footer><span>Chantal Bonhome</span>, Paris</footer>
                        </blockquote>
                      </div>
                    </div>
                    {/*Carousel Item Ends */}
                    {/*Carousel Item Starts */}
                    <div class="item item-2">
                      <div>
                        <blockquote>
                          <p>Le prix du Bitcoin a doublé en seulement 1 semaine ! Excellent support l'équipe du site est toujours là pour vous guider!</p>
                          <footer><span>Mohammad Abdoul</span>, Tunisie</footer>
                        </blockquote>
                      </div>
                    </div>
                    {/*Carousel Item Ends */}
                    {/*Carousel Item Starts */}
                    <div class="item item-3">
                      <div>
                        <blockquote>
                          <p>Ma famille et moi voulons remercier le site CryptoConseils pour tout le temps passé à nous guider. Les choses se passent très bien en ce moment, continuez comme ça ! Je recommande !</p>
                          <footer><span>Margaux Etienne</span>, Bordeaux</footer>
                        </blockquote>
                      </div>
                    </div>
                    {/*Carousel Item Ends */}
                  </div>
                  {/*Carousel Inner Ends */}
                </div>
                {/*Slider Ends */}
              </div>
              <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                {/*Logo Starts */}
                <a class="visible-xs" href="index.html">
                  <img class="img-responsive mobile-logo" src="images/logo.png" alt="logo"/>
                </a>
                {/*Logo Ends */}
                <div class="form-container">
                  <div>
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

    export default Login;
