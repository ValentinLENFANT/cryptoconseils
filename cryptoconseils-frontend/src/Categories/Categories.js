import React, { Component } from 'react';
import axios from 'axios';
import News from '../Home/News';
import Sidebar from '../Sidebar/Sidebar'
import Banner from '../Banner/Banner';
import Header from '../Header/Header'
class LatestArticles extends Component {

  constructor() {
    super();
    this.state = {
      categorieName: '',
      categoriesId: ''
    };
  }

  componentDidMount(){
    axios.get(process.env.REACT_APP_API_ADDRESS+'/categories/'+this.props.match.params.id)
    .then(response => {
      this.setState({
        categorieName: response.data.name,
        categoriesId: response.data.id
      })

    }).catch(error => {
      console.log(error);
    });
  }
  render() {
    return(
      <div className="LatestArticles Component">
        <Header/>
        <Banner
          titlePart1="Categorie"
          titlePart2={this.state.categorieName}
          pageName={"categorie - "+this.state.categorieName}/>
        <News nbArticle="20"/>
        <Sidebar/>
      </div>
    );
  }
}

export default LatestArticles;
