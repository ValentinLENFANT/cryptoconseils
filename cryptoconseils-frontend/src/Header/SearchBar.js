import React, { Component } from 'react';
import axios from 'axios'
import Navigation from './Navigation'
class SearchBar extends Component {

  constructor(){
    super();
    this.state = {
      search: '',
      articles: [],
      results: null
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount(){
    this.getAllArticles();
  }
  close(){
    <Navigation showSearchBar={false}/>
  }
  onChange(event) {
    // Apercu temps réel quand on tape
    console.log(event.target.value);

    // Update de la valeur
    this.setState({
      search: event.target.value
    }, () => this.searchTitle(this.state.articles,this.state.search));
  }

  searchTitle(data, search){
    var res = [];
    if(search === '') {
      this.setState({
        results: null
      })
    } else {
      for(var x in data){
        var title = data[x].title.toUpperCase();
        search = search.toUpperCase();

        if(title.includes(search)){
          res = [...res, data[x]]
        }
      }this.setState({
        results: res
      })
    }

  }

  renderSearchResults() {
    if(this.state.results !== null) {
      return this.state.results.map((item)=> {
        return(
          <li key={item.id}>
            {/*<img src="/images/blog/blog-post-1.jpg" className="img-search"/>*/}
            <a href={"/articles/" + item.id}>{item.title}</a>
          </li>
        );
      })
    } else return null;

  }
  // récupère tous les articles
  getAllArticles() {
    // check si access token
    if(localStorage.getItem('access_token')){
      var config = {
        headers: {'Authorization': "Bearer " + localStorage.getItem('access_token')}
      };
    }

    axios.get(process.env.REACT_APP_API_ADDRESS+'/articles/all', config)
    .then(response => {
      //console.log(response.error_description);
      this.setState({
        articles: response.data
      });
    }).catch(error => {
      //if(error.response.data.error_description === "The access token provided has expired."){
        localStorage.clear();
      //}
    });
  }
  render() {
    return(
      <div className="SearchBar Component">
        {/* Search Input Starts */}
        <div className="site-search">
          <div className="container">
            <input
              type="text"
              placeholder="Entrez un mot clé pour rechercher un article"
              value={this.state.search}
              onChange={this.onChange}
              name="search"
              id="search"
            />
          <span className="close" onClick={this.close.bind(this)}>×</span>
          </div>
        </div>
        <div className="res-search">
          <ul>
            {this.renderSearchResults()}
          </ul>
        </div>
        {/* Search Input Ends */}
      </div>
    );
  }
}

export default SearchBar;
