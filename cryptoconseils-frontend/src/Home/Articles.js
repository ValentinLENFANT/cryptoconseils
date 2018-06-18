import React, { Component } from 'react';
import axios from 'axios';

class Articles extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      newDate: null
    };
  }
  componentDidMount() {
    this.getAllArticles();
  }

  convertDate(date){
    this.setState({
      newDate: date
    });
    return this.state.newDate;
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
      <div className="Articles">
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

              {
                this.state.articles.slice(0,3).map(article =>
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
                      <span>{this.convertDate.bind(article.date)}</span>
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
        </section>
      </div>
    );
  }
}

export default Articles;
