import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import './App.css';

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import('./Home/Home'),
  loading: Loading,
});

const NotFound = Loadable({
  loader: () => import('./NotFound/NotFound'),
  loading: Loading,
});

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
