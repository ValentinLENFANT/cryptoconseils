import React, { Component } from 'react';
import News from './News'

class AllArticles extends Component {
  render() {
    return(
      <div className="AllArticles Component">
        <News nbArticle="100"/>
      </div>
    );
  }
}
export default AllArticles;
