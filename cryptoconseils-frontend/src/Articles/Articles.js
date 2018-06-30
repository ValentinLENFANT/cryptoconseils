import React, { Component } from 'react';
import axios from 'axios';
import Banner from '../Banner/Banner';
import Meta from '../Banner/Meta';
class Articles extends Component {

  constructor() {
    super();
    this.state = {article: [], access: false};
  }

  // éxécuté à la fin
  componentDidMount() {

    // check si access token
    if(sessionStorage.getItem('access_token')){
      var config = {
        headers: {'Authorization': "Bearer " + sessionStorage.getItem('access_token')}
      };
      console.log(config);
    } else {
      var config = null
    }

    axios.get(process.env.REACT_APP_API_ADDRESS+'/articles/'+this.props.match.params.id,config)
    .then(response => {
      this.setState({
        article: response.data,
        access: true
      });
    })
    .catch(error => {
      this.setState({
        access: false
      })
      console.log(error);
    });
  }

  render() {
      // TODO: REDECOUPER EN PLUSIEURS COMPOTENT (BANNER, ARTICLE, META)
    if(this.state.access === false){
      return(
        <div>
          <h1>T'AS PAS LE DROIT UESH</h1>
        </div>
      )
    } else {


    return(

      <div className="Articles Component">
        <Banner titlePart1={this.state.article.title} pageName="Article" article={this.state.article}/>
        {/* Banner Area Starts */}
        <div className="banner-area">
          <div className="banner-overlay">
            <div className="banner-text text-center">
              <div className="container">
                {/* Section Title Starts */}
                <div className="row text-center">
                  <div className="col-xs-12">
                    {/* Title Starts */}
                    <h2 className="title-head banner-post-title">
                      {this.state.article.title}
                    </h2>
                    {/* Title Ends */}
                    {/* Meta Starts */}
                    <div className="meta">
                      <span>
                        <i className="fa fa-user"></i>
                        <a href="">{this.state.article.author}</a>
                      </span>
                      <span className="date">
                        <i className="fa fa-calendar"></i>
                        {this.state.article.date}
                        </span>
                      <span>
                        <i className="fa fa-commenting"></i>
                        <a href="blog-post.html">29 commentaire</a>
                      </span>
                      <span>
                        <i className="fa fa-tags"></i>
                        {this.state.article.categories}
                      </span>
                    </div>
                    {/* Meta Ends */}
                  </div>
                </div>
                {/* Section Title Ends */}
              </div>
            </div>
          </div>
        </div>
        {/* Banner Area Ends */}


        {/* div Content Starts */}
        <div className="container blog-page">
          <div className="row">
            <div className="content col-xs-12 col-md-8">
              {/* Article Starts */}
              <div>
                {/* Figure Starts */}
                <div className="blog-figure">
                  <img className="img-responsive" src="images/blog/blog-post-1.jpg" alt=""/>
                </div>
                {/* Figure Ends */}
                {/* Content Starts */}
                <p className="content-article">
                    {this.state.article.content}
                </p>
                {/* Content Ends */}


                {/* Meta Starts */}
                <div className="meta second-font">
                  <Meta article={this.props.article}/>
                </div>
                {/* Meta Ends */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  }
}

export default Articles;
