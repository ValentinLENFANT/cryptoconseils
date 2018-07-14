import React, { Component } from 'react';
import axios from 'axios';
import Price from '../Price/Price'
import ListArticle from './ListArticle'
import Header from '../Header/Header'

class News extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pack: '',
      premium : null
    };
  }

  // éxécuté à la fin
  componentWillMount() {
    // check si access token
    if(localStorage.getItem('access_token')){
      var authorization = {
        headers: {'Authorization': "Bearer " + localStorage.getItem('access_token')}
      };
    }

    // on récupère l'utilisateur courant
    axios.get(process.env.REACT_APP_API_ADDRESS+'/users/current/',authorization)
    .then(response => {
      var lvl = ["", "Inscrit","Debutant","Avancé","Expert","Lambo"];
      var pack;
      console.log(response.data);
      if(response.data.premiumLevel >=2) {
        pack = "Pack "+ lvl[response.data.premiumLevel]
      }
      this.setState({pack: pack, premium: response.data.premiumLevel})
    }).catch(error => {
    console.log(error);
    });
  }

  renderPremiumPrice(){
    if (this.state.premium < 5) {
      return <Price titlePart1="Vous souhaitez lire" titlePart2="plus d'article ?"/>
    } else return null
  }

  render() {
    return(
      <div className="News Component">
        <Header/>
        <section className="blog">
          <div className="container">
            {/* Section Title Starts */}
            <div className="row text-center">
              <h2 className="title-head">Dernières <span>Actualités</span></h2>
              <div className="title-head-subtitle">
                <p>Découvrez les dernières actualités cryptos à la une ! <a> {this.state.pack}</a></p>
              </div>
            </div>
            {/* Section Title Ends */}
            {/* Section Content Starts */}
            <div className="row latest-posts-content">
              {/* Article Starts */}
              {/* slice(0,3) pour limiter à trois articles */}
              <ListArticle nbArticle={this.props.nbArticle}/>
              {/* Article Ends */}
            </div>
            {/* Section Content Ends */}
          </div>
        </section>
        {this.renderPremiumPrice()}
      </div>
    );
  }
}

export default News;
