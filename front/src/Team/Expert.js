import React, { Component } from 'react';

class Expert extends Component {
  render() {
    return (
      <div className="Expert Component">
        <section className="team" id="team">
          <div className="container">
            {/* Section Title Starts */}
            <div className="row text-center">
              <h2 className="title-head">Nos <span>experts</span></h2>
              <div className="title-head-subtitle">
                <p> Une équipe d'expert en crypto-monnaies et de la blockchain située à Paris</p>
              </div>
            </div>
            {/* Section Title Ends */}
            {/* Team Members Starts */}
            <div className="row team-content team-members">
              {/* Team Member Starts */}
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                <div className="team-member">
                  {/* Team Member Picture Starts */}
                  <img src="images/team/member1.jpg" className="img-responsive" alt="team member"/>
                  {/* Team Member Picture Ends */}
                  {/* Team Member Details Starts */}
                  <div className="team-member-caption social-icons">
                    <h4>Guillaume JEAN</h4>
                    <p>Ingénieur Blockchain</p>
                    <ul className="list list-inline social">
                      <li>
                        <a href="https://github.com/Barbe-Bleue" className="fa fa-github"> </a>
                      </li>
                    </ul>
                  </div>
                  {/* Team Member Details Ends */}
                </div>
              </div>
              {/* Team Member Ends */}
              {/* Team Member Starts */}
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                <div className="team-member">
                  {/* Team Member Picture Starts */}
                  <img src="images/team/member2.jpg" className="img-responsive" alt="team member"/>
                  {/* Team Member Picture Ends */}
                  {/* Team Member Details Starts */}
                  <div className="team-member-caption social-icons">
                    <h4>Valentin LENFANT</h4>
                    <p>Consultant expert en crypto-monnaies</p>
                    <ul className="list list-inline social">
                      <li>
                        <a href="https://fr.linkedin.com/in/valentinlenfant" className="fa fa-linkedin"> </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/Cryptoval" className="fa fa-twitter"> </a>
                      </li>
                    </ul>
                  </div>
                  {/* Team Member Details Ends */}
                </div>
              </div>
              {/* Team Member Ends */}
              {/* Team Member Starts */}
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                {/* Team Member*/}
                <div className="team-member">
                  {/* Team Member Picture Starts */}
                  <img src="images/team/member3.jpg" className="img-responsive" alt="team member"/>
                  {/* Team Member Picture Ends */}
                  {/* Team Member Details Starts */}
                  <div className="team-member-caption social-icons">
                    <h4>Aurélien BERANGER</h4>
                    <p>Crypto Analyste</p>
                    <ul className="list list-inline social">
                      <li>
                        <a href="https://fr.linkedin.com/in/aurélien-beranger-792480100" className="fa fa-linkedin"> </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/Aurerianusu" className="fa fa-twitter"> </a>
                      </li>
                    </ul>
                  </div>
                  {/* Team Member Details Ends */}
                </div>
              </div>
              {/* Team Member Ends */}
              {/* Team Member Starts */}
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                <div className="team-member">
                  {/* Team Member Picture Starts */}
                  <img src="images/team/member4.jpg" className="img-responsive" alt="team member"/>
                  {/* Team Member Picture Ends */}
                  {/* Team Member Details Starts */}
                  <div className="team-member-caption social-icons">
                    <h4>ALEXANDRE DUBOIS</h4>
                    <p>Expert Trader</p>
                    <ul className="list list-inline social">
                      <li>
                        <a href="https://fr.linkedin.com/in/alexandre-dubois-france?trk=pub-pbmap" className="fa fa-linkedin"> </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/cryptoelix" className="fa fa-twitter"> </a>
                      </li>
                    </ul>
                  </div>
                  {/* Team Member Details Ends */}
                </div>
              </div>
              {/* Team Member Ends */}
            </div>
            {/* Team Members Ends */}
          </div>
        </section>
      </div>
    );
  }
}

export default Expert;
