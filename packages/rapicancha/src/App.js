import React from 'react';
import Footer from './components/utils/footer/footer';
import Header from './components/utils/header/header';
import Banner from './components/landing/banner/banner';
import About from './components/landing/about/about';
import History from './components/landing/history/history';
import Services from './components/landing/services/services';
import Login from './components/landing/about/login/login';
import Home from '../src/components/utils/Home/Home';
//import logo from './logo.svg';
import './App.css';
import Sing from './components/Singup/Sing';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';


export const UserContext = React.createContext(undefined);
export const RouteContext = React.createContext({});
export const ThemeContext = React.createContext(undefined);

const App = () =>  {

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
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='sing' element={<Sing />} />
      </Routes>
    </div>

  );
}

export default App;


