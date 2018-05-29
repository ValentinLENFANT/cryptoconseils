import React, { Component } from 'react';

class Carousel extends Component {
  render() {
    return (
      <div className="Carousel">
        {/*Logo Starts */}
        <a className="logo" href="index.html">
          <img className="img-responsive" src="images/logo.png" alt="logo"/>
        </a>
        {/*Logo Ends */}
        {/*Slider Starts */}
        <div id="carousel-testimonials" className="carousel slide carousel-fade" data-ride="carousel">
          {/*Indicators Starts */}
          <ol className="carousel-indicators">
            <li data-target="#carousel-testimonials" data-slide-to="0" className="active"></li>
            <li data-target="#carousel-testimonials" data-slide-to="1"></li>
            <li data-target="#carousel-testimonials" data-slide-to="2"></li>
          </ol>
          {/*Indicators Ends */}
          {/*Carousel Inner Starts */}
          <div className="carousel-inner">
            {/*Carousel Item Starts */}
            <div className="item active item-1">
              <div>
                <blockquote>
                  <p>Enfin un site francophone qui m'a appris à gérer mes investissements et diversifier mon patrimoine</p>
                  <footer><span>Chantal Bonhome</span>, Paris</footer>
                </blockquote>
              </div>
            </div>
            {/*Carousel Item Ends */}
            {/*Carousel Item Starts */}
            <div className="item item-2">
              <div>
                <blockquote>
                  <p>Le prix du Bitcoin a doublé en seulement 1 semaine ! Excellent support l'équipe du site est toujours là pour vous guider!</p>
                  <footer><span>Mohammad Abdoul</span>, Tunisie</footer>
                </blockquote>
              </div>
            </div>
            {/*Carousel Item Ends */}
            {/*Carousel Item Starts */}
            <div className="item item-3">
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
    );
  }
}

export default Carousel;
