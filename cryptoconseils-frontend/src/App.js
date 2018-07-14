import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import './App.css';
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

const News = Loadable({
  loader: () => import('./News/News'),
  loading: Loading,
});

const AllArticles = Loadable({
  loader: () => import('./News/AllArticles'),
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

const Admin = Loadable({
  loader: () => import('./Admin/Admin'),
  loading: Loading,
});

const Team = Loadable({
  loader: () => import('./Team/Team'),
  loading: Loading,
});

const Call = Loadable({
  loader: () => import('./Call/Call'),
  loading: Loading,
});

const Airdrop = Loadable({
  loader: () => import('./Airdrop/Airdrop'),
  loading: Loading,
});

const Moderation = Loadable({
  loader: () => import('./Admin/Moderation/Moderation'),
  loading: Loading,
});

const Premium = Loadable({
  loader: () => import('./Premium/Premium'),
  loading: Loading,
});



class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/profil" component={Profil}/>
          <Route exact path="/admin" component={AdminPage}/>
          <Route exact path="/calculator" component={BitcoinCalculator}/>
          <Route exact path="/faq" component={Faq}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/signin" component={SignIn}/>
          <Route exact path="/signin/token/:token" component={SignIn}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/newpassword/:token" component={NewPassword}/>
          <Route exact path="/articles" component={News}/>
          <Route exact path="/articles/all" component={AllArticles}/>
          <Route path="/articles/:id" component={Articles}/>
          <Route path="/categories/:id" component={Categories}/>
          <Route exact path="/admin" component={Admin}/>
          <Route exact path="/admin/moderation" component={Moderation}/>
          <Route exact path="/team" component={Team}/>
          <Route exact path="/call" component={Call}/>
          <Route exact path="/airdrop" component={Airdrop}/>
          <Route exact path="/premium" component={Premium}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
