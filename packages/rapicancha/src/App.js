import React from 'react';
import Footer from './components/utils/footer/footer';
import Header from './components/utils/header/header';
import Banner from './components/landing/banner/banner';
import About from './components/landing/about/about';
import History from './components/landing/history/history';
import Services from './components/landing/services/services';
import Login from './components/login/login';
//import logo from './logo.svg';
import './App.css';
import Sing from './components/Singup/Sing';

class App extends React.Component{
  render() {
    const routes = [
      { name: 'Home', url: '/' },
      { name: 'About', url: '#About__content' },
      { name: 'Services', url: '#Services__content' },
      { name: 'Portfolio', url: '#Portfolio__content' }
    ];

    return (
    <div className="App">
      <Header company='Peloteros' routes={routes} />
      <Banner/>
      <About/>
      <Services/>
      <History/>
      <Sing/>
      <Footer />
    </div>
  );
  }
}
  
export default App;
