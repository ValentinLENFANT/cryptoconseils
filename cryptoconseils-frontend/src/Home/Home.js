import React, { Component } from 'react';
import Header from '../Header/Header';

import Carousel from './Caroussel';
import About from './About';
import News from './News';
import Features from './Features';
import Price from './Price';
import BitcoinCalculator from '../BitcoinCalculator/BitcoinCalculator';
import Team from './Team';
import Quote from './Quote';
import BitcoinChart from './BitcoinChart';
import BeginTrade from '../BeginTrade/BeginTrade';


class Home extends Component {
  constructor() {
     super();
     // valeur par défault, affiche le caroussel
     this.state = {
       isLogged: false,
       token: null
     };
   }

  componentDidMount(){
    if(sessionStorage.getItem('access_token')){
      this.setState({
        isLogged: true,
        token: sessionStorage.getItem('access_token')
      });
    } else {
      this.setState({
        isLogged: false,
        token: null
      })
    }
  }
  render() {
    return (
      <div className="App">
      {/* Wrapper Starts */}
        <div className="wrapper">
          {/* Header Starts */}
            <Header/>
          {/* Header Ends */}

          {/* Slider Starts */}
            <Carousel />
          {/* Slider Ends */}

          {/* Blog Section Starts */}
            <News />
          {/* Blog Section Ends */}

          {/* About Section Starts */}
            <About />
          {/* About Section Ends */}

          {/* Features and Video Section Starts */}
            <Features />
          {/* Features and Video Section Ends */}

          {/* Pricing Starts */}
            <Price />
          {/* Pricing Ends */}

          {/* Bitcoin Calculator Section Starts */}
            <BitcoinCalculator />
          {/* Bitcoin Calculator Section Ends */}

          {/* Team Section Starts */}
            <Team />
          {/* Team Section Ends */}

          {/* Quote and Chart Section Starts */}
          <div className="image-block2">
            <div className="container-fluid">
              <div className="row">
                {/* Quote Starts */}
                  <Quote />
                {/* Quote Ends */}

                {/* Chart Starts */}
                  <BitcoinChart />
                {/* Chart Ends */}
              </div>
            </div>
          </div>
          {/* Quote and Chart Section Ends */}

          {/* Call To Action Section Starts */}
            <BeginTrade isLogged={this.state.isLogged}/>
          {/* Call To Action Section Ends */}
        {/* Wrapper Ends */}
        </div>
      </div>
    );
  }
}

export default Home;
