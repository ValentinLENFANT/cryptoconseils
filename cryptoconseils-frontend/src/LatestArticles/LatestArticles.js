import React, { Component } from 'react';
import axios from 'axios';
import News from '../Home/News';
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'
class LatestArticles extends Component {

  constructor() {
    super();
    this.state = {
      article: [],
      access: false
    };
  }
  render() {
    return(
      <div className="LatestArticles Component">
        <div>
          <Header/>
          <News nbArticle="20"/>
        </div>
        <Sidebar/>
      </div>
    );
  }
}

export default LatestArticles;
