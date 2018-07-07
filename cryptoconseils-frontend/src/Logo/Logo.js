import React, { Component } from 'react';

class Logo extends Component {
  render () {
    if(this.props.mobile){
      return(
        <div className="LogoMobile">
          <a className="logo-mobile" href="index.html">
            <img className="img-responsive" src="/images/logo.png" alt="logo"/>
            </a>
        </div>
      );
    }else{
      return(
        <div className="Logo">
          <div className="main-logo col-xs-12 col-md-2 col-md-2 col-lg-2 hidden-xs">
            <a href="/">
              <img className="img-responsive" src="/images/logo.png" alt="logo"/>
            </a>
          </div>
        </div>
      );
    }
  }
}

export default Logo;
