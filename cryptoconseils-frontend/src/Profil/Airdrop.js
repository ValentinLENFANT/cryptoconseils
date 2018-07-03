import React, { Component } from 'react';

class Airdrop extends Component {
  render() {
    return(
        <section className="calls-premium">
            <div className="container">
                <div className="row text-center">
                    <h2 className="title-head" id="airdrop-premium">Airdrop<span> du jour </span></h2>
                    <div className="title-head-subtitle">
                        <p>Obtenez dès à présent de l'argent gratuitement</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12">
                        <a href="#premium">
                            <img src="images/backoffice/airdrop-no-premium.jpg" className="premium-image" alt="Airdrop Premium" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default Airdrop;
