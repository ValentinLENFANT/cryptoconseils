import React, {Component} from 'react';

class Widget extends Component {

  render(){
    return(
      <div className="Widget Component">
        {/* Contact Widget Starts */}
        <div className="col-xs-12 col-md-4">
          <div className="widget">
            <div className="contact-page-info">
              {/* Contact Info Box Starts */}
              <div className="contact-info-box">
                <i className="fa fa-home big-icon"></i>
                <div className="contact-info-box-content">
                  <h4>Adresse</h4>
                  <p>12 Rue De La Paix, Paris, France</p>
                </div>
              </div>
              {/* Contact Info Box Ends */}
              {/* Contact Info Box Starts */}
              <div className="contact-info-box">
                <i className="fa fa-phone big-icon"></i>
                <div className="contact-info-box-content">
                  <h4>Numéro de téléphone</h4>
                  <p>+33 681758319</p>
                </div>
              </div>
              {/* Contact Info Box Ends */}
              {/* Contact Info Box Starts */}
              <div className="contact-info-box">
                <i className="fa fa-envelope big-icon"></i>
                <div className="contact-info-box-content">
                  <h4>Adresse Email</h4>

                  <p>cryptoconseils@gmail.com</p>
                </div>
              </div>
              {/* Contact Info Box Ends */}
              {/* Social Media Icons Starts */}
              <div className="contact-info-box">
                <i className="fa fa-share-alt big-icon"></i>
                <div className="contact-info-box-content">
                  <h4>Réseaux sociaux</h4>
                  <div className="social-contact">
                    <ul>
                      <li className="facebook">
                        <a href="" target="_blank">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li className="twitter">
                        <a href="" target="_blank">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li className="google-plus">
                        <a href="" target="_blank">
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Social Media Icons Starts */}
            </div>
          </div>
        </div>
        {/* Contact Widget Ends */}
      </div>
    );
  }
}

export default Widget;
