import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import './App.css';

const Loading = () => <div>Loading...</div> ;

const Home = Loadable({
  loader: () => import('./Home/Home'),
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

const Articles = Loadable({
  loader: () => import('./Articles/Articles'),
  loading: Loading,
});

const Contact = Loadable({
  loader: () => import('./Contact/Contact'),
  loading: Loading,
});

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/calculator" component={BitcoinCalculator}/>
          <Route exact path="/faq" component={Faq}/>
          <Route exact path="/contact" component={Contact}/>
          <Route path="/articles/:id" component={Articles}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
