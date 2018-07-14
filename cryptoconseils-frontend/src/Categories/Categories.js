import React, { Component } from 'react';
import axios from 'axios';
import ListArticle from '../News/ListArticle';
import Sidebar from '../Sidebar/Sidebar'
import Banner from '../Banner/Banner';
import Header from '../Header/Header'
import PreLoader from '../PreLoader/PreLoader';
class Categories extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categorieName: '',
      categoriesId: '',
      success: null
    };
  }

  componentDidMount(){
    axios.get(process.env.REACT_APP_API_ADDRESS+'/categories/'+this.props.match.params.id)
    .then(response => {
      this.setState({
        categorieName: response.data.name,
        categoriesId: response.data.id,
        success: true
      })
    }).catch(error => {
      console.log(error);
      this.setState({success: false})
    });
  }
  render() {
    if(this.state.success ===  true) {
      return(
        <div className="Categorie Component">
          <Header/>
          <Banner
            titlePart1="Categorie"
            titlePart2={this.state.categorieName}
            pageName={"categorie - "+this.state.categorieName}/>
          <ListArticle nbArticle="20" idCategorie={this.state.categoriesId}/>
          <Sidebar/>
        </div>
      );
    } else if (this.state.success === false) {
      return (
        <div className="Categorie Component">
          <Header/>
          <Banner
            titlePart1="Categorie"
            titlePart2="Inconnus"
            pageName="categorie - inconnus"/>
          <h2 className="title-head" id="creer-article">Cette catégorie - <span>
                n'existe pas</span>
            </h2>
          <Sidebar/>
        </div>
      );
    } else {
      return <PreLoader/>
    }
  }
}

export default Categories;
