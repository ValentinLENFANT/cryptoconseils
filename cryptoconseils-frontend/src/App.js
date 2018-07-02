import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import './App.css';

const Loading = () => <div>Loading...</div> ;

const Home = Loadable({
  loader: () => import('./Home/Home'),
  loading: Loading,
});

const SignIn = Loadable({
  loader: () => import('./SignInUp/SignIn'),
  loading: Loading,
});

const SignUp = Loadable({
  loader: () => import('./SignInUp/SignUp'),
  loading: Loading,
});

const NotFound = Loadable({
  loader: () => import('./NotFound/NotFound'),
  loading: Loading,
});

const BitcoinCalculator = Loadable({
  loader: () => import('./BitcoinCalculator/BitcoinCalculator'),
  loading: Loading,
});

const Faq = Loadable({
  loader: () => import('./Faq/Faq'),
  loading: Loading,
});

const Article = Loadable({
  loader: () => import('./Articles/Article'),
  loading: Loading,
});

const Profil = Loadable({
  loader: () => import('./Profil/Profil'),
  loading: Loading,
});

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/signin" component={SignIn}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/profil" component={Profil}/>
          <Route exact path="/convertisseur" component={BitcoinCalculator}/>
          <Route exact path="/faq" component={Faq}/>
          <Route path="/articles/:id" component={Article}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
