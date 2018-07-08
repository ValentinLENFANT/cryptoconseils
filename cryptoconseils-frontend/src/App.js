import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import './App.css';
import ProfilPremium from './ProfilPremium/ProfilPremium';
import Admin from './Admin/Admin';
const Loading = () => <div>Loading...</div> ;
import PreLoader from './PreLoader/PreLoader';
const Loading = () => <PreLoader/> ;

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

const LatestArticles = Loadable({
  loader: () => import('./LatestArticles/LatestArticles'),
  loading: Loading,
});

const Categories = Loadable({
  loader: () => import('./Categories/Categories'),
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

const AdminPage = Loadable({
  loader: () => import('./Admin/Admin'),
  loading: Loading,
});

const NewPassword = Loadable({
  loader: () => import('./NewPassword/NewPassword'),
  loading: Loading,
});

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/profil" component={Profil}/>
          <Route exact path="/profilpremium" component={ProfilPremium}/>
          <Route exact path="/admin" component={AdminPage}/>
          <Route exact path="/calculator" component={BitcoinCalculator}/>
          <Route exact path="/faq" component={Faq}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/signin" component={SignIn}/>
          <Route exact path="/signin/token/:token" component={SignIn}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/newpassword/:token" component={NewPassword}/>
          <Route exact path="/articles" component={LatestArticles}/>
          <Route path="/articles/:id" component={Articles}/>
          <Route path="/categories/:id" component={Categories}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
