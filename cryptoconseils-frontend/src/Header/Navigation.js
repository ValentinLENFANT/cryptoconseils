import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import SearchBar from './SearchBar'
import axios from 'axios'

class Navigation extends Component {

  constructor() {
    super()
    this.state = {
      showSearchBar: false
    }
  }
  toggleSearch() {
    this.setState({
      showSearchBar: !this.state.showSearchBar
    });
  }

  renderSearchBar(){
    if(this.state.showSearchBar){
      return <SearchBar/>
    }else return null
  }

  renderAdminLink(){
    if(this.props.isAdmin){
      return (<li><a href="/admin">Admin</a></li>);
    }
  }
  render() {
    return(
      <div className="Statistics">
        <nav className="site-navigation navigation" id="site-navigation">
          <div className="container">
            <div className="site-nav-inner">
              {/* Logo For ONLY Mobile display Starts */}
                <Logo mobile={true} />
              {/* Logo For ONLY Mobile display Ends */}
              {/* Toggle Icon for Mobile Starts */}
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              {/* Toggle Icon for Mobile Ends */}
              <div className="collapse navbar-collapse navbar-responsive-collapse">
                {/* Main Menu Starts */}
                <ul className="nav navbar-nav">
                  <li className="active"><a href="/">Accueil</a></li>
                  <li><a href="/articles">News</a></li>
                  <li><a href="analyses-calls.html">Analyses & calls</a></li>
                  <li><a href="airdrops.html">Airdrops</a></li>
                  <li><a href="#pricing">Accès Prémium</a></li>
                  <li><a href="/team">Team</a></li>
                  <li><a href="/contact">Contact</a></li>
                  <li><a href="/faq">Faq</a></li>
                  {this.renderAdminLink()}
                  {/* Search Icon Starts */}
                  <li className="search"><button className="fa fa-search" onClick={this.toggleSearch.bind(this)}></button></li>
                  {/* Search Icon Ends */}
                </ul>
                {/* Main Menu Ends */}
              </div>
            </div>
          </div>
          {/* Search Input Starts */}
          {this.renderSearchBar()}
        </nav>
        {/* Search Input Ends */}
      </div>
    );
  }
}

export default Navigation;
