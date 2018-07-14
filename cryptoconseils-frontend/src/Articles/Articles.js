import React, { Component } from 'react';
import axios from 'axios';
import Banner from '../Banner/Banner';
import Meta from './Meta';
import Denied from '../Denied/Denied'
import Comments from './Comments'

import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import PreLoader from '../PreLoader/PreLoader';
import NotFound from '../NotFound/NotFound';

class Articles extends Component {

  constructor() {
    super();
    this.state = {
      article: [],
      image: [],
      noAccess: null,
      noLogged: null,
      notFound: null
    };
  }
  componentDidMount(){
    // check si access token
    if(localStorage.getItem('access_token')){
      var authorization = {
        headers: {'Authorization': "Bearer " + localStorage.getItem('access_token')}
      };

      // récupération de l'article
      axios.get(process.env.REACT_APP_API_ADDRESS+'/articles/'+this.props.match.params.id,authorization)
      .then(response => {
        this.setState({
          article: response.data,
          image: response.data.image,
          noAccess: false,
          noLogged: false
        });
      }).catch(error => {
        if(error.response.status === 403) {
          this.setState({noAccess: true})
        } else{
          this.setState({notFound: true})
        }
      });
    } else {
      this.setState({noLogged: true})
    }
  }
  render() {
    if(this.state.noAccess === false && this.state.noLogged === false){
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
                      <img className="img-responsive" src={"/images/articles/"+this.state.image.file_name} alt=""/>
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
                    <Comments article={this.state.article} comments={this.state.article.comments}/>
                  </div>
                </div>
                <Sidebar/>
              </div>
            </div>
          </div>
        </div>
      );
    } else if(this.state.noAccess === true) {
      return (<Denied noAccess={this.state.noAccess}/>);
    } else if(this.state.noLogged === true){
      return (<Denied noLogged={this.state.noLogged}/>);
    } else if (this.state.notFound) {
      return <NotFound/>
    } else return (<PreLoader/>);
  }
}

export default Articles;
