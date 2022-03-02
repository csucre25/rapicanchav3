import React from 'react';
import Banner from '../landing/banner/banner';
import About from '../landing/about/about';
import Services from '../landing/services/services';
import History from '../landing/history/history';
import Footer from '../utils/footer/footer';
import Header from '../utils/header/header'



const Home = () =>  {
  const routes = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '#About__content' },
    { name: 'Services', url: '#Services__content' },
    { name: 'Portfolio', url: '#Portfolio__content' }
  ];
  
    return (
      <div className="App">
        <Header company='Peloteros' routes={routes} />
        <Banner />
        <About />
        <Services />
        <History />
        <Footer />
      </div>
  
    );
  }
  
  export default Home;