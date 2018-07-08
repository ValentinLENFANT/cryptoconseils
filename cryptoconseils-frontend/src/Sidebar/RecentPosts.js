import React, { Component } from 'react';
import axios from 'axios';

class RecentPosts extends Component {

  constructor(){
    super();
    this.state = {
      recent: null
    };
  }
  componentWillMount() {
    // check si access token
    if(localStorage.getItem('access_token')){
      var authorization = {
        headers: {'Authorization': "Bearer " + localStorage.getItem('access_token')}
      };
      axios.get(process.env.REACT_APP_API_ADDRESS+'/articles/newest/3', authorization)
      .then(response => {
        this.setState({recent: response.data})
      }).catch(error => {
        console.log(error);
      });
    }
  }
  convertDate(date){
    date = new Date(date);
    var month = date.toLocaleString('fr', { month: "long" });
    var day = date.getDate();
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    return month+' '+day+', '+year+' '+hours+':'+minutes;
  }
  renderRecentPost(){
    if(this.state.recent) {
      return this.state.recent.map(post => {
        return(
          <li key={post.id}>
            <div className="posts-thumb pull-left">
              <a href="blog-post.html">
                <img alt="img" src={"/images/blog/blog-post-small-"+post.id+".jpg"}/>
              </a>
            </div>
            <div className="post-info">
              <h4 className="entry-title">
                <a href="blog-post.html">{post.title}</a>
              </h4>
              <p className="post-meta">
                <span className="post-date">
                  <i className="fa fa-clock-o"></i> {this.convertDate(post.date)}
                </span>
              </p>
            </div>
            <div className="clearfix"></div>
          </li>
        );
      })
    } else return null

  }
  render() {
    return(
      <div className="RecentPost Component">
        <div className="widget recent-posts">
          <h3 className="widget-title">Posts récents</h3>
          <ul className="unstyled clearfix">
          {/* Recent Post Widget Starts */}
            {this.renderRecentPost()}
          {/* Recent Post Widget Ends */}
          </ul>
        </div>
      </div>
    );
  }
}

export default RecentPosts;
