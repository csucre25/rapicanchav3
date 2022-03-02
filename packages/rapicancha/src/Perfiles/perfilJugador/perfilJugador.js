import React from "react";
import './perfil.scss';
import { Link } from 'react-router-dom';
const perfilJugador =() => {
        return(
            <div className="jugador">
                   <div className="perfil-header">
                       <div className="imagenperfil"><p>LetraNombre</p><p>Nombre</p></div>
                       <div className="btn">Modificar Perfil</div>            
                   </div>
                   <h1>Busqueda de Canchas deportivas</h1>
                   <div className="perfil-body">
                       <p>Para empezar la busqueda de canchas cercanas a su ubicacion, por favor encienda la aplicacion de Ubicacion de su celular o dispositivo que este usando</p>
                       <input type="ubicacion" placeholder="Registrar Ubicacion Actual" />
                       <button>Buscar</button>
                   </div>
                   <button className="btn-salir">Salir</button>
   
               </div>
          
       );

}


export default perfilJugador;