import React, { Component } from 'react';
import axios from 'axios';

class Articles extends Component() {

  constructor() {
    super();
    this.state = {articles: []};
  }
  componentDidMount() {
   this.getAllArticles();
 }
  getAllArticles() {
    axios.get('http://127.0.0.1:8000/blog/articles')
    .then(response => {
      console.log(response.data);
      this.setState({
        articles: response.data
      });
    })
    .catch(error => {
      console.log(error);
    });
  }
  render() {
    return(
      <div>
        <ul>
      
          {this.state.articles.slice(0,3).map(article =>
            <li>{article.title}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Articles;
