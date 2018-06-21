import React, { Component } from 'react';

class Carousel extends Component {
  render() {
    return(
      <div className="Carousel">
        <div id="main-slide" className="carousel slide carousel-fade" data-ride="carousel">
          {/* Indicators Starts */}
          <ol className="carousel-indicators visible-lg visible-md">
            <li data-target="#main-slide" data-slide-to="0" className="active"></li>
            <li data-target="#main-slide" data-slide-to="1"></li>
            <li data-target="#main-slide" data-slide-to="2"></li>
          </ol>
          {/* Indicators Ends */}
          {/* Carousel Inner Starts */}
          <div className="carousel-inner">
            {/* Carousel Item Starts */}
            <div className="item active bg-parallax item-1">
              <div className="slider-content">
                <div className="container">
                  <div className="slider-text text-center">
                    <h3 className="slide-title"><span>Analyses</span> et <span>Conseils</span><br/> pour optimiser vos gains</h3>
                    <p>
                      <a href="about.html" className="slider btn btn-primary">En savoir plus</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Carousel Item Ends */}
            {/* Carousel Item Starts */}
            <div className="item bg-parallax item-2">
              <div className="slider-content">
                <div className="col-md-12">
                  <div className="container">
                    <div className="slider-text text-center">
                      <h3 className="slide-title">Suivez nos <span>Experts</span> Traders <br/> de classNamee <span>Mondiale</span> </h3>
                      <p>
                        <a href="pricing.html" className="slider btn btn-primary">Nos offres</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Carousel Item Ends */}
          </div>
          {/* Carousel Inner Ends */}
          {/* Carousel Controlers Starts */}
          <a className="left carousel-control" href="index.html#main-slide" data-slide="prev">
            <span><i className="fa fa-angle-left"></i></span>
          </a>
          <a className="right carousel-control" href="index.html#main-slide" data-slide="next">
            <span><i className="fa fa-angle-right"></i></span>
          </a>
          {/* Carousel Controlers Ends */}
        </div>
      </div>
    );
  }
}

export default Carousel;
