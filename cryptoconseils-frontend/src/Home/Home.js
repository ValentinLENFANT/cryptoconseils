import React, { Component } from 'react';
import Header from '../Header/Header';

import Carousel from './Caroussel';
import WhoAreWe from '../Team/WhoAreWe';
import ListArticle from '../News/ListArticle';
import Features from './Features';
import Price from '../Price/Price';
import BitcoinCalculator from '../BitcoinCalculator/BitcoinCalculator';
import Expert from '../Team/Expert';
import Quote from './Quote';
import BitcoinChart from './BitcoinChart';
import BeginTrade from '../BeginTrade/BeginTrade';


class Home extends Component {
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
            <ListArticle nbArticle="3"/>
          {/* Blog Section Ends */}

          {/* About Section Starts */}
            <WhoAreWe />
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
            <Expert />
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
            <BeginTrade/>
          {/* Call To Action Section Ends */}
        {/* Wrapper Ends */}
        </div>
      </div>
    );
  }
}

export default Home;
