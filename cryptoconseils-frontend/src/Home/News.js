import React, { Component } from 'react';
import axios from 'axios';

class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      newDate: null
    };
  }

  // éxécuté à la fin
  componentDidMount() {
    this.getAllArticles();
  }

  // TODO: convertir la date en meilleur format
  convertDate(date){
    this.setState({
      newDate: date
    });
    return this.state.newDate;
  }

  // récupère tous les articles
  getAllArticles() {

    // check si access token
    if(sessionStorage.getItem('access_token')){
      var config = {
        headers: {'Authorization': "Bearer " + sessionStorage.getItem('access_token')}
      };
      console.log(config);
    } else {
      var config = null
    }


    axios.get(process.env.REACT_APP_API_ADDRESS+'/articles/',config)
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
      <div className="News Component">
        <div className="blog">
          <div className="container">
            {/* Section Title Starts */}
            <div className="row text-center">
              <h2 className="title-head">Dernières <span>Actualités</span></h2>
              <div className="title-head-subtitle">
                <p>Découvrez les dernières actualités cryptos à la une !</p>
              </div>
            </div>
            {/* Section Title Ends */}
            {/* Section Content Starts */}
            <div className="row latest-posts-content">
              {/* Article Starts */}
              {/* slice(0,3) pour limiter à trois articles */}
              {this.state.articles.slice(0,3).map(article =>
                <div className="col-sm-4 col-md-4 col-xs-12" key={article.id}>
                  <div className="latest-post">
                    {/* Featured Image Starts */}
                    <a href={"/articles/" + article.id}>
                      <img
                        className="img-responsive"
                        src={"images/blog/blog-post-small-"+article.image.id+".jpg"}
                        alt={article.image.alt}
                        />
                    </a>
                    {/* Featured Image Ends */}
                    {/* Article Content Starts */}
                    <div className="post-body">
                      <h4 className="post-title">
                        <a href={"/articles/" + article.id}>{article.title}</a>
                      </h4>
                      <div className="post-text">
                        <p>{article.content}</p>
                      </div>
                    </div>
                    <div className="post-date">
                      <span>{article.date}</span>
                      <span>JAN</span>
                    </div>
                    <a href={"/articles/" + article.id} className="btn btn-primary">Lire plus</a>
                    {/* Article Content Ends */}
                  </div>
                </div>
              )}
              {/* Article Ends */}
            </div>
            {/* Section Content Ends */}
          </div>
        </div>
      </div>
    );
  }
}

export default News;
