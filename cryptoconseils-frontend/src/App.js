import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import './App.css';
import ProfilPremium from './ProfilPremium/ProfilPremium';

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

const Profil = Loadable({
  loader: () => import('./Profil/Profil'),
  loading: Loading,
});

const SignIn = Loadable({
  loader: () => import('./Sign/SignIn'),
  loading: Loading,
});

const SignUp = Loadable({
  loader: () => import('./Sign/SignUp'),
  loading: Loading,
});

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/profil" component={Profil}/>
<<<<<<< HEAD
          <Route exact path="/profilpremium" component={ProfilPremium}/>
=======
>>>>>>> 74af5e6621a6f74b4ce98eaf3284804729a52188
          <Route exact path="/calculator" component={BitcoinCalculator}/>
          <Route exact path="/faq" component={Faq}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/signin" component={SignIn}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route path="/articles/:id" component={Articles}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
