import React from 'react';
import Footer from './components/footer/footer';
import Header from './components/header/header';
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
      <Footer />
    </div>
  );
}}
  

export default App;
