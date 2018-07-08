import React, { Component } from 'react';
import axios from 'axios';

class News extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      newDate: null
    };
  }

  // éxécuté à la fin
  componentDidMount() {
    // check si access token
    if(localStorage.getItem('access_token')){
      var authorization = {
        headers: {'Authorization': "Bearer " + localStorage.getItem('access_token')}
      };
    }

    // récupère tous les articles
    axios.get(process.env.REACT_APP_API_ADDRESS+'/articles/newest/'+this.props.nbArticle, authorization)
    .then(response => {
      this.setState({
        articles: response.data
      });
    }).catch(error => {
      console.log(error);
    });
  }
  
  convertDate(date){
    return new Date(date);
  }

  render() {
    return(
      <div className="News Component">
        <section className="blog">
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
              {this.state.articles.map(article =>
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
                        <p>
                          {article.content.split(" ").splice(0,40).join(" ")+" ..."}
                        </p>
                      </div>
                    </div>
                    <div className="post-date">
                      <span>{this.convertDate(article.date).getDate()}</span>
                      <span>
                        {this.convertDate(article.date).toLocaleString('fr', { month: "short" })}
                      </span>
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
        </section>
      </div>
    );
  }
}

export default News;
