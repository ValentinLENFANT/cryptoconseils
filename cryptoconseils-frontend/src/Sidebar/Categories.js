import React, { Component } from 'react';
import axios from 'axios';

class Categories extends Component {

  constructor(){
    super();
    this.state = {
      categories: []
    }
  }
  componentDidMount(){
    axios.get(process.env.REACT_APP_API_ADDRESS+'/categories/')
    .then(response => {
      this.setState({
        categories: response.data
      });
    }).catch(error => {
      console.log(error);
    });
  }

  renderCategories(){
    return this.state.categories.map(item => {
      return(
        <li key={item.id}>
          <a href={"/categories/"+item.id}>{item.name}</a>
        </li>
      );
    })
  }
  render() {
    return(
      <div className="Categories Component">
        <div className="widget">
          <h3 className="widget-title">Catégories</h3>
          <ul className="arrow nav nav-tabs second-font uppercase">
            {this.renderCategories()}
          </ul>
        </div>
      </div>
    );
  }
}

export default Categories;
