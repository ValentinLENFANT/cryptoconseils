import React, { Component } from 'react';
import axios from 'axios';
import Banner from './Banner';

class Article extends Component {

  constructor() {
    super();
    this.state = {article: []};
    this.getArticleInfos = this.getArticleInfos.bind(this)
  }

  getArticleInfos(){
    axios.get('http://127.0.0.1:8000/blog/articles/'+this.props.match.params.id)
    .then(response => {
      this.setState({
        article: response.data
      });
    })
    .catch(error => {
      console.log(error);
    });
  }
  render() {
    this.getArticleInfos.bind();
    return(
      <div>
        <Banner oui={this.state.article}/>
      </div>
    );
  }
}

export default Article;
