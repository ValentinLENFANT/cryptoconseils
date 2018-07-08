import React, { Component } from 'react';
import axios from 'axios';
import Banner from '../Banner/Banner';
import Meta from './Meta';
import Denied from '../Denied/Denied'
import Comments from './Comments'
import Reply from './Reply'

import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'
class Articles extends Component {

  constructor() {
    super();
    this.state = {
      article: [],
      noAccess: false
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
    axios.get(process.env.REACT_APP_API_ADDRESS+'/articles/'+this.props.match.params.id,authorization)
    .then(response => {
      this.setState({
        article: response.data,
        noAccess: false
      });
    }).catch(error => {
      this.setState({
        noAccess: true
      })
    });
  }

  render() {
    if(!this.state.noAccess){
      return(
        <div>
          <Header/>
          <div className="Articles Component">
            <Banner titlePart1={this.state.article.title} pageName="Article" article={this.state.article}/>
            {/* div Content Starts */}
            <div className="container blog-page">
              <div className="row">
                <div className="content col-xs-12 col-md-8">
                  {/* Article Starts */}
                  <div>
                    {/* Figure Starts */}
                    <div className="blog-figure">
                      <img className="img-responsive" src="/images/blog/blog-post-1.jpg" alt=""/>
                    </div>
                    {/* Figure Ends */}
                    {/* Content Starts */}
                    <p className="content-article">
                        {this.state.article.content}
                    </p>
                    {/* Content Ends */}
                    {/* Meta Starts */}
                    <Meta article={this.state.article}/>
                    {/* Meta Ends */}
                    <Comments comments={this.state.article.comments}/>
                    <Reply article={this.state.article}/>
                  </div>
                </div>
                <Sidebar/>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return(
        <Denied noAccess={this.state.noAccess}/>
      );
    }
  }
}

export default Articles;
