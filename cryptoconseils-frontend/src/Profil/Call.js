import React, { Component } from 'react';

class Call extends Component {
  render() {
    return(
        <section className="calls-premium">
            <div className="container">
                <div className="row text-center">
                    <h2 className="title-head" id="call-premium">Call<span> du jour </span></h2>
                    <div className="title-head-subtitle">
                        <p>Call pour membre premium en avant-première !</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12">
                        <a href="#premium">
                            <img src="images/backoffice/call-no-premium.jpg" className="premium-image" alt="call premium" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default Call;