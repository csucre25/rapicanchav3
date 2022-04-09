import React, { useState, useEffect } from 'react';
import Login from './components/login/login';
import Home from './components/Home/Home';
import './App.css';
import Sing from './components/Singup/Sing';
import { Routes, Route } from 'react-router-dom';
import PerfilDueno from './Perfiles/perfilDueño/perfilDueño';
import PerfilJugador from './Perfiles/perfilJugador/perfilJugador';
import MyProvider from './components/application/provider';
import Crudcanchas from './components/Crud-Canchas/crudcanchas';
export const UserContext = React.createContext(undefined);
export const RouteContext = React.createContext({});
export const ThemeContext = React.createContext(undefined);
const mockUser = {
  isOwner: false
}
const App = () => {
  const [user, setUser] = useState(mockUser);
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
          <Route path='crud' element={<Crudcanchas />} />
        </Routes>
      </MyProvider>
    </div>
  );
}
export default App;


