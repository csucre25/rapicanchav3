import React from 'react';
import Footer from './components/utils/footer/footer';
import Header from './components/utils/header/header';
import Banner from './components/landing/banner/banner';
import About from './components/landing/about/about';
import History from './components/landing/history/history';
import Services from './components/landing/services/services';
//import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  render() {
    const routes = [
      { name: 'Home', url: '/' },
      { name: 'Team', url: '/team' },
      { name: 'Features', url: '/features' },
      { name: 'Contact', url: '/contact' }
    ];

    return (
    <div className="App">
      <Header company='Peloteros' routes={routes} />
      <Banner/>
      <About/>
      <Services/>
      <History/>
      <Footer />
    </div>
  );
}}
  

export default App;
