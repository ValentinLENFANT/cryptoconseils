import React, { Component } from 'react';

class BeginTrade extends Component {
  render() {
    return (
      <div className="BeginTrade Component">
        <section className="call-action-all">
          <div className="call-action-all-overlay">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  {/* Call To Action Text Starts */}
                  <div className="action-text">
                    <h2>Commencez dès maintenant à trader</h2>
                    <p className="lead">Créer un compte gratuitement !</p>
                  </div>
                  {/* Call To Action Text Ends */}
                  {/* Call To Action Button Starts */}
                  <p className="action-btn">
                    <a className="btn btn-primary" href="/signup">
                      S'enregistrer
                    </a>
                  </p>
                  {/* Call To Action Button Ends */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default BeginTrade;
