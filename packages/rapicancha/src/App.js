import React, { useState, useEffect } from 'react';
import Login from './components/login/login';
import Home from './components/Home/Home';
//import logo from './logo.svg';
import './App.css';
import Sing from './components/Singup/Sing';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
//componentes dueño
import PerfilDueno from './Perfiles/perfilDueño/perfilDueño';
import PerfilJugador from './Perfiles/perfilJugador/perfilJugador';
import MyProvider from './components/application/provider';



export const UserContext = React.createContext(undefined);
export const RouteContext = React.createContext({});
export const ThemeContext = React.createContext(undefined);

const mockUser = {
  isOwner: false
}
const App = () =>  {

  const [user, setUser] = useState(mockUser);
  //const [theme, setTheme] = useState('dark');

  useEffect(() => {
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', user.token);
  }, [user]); 

  return (
    

    <div className="App">
       <MyProvider>
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='sing' element={<Sing />} />
        <Route path='perfildueno' element={<PerfilDueno />} />
        <Route path='perfiljugador' element={<PerfilJugador />} />
        
      </Routes>
       </MyProvider>
       
    
       </div>    

  );
}

export default App;


